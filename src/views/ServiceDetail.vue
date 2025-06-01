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
                <span class="text-gray-500">Desarrollo Substrate</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="px-4 py-8 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Service Header -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-sm">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-4">
                <img 
                  src="https://avatar.iran.liara.run/public/boy" 
                  alt="Developer Avatar" 
                  class="rounded-full w-15 h-15"
                >
                <div>
                  <h3 class="text-lg font-semibold font-title">Carlos Mendoza</h3>
                  <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span class="text-sm text-gray-600">(47 reviews)</span>
                    <span class="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-purple-600">85 DOT</div>
                <div class="text-sm text-gray-500">Precio base</div>
              </div>
            </div>
            
            <h1 class="mb-4 text-3xl font-bold text-gray-800 font-title">
              Desarrollo de Parachain personalizada con Substrate Framework
            </h1>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 text-sm rounded-full text-polka-purple-800 bg-polka-purple-100">Substrate</span>
              <span class="px-3 py-1 text-sm rounded-full text-polka-pink-800 bg-polka-pink-100">Polkadot</span>
              <span class="px-3 py-1 text-sm rounded-full text-polka-purple-800 bg-polka-purple-100">Rust</span>
              <span class="px-3 py-1 text-sm rounded-full text-polka-blue-800 bg-polka-blue-100">Blockchain</span>
            </div>

            <!-- Service Image/Gallery -->
            <div class="mb-6">
              <img 
                src="/images/substrate-development.jpg" 
                alt="Service Preview" 
                class="w-full aspect-[16/9] rounded-lg"
              >
            </div>
          </div>

          <!-- Service Description -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-sm">
            <h2 class="mb-4 text-2xl font-bold font-title">Descripción del Servicio</h2>
            <div class="prose max-w-none">
              <p class="mb-4">
                ¿Necesitas desarrollar una parachain personalizada para tu proyecto en el ecosistema Polkadot? 
                Con más de 5 años de experiencia en desarrollo blockchain y 2 años especializándome en Substrate, 
                te ayudo a crear soluciones robustas y escalables.
              </p>
              
              <h3 class="mb-3 text-xl font-semibold font-title">¿Qué incluye este servicio?</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Análisis de requerimientos y arquitectura de la parachain</li>
                <li>Desarrollo de runtime modules personalizados</li>
                <li>Implementación de pallets específicos para tu caso de uso</li>
                <li>Configuración de consenso y validadores</li>
                <li>Testing completo y documentación técnica</li>
                <li>Deploy en testnet y configuración inicial</li>
              </ul>

              <h3 class="mb-3 text-xl font-semibold font-title">Tecnologías que utilizo:</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Substrate Framework (última versión)</li>
                <li>Rust para desarrollo de runtime</li>
                <li>Polkadot.js para integración frontend</li>
                <li>FRAME pallets y custom pallets</li>
                <li>Cumulus para parachain compatibility</li>
              </ul>

              <h3 class="mb-3 text-xl font-semibold font-title">¿Por qué elegirme?</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Certificación oficial en Substrate Development</li>
                <li>Contributor activo en el ecosistema Polkadot</li>
                <li>+20 parachains desarrolladas exitosamente</li>
                <li>Soporte post-desarrollo durante 3 meses</li>
                <li>Comunicación en español e inglés</li>
              </ul>
            </div>
          </div>

          <!-- Reviews Section -->
          <div class="p-6 bg-white rounded-lg shadow-sm">
            <h2 class="mb-6 text-2xl font-bold font-title">Reseñas de Clientes</h2>
            
            <div class="space-y-6">
              <div class="pb-6 border-b">
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/girl" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold font-title">María González</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 2 semanas</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Excelente trabajo desarrollando nuestra parachain para DeFi. Carlos demostró 
                  un profundo conocimiento de Substrate y entregó el proyecto antes del plazo acordado. 
                  Muy recomendado!"
                </p>
              </div>

              <div class="pb-6 border-b">
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/boy" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold font-title">David Chen</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 1 mes</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Desarrollo de parachain para NFT marketplace. Código limpio, bien documentado 
                  y totalmente funcional. La comunicación fue excelente durante todo el proceso."
                </p>
              </div>

              <div>
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/girl" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold font-title">Sarah Johnson</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★☆</div>
                      <span class="text-sm text-gray-500">hace 2 meses</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Buen desarrollador con sólidos conocimientos técnicos. El proyecto se entregó 
                  según especificaciones. Algunas demoras menores pero nada grave."
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Order Card -->
          <div class="sticky p-6 bg-white rounded-lg shadow-sm top-6">
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-lg font-semibold font-title">Paquetes disponibles</span>
              </div>
              
              <!-- Package Tabs -->
              <div class="mb-4 border-b">
                <nav class="flex -mb-px space-x-8">
                  <button class="px-1 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-500">
                    Básico
                  </button>
                  <button class="px-1 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                    Estándar
                  </button>
                  <button class="px-1 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                    Premium
                  </button>
                </nav>
              </div>

              <!-- Basic Package Content -->
              <div>
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold font-title">Paquete Básico</h3>
                  <span class="text-2xl font-bold text-purple-600">85 DOT</span>
                </div>
                
                <p class="mb-4 text-gray-600">
                  Parachain simple con funcionalidades básicas
                </p>
                
                <ul class="mb-6 space-y-2">
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Runtime básico con pallets estándar</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">1 pallet personalizado</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Documentación básica</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Deploy en testnet</span>
                  </li>
                </ul>

                <div class="flex items-center mb-6 text-sm text-gray-600">
                  <span class="mr-4">📅 7 días de entrega</span>
                  <span>🔄 2 revisiones</span>
                </div>

                <button class="w-full py-3 mb-4 font-semibold text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Continuar (85 DOT)
                </button>
                
                <button class="w-full py-3 font-semibold text-purple-600 transition duration-300 border border-purple-600 rounded-lg hover:bg-purple-50">
                  Contactar Vendedor
                </button>
              </div>
            </div>

            <!-- Seller Info -->
            <div class="pt-6 border-t">
              <div class="flex items-center mb-4 space-x-3">
                <img 
                  src="https://via.placeholder.com/50x50" 
                  alt="Seller Avatar" 
                  class="w-12 h-12 rounded-full"
                >
                <div>
                  <h4 class="font-semibold font-title">Carlos Mendoza</h4>
                  <p class="text-sm text-gray-600">Substrate Developer</p>
                </div>
              </div>
              
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Tiempo de respuesta:</span>
                  <span class="font-medium">1 hora</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Último pedido:</span>
                  <span class="font-medium">hace 2 días</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Pedidos en cola:</span>
                  <span class="font-medium">3 pedidos</span>
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
  // Aquí se cargarían los datos del servicio basado en el ID
  console.log('Service ID:', props.id)
})
</script>
