import { ref, reactive, onMounted } from 'vue'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { formatBalance } from '@polkadot/util'
import { NETWORKS, DEFAULT_NETWORK, APP_CONFIG } from '@/config/polkadot.js'

export function usePolkadot() {
  // Estado reactivo
  const api = ref(null)
  const isApiReady = ref(false)
  const accounts = ref([])
  const selectedAccount = ref(null)
  const balance = ref('0')
  const isConnecting = ref(false)
  const error = ref(null)

  // Configuración de red usando el archivo de config
  const networks = NETWORKS
  const currentNetwork = ref(DEFAULT_NETWORK)

  // Conectar a la API de Polkadot
  const connectToApi = async (network = DEFAULT_NETWORK) => {
    try {
      isConnecting.value = true
      error.value = null
      
      const networkConfig = networks[network]
      if (!networkConfig) {
        throw new Error(`Red no soportada: ${network}`)
      }
      
      const provider = new WsProvider(networkConfig.rpc)
      api.value = await ApiPromise.create({ provider })
      
      currentNetwork.value = network
      isApiReady.value = true
      
      console.log('✅ Conectado a Polkadot API:', networkConfig.name)
      
      // Configurar formateo de balance usando la configuración de red
      formatBalance.setDefaults({
        decimals: networkConfig.decimals,
        unit: networkConfig.symbol
      })
      
    } catch (err) {
      error.value = `Error conectando a ${network}: ${err.message}`
      console.error('❌ Error conectando a API:', err)
    } finally {
      isConnecting.value = false
    }
  }

  // Conectar wallets (Polkadot.js extension)
  const connectWallet = async () => {
    try {
      isConnecting.value = true
      error.value = null

      // Habilitar extensión
      const extensions = await web3Enable(APP_CONFIG.name)
      if (extensions.length === 0) {
        throw new Error('No se encontró la extensión de Polkadot.js. Por favor instálala desde Chrome Store.')
      }

      // Obtener cuentas
      const allAccounts = await web3Accounts()
      if (allAccounts.length === 0) {
        throw new Error('No se encontraron cuentas en la wallet. Crea o importa una cuenta en Polkadot.js.')
      }

      accounts.value = allAccounts
      selectedAccount.value = allAccounts[0] // Seleccionar primera cuenta por defecto
      
      console.log('✅ Wallet conectada:', allAccounts.length, 'cuentas encontradas')
      
      // Obtener balance de la cuenta seleccionada
      await getBalance(selectedAccount.value.address)
      
    } catch (err) {
      error.value = err.message
      console.error('❌ Error conectando wallet:', err)
    } finally {
      isConnecting.value = false
    }
  }

  // Obtener balance de una cuenta
  const getBalance = async (address) => {
    if (!api.value || !address) return

    try {
      const { data: balance } = await api.value.query.system.account(address)
      const formattedBalance = formatBalance(balance.free, { withSi: true, withUnit: true })
      balance.value = formattedBalance
      return formattedBalance
    } catch (err) {
      console.error('❌ Error obteniendo balance:', err)
      return '0'
    }
  }

  // Cambiar cuenta seleccionada
  const selectAccount = async (account) => {
    selectedAccount.value = account
    await getBalance(account.address)
  }

  // Realizar transferencia
  const transfer = async (to, amount) => {
    if (!api.value || !selectedAccount.value) {
      throw new Error('API o cuenta no disponible')
    }

    try {
      const injector = await web3FromAddress(selectedAccount.value.address)
      
      const transfer = api.value.tx.balances.transfer(to, amount)
      
      const hash = await transfer.signAndSend(
        selectedAccount.value.address,
        { signer: injector.signer }
      )

      console.log('✅ Transferencia enviada:', hash.toHex())
      return hash.toHex()
      
    } catch (err) {
      console.error('❌ Error en transferencia:', err)
      throw err
    }
  }

  // Desconectar
  const disconnect = async () => {
    if (api.value) {
      await api.value.disconnect()
      api.value = null
      isApiReady.value = false
    }
    accounts.value = []
    selectedAccount.value = null
    balance.value = '0'
  }

  // Información de la red
  const getNetworkInfo = async () => {
    if (!api.value) return null

    try {
      const [chain, nodeName, nodeVersion] = await Promise.all([
        api.value.rpc.system.chain(),
        api.value.rpc.system.name(),
        api.value.rpc.system.version()
      ])

      return {
        chain: chain.toString(),
        nodeName: nodeName.toString(),
        nodeVersion: nodeVersion.toString(),
        network: currentNetwork.value
      }
    } catch (err) {
      console.error('❌ Error obteniendo info de red:', err)
      return null
    }
  }

  // Auto-conectar al montar
  onMounted(() => {
    connectToApi()
  })

  return {
    // Estado
    api,
    isApiReady,
    accounts,
    selectedAccount,
    balance,
    isConnecting,
    error,
    currentNetwork,
    networks,
    
    // Métodos
    connectToApi,
    connectWallet,
    getBalance,
    selectAccount,
    transfer,
    disconnect,
    getNetworkInfo
  }
}
