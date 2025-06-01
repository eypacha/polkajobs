<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Sobre PolkaJobs</h1>
        <p class="text-xl max-w-3xl mx-auto">
          La primera plataforma de servicios freelance especializada en el ecosistema Polkadot
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
          <p class="text-gray-600 mb-4">
            PolkaJobs nace para resolver la necesidad de conectar proyectos del ecosistema Polkadot 
            con profesionales especializados. Sabemos que encontrar desarrolladores con experiencia 
            en Substrate, ink! o governance de parachains puede ser un desafío.
          </p>
          <p class="text-gray-600">
            Por eso creamos una plataforma donde la calidad y especialización en Polkadot 
            son garantía de éxito para tu proyecto.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Impulsa el Ecosistema</h3>
            <p class="text-gray-600">
              Cada proyecto completado fortalece y expande las capacidades del ecosistema Polkadot
            </p>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-lg font-semibold mb-2">Pagos Seguros en DOT</h3>
          <p class="text-gray-600">Pagos nativos usando el token DOT con sistema de escrow inteligente</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">⭐</span>
          </div>
          <h3 class="text-lg font-semibold mb-2">Reputación Verificada</h3>
          <p class="text-gray-600">Sistema de reputación basado en contribuciones reales al ecosistema</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🌐</span>
          </div>
          <h3 class="text-lg font-semibold mb-2">Red Global</h3>
          <p class="text-gray-600">Conecta con expertos de Polkadot de todo el mundo</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">¿Listo para formar parte del futuro?</h2>
        <p class="mb-6">Únete a la comunidad de profesionales que están construyendo el futuro de Web3</p>
        <div class="flex justify-center space-x-4">
          <router-link 
            to="/" 
            class="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Explorar Servicios
          </router-link>
          <button class="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
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
