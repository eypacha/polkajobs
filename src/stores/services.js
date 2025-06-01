import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useServicesStore = defineStore('services', () => {
  // Estado
  const services = ref([])
  const featuredServices = ref([])
  const serviceDetail = ref(null)
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const priceRange = ref({ min: 0, max: 1000 })
  const sortBy = ref('popular') // popular, price_low, price_high, newest
  const isLoading = ref(false)
  const error = ref(null)

  // Paginación
  const currentPage = ref(1)
  const itemsPerPage = ref(9)

  // Datos mock para desarrollo
  const mockServices = ref([
    {
      id: '1',
      title: 'Desarrollo de Parachain personalizada con Substrate Framework',
      description: 'Desarrollo completo de parachain usando Substrate Framework con Rust',
      seller: {
        id: 'seller1',
        name: 'Carlos Mendoza',
        address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
        avatar: 'https://avatar.iran.liara.run/public/boy',
        rating: 4.9,
        reviews: 47,
        badges: ['Top Rated', 'Verified']
      },
      category: 'Desarrollo Substrate',
      tags: ['Substrate', 'Polkadot', 'Rust', 'Blockchain'],
      pricing: {
        basic: { price: 85, title: 'Básico', deliveryDays: 7, revisions: 2 },
        standard: { price: 150, title: 'Estándar', deliveryDays: 14, revisions: 3 },
        premium: { price: 300, title: 'Premium', deliveryDays: 21, revisions: 5 }
      },
      image: '/images/substrate-development.jpg',
      featured: true,
      rating: 4.9,
      reviewCount: 47,
      orderCount: 156,
      responseTime: '1 hora',
      lastDelivery: 'hace 2 días',
      inQueue: 3
    },
    {
      id: '2',
      title: 'Smart Contracts en Ink! para Polkadot',
      description: 'Desarrollo de smart contracts usando Ink! framework para el ecosistema Polkadot',
      seller: {
        id: 'seller2',
        name: 'Ana Silva',
        address: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
        avatar: 'https://avatar.iran.liara.run/public/girl',
        rating: 4.8,
        reviews: 32,
        badges: ['Verified']
      },
      category: 'Smart Contracts',
      tags: ['Ink!', 'Smart Contracts', 'Polkadot', 'WASM'],
      pricing: {
        basic: { price: 65, title: 'Básico', deliveryDays: 5, revisions: 2 },
        standard: { price: 120, title: 'Estándar', deliveryDays: 10, revisions: 3 },
        premium: { price: 220, title: 'Premium', deliveryDays: 15, revisions: 4 }
      },
      image: '/images/smart-contracts.jpg',
      featured: true,
      rating: 4.8,
      reviewCount: 32,
      orderCount: 89,
      responseTime: '2 horas',
      lastDelivery: 'hace 1 día',
      inQueue: 5
    },
    {
      id: '3',
      title: 'UI/UX Design para DApps Web3',
      description: 'Diseño completo de interfaz y experiencia de usuario para aplicaciones Web3',
      seller: {
        id: 'seller3',
        name: 'Miguel Torres',
        address: '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy',
        avatar: 'https://avatar.iran.liara.run/public/boy',
        rating: 4.7,
        reviews: 28,
        badges: ['Design Expert']
      },
      category: 'UI/UX Design',
      tags: ['UI/UX', 'Web3', 'Figma', 'Design System'],
      pricing: {
        basic: { price: 45, title: 'Básico', deliveryDays: 3, revisions: 2 },
        standard: { price: 85, title: 'Estándar', deliveryDays: 7, revisions: 3 },
        premium: { price: 150, title: 'Premium', deliveryDays: 10, revisions: 5 }
      },
      image: '/images/ui-ux-design.jpg',
      featured: false,
      rating: 4.7,
      reviewCount: 28,
      orderCount: 67,
      responseTime: '30 minutos',
      lastDelivery: 'hace 4 horas',
      inQueue: 2
    }
  ])

  // Getters
  const filteredServices = computed(() => {
    let filtered = [...services.value]

    // Filtrar por búsqueda
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Filtrar por categoría
    if (selectedCategory.value) {
      filtered = filtered.filter(service => service.category === selectedCategory.value)
    }

    // Filtrar por rango de precio
    filtered = filtered.filter(service => {
      const basicPrice = service.pricing.basic.price
      return basicPrice >= priceRange.value.min && basicPrice <= priceRange.value.max
    })

    // Ordenar
    switch (sortBy.value) {
      case 'price_low':
        filtered.sort((a, b) => a.pricing.basic.price - b.pricing.basic.price)
        break
      case 'price_high':
        filtered.sort((a, b) => b.pricing.basic.price - a.pricing.basic.price)
        break
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default: // popular
        filtered.sort((a, b) => b.orderCount - a.orderCount)
    }

    return filtered
  })

  const paginatedServices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredServices.value.slice(start, end)
  })

  const totalPages = computed(() => {
    return Math.ceil(filteredServices.value.length / itemsPerPage.value)
  })

  const servicesCount = computed(() => filteredServices.value.length)

  // Actions
  async function fetchServices() {
    isLoading.value = true
    error.value = null
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 500))
      services.value = mockServices.value
      featuredServices.value = services.value.filter(service => service.featured)
    } catch (err) {
      error.value = 'Error al cargar los servicios'
      console.error('Error fetching services:', err)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchServiceById(id) {
    isLoading.value = true
    error.value = null
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 300))
      const service = services.value.find(s => s.id === id) || mockServices.value.find(s => s.id === id)
      
      if (service) {
        serviceDetail.value = service
      } else {
        error.value = 'Servicio no encontrado'
      }
    } catch (err) {
      error.value = 'Error al cargar el servicio'
      console.error('Error fetching service:', err)
    } finally {
      isLoading.value = false
    }
  }

  function setSearchQuery(query) {
    searchQuery.value = query
    currentPage.value = 1 // Reset to first page
  }

  function setCategory(category) {
    selectedCategory.value = category
    currentPage.value = 1
  }

  function setPriceRange(min, max) {
    priceRange.value = { min, max }
    currentPage.value = 1
  }

  function setSortBy(sort) {
    sortBy.value = sort
    currentPage.value = 1
  }

  function setCurrentPage(page) {
    currentPage.value = page
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedCategory.value = ''
    priceRange.value = { min: 0, max: 1000 }
    sortBy.value = 'popular'
    currentPage.value = 1
  }

  function addService(service) {
    services.value.push({
      ...service,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    })
  }

  function updateService(serviceId, updatedData) {
    const index = services.value.findIndex(s => s.id === serviceId)
    if (index !== -1) {
      services.value[index] = { ...services.value[index], ...updatedData }
    }
  }

  function deleteService(serviceId) {
    services.value = services.value.filter(s => s.id !== serviceId)
  }

  // Inicializar con datos mock
  function initializeServices() {
    if (services.value.length === 0) {
      fetchServices()
    }
  }

  return {
    // Estado
    services,
    featuredServices,
    serviceDetail,
    searchQuery,
    selectedCategory,
    priceRange,
    sortBy,
    isLoading,
    error,
    currentPage,
    itemsPerPage,
    
    // Getters
    filteredServices,
    paginatedServices,
    totalPages,
    servicesCount,
    
    // Actions
    fetchServices,
    fetchServiceById,
    setSearchQuery,
    setCategory,
    setPriceRange,
    setSortBy,
    setCurrentPage,
    clearFilters,
    addService,
    updateService,
    deleteService,
    initializeServices
  }
})
