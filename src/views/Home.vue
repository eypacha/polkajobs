<template>
  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
    <div class="max-w-7xl mx-auto px-4 py-20">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6">
          Encuentra servicios especializados en 
          <span class="text-pink-200">Polkadot</span>
        </h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Conecta con los mejores desarrolladores, diseñadores y consultores del ecosistema Polkadot. 
          Desde desarrollo de parachains hasta auditorías de smart contracts.
        </p>
        <div class="flex justify-center space-x-4">
          <button class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Buscar Servicios
          </button>
          <router-link 
            to="/about" 
            class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Sobre PolkaJobs
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Categories Section -->
  <div class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        Categorías Populares
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">⚙️</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Desarrollo Substrate</h3>
          <p class="text-gray-600 mb-4">Desarrollo de parachains, runtime modules y aplicaciones Substrate</p>
          <span class="text-purple-600 font-medium">Desde $500</span>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📝</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Smart Contracts ink!</h3>
          <p class="text-gray-600 mb-4">Desarrollo y auditoría de smart contracts con ink! para Polkadot</p>
          <span class="text-purple-600 font-medium">Desde $300</span>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🎨</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Diseño UI/UX</h3>
          <p class="text-gray-600 mb-4">Interfaces para dApps y aplicaciones del ecosistema Polkadot</p>
          <span class="text-purple-600 font-medium">Desde $200</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Section -->
  <div class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-purple-600 mb-2">500+</div>
          <div class="text-gray-600">Servicios Disponibles</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-purple-600 mb-2">150+</div>
          <div class="text-gray-600">Desarrolladores Activos</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
          <div class="text-gray-600">Proyectos Completados</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-purple-600 mb-2">95%</div>
          <div class="text-gray-600">Satisfacción Cliente</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica del componente Home
</script>
