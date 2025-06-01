<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b">
      <div class="px-4 py-4 mx-auto max-w-7xl">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link to="/" class="text-purple-600 hover:text-purple-800">
                Inicio
              </router-link>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <span class="text-gray-500">Diseño UI/UX</span>
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
                  src="https://avatar.iran.liara.run/public/girl" 
                  alt="Designer Avatar" 
                  class="rounded-full w-15 h-15"
                >
                <div>
                  <h3 class="text-lg font-semibold font-title">Sophie Chen</h3>
                  <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span class="text-sm text-gray-600">(89 reviews)</span>
                    <span class="px-2 py-1 text-xs text-purple-800 bg-purple-100 rounded-full">
                      UI/UX Expert
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-indigo-600">35 DOT</div>
                <div class="text-sm text-gray-500">Precio base</div>
              </div>
            </div>
            
            <h1 class="mb-4 text-3xl font-bold text-gray-800">
              Diseño UI/UX para dApps y Aplicaciones del Ecosistema Polkadot
            </h1>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 text-sm text-indigo-800 bg-indigo-100 rounded-full">UI/UX</span>
              <span class="px-3 py-1 text-sm text-purple-800 bg-purple-100 rounded-full">Web3</span>
              <span class="px-3 py-1 text-sm text-pink-800 bg-pink-100 rounded-full">dApps</span>
              <span class="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">Figma</span>
              <span class="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">Responsive</span>
            </div>

            <!-- Service Image/Gallery -->
            <div class="mb-6">
              <img 
                src="/images/ui-ux-design.jpg" 
                alt="Design Portfolio Preview" 
                class="object-cover w-full aspect-[16/9] rounded-lg"
              >
            </div>
          </div>

          <!-- Service Description -->
          <div class="p-6 mb-6 bg-white rounded-lg shadow-sm">
            <h2 class="mb-4 text-2xl font-bold">Descripción del Servicio</h2>
            <div class="prose max-w-none">
              <p class="mb-4">
                ¿Necesitas crear una interfaz atractiva y funcional para tu dApp en el ecosistema Polkadot? 
                Con más de 6 años de experiencia en diseño UI/UX y especialización en Web3, 
                te ayudo a crear experiencias de usuario excepcionales que conecten con la comunidad crypto.
              </p>
              
              <h3 class="mb-3 text-xl font-semibold">¿Qué incluye este servicio?</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Investigación de usuarios y análisis competitivo</li>
                <li>Wireframes y arquitectura de información</li>
                <li>Diseño UI completo en Figma con componentes</li>
                <li>Prototipo interactivo navegable</li>
                <li>Design system con guías de estilo</li>
                <li>Diseño responsive para móvil y desktop</li>
                <li>Handoff para desarrollo con especificaciones</li>
              </ul>

              <h3 class="mb-3 text-xl font-semibold">Especialidades en Web3:</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Wallets y conexión con Polkadot.js</li>
                <li>Dashboards de DeFi y staking</li>
                <li>NFT marketplaces y galerías</li>
                <li>Interfaces de governance y voting</li>
                <li>Onboarding para usuarios nuevos en crypto</li>
                <li>Visualización de datos blockchain</li>
              </ul>

              <h3 class="mb-3 text-xl font-semibold">Mi proceso de diseño:</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li><strong>Descubrimiento:</strong> Entrevistas, research y definición de objetivos</li>
                <li><strong>Estrategia:</strong> User personas, user journey y arquitectura</li>
                <li><strong>Diseño:</strong> Wireframes, mockups y prototipos iterativos</li>
                <li><strong>Testing:</strong> Pruebas de usabilidad y feedback</li>
                <li><strong>Entrega:</strong> Assets finales y documentación para desarrollo</li>
              </ul>

              <h3 class="mb-3 text-xl font-semibold">Herramientas que utilizo:</h3>
              <ul class="pl-6 mb-4 space-y-2 list-disc">
                <li>Figma para diseño UI y prototipado</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>Principle para animaciones y microinteracciones</li>
                <li>Maze y UsabilityHub para testing</li>
                <li>Zeplin para handoff a desarrollo</li>
              </ul>
            </div>
          </div>

          <!-- Reviews Section -->
          <div class="p-6 bg-white rounded-lg shadow-sm">
            <h2 class="mb-6 text-2xl font-bold">Reseñas de Clientes</h2>
            
            <div class="space-y-6">
              <div class="pb-6 border-b">
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/boy" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Alex Kumar</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★★</div>
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

              <div class="pb-6 border-b">
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/girl" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Lisa Nakamoto</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★★</div>
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
                <div class="flex items-center mb-3 space-x-4">
                  <img 
                    src="https://avatar.iran.liara.run/public/boy" 
                    alt="Client Avatar" 
                    class="w-10 h-10 rounded-full"
                  >
                  <div>
                    <h4 class="font-semibold">Thomas Anderson</h4>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-sm text-yellow-400">★★★★☆</div>
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
          <div class="sticky p-6 bg-white rounded-lg shadow-sm top-6">
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-lg font-semibold">Paquetes disponibles</span>
              </div>
              
              <!-- Package Tabs -->
              <div class="mb-4 border-b">
                <nav class="flex -mb-px space-x-8">
                  <button class="px-1 py-2 text-sm font-medium text-indigo-600 border-b-2 border-indigo-500">
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
                  <h3 class="text-xl font-bold">Paquete Básico</h3>
                  <span class="text-2xl font-bold text-indigo-600">35 DOT</span>
                </div>
                
                <p class="mb-4 text-gray-600">
                  Diseño UI/UX básico para una página principal
                </p>
                
                <ul class="mb-6 space-y-2">
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">1 página principal diseñada</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Wireframes y mockups</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Diseño responsive</span>
                  </li>
                  <li class="flex items-center">
                    <span class="mr-2 text-green-500">✓</span>
                    <span class="text-sm">Assets exportados</span>
                  </li>
                </ul>

                <div class="flex items-center mb-6 text-sm text-gray-600">
                  <span class="mr-4">📅 4 días de entrega</span>
                  <span>🔄 3 revisiones</span>
                </div>

                <button class="w-full py-3 mb-4 font-semibold text-white transition duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700">
                  Continuar (35 DOT)
                </button>
                
                <button class="w-full py-3 font-semibold text-indigo-600 transition duration-300 border border-indigo-600 rounded-lg hover:bg-indigo-50">
                  Contactar Vendedor
                </button>
              </div>
            </div>

            <!-- Seller Info -->
            <div class="pt-6 border-t">
              <div class="flex items-center mb-4 space-x-3">
                <img 
                  src="https://avatar.iran.liara.run/public/girl" 
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
