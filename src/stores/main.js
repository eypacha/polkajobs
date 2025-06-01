import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  // Estado global de la aplicación
  const isLoading = ref(false)
  const currentUser = ref(null)
  const darkMode = ref(false)
  const notifications = ref([])

  // Estado para servicios
  const services = ref([])
  const currentService = ref(null)
  const serviceCategories = ref([
    'Desarrollo Substrate',
    'Smart Contracts',
    'UI/UX Design',
    'DeFi Development',
    'NFT Marketplace',
    'Parachain Development'
  ])

  // Estado para carrito de compras
  const cart = ref([])
  const wishlist = ref([])

  // Getters
  const isAuthenticated = computed(() => !!currentUser.value)
  const cartItemsCount = computed(() => cart.value.length)
  const totalCartPrice = computed(() => {
    return cart.value.reduce((total, item) => total + item.price, 0)
  })

  // Actions para usuario
  function setUser(user) {
    currentUser.value = user
  }

  function logout() {
    currentUser.value = null
    cart.value = []
    wishlist.value = []
  }

  // Actions para loading
  function setLoading(status) {
    isLoading.value = status
  }

  // Actions para tema
  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    // Guardar preferencia en localStorage
    localStorage.setItem('darkMode', darkMode.value.toString())
  }

  function initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      darkMode.value = savedDarkMode === 'true'
    }
  }

  // Actions para servicios
  function setServices(servicesList) {
    services.value = servicesList
  }

  function setCurrentService(service) {
    currentService.value = service
  }

  function addService(service) {
    services.value.push(service)
  }

  function updateService(serviceId, updatedService) {
    const index = services.value.findIndex(service => service.id === serviceId)
    if (index !== -1) {
      services.value[index] = { ...services.value[index], ...updatedService }
    }
  }

  function deleteService(serviceId) {
    services.value = services.value.filter(service => service.id !== serviceId)
  }

  // Actions para carrito
  function addToCart(service) {
    const existingItem = cart.value.find(item => item.id === service.id)
    if (!existingItem) {
      cart.value.push(service)
      addNotification('Servicio agregado al carrito', 'success')
    } else {
      addNotification('El servicio ya está en el carrito', 'warning')
    }
  }

  function removeFromCart(serviceId) {
    cart.value = cart.value.filter(item => item.id !== serviceId)
    addNotification('Servicio removido del carrito', 'info')
  }

  function clearCart() {
    cart.value = []
  }

  // Actions para wishlist
  function addToWishlist(service) {
    const existingItem = wishlist.value.find(item => item.id === service.id)
    if (!existingItem) {
      wishlist.value.push(service)
      addNotification('Servicio agregado a favoritos', 'success')
    }
  }

  function removeFromWishlist(serviceId) {
    wishlist.value = wishlist.value.filter(item => item.id !== serviceId)
    addNotification('Servicio removido de favoritos', 'info')
  }

  function isInWishlist(serviceId) {
    return wishlist.value.some(item => item.id === serviceId)
  }

  // Actions para notificaciones
  function addNotification(message, type = 'info', duration = 3000) {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date()
    }
    
    notifications.value.push(notification)
    
    // Auto-remover notificación después del tiempo especificado
    setTimeout(() => {
      removeNotification(notification.id)
    }, duration)
  }

  function removeNotification(notificationId) {
    notifications.value = notifications.value.filter(
      notification => notification.id !== notificationId
    )
  }

  function clearNotifications() {
    notifications.value = []
  }

  // Métodos para persistencia
  function saveToLocalStorage() {
    const dataToSave = {
      cart: cart.value,
      wishlist: wishlist.value,
      darkMode: darkMode.value
    }
    localStorage.setItem('polkajobs_store', JSON.stringify(dataToSave))
  }

  function loadFromLocalStorage() {
    try {
      const savedData = localStorage.getItem('polkajobs_store')
      if (savedData) {
        const data = JSON.parse(savedData)
        cart.value = data.cart || []
        wishlist.value = data.wishlist || []
        darkMode.value = data.darkMode || false
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error)
    }
  }

  // Inicializar store
  function initializeStore() {
    loadFromLocalStorage()
    initializeDarkMode()
  }

  return {
    // Estado
    isLoading,
    currentUser,
    darkMode,
    notifications,
    services,
    currentService,
    serviceCategories,
    cart,
    wishlist,
    
    // Getters
    isAuthenticated,
    cartItemsCount,
    totalCartPrice,
    
    // Actions
    setUser,
    logout,
    setLoading,
    toggleDarkMode,
    initializeDarkMode,
    setServices,
    setCurrentService,
    addService,
    updateService,
    deleteService,
    addToCart,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    addNotification,
    removeNotification,
    clearNotifications,
    saveToLocalStorage,
    loadFromLocalStorage,
    initializeStore
  }
})
