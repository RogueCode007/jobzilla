<template>
  <div class='container'>
    <NavBar />
    <Search />
    <div class="wrapper">
      <div>
        <input type="checkbox" id="checkbox"    
        true-value="yes"
        false-value="no" 
        v-model="fulltime"
        @change="checkJobType">
        <label for="checkbox">Full Time</label>
        <p>Location</p>
        <div>
          <input type="text" 
          v-model="location"
          placeholder="City, state or country"
          v-on:keyup.enter="changeLocation">
        </div>
        <div class="radio">
          <div v-for="item in cities" :key="item.id">
            <input type="radio" v-model="city" :value="item" @change="changeCity">
            <label>{{item}}</label>
          </div>
        </div>
      </div>
    </div>
    <Error v-if="error" />
    <Loading v-if="loading" />
    <Job v-else :jobs="jobs" />
  </div>
</template>

<script>
import {mapState} from "vuex"
import NavBar from '../components/Navbar'
import Search from '~/components/Search'
import Loading from '~/components/Loading'
import Error from '~/components/Error'
import Job from '~/components/Job'

export default {
  components: {
    NavBar, Search, Loading, Error, Job
  },
  data(){
    return{
      fulltime: '',
      city: '',
      location: '',
      cities: ['Berlin', 'Amsterdam', 'London', 'New York'],
     
    }
  },
  methods:{
    changeCity(){
      this.fulltime = "no"
      this.$store.commit("changeLoadingVal");
      this.$store.dispatch("cityJobsFetch", this.city);
    },
    changeLocation(){
      this.fulltime = "no"
      this.$store.commit("changeLoadingVal");
      this.$store.dispatch("cityJobsFetch", this.location);
    },
    checkJobType(){
      if(this.fulltime == "yes"){
        this.$store.commit("filterJobs");
      }
    }, 
  },
  computed:{
    ...mapState({
      jobs: "jobs",
      loading: "loading",
      error: "error"
    })
  },
  beforeCreate(){
    this.$store.commit("changeLoadingVal");
    
  },
  created(){
    this.$store.dispatch("defaultJobsFetch");
  }
}
</script>

<style scoped>
h1{
  color: green
}
a{
  display: block;
}
.image{
  min-height: 200px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
