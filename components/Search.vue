<template>
  <div class="wrapper">
    <div class="input-box">
      <input type="text" v-model="text" placeholder="Titles, companies, expertise or benefits">
      <button @click="searchKeyword">Search</button>
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

<style>

</style>