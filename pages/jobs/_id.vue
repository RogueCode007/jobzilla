<template>
  <div class="md:px-4 lg:px-10">
    <NavBar />
    <div class="mt-4 px-2 md:flex md:justify-between space-x-5">
      <div class="ls">
        <nuxt-link to="/"  class="text-blue-500 text-sm">Back to search</nuxt-link>
        <div class="apply my-6">
          <p class="gray-text mb-2 font-bold">HOW TO APPLY</p>
          <p class="how text-sm">{{job.how_to_apply}}</p>
        </div>
      </div>
      <div class="rs mt-8 md:mt-0">
        <p class="title font-bold text-lg">{{job.title}} <span class=" type w-20 text-center py-2 font-bold text-xs border border-blue-800 rounded-md">{{job.type}}</span></p>
        <p class="time gray-text my-3">{{job.created_at | textcut}}</p>
        <div class="details my-5 flex items-center space-x-3">
          <div>
            <img :src="job.company_logo" class="logo border rounded-md mr-2 object-cover">
          </div>
          <div class="text">
            <h4 class="name text-lg font-bold">{{job.company}}</h4>
            <h5 class="gray-text">{{job.location}}</h5>
          </div>
        </div>
        <div class="description">
          <p>{{job.description}}</p>
          <p>Learn more about us: <a :href="job.company_url">here</a></p>
        </div>
      </div>
    </div>
    <p class="footer my-8 gray-text text-center text-sm font-semibold">obiwanpelosi @ DevChallenges.io</p>
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

  filters:{
    textcut: function(value){
      if(value){
        return value.slice(0, 10);
      }
    }

  },

  computed:{
    ...mapState({
      job: 'job'
    })
  },
  created(){
    this.$store.dispatch("getSpecificJob", this.$route.params.id);
  },
  methods:{
    setLoading(){
      this.$store.commit('changeLoading');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.logo{
  width: 42px;
  height: 42px
}
.ls{
  font-family: 'Poppins', sans-serif;
  
}
.how, .description{
  color: #334680
}
.rs{
  font-family: 'Roboto', sans-serif;
}
.gray-text{
  color: #B9BDCF
}
p.time, h5{
  font-size: 12px;
}
p.title, h4.name{
  color: #334680
}
span.type{
  display: block;
}
.footer{
  font-family: 'Montserrat', sans-serif;
}

@media only screen and (min-width: 768px){
  .ls{
    max-width: 30%;
    
  }
  p.how{
    word-wrap: break-word
  }
  .rs{
    width: 70%
  }
}
</style>