import axios from "axios";

export default{
    namespaced: true,
    state: {
        proyects:[],
        currentProyect:{}
      },
      mutations: {
        setProyect(state,payload){
          state.proyects=payload;
        },
        setCurrentProyect(state,payload){
          state.currentProyect=payload;
        }
      },
      actions: {
        async getProyects({ commit, state }) {
          try {
              if (state.proyects.length === 0) {
                  const res = await axios.get("https://run.mocky.io/v3/e19cc918-c60a-4754-bafc-14a5f1849961");
                  commit('setProyect', res.data);
              }
          } catch (error) {
              console.error(error)
          }
      }
    },
}