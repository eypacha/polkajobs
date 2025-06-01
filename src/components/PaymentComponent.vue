<template>
  <div class="payment-component bg-white rounded-lg shadow-lg p-6">
    <h3 class="text-xl font-unbounded font-bold mb-4 text-gray-900">
      Pagar Servicio con DOT
    </h3>
    
    <!-- Información del servicio -->
    <div class="bg-gray-50 rounded-lg p-4 mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-gray-600">Servicio:</span>
        <span class="font-medium">{{ serviceName }}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-gray-600">Precio:</span>
        <span class="font-bold text-pink-600">{{ price }} DOT</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-600">Proveedor:</span>
        <span class="font-medium">{{ providerName }}</span>
      </div>
    </div>

    <!-- Estado de conexión -->
    <div v-if="!selectedAccount" class="text-center py-8">
      <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
      <p class="text-gray-500 mb-4">Conecta tu wallet para realizar el pago</p>
      <WalletConnector />
    </div>

    <!-- Formulario de pago -->
    <div v-else>
      <!-- Información de la cuenta -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Pagar desde:
        </label>
        <div class="bg-gray-50 rounded-lg p-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">{{ formatAddress(selectedAccount.address) }}</span>
            <span class="text-sm font-semibold">{{ balance }}</span>
          </div>
        </div>
      </div>

      <!-- Dirección del proveedor -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Dirección del proveedor:
        </label>
        <input
          v-model="providerAddress"
          type="text"
          placeholder="Dirección Polkadot del proveedor"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      <!-- Cantidad -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Cantidad a pagar:
        </label>
        <div class="relative">
          <input
            v-model.number="amount"
            type="number"
            step="0.001"
            :placeholder="price"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 pr-12 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <span class="absolute right-3 top-2 text-sm text-gray-500">DOT</span>
        </div>
      </div>

      <!-- Botón de pago -->
      <button
        @click="makePayment"
        :disabled="!canPay || isProcessing"
        class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-unbounded font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <svg v-if="isProcessing" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span v-if="isProcessing">Procesando pago...</span>
        <span v-else>Pagar {{ amount || price }} DOT</span>
      </button>

      <!-- Resultado del pago -->
      <div v-if="paymentResult" class="mt-6">
        <div v-if="paymentResult.success" class="bg-green-50 border border-green-200 rounded-lg p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <p class="text-sm text-green-800 font-medium">¡Pago realizado exitosamente!</p>
              <p class="text-xs text-green-600 mt-1">
                Hash: {{ paymentResult.hash.slice(0, 20) }}...
              </p>
            </div>
          </div>
        </div>
        
        <div v-else class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="ml-3">
              <p class="text-sm text-red-800 font-medium">Error en el pago</p>
              <p class="text-xs text-red-600 mt-1">{{ paymentResult.error }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePolkadot } from '@/composables/usePolkadot.js'
import WalletConnector from '@/components/WalletConnector.vue'
import { formatBalance } from '@polkadot/util'

// Props
const props = defineProps({
  serviceName: {
    type: String,
    default: 'Desarrollo Smart Contract'
  },
  price: {
    type: String,
    default: '10'
  },
  providerName: {
    type: String,
    default: 'Desarrollador Polkadot'
  },
  providerAddress: {
    type: String,
    default: ''
  }
})

// Polkadot composable
const {
  selectedAccount,
  balance,
  transfer,
  api
} = usePolkadot()

// Estado local
const providerAddress = ref(props.providerAddress)
const amount = ref(props.price)
const isProcessing = ref(false)
const paymentResult = ref(null)

// Formatear dirección
const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// Verificar si se puede realizar el pago
const canPay = computed(() => {
  return selectedAccount.value && 
         providerAddress.value && 
         amount.value > 0 && 
         api.value
})

// Realizar pago
const makePayment = async () => {
  if (!canPay.value) return

  try {
    isProcessing.value = true
    paymentResult.value = null

    // Convertir DOT a planck (unidad más pequeña)
    const amountInPlanck = parseFloat(amount.value) * Math.pow(10, 10) // 10 decimales para DOT

    console.log('Iniciando pago:', {
      from: selectedAccount.value.address,
      to: providerAddress.value,
      amount: amountInPlanck,
      amountDOT: amount.value
    })

    const hash = await transfer(providerAddress.value, amountInPlanck)
    
    paymentResult.value = {
      success: true,
      hash: hash,
      amount: amount.value,
      to: providerAddress.value
    }

    // Emitir evento de pago exitoso
    emit('paymentSuccess', paymentResult.value)

  } catch (error) {
    console.error('Error en el pago:', error)
    paymentResult.value = {
      success: false,
      error: error.message
    }

    // Emitir evento de error
    emit('paymentError', error)

  } finally {
    isProcessing.value = false
  }
}

// Emits
const emit = defineEmits(['paymentSuccess', 'paymentError'])
</script>

<style scoped>
.payment-component {
  max-width: 28rem;
  margin: 0 auto;
}
</style>
