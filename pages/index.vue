<template>
  <div class='big px-4 md:px-6 lg:px-10'>
    <NavBar />
    <Search />
    <div class="md:flex md:justify-between md:items-start">
      <div class="util">
        <input type="checkbox" id="checkbox"    
        true-value="yes"
        false-value="no" 
        v-model="fulltime"
        @change="checkJobType"
        class="mt-2">
        <label for="checkbox">Full Time</label>
        <p class="mt-5 mb-3 gray-text text-base font-bold text-transform: uppercase">Location</p>
        <div>
          <input type="text" 
          v-model="location"
          placeholder="City, state, zipcode or country"
          v-on:keyup.enter="changeLocation"
          class="location bg-white h-12 w-full rounded-md px-2 focus:outline-none focus:ring focus:border-blue-500">
        </div>
        <div class="radio mt-5">
          <div v-for="item in cities" :key="item.id" class="my-2">
            <input type="radio" v-model="city" :value="item" @change="changeCity">
            <label class="text-sm">{{item}}</label>
          </div>
        </div>
      </div>
      <Error v-if="error" />
      <div v-else class="jobs">
        <Loading v-if="loading" />
        <Job v-bind:jobs ="jobs" v-else />
      </div>
      
    </div> 
    <p class="footer gray-text text-center text-sm font-semibold">obiwanpelosi @ DevChallenges.io</p>
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
  head(){
    return {
      title: "hubjobs",
      meta: [
        {
          hid: 'Job search site',
          name: 'Github Jobs search site',
          content: 'Search jobs on github'
        }
      ]
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
    this.$store.commit('changeLoading')
  },
  mounted(){
    this.$store.dispatch("defaultJobsFetch");
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
label{
  color: #334680;
  font-weight: 400;
}
.big{
  background-color: #F6F7FB;
}

.gray-text{
  color: #B9BDCF
}
input.location{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05)
}
input.location::placeholder{
  font-size: 12px; 
}
.footer{
  font-family: 'Montserrat', sans-serif;
}
@media only screen and (min-width:768px){
  .util{
    min-width: 35%;
  }
}
@media only screen and (min-width: 1024px){
  .jobs{
    min-width: 400px
  }
}
</style>
