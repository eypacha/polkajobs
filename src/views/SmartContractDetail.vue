<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link to="/" class="text-purple-600 hover:text-purple-800">
                Inicio
              </router-link>
            </li>
            <li>
              <div class="flex items-center">
                <span class="text-gray-400 mx-2">/</span>
                <span class="text-gray-500">Smart Contracts ink!</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Service Header -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-4">
                <img 
                  src="https://via.placeholder.com/60x60" 
                  alt="Developer Avatar" 
                  class="w-15 h-15 rounded-full"
                >
                <div>
                  <h3 class="font-semibold text-lg">Ana Rodríguez</h3>
                  <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span class="text-sm text-gray-600">(32 reviews)</span>
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      ink! Expert
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-pink-600">$450</div>
                <div class="text-sm text-gray-500">Precio base</div>
              </div>
            </div>
            
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              Desarrollo y Auditoría de Smart Contracts con ink! para Polkadot
            </h1>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">ink!</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Polkadot</span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Rust</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Smart Contracts</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">DeFi</span>
            </div>

            <!-- Service Image/Gallery -->
            <div class="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="Service Preview" 
                class="w-full h-64 object-cover rounded-lg"
              >
            </div>
          </div>

          <!-- Service Description -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-2xl font-bold mb-4">Descripción del Servicio</h2>
            <div class="prose max-w-none">
              <p class="mb-4">
                ¿Necesitas desarrollar smart contracts seguros y eficientes para el ecosistema Polkadot? 
                Con más de 3 años de experiencia en desarrollo de smart contracts y certificación oficial en ink!, 
                te ayudo a crear contratos robustos y auditados.
              </p>
              
              <h3 class="text-xl font-semibold mb-3">¿Qué incluye este servicio?</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Desarrollo de smart contracts con ink! framework</li>
                <li>Implementación de estándares como ERC-20, ERC-721, ERC-1155</li>
                <li>Contratos DeFi: DEX, Lending, Staking, Yield Farming</li>
                <li>Testing exhaustivo con cargo y unit tests</li>
                <li>Auditoría de seguridad completa</li>
                <li>Deploy en testnet y mainnet</li>
                <li>Documentación técnica detallada</li>
              </ul>

              <h3 class="text-xl font-semibold mb-3">Especialidades:</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Contratos DeFi avanzados (AMM, liquidity pools)</li>
                <li>NFT marketplaces y colecciones</li>
                <li>Sistemas de governance y voting</li>
                <li>Cross-chain bridges y interoperabilidad</li>
                <li>Oracles y feeds de precios</li>
                <li>Multi-signature wallets</li>
              </ul>

              <h3 class="text-xl font-semibold mb-3">Proceso de desarrollo:</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Análisis de requerimientos y arquitectura</li>
                <li>Desarrollo iterativo con feedback continuo</li>
                <li>Testing automatizado y manual</li>
                <li>Auditoría de seguridad interna</li>
                <li>Deploy y verificación en blockchain</li>
                <li>Soporte post-deployment durante 2 meses</li>
              </ul>
            </div>
          </div>

          <!-- Reviews Section -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-bold mb-6">Reseñas de Clientes</h2>
            
            <div class="space-y-6">
              <div class="border-b pb-6">
                <div class="flex items-center space-x-4 mb-3">
                  <img 
                    src="https://via.placeholder.com/40x40" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Roberto Silva</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 1 semana</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Ana desarrolló nuestro DEX con ink! de manera perfecta. El código es limpio, 
                  seguro y muy bien optimizado. La auditoría que incluyó nos dio mucha confianza. 
                  Definitivamente la volvería a contratar."
                </p>
              </div>

              <div class="border-b pb-6">
                <div class="flex items-center space-x-4 mb-3">
                  <img 
                    src="https://via.placeholder.com/40x40" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Emily Watson</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 3 semanas</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Contrato NFT marketplace súper completo. Ana explicó cada función y 
                  nos ayudó con la integración frontend. Muy profesional y conoce bien ink!."
                </p>
              </div>

              <div>
                <div class="flex items-center space-x-4 mb-3">
                  <img 
                    src="https://via.placeholder.com/40x40" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Miguel Torres</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★☆</div>
                      <span class="text-sm text-gray-500">hace 1 mes</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Buen trabajo en nuestro contrato de staking. Entrega puntual y código bien documentado. 
                  Solo algunas pequeñas correcciones menores durante el desarrollo."
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Order Card -->
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <div class="mb-6">
              <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">Paquetes disponibles</span>
              </div>
              
              <!-- Package Tabs -->
              <div class="border-b mb-4">
                <nav class="-mb-px flex space-x-8">
                  <button class="border-b-2 border-pink-500 py-2 px-1 text-sm font-medium text-pink-600">
                    Básico
                  </button>
                  <button class="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Estándar
                  </button>
                  <button class="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Premium
                  </button>
                </nav>
              </div>

              <!-- Basic Package Content -->
              <div>
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-bold">Paquete Básico</h3>
                  <span class="text-2xl font-bold text-pink-600">$450</span>
                </div>
                
                <p class="text-gray-600 mb-4">
                  Smart contract simple con funcionalidades básicas
                </p>
                
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Contrato ERC-20 o ERC-721 básico</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Testing básico con cargo</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Documentación del código</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Deploy en testnet</span>
                  </li>
                </ul>

                <div class="flex items-center text-sm text-gray-600 mb-6">
                  <span class="mr-4">📅 5 días de entrega</span>
                  <span>🔄 2 revisiones</span>
                </div>

                <button class="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 mb-4">
                  Continuar ($450)
                </button>
                
                <button class="w-full border border-pink-600 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-50 transition duration-300">
                  Contactar Vendedor
                </button>
              </div>
            </div>

            <!-- Seller Info -->
            <div class="border-t pt-6">
              <div class="flex items-center space-x-3 mb-4">
                <img 
                  src="https://via.placeholder.com/50x50" 
                  alt="Seller Avatar" 
                  class="w-12 h-12 rounded-full"
                >
                <div>
                  <h4 class="font-semibold">Ana Rodríguez</h4>
                  <p class="text-sm text-gray-600">ink! Smart Contract Developer</p>
                </div>
              </div>
              
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Tiempo de respuesta:</span>
                  <span class="font-medium">2 horas</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Último pedido:</span>
                  <span class="font-medium">hace 1 día</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Pedidos en cola:</span>
                  <span class="font-medium">2 pedidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  id: String
})

onMounted(() => {
  console.log('Smart Contract Service ID:', props.id)
})
</script>
