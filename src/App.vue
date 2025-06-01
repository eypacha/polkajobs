
<template>
  <div>
    <!-- Barra de navegación -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <router-link to="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">PolkaJobs</span>
              </router-link>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-3">
            <router-link 
              to="/" 
              class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Inicio
            </router-link>
            <router-link 
              to="/about" 
              class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Acerca de
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido de las rutas -->
    <router-view />
  </div>
</template>

<script setup>

</script>
