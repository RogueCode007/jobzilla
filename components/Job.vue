<template>
  <div class="mt-5 md:mt-0">
    <nuxt-link v-for="job in jobs" :key="job.id" :to="'/jobs/'+ job.id" class="flex space-x-3 items-start bg-white border border-solid rounded-md my-6 p-2 md:my-0 md:mb-6 ">
      <div class="border-2 border-solid rounded-md max-w-xs">
        <img :src="job.company_logo" class="image mr-2 object-cover">
      </div>
      <div class="details">
        <p class="font-bold text-xs mb-2 md:mb-0">
          {{job.company}}
        </p>
        <p class="text-base font-normal">
          {{job.title}}
        </p>
        <div class="link-footer mt-3 md:mt-1 md:flex md:justify-between">
          <p class=" type w-20 text-center py-2 font-bold text-xs border border-solid rounded-md md:py-1 md:w-16">{{job.type}}</p>
          <div class="icons flex mt-3 justify-between pr-3">
            <p class="text-xs font-medium">{{job.location}}</p>
            <p class="text-xs font-medium">{{job.created_at | textcut}}</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
  
</template>

<script>
export default {
  props:["jobs"],
  filters:{
    textcut: function(value){
      return value.slice(0, 10);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,400&display=swap');
div{
  font-family: 'Roboto', sans-serif;
}
a{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  color: #334680
}
.image{
  width: 90px;
  height: 90px
}
.type{
  border-color: #334680;
}
.link-footer div{
  
  color: #B9BDCF
}
@media only screen and (min-width: 768px){
  .link-footer{
    min-width: 100%
  }
  div.details{
    min-width: 75%
  }
  div.icons{
    min-width: 50%
  }
 
}
</style>