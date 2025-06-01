<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b">
      <div class="px-4 py-4 mx-auto max-w-7xl">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link to="/" class="text-pink-600 hover:text-pink-700">
                Inicio
              </router-link>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <router-link :to="`/service/${serviceData.id}`" class="text-gray-500 hover:text-pink-600">
                  {{ serviceData.title?.substring(0, 30) }}...
                </router-link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <span class="font-medium text-gray-900">Checkout</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="max-w-6xl px-4 py-8 mx-auto">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="mb-2 text-3xl font-bold text-gray-900 font-title">
          🛒 Finalizar Compra
        </h1>
        <p class="text-gray-600">
          Conecta tu wallet y completa el pago con WND (tokens de prueba)
        </p>
        <div class="inline-flex items-center gap-2 px-3 py-1 mt-2 text-sm text-orange-800 bg-orange-100 rounded-full">
          <span class="text-base">🧪</span>
          <span>Usando Westend Testnet - Sin valor real</span>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Resumen del Pedido -->
        <div class="lg:col-span-1">
          <div class="sticky p-6 bg-white rounded-lg shadow-lg top-6">
            <h2 class="mb-4 text-xl font-semibold font-title">
              📋 Resumen del Pedido
            </h2>
            
            <!-- Servicio -->
            <div class="p-4 mb-4 border border-gray-200 rounded-lg">
              <div class="flex items-start space-x-3">
                <img 
                  :src="serviceData.image" 
                  :alt="serviceData.title"
                  class="object-cover w-16 h-16 rounded-lg"
                  @error="$event.target.src = '/images/placeholder.jpg'"
                >
                <div class="flex-1">
                  <h3 class="text-sm font-medium leading-tight text-gray-900">
                    {{ serviceData.title }}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    por {{ serviceData.seller?.name }}
                  </p>
                  <div class="flex items-center justify-between mt-2">
                    <span class="text-xs text-gray-500">Paquete {{ selectedPackage }}</span>
                    <span class="font-bold text-purple-600">{{ serviceData.price }} WND</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Detalles del paquete -->
            <div class="pt-4 border-t">
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Subtotal:</span>
                  <span class="font-medium">{{ serviceData.price }} WND</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Comisión plataforma:</span>
                  <span class="font-medium">{{ platformFee }} WND</span>
                </div>
                <div class="flex justify-between pt-2 text-lg font-bold border-t">
                  <span>Total:</span>
                  <span class="text-purple-600">{{ totalAmount }} WND</span>
                </div>
              </div>
            </div>

            <!-- Información del servicio -->
            <div class="p-3 mt-4 text-sm rounded-lg bg-gray-50">
              <div class="flex items-center justify-between mb-2">
                <span class="text-gray-600">Tiempo de entrega:</span>
                <span class="font-medium">{{ serviceData.deliveryDays }} días</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Revisiones incluidas:</span>
                <span class="font-medium">{{ serviceData.revisions }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Área principal de checkout -->
        <div class="space-y-6 lg:col-span-2">

          <!-- Componente de Pago -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <h2 class="mb-4 text-xl font-semibold font-title">
              💰 Procesar Pago
            </h2>
            
            <div v-if="!selectedAccount" class="py-8 text-center">
              <div class="mb-4 text-6xl text-gray-400">🔒</div>
              <p class="mb-4 text-gray-500">Conecta tu wallet para continuar</p>
              <p class="mb-6 text-sm text-gray-400">Necesitas una wallet compatible con Polkadot</p>
              
              <!-- Componente de conexión centralizada -->
              <div class="flex justify-center">
                <WalletConnector />
              </div>
            </div>
            
            <div v-else>
              <!-- Wallet conectada - mostrar información resumida -->
              <div class="p-4 mb-6 border border-green-200 rounded-lg bg-green-50">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xl text-green-600">✅</span>
                  <span class="font-medium text-green-900">Wallet Conectada</span>
                </div>
                <div class="text-sm text-green-700">
                  <strong>{{ selectedAccount.meta.name }}</strong> - Balance: <strong>{{ balance }}</strong>
                </div>
              </div>
              
              <!-- Componente de pago -->
              <PaymentComponent
                :service-name="serviceData.title"
                :price="totalAmount.toString()"
                :provider-name="serviceData.seller?.name"
                :provider-address="serviceData.seller?.address || '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'"
                @payment-success="onPaymentSuccess"
                @payment-error="onPaymentError"
              />
            </div>
          </div>

          <!-- Estado de la API -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <h2 class="mb-4 text-xl font-semibold font-title">
              ⚡ Estado de la Conexión
            </h2>
            
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div class="p-4 text-center rounded-lg" :class="isApiReady ? 'bg-green-50' : 'bg-red-50'">
                <div class="mb-2 text-2xl">
                  {{ isApiReady ? '✅' : '❌' }}
                </div>
                <div class="font-medium" :class="isApiReady ? 'text-green-900' : 'text-red-900'">
                  API {{ isApiReady ? 'Conectada' : 'Desconectada' }}
                </div>
              </div>
              
              <div class="p-4 text-center rounded-lg" :class="selectedAccount ? 'bg-green-50' : 'bg-gray-50'">
                <div class="mb-2 text-2xl">
                  {{ selectedAccount ? '👛' : '⭕' }}
                </div>
                <div class="font-medium" :class="selectedAccount ? 'text-green-900' : 'text-gray-900'">
                  Wallet {{ selectedAccount ? 'Conectada' : 'Desconectada' }}
                </div>
              </div>
              
              <div class="p-4 text-center rounded-lg bg-orange-50">
                <div class="mb-2 text-2xl">🧪</div>
                <div class="font-medium text-orange-900">
                  Westend Testnet
                </div>
                <div class="text-xs text-orange-700 mt-1">
                  Tokens sin valor real
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Información de seguridad -->
      <div class="p-6 mt-8 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
        <h2 class="mb-4 text-xl font-semibold text-gray-900 font-title">
          🛡️ Información de Seguridad
        </h2>
        
        <div class="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
          <div>
            <h3 class="mb-2 font-medium text-gray-900">Pagos Seguros</h3>
            <ul class="space-y-1 text-gray-600">
              <li>• Los pagos se procesan directamente en la blockchain de Polkadot</li>
              <li>• No almacenamos información de tu wallet</li>
              <li>• Todas las transacciones son públicamente verificables</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 font-medium text-gray-900">Protección del Comprador</h3>
            <ul class="space-y-1 text-gray-600">
              <li>• Sistema de escrow automático</li>
              <li>• Resolución de disputas por la comunidad</li>
              <li>• Reembolso garantizado en caso de incumplimiento</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-2 font-medium text-orange-900">🧪 Red de Pruebas</h3>
            <ul class="space-y-1 text-orange-700">
              <li>• Usando Westend Testnet</li>
              <li>• Los tokens WND no tienen valor real</li>
              <li>• <a href="https://faucet.polkadot.io/" target="_blank" class="underline hover:text-orange-800">Obtener WND gratis</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePolkadot } from '@/composables/usePolkadot.js'
import { useServicesStore } from '@/stores/services'
import { useMainStore } from '@/stores/main'
import WalletConnector from '@/components/WalletConnector.vue'
import PaymentComponent from '@/components/PaymentComponent.vue'

const route = useRoute()
const router = useRouter()

const {
  isApiReady,
  selectedAccount,
  currentNetwork,
  balance,
  getNetworkInfo
} = usePolkadot()

const servicesStore = useServicesStore()
const mainStore = useMainStore()

// Estado local
const networkInfo = ref(null)
const selectedPackage = ref(route.query.package || 'Básico')

// Datos del servicio desde la store o query params
const serviceData = computed(() => {
  // Intentar obtener desde la store primero
  if (servicesStore.serviceDetail) {
    const service = servicesStore.serviceDetail
    const packageData = service.pricing[selectedPackage.value.toLowerCase()]
    
    return {
      id: service.id,
      title: service.title,
      seller: service.seller,
      image: service.image,
      price: packageData?.price || service.pricing.basic.price,
      deliveryDays: packageData?.deliveryDays || service.pricing.basic.deliveryDays,
      revisions: packageData?.revisions || service.pricing.basic.revisions
    }
  }
  
  // Fallback a query params si no hay datos en store
  return {
    id: route.query.id || '1',
    title: route.query.title || 'Desarrollo de Parachain personalizada con Substrate Framework',
    seller: {
      name: route.query.seller || 'Carlos Mendoza',
      address: route.query.address || '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
    },
    image: route.query.image || '/images/substrate-development.jpg',
    price: parseFloat(route.query.price) || 85,
    deliveryDays: parseInt(route.query.days) || 7,
    revisions: parseInt(route.query.revisions) || 2
  }
})

// Cálculos de precios
const platformFee = computed(() => {
  return Math.round((serviceData.value.price * 0.05) * 100) / 100 // 5% fee
})

const totalAmount = computed(() => {
  return serviceData.value.price + platformFee.value
})

// Obtener información de red
onMounted(async () => {
  // Cargar datos del servicio si tenemos ID pero no datos
  if (route.query.id && !servicesStore.serviceDetail) {
    await servicesStore.fetchServiceById(route.query.id)
  }
  
  if (isApiReady.value) {
    networkInfo.value = await getNetworkInfo()
  }
})

// Manejar pago exitoso
const onPaymentSuccess = (paymentData) => {
  console.log('Pago exitoso:', paymentData)
  
  // Agregar notificación
  mainStore.addNotification(
    `¡Pago completado exitosamente! Hash: ${paymentData.hash.slice(0, 20)}...`,
    'success',
    5000
  )
  
  // Limpiar carrito si el item estaba allí
  mainStore.removeFromCart(serviceData.value.id)
  
  // Redirigir a página de confirmación (puedes crear esta página)
  setTimeout(() => {
    router.push({
      name: 'PaymentSuccess',
      query: {
        hash: paymentData.hash,
        amount: totalAmount.value,
        service: serviceData.value.title
      }
    })
  }, 2000)
}

// Manejar error de pago
const onPaymentError = (error) => {
  console.error('Error en pago:', error)
  mainStore.addNotification(
    `Error en el pago: ${error.message}`,
    'error',
    5000
  )
}
</script>
