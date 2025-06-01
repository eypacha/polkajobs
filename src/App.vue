
<template>
  <div>
    <!-- Barra de navegación -->
    <nav class="bg-white shadow-lg">
      <div class="px-4 mx-auto max-w-7xl">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <router-link to="/" class="flex items-center px-2 py-4">
                <div class="text-lg font-bold font-title">PolkaJobs<span class="text-pink-600 ">.</span></div>
              </router-link>
            </div>
          </div>
          <div class="items-center hidden space-x-3 md:flex">
            <router-link 
              to="/" 
              class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-pink-600"
            >
              Inicio
            </router-link>
            <router-link 
              to="/about" 
              class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-pink-600"
            >
              Acerca de
            </router-link>
            <router-link 
              to="/polkadot-test" 
              class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-pink-600"
            >
              Test Polkadot
            </router-link>

          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido de las rutas -->
    <router-view />
    
    <!-- Notificaciones -->
    <NotificationToast />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'
import NotificationToast from './components/NotificationToast.vue'

const mainStore = useMainStore()

onMounted(() => {
  mainStore.initializeStore()
})
</script>
