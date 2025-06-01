// Versión simplificada del composable para testing
import { ref, onMounted } from 'vue'

export function usePolkadotSimple() {
  // Estado reactivo simplificado
  const isApiReady = ref(false)
  const selectedAccount = ref(null)
  const balance = ref('0 DOT')
  const isConnecting = ref(false)
  const error = ref(null)
  const currentNetwork = ref('westend')

  // Simulación de datos para testing
  const mockAccount = {
    address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    meta: { name: 'Test Account' }
  }

  // Conectar wallet (simulado)
  const connectWallet = async () => {
    isConnecting.value = true
    error.value = null

    try {
      // Simular delay de conexión
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      selectedAccount.value = mockAccount
      balance.value = '10.5 DOT'
      console.log('✅ Wallet conectada (simulado)')
      
    } catch (err) {
      error.value = 'Error simulado de conexión'
    } finally {
      isConnecting.value = false
    }
  }

  // Desconectar
  const disconnect = () => {
    selectedAccount.value = null
    balance.value = '0 DOT'
  }

  // Transferencia simulada
  const transfer = async (to, amount) => {
    console.log('Transferencia simulada:', { to, amount })
    
    // Simular delay de transacción
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Retornar hash simulado
    return '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
  }

  // Información de red simulada
  const getNetworkInfo = () => {
    return {
      chain: 'Westend Testnet',
      nodeName: 'Parity Polkadot',
      nodeVersion: '1.0.0'
    }
  }

  // Simular API lista al montar
  onMounted(() => {
    setTimeout(() => {
      isApiReady.value = true
      console.log('✅ API simulada lista')
    }, 500)
  })

  return {
    // Estado
    isApiReady,
    selectedAccount,
    balance,
    isConnecting,
    error,
    currentNetwork,
    
    // Métodos
    connectWallet,
    disconnect,
    transfer,
    getNetworkInfo
  }
}
