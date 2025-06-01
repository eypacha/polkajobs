<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <TransitionGroup
        name="notification"
        tag="div"
        class="space-y-2"
      >
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'flex items-center p-4 max-w-sm rounded-lg shadow-lg border-l-4 transform transition-all duration-300',
            notificationClasses[notification.type]
          ]"
        >
          <div :class="['flex-shrink-0 mr-3', iconClasses[notification.type]]">
            <span class="text-lg">{{ getIcon(notification.type) }}</span>
          </div>
          
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-800">
              {{ notification.message }}
            </p>
          </div>
          
          <button
            @click="removeNotification(notification.id)"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <span class="text-lg">×</span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template><script setup>
import { computed } from 'vue'
import { useMainStore } from '../stores/main'

const mainStore = useMainStore()
const notifications = computed(() => mainStore.notifications)

const notificationClasses = {
  success: 'bg-green-50 border-green-400',
  warning: 'bg-yellow-50 border-yellow-400',
  error: 'bg-red-50 border-red-400',
  info: 'bg-blue-50 border-blue-400'
}

const iconClasses = {
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  info: 'text-blue-400'
}

function getIcon(type) {
  const icons = {
    success: '✓',
    warning: '⚠',
    error: '✗',
    info: 'ℹ'
  }
  return icons[type] || 'ℹ'
}

function removeNotification(id) {
  mainStore.removeNotification(id)
}
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}
</style>