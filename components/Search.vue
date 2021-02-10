<template>
  <div class="wrapper py-8 px-5 mt-5 mb-5 rounded-lg">
    <div class="border-2 border-solid rounded-lg py-3 px-2 bg-white flex justify-between items-center">
      <input type="text" v-model="text" placeholder="Titles, companies, expertise or benefits" class=" keyword h-10 focus:outline-none md:border md:border-solid">
      <button @click="searchKeyword" class="bg-blue-500 text-white py-3 px-5 rounded-md">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: ""
    }
  }, 
  methods:{
    searchKeyword(){
      this.$store.commit("changeLoadingVal");
      this.$store.dispatch('keywordSearch', this.text)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    border: 1px solid black;
    background-color: #282538
  }
  @media only screen and (min-width: 768px){
    .keyword{
      min-width: 75%
    }
  }
</style>