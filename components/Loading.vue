<template>
  <div class="loading flex space-x-3 space-x-3 items-start bg-white border border-solid rounded-md my-6 p-2 md:my-0 md:mb-6 ">
    <div class="bg-gray-500 border-2 border-solid rounded-md px-8 py-8"></div>
    <div class="details">
      <p class="px-5 py-1 bg-gray-500 rounded-md"></p>
      <p class="px-10 py-1 bg-gray-500 rounded-md mt-4"></p>  
      <div class="link-footer">
        <p class="type"></p>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
  @media only screen and (min-width: 1024px){
    .loading{
      min-width: 45%
    }
  }
</style>