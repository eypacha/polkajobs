<template>
  <!-- Hero Section -->
  <div class="text-white bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
    <div class="px-4 py-20 mx-auto max-w-7xl">
      <div class="text-center">
        <h1 class="mb-6 text-5xl font-bold font-title text-balance">
          Encuentra servicios especializados en 
          <span class="text-pink-200">Polkadot</span>
        </h1>
        <p class="max-w-3xl mx-auto mb-8 text-xl">
          Conecta con los mejores desarrolladores, diseñadores y consultores del ecosistema Polkadot. 
          Desde desarrollo de parachains hasta auditorías de smart contracts.
        </p>
        <div class="flex justify-center space-x-4">
          <button class="px-8 py-3 font-semibold text-purple-700 transition duration-300 bg-white rounded-full hover:bg-gray-100">
            Buscar Servicios
          </button>
          <router-link 
            to="/about" 
            class="px-8 py-3 font-semibold text-white transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-purple-700"
          >
            Sobre PolkaJobs
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Categories Section -->
  <div class="py-20 bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl">
      <h2 class="mb-12 text-3xl font-bold text-center text-gray-800 font-title">
        Categorías Populares
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <router-link 
          to="/service/substrate-development" 
          class="block p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-lg">
            <span class="text-2xl">⚙️</span>
          </div>
          <h3 class="mb-2 text-xl font-semibold font-title">Desarrollo Substrate</h3>
          <p class="mb-4 text-gray-600">Desarrollo de parachains, runtime modules y aplicaciones Substrate</p>
          <span class="font-medium text-pink-600">Desde 85 DOT</span>
        </router-link>
        
        <router-link 
          to="/service/smart-contracts" 
          class="block p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-pink-100 rounded-lg">
            <span class="text-2xl">📝</span>
          </div>
          <h3 class="mb-2 text-xl font-semibold font-title">Smart Contracts ink!</h3>
          <p class="mb-4 text-gray-600">Desarrollo y auditoría de smart contracts con ink! para Polkadot</p>
          <span class="font-medium text-pink-600">Desde 45 DOT</span>
        </router-link>
        
        <router-link 
          to="/service/ui-ux-design" 
          class="block p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
        >
          <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
            <span class="text-2xl">🎨</span>
          </div>
          <h3 class="mb-2 text-xl font-semibold font-title">Diseño UI/UX</h3>
          <p class="mb-4 text-gray-600">Interfaces para dApps y aplicaciones del ecosistema Polkadot</p>
          <span class="font-medium text-pink-600">Desde 35 DOT</span>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Stats Section -->
  <div class="py-16 bg-white">
    <div class="px-4 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
        <div>
          <div class="mb-2 text-4xl font-bold text-pink-600 font-title">500+</div>
          <div class="text-gray-600">Servicios Disponibles</div>
        </div>
        <div>
          <div class="mb-2 text-4xl font-bold text-purple-600 font-title">150+</div>
          <div class="text-gray-600">Desarrolladores Activos</div>
        </div>
        <div>
          <div class="mb-2 text-4xl font-bold text-blue-600 font-title">1,000+</div>
          <div class="text-gray-600">Proyectos Completados</div>
        </div>
        <div>
          <div class="mb-2 text-4xl font-bold text-pink-600 font-title">95%</div>
          <div class="text-gray-600">Satisfacción Cliente</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica del componente Home
</script>
