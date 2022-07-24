export interface dog {
  message: string,
  status: string,
}

// https://dog.ceo/dog-api/
export default defineEventHandler(async (event) => {
  const res = await $fetch<dog>('https://dog.ceo/api/breeds/image/random')
  return res
})
