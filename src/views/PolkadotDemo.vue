<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 font-unbounded mb-2">
          Integración Polkadot.js Demo
        </h1>
        <p class="text-gray-600">
          Ejemplo completo de integración con wallets y pagos en DOT
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Conexión de Wallet -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4 font-unbounded">
            🔗 Conexión de Wallet
          </h2>
          <WalletConnector />
          
          <!-- Información adicional si está conectado -->
          <div v-if="selectedAccount && networkInfo" class="mt-6 space-y-3">
            <div class="bg-blue-50 rounded-lg p-3">
              <h3 class="font-medium text-blue-900 mb-2">Información de Red</h3>
              <div class="text-sm space-y-1">
                <p><strong>Cadena:</strong> {{ networkInfo.chain }}</p>
                <p><strong>Nodo:</strong> {{ networkInfo.nodeName }}</p>
                <p><strong>Versión:</strong> {{ networkInfo.nodeVersion }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Componente de Pago -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4 font-unbounded">
            💰 Pago con DOT
          </h2>
          <PaymentComponent
            service-name="Desarrollo Smart Contract ink!"
            price="5.5"
            provider-name="Alice Developer"
            provider-address="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
            @payment-success="onPaymentSuccess"
            @payment-error="onPaymentError"
          />
        </div>
      </div>

      <!-- Estado de la API -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4 font-unbounded">
          ⚡ Estado de la API
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 rounded-lg" :class="isApiReady ? 'bg-green-50' : 'bg-red-50'">
            <div class="text-2xl mb-2">
              {{ isApiReady ? '✅' : '❌' }}
            </div>
            <div class="font-medium" :class="isApiReady ? 'text-green-900' : 'text-red-900'">
              API {{ isApiReady ? 'Conectada' : 'Desconectada' }}
            </div>
          </div>
          
          <div class="text-center p-4 rounded-lg" :class="selectedAccount ? 'bg-green-50' : 'bg-gray-50'">
            <div class="text-2xl mb-2">
              {{ selectedAccount ? '👛' : '⭕' }}
            </div>
            <div class="font-medium" :class="selectedAccount ? 'text-green-900' : 'text-gray-900'">
              Wallet {{ selectedAccount ? 'Conectada' : 'Desconectada' }}
            </div>
          </div>
          
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl mb-2">🌐</div>
            <div class="font-medium text-blue-900">
              Red: {{ currentNetwork }}
            </div>
          </div>
        </div>
      </div>

      <!-- Historial de transacciones (ejemplo) -->
      <div v-if="transactionHistory.length > 0" class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4 font-unbounded">
          📋 Historial de Transacciones
        </h2>
        
        <div class="space-y-3">
          <div 
            v-for="(tx, index) in transactionHistory" 
            :key="index"
            class="border border-gray-200 rounded-lg p-4"
          >
            <div class="flex justify-between items-start">
              <div>
                <div class="font-medium text-gray-900">{{ tx.serviceName }}</div>
                <div class="text-sm text-gray-600">{{ tx.amount }} DOT</div>
                <div class="text-xs text-gray-500">{{ tx.timestamp }}</div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Exitoso
                </span>
                <a 
                  :href="`https://polkadot.js.org/apps/?rpc=${getExplorerUrl()}#/explorer/query/${tx.hash}`"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 text-xs"
                >
                  Ver en explorador ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Instrucciones -->
      <div class="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4 text-blue-900 font-unbounded">
          📚 Instrucciones
        </h2>
        
        <div class="space-y-3 text-blue-800">
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <p>Instala la extensión <a href="https://polkadot.js.org/extension/" target="_blank" class="underline">Polkadot.js</a> en tu navegador</p>
          </div>
          
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <p>Crea o importa una cuenta en la extensión</p>
          </div>
          
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <p>Haz clic en "Conectar Wallet" para conectar tu cuenta</p>
          </div>
          
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <p>Asegúrate de tener fondos DOT para realizar pagos (usa Westend testnet para pruebas)</p>
          </div>
          
          <div class="flex items-start gap-3">
            <span class="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <p>Prueba realizar un pago usando el componente de la derecha</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePolkadot } from '@/composables/usePolkadot.js'
import WalletConnector from '@/components/WalletConnector.vue'
import PaymentComponent from '@/components/PaymentComponent.vue'

const {
  isApiReady,
  selectedAccount,
  currentNetwork,
  getNetworkInfo
} = usePolkadot()

const networkInfo = ref(null)
const transactionHistory = ref([])

// Obtener información de red
onMounted(async () => {
  if (isApiReady.value) {
    networkInfo.value = await getNetworkInfo()
  }
})

// Manejar pago exitoso
const onPaymentSuccess = (paymentData) => {
  console.log('Pago exitoso:', paymentData)
  
  // Agregar al historial
  transactionHistory.value.unshift({
    serviceName: 'Desarrollo Smart Contract ink!',
    amount: paymentData.amount,
    hash: paymentData.hash,
    timestamp: new Date().toLocaleString(),
    to: paymentData.to
  })
  
  // Mostrar notificación (opcional)
  alert(`¡Pago exitoso! Hash: ${paymentData.hash.slice(0, 20)}...`)
}

// Manejar error de pago
const onPaymentError = (error) => {
  console.error('Error en pago:', error)
  alert(`Error en el pago: ${error.message}`)
}

// Obtener URL del explorador según la red
const getExplorerUrl = () => {
  const urls = {
    polkadot: 'wss://rpc.polkadot.io',
    kusama: 'wss://kusama-rpc.polkadot.io',
    westend: 'wss://westend-rpc.polkadot.io'
  }
  return urls[currentNetwork.value] || urls.polkadot
}
</script>
