export const useBaseUrl = () => {
  const route = useRoute()
  const getBaseUrl = () => {
    const path = route.path
    const baseUrl = path === '/' ? '' : `${path}`
    return (process.client) ? `${baseUrl}` : ''
  }

  return {
    getBaseUrl
  }
}
