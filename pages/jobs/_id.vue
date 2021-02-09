<template>
  <div class="container">
  <NavBar />
  <div class="wrapper">
    <div class="ls">
      <nuxt-link to="/">Back to search</nuxt-link>
      <div class="apply">
        <p>HOW TO APPLY</p>
        <p>Please visit : <a :href="job.how_to_apply">{{job.how_to_apply}}</a></p>
      </div>
    </div>
    <div class="rs">
      <p class="title">{{job.title}} <span>{{job.type}}</span></p>
      <p class="time">{{job.created_at}}</p>
      <div class="details">
        <div class="image" :style="{backgroundImage : 'url(' + job.company_logo + ')'}"></div>
        <div class="text">
          <h4 class="name">{{job.company}}</h4>
          <h5>{{job.location}}</h5>
        </div>
      </div>
      <div class="description">
        <p>{{job.description}}</p>
        <p>Learn more about us: <a :href="job.company_url">here</a></p>
      </div>
  </div>
    </div>
  </div>
  
</template>

<script>
import {mapState} from "vuex";
import NavBar from "~/components/Navbar";

export default {
  components:{
    NavBar
  },

  data(){
    return{

    }
  },

  computed:{
    ...mapState({
      job: 'job'
    })
  },
  mounted(){
    this.$store.dispatch("getSpecificJob", this.$route.params.id);
  },
}
</script>

<style>
.image{
  min-height: 200px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>