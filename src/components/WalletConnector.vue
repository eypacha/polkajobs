<template>
  <div class="wallet-connector">
    <!-- Botón de conexión cuando no hay wallet conectada -->
    <button
      v-if="!selectedAccount"
      @click="connectWallet"
      :disabled="isConnecting"
      class="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 font-unbounded hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg v-if="isConnecting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span v-if="isConnecting">Conectando...</span>
      <span v-else>Conectar Wallet</span>
    </button>

    <!-- Información de wallet conectada -->
    <div v-else class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm wallet-info">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-medium text-gray-900 font-unbounded">Wallet Conectada</h3>
        <button
          @click="disconnect"
          class="text-gray-400 transition-colors hover:text-gray-600"
          title="Desconectar"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Selector de cuenta -->
      <div v-if="accounts.length > 1" class="mb-3">
        <label class="block mb-1 text-sm font-medium text-gray-700">Cuenta:</label>
        <select
          @change="selectAccount(accounts.find(acc => acc.address === $event.target.value))"
          class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        >
          <option
            v-for="account in accounts"
            :key="account.address"
            :value="account.address"
            :selected="account.address === selectedAccount.address"
          >
            {{ account.meta.name || 'Sin nombre' }} ({{ formatAddress(account.address) }})
          </option>
        </select>
      </div>

      <!-- Información de la cuenta -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Dirección:</span>
          <span class="px-2 py-1 font-mono text-sm bg-gray-100 rounded">
            {{ formatAddress(selectedAccount.address) }}
          </span>
        </div>
        
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Balance:</span>
          <span class="text-sm font-semibold text-pink-600">{{ balance }}</span>
        </div>

        <div v-if="networkInfo" class="flex items-center justify-between">
          <span class="text-sm text-gray-600">Red:</span>
          <span class="px-2 py-1 text-sm text-orange-800 bg-orange-100 rounded">
            {{ networkInfo.chain }} (Testnet)
          </span>
        </div>
      </div>
    </div>

    <!-- Información de red fija -->
    <div v-if="isApiReady" class="p-3 mt-4 border border-orange-200 rounded-lg bg-orange-50">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-lg">🧪</span>
        <span class="text-sm font-medium text-orange-900">Red de Pruebas</span>
      </div>
      <p class="text-xs text-orange-700">
        Usando Westend Testnet - Los tokens WND no tienen valor real
      </p>
    </div>

    <!-- Mensaje de error -->
    <div v-if="error" class="p-3 mt-4 border border-red-200 rounded-lg bg-red-50">
      <div class="flex">
        <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div class="ml-3">
          <p class="text-sm text-red-800">{{ error }}</p>
        </div>
      </div>
    </div>

    <!-- Estado de conexión a API -->
    <div class="flex items-center gap-2 mt-4 text-sm">
      <div class="flex items-center gap-1">
        <div :class="[
          'w-2 h-2 rounded-full',
          isApiReady ? 'bg-green-500' : 'bg-red-500'
        ]"></div>
        <span :class="isApiReady ? 'text-green-600' : 'text-red-600'">
          {{ isApiReady ? 'API Conectada' : 'API Desconectada' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { usePolkadot } from '@/composables/usePolkadot.js'

const {
  api,
  isApiReady,
  accounts,
  selectedAccount,
  balance,
  isConnecting,
  error,
  currentNetwork,
  connectWallet,
  selectAccount,
  disconnect,
  connectToApi,
  getBalance,
  getNetworkInfo
} = usePolkadot()

const networkInfo = ref(null)

// Formatear dirección para mostrar
const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// Obtener información de red al conectar
const updateNetworkInfo = async () => {
  if (isApiReady.value) {
    networkInfo.value = await getNetworkInfo()
  }
}

// Observar cambios en la API
watchEffect(() => {
  if (isApiReady.value) {
    updateNetworkInfo()
  }
})
</script>

<style scoped>
.wallet-connector {
  max-width: 28rem;
}
</style>
