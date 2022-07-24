<script setup lang="ts">
const dogImageLink = ref('')
const busy = ref(false)

const { data: response, refresh } = await useFetch('/api/dog', {
  initialCache: false,
})
dogImageLink.value = response.value.message

const reload = async () => {
  busy.value = true
  await refresh()
  dogImageLink.value = response.value.message
  busy.value = false
}
</script>

<template>
  <main class="container">
    <h1>Dog Image</h1>
    <div>
      <button :aria-busy="busy" @click="reload">Next Dog Image</button>
    </div>
    <article>
      <img :src="dogImageLink" />
    </article>
  </main>
</template>
