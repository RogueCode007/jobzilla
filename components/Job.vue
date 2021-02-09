<template>
  <div>
    <nuxt-link v-for="job in jobs" :key="job.id" :to="'/jobs/'+ job.id">
      <div class="image" :style="{backgroundImage : 'url(' + job.company_logo + ')'}"></div>
      <div class="details">
        <p class="company-name">
          {{job.company}}
        </p>
        <p class="job-title">
          {{job.title}}
        </p>
        <div class="link-footer">
          <p class="type">{{job.type}}</p>
          <div>
            <p>{{job.location}}</p>
            <p>{{job.created_at}}</p>
            </div>
        </div>
      </div>
    </nuxt-link>
  </div>
  
</template>

<script>
export default {
  props:["jobs"]
}
</script>

<style>

</style>