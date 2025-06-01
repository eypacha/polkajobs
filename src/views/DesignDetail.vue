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
                <span class="text-gray-500">Diseño UI/UX</span>
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
                  alt="Designer Avatar" 
                  class="w-15 h-15 rounded-full"
                >
                <div>
                  <h3 class="font-semibold text-lg font-title">Sophie Chen</h3>
                  <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span class="text-sm text-gray-600">(89 reviews)</span>
                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      UI/UX Expert
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-indigo-600">$350</div>
                <div class="text-sm text-gray-500">Precio base</div>
              </div>
            </div>
            
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              Diseño UI/UX para dApps y Aplicaciones del Ecosistema Polkadot
            </h1>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">UI/UX</span>
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Web3</span>
              <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">dApps</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Figma</span>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive</span>
            </div>

            <!-- Service Image/Gallery -->
            <div class="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="Design Portfolio Preview" 
                class="w-full h-64 object-cover rounded-lg"
              >
            </div>
          </div>

          <!-- Service Description -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-2xl font-bold mb-4">Descripción del Servicio</h2>
            <div class="prose max-w-none">
              <p class="mb-4">
                ¿Necesitas crear una interfaz atractiva y funcional para tu dApp en el ecosistema Polkadot? 
                Con más de 6 años de experiencia en diseño UI/UX y especialización en Web3, 
                te ayudo a crear experiencias de usuario excepcionales que conecten con la comunidad crypto.
              </p>
              
              <h3 class="text-xl font-semibold mb-3">¿Qué incluye este servicio?</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Investigación de usuarios y análisis competitivo</li>
                <li>Wireframes y arquitectura de información</li>
                <li>Diseño UI completo en Figma con componentes</li>
                <li>Prototipo interactivo navegable</li>
                <li>Design system con guías de estilo</li>
                <li>Diseño responsive para móvil y desktop</li>
                <li>Handoff para desarrollo con especificaciones</li>
              </ul>

              <h3 class="text-xl font-semibold mb-3">Especialidades en Web3:</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Wallets y conexión con Polkadot.js</li>
                <li>Dashboards de DeFi y staking</li>
                <li>NFT marketplaces y galerías</li>
                <li>Interfaces de governance y voting</li>
                <li>Onboarding para usuarios nuevos en crypto</li>
                <li>Visualización de datos blockchain</li>
              </ul>

              <h3 class="text-xl font-semibold mb-3">Mi proceso de diseño:</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Descubrimiento:</strong> Entrevistas, research y definición de objetivos</li>
                <li><strong>Estrategia:</strong> User personas, user journey y arquitectura</li>
                <li><strong>Diseño:</strong> Wireframes, mockups y prototipos iterativos</li>
                <li><strong>Testing:</strong> Pruebas de usabilidad y feedback</li>
                <li><strong>Entrega:</strong> Assets finales y documentación para desarrollo</li>
              </ul>

              <h3 class="text-xl font-semibold mb-3">Herramientas que utilizo:</h3>
              <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Figma para diseño UI y prototipado</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>Principle para animaciones y microinteracciones</li>
                <li>Maze y UsabilityHub para testing</li>
                <li>Zeplin para handoff a desarrollo</li>
              </ul>
            </div>
          </div>

          <!-- Portfolio Section -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-2xl font-bold mb-6">Portfolio Reciente</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-100 rounded-lg p-4">
                <img 
                  src="https://via.placeholder.com/300x200" 
                  alt="DeFi Dashboard" 
                  class="w-full h-40 object-cover rounded mb-3"
                >
                <h4 class="font-semibold mb-2">Dashboard DeFi - PolkaSwap</h4>
                <p class="text-sm text-gray-600">
                  Interfaz completa para exchange descentralizado con staking, pools y governance.
                </p>
              </div>
              
              <div class="bg-gray-100 rounded-lg p-4">
                <img 
                  src="https://via.placeholder.com/300x200" 
                  alt="NFT Marketplace" 
                  class="w-full h-40 object-cover rounded mb-3"
                >
                <h4 class="font-semibold mb-2">NFT Marketplace - ArtDot</h4>
                <p class="text-sm text-gray-600">
                  Marketplace para NFTs con sistema de subastas y colecciones curadas.
                </p>
              </div>
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
                    <h4 class="font-semibold">Alex Kumar</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 5 días</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Sophie diseñó una interfaz increíble para nuestra dApp de DeFi. 
                  Entendió perfectamente las necesidades de los usuarios crypto y creó 
                  una experiencia súper intuitiva. ¡Excelente trabajo!"
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
                    <h4 class="font-semibold">Lisa Nakamoto</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★★</div>
                      <span class="text-sm text-gray-500">hace 2 semanas</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Diseño de NFT marketplace espectacular. Sophie tiene un ojo increíble 
                  para el detalle y entiende muy bien la UX de Web3. Los prototipos 
                  interactivos fueron muy útiles para el desarrollo."
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
                    <h4 class="font-semibold">Thomas Anderson</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400 text-sm">★★★★☆</div>
                      <span class="text-sm text-gray-500">hace 3 semanas</span>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700">
                  "Buen trabajo en el diseño de nuestra wallet. Algunas iteraciones fueron 
                  necesarias pero el resultado final es muy profesional. Recomendable."
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
                  <button class="border-b-2 border-indigo-500 py-2 px-1 text-sm font-medium text-indigo-600">
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
                  <span class="text-2xl font-bold text-indigo-600">$350</span>
                </div>
                
                <p class="text-gray-600 mb-4">
                  Diseño UI/UX básico para una página principal
                </p>
                
                <ul class="space-y-2 mb-6">
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">1 página principal diseñada</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Wireframes y mockups</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Diseño responsive</span>
                  </li>
                  <li class="flex items-center">
                    <span class="text-green-500 mr-2">✓</span>
                    <span class="text-sm">Assets exportados</span>
                  </li>
                </ul>

                <div class="flex items-center text-sm text-gray-600 mb-6">
                  <span class="mr-4">📅 4 días de entrega</span>
                  <span>🔄 3 revisiones</span>
                </div>

                <button class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 mb-4">
                  Continuar ($350)
                </button>
                
                <button class="w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
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
                  <h4 class="font-semibold">Sophie Chen</h4>
                  <p class="text-sm text-gray-600">UI/UX Designer Web3</p>
                </div>
              </div>
              
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Tiempo de respuesta:</span>
                  <span class="font-medium">30 min</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Último pedido:</span>
                  <span class="font-medium">hace 3 horas</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Pedidos en cola:</span>
                  <span class="font-medium">5 pedidos</span>
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
  console.log('Design Service ID:', props.id)
})
</script>
