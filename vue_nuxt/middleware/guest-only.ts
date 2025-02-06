export default defineNuxtRouteMiddleware(() => {
  const isAuthenticated = useAuthenticated();
  if (!isAuthenticated) {
    return abortNavigation()
  }
})