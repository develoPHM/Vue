export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuthUser();
  if (!isAuthenticated) {
    return abortNavigation()
  }
})