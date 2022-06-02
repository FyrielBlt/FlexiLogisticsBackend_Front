<template>
  <div class="w-full border-t-2 px-8 py-3 lg:flex justify-between items-center">
    <p class="mb-2 lg:mb-0">© {{new Date().toISOString().substr(0, 10)}}</p>

   
  </div>
</template>

<script>
export default {
  name:"Footer",
}
</script>
