export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (!isAuthenticated) {
    return abortNavigation()
  }
})