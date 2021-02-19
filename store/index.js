import axios from 'axios'

export const state = () => ({
  jobs: [],
  job: {},
  loading: true,
  error: false
})

export const mutations = {
  getJobs(state, data){
    state.jobs = [...data]
    
  },
  getSpecificJob(state, data){
   state.job =  Object.assign({}, data);
    
  },
  filterJobs(state){
     state.jobs = state.jobs.filter((job)=>{
      return job.type == "Full Time"
    });
  },
  changeLoading(state){
    state.loading = !state.loading;
  },
  errored(state){
    state.error = true
  }
}

export const actions = {

  //To get location of user
  // async getLocation({dispatch}){
  //     dispatch("changeLoading");
  //     if(navigator.geolocation){
  //       navigator.geolocation.getCurrentPosition((pos)=>{
  //         const data = {};
  //         data.lat = pos.coords.latitude
  //         data.lon = pos.coords.longitude
  //         dispatch("fetchJobs", data)
  //       }, (err)=>{
  //         //if user rejects location permission, dispatch an action that uses a default location
  //         alert(`I'm going to proceed with a default location anyway`);
  //         console.log(err);
  //         dispatch("defaultJobsFetch");
  //       })
  //     }else{
  //       //if browser doesn't support geolocation
  //       alert("this browser does not support geolocation, ditch it!")
  //       dispatch("defaultJobsFetch");
  //     } 
  // },

  // async fetchJobs({dispatch},data){
  //   try{
  //     const res = await axios.get(`https://jobs.github.com/positions.json?lat=${data.lat}&long=${data.lon}`)
  //     if(res.data.length == 0){
  //       alert("There are no job postings in your location presently");
  //       dispatch("defaultJobsFetch");
  //     }else{
  //       commit("getJobs", res.data)
  //     }
  //   }catch(err){
  //     console.log(err)
  //   }
  // },

  async defaultJobsFetch({commit}){
    try{
      const res = await axios.get('https://jobs.github.com/positions.json?location=new+york', {
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      })
      const jobs = res.data;
      commit('getJobs', jobs)
    }catch(error){
      commit("errored");
      console.log(error)
    }
    finally{
      commit('changeLoading')
    }
  },

  async cityJobsFetch({commit}, data){
    try{
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${data}`)
      if(res.data.length > 0){
        commit('getJobs', res.data)
      }else{
        alert("no jobs in this location")
      }
    }catch(error){
     // commit("errored");
      console.log(error)
    }
    finally{
      commit('changeLoading')
    }
  },
  async getSpecificJob({commit},id){
    try{
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`)
      commit('getSpecificJob', res.data);
    }catch(error){
      //commit("errored");
      console.log(error)
    }
    finally{
      commit('changeLoading')
    }
  },
  async keywordSearch({commit},data){
    try{
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${data}`);
    }catch(error){
     // commit("errored");
      console.log(error)
    }
    finally{
      commit('changeLoading')
    }
  }
}