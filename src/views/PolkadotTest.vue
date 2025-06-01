<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          🧪 Test de Integración Polkadot.js
        </h1>
        <p class="text-gray-600">
          Versión de prueba con datos simulados (sin dependencias externas)
        </p>
      </div>

      <!-- Estado de la integración -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">
          📊 Estado del Sistema
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 rounded-lg" :class="isApiReady ? 'bg-green-50' : 'bg-red-50'">
            <div class="text-2xl mb-2">
              {{ isApiReady ? '✅' : '❌' }}
            </div>
            <div class="font-medium" :class="isApiReady ? 'text-green-900' : 'text-red-900'">
              API {{ isApiReady ? 'Lista' : 'No Lista' }}
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

      <!-- Controles de testing -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Wallet Testing -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">
            🔗 Test de Wallet
          </h2>
          
          <div v-if="!selectedAccount" class="text-center">
            <button
              @click="connectWallet"
              :disabled="isConnecting"
              class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              <svg v-if="isConnecting" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="isConnecting">Conectando...</span>
              <span v-else>Conectar Wallet (Simulado)</span>
            </button>
          </div>

          <div v-else class="space-y-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600">Cuenta:</span>
                <span class="font-medium">{{ selectedAccount.meta.name }}</span>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-600">Dirección:</span>
                <span class="text-sm font-mono">{{ formatAddress(selectedAccount.address) }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Balance:</span>
                <span class="font-semibold text-pink-600">{{ balance }}</span>
              </div>
            </div>
            
            <button
              @click="disconnect"
              class="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Desconectar
            </button>
          </div>

          <div v-if="error" class="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <p class="text-sm text-red-800">{{ error }}</p>
          </div>
        </div>

        <!-- Payment Testing -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">
            💰 Test de Pagos
          </h2>
          
          <div v-if="!selectedAccount" class="text-center py-8">
            <p class="text-gray-500">Conecta tu wallet para probar pagos</p>
          </div>

          <div v-else>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Dirección destino:
                </label>
                <input
                  v-model="testPayment.to"
                  type="text"
                  placeholder="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Cantidad (DOT):
                </label>
                <input
                  v-model.number="testPayment.amount"
                  type="number"
                  step="0.001"
                  placeholder="1.0"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <button
                @click="testTransfer"
                :disabled="!canPay || isTransferring"
                class="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg v-if="isTransferring" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="isTransferring">Procesando...</span>
                <span v-else>Enviar Pago (Simulado)</span>
              </button>
            </div>

            <!-- Resultado del pago -->
            <div v-if="paymentResult" class="mt-4">
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <div class="flex">
                  <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div class="ml-3">
                    <p class="text-sm text-green-800 font-medium">¡Pago simulado exitoso!</p>
                    <p class="text-xs text-green-600 mt-1">
                      Hash: {{ paymentResult.slice(0, 20) }}...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Información de testing -->
      <div class="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4 text-blue-900">
          ℹ️ Información de Testing
        </h2>
        
        <div class="text-blue-800 space-y-2">
          <p>• Esta es una versión de prueba que simula la funcionalidad de Polkadot.js</p>
          <p>• No se realizan transacciones reales ni se conectan wallets reales</p>
          <p>• Útil para probar la UI y la lógica sin dependencias externas</p>
          <p>• Para usar la versión real, navega a <router-link to="/polkadot-demo" class="underline">/polkadot-demo</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePolkadotSimple } from '@/composables/usePolkadotSimple.js'

const {
  isApiReady,
  selectedAccount,
  balance,
  isConnecting,
  error,
  currentNetwork,
  connectWallet,
  disconnect,
  transfer
} = usePolkadotSimple()

// Estado local para testing
const testPayment = ref({
  to: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  amount: 1.0
})

const isTransferring = ref(false)
const paymentResult = ref(null)

// Formatear dirección
const formatAddress = (address) => {
  return `${address.slice(0, 8)}...${address.slice(-8)}`
}

// Verificar si se puede realizar el pago
const canPay = computed(() => {
  return selectedAccount.value && 
         testPayment.value.to && 
         testPayment.value.amount > 0
})

// Test de transferencia
const testTransfer = async () => {
  if (!canPay.value) return

  try {
    isTransferring.value = true
    paymentResult.value = null

    console.log('Iniciando transferencia de prueba:', testPayment.value)

    const hash = await transfer(testPayment.value.to, testPayment.value.amount)
    paymentResult.value = hash

    console.log('✅ Transferencia de prueba completada:', hash)

  } catch (error) {
    console.error('❌ Error en transferencia de prueba:', error)
  } finally {
    isTransferring.value = false
  }
}
</script>
