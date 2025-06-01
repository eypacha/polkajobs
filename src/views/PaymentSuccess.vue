<template>
  <div class="min-h-screen bg-gray-50">
    <div class="px-4 py-16 mx-auto max-w-4xl text-center">
      <!-- Icono de éxito -->
      <div class="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <!-- Mensaje principal -->
      <h1 class="text-4xl font-bold text-gray-900 mb-4 font-title">
        ¡Pago Completado con Éxito! 🎉
      </h1>
      
      <p class="text-xl text-gray-600 mb-8">
        Tu transacción ha sido procesada correctamente en la blockchain de Polkadot
      </p>

      <!-- Detalles de la transacción -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8 text-left max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-6 text-center font-title">
          📋 Detalles de la Transacción
        </h2>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-gray-600">Servicio:</span>
            <span class="font-medium text-gray-900">{{ serviceName }}</span>
          </div>
          
          <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-gray-600">Monto:</span>
            <span class="font-bold text-green-600 text-lg">{{ amount }} DOT</span>
          </div>
          
          <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-gray-600">Hash de Transacción:</span>
            <div class="flex items-center space-x-2">
              <span class="font-mono text-sm text-purple-600">{{ formattedHash }}</span>
              <button 
                @click="copyHash"
                class="text-gray-500 hover:text-gray-700 transition-colors"
                title="Copiar hash completo"
              >
                📋
              </button>
            </div>
          </div>
          
          <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-gray-600">Fecha:</span>
            <span class="font-medium text-gray-900">{{ currentDate }}</span>
          </div>
        </div>

        <!-- Enlace al explorador -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <p class="text-sm text-blue-800 mb-2">
            🔍 Puedes verificar tu transacción en el explorador de bloques:
          </p>
          <a 
            :href="explorerUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800 underline text-sm break-all"
          >
            Ver en Polkadot.js Explorer →
          </a>
        </div>
      </div>

      <!-- Próximos pasos -->
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4 font-title text-gray-900">
          🚀 ¿Qué sigue ahora?
        </h2>
        
        <div class="space-y-3 text-left">
          <div class="flex items-start space-x-3">
            <span class="text-purple-600 font-bold">1.</span>
            <span class="text-gray-700">El freelancer ha sido notificado de tu pago y comenzará a trabajar en tu proyecto</span>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-purple-600 font-bold">2.</span>
            <span class="text-gray-700">Recibirás actualizaciones del progreso a través de nuestro sistema de mensajería</span>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-purple-600 font-bold">3.</span>
            <span class="text-gray-700">Una vez completado, podrás revisar y aprobar el trabajo antes de la entrega final</span>
          </div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link 
          to="/"
          class="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Volver al Inicio
        </router-link>
        
        <router-link 
          to="/dashboard" 
          class="px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          Ver Mis Pedidos
        </router-link>
      </div>

      <!-- Información adicional -->
      <div class="mt-12 text-sm text-gray-500">
        <p>Si tienes alguna pregunta o problema, no dudes en contactar nuestro soporte</p>
        <p class="mt-2">
          📧 soporte@polkajobs.dev | 🔗 
          <a href="/help" class="text-purple-600 hover:underline">Centro de Ayuda</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/main'

const route = useRoute()
const mainStore = useMainStore()

// Datos de la transacción desde query params
const hash = computed(() => route.query.hash || '')
const amount = computed(() => route.query.amount || '0')
const serviceName = computed(() => route.query.service || 'Servicio de Polkadot')

// Hash formateado para mostrar
const formattedHash = computed(() => {
  if (!hash.value) return 'N/A'
  return `${hash.value.slice(0, 10)}...${hash.value.slice(-10)}`
})

// Fecha actual
const currentDate = computed(() => {
  return new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
})

// URL del explorador (placeholder - ajustar según la red)
const explorerUrl = computed(() => {
  if (!hash.value) return '#'
  // Para Polkadot mainnet - ajustar según la red actual
  return `https://polkadot.subscan.io/extrinsic/${hash.value}`
})

// Copiar hash al portapapeles
const copyHash = async () => {
  if (!hash.value) return
  
  try {
    await navigator.clipboard.writeText(hash.value)
    mainStore.addNotification('Hash copiado al portapapeles', 'success', 2000)
  } catch (err) {
    console.error('Error copying to clipboard:', err)
    mainStore.addNotification('Error al copiar el hash', 'error', 2000)
  }
}

onMounted(() => {
  // Agregar al historial de transacciones (opcional)
  console.log('Payment completed:', {
    hash: hash.value,
    amount: amount.value,
    service: serviceName.value,
    timestamp: new Date().toISOString()
  })
})
</script>
