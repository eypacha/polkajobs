<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="py-20 text-white bg-gradient-to-r from-purple-600 to-indigo-600">
      <div class="px-4 mx-auto text-center max-w-7xl">
        <h1 class="mb-4 text-4xl font-bold">Sobre PolkaJobs<span class="text-pink-600 ">.</span></h1>
        <p class="max-w-3xl mx-auto text-xl">
          La primera plataforma de servicios freelance especializada en el ecosistema Polkadot
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl px-4 py-16 mx-auto">
      <div class="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-800">Nuestra Misión</h2>
          <p class="mb-4 text-gray-600">
            PolkaJobs<span class="text-pink-600 ">.</span> nace para resolver la necesidad de conectar proyectos del ecosistema Polkadot 
            con profesionales especializados. Sabemos que encontrar desarrolladores con experiencia 
            en Substrate, ink! o governance de parachains puede ser un desafío.
          </p>
          <p class="text-gray-600">
            Por eso creamos una plataforma donde la calidad y especialización en Polkadot 
            son garantía de éxito para tu proyecto.
          </p>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-lg">
          <div class="text-center">
            <div class="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full">
              <span class="text-3xl">🚀</span>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Impulsa el Ecosistema</h3>
            <p class="text-gray-600">
              Cada proyecto completado fortalece y expande las capacidades del ecosistema Polkadot
            </p>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="mb-2 text-lg font-semibold">Pagos Seguros en DOT</h3>
          <p class="text-gray-600">Pagos nativos usando el token DOT con sistema de escrow inteligente</p>
        </div>
        
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full">
            <span class="text-2xl">⭐</span>
          </div>
          <h3 class="mb-2 text-lg font-semibold">Reputación Verificada</h3>
          <p class="text-gray-600">Sistema de reputación basado en contribuciones reales al ecosistema</p>
        </div>
        
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full">
            <span class="text-2xl">🌐</span>
          </div>
          <h3 class="mb-2 text-lg font-semibold">Red Global</h3>
          <p class="text-gray-600">Conecta con expertos de Polkadot de todo el mundo</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="p-8 text-center text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600">
        <h2 class="mb-4 text-2xl font-bold">¿Listo para formar parte del futuro?</h2>
        <p class="mb-6">Únete a la comunidad de profesionales que están construyendo el futuro de Web3</p>
        <div class="flex justify-center space-x-4">
          <router-link 
            to="/" 
            class="px-6 py-3 font-semibold text-purple-600 transition duration-300 bg-white rounded-full hover:bg-gray-100"
          >
            Explorar Servicios
          </router-link>
          <button class="px-6 py-3 font-semibold text-white transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-purple-600">
            Unirse como Freelancer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica del componente About
</script>
