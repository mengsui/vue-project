import { generatorDynamicRouter } from '@/config/generator-routers.js'

const smallProgram = {
  namespaced: true,
  state: {
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        generatorDynamicRouter(data).then(routers => {
          commit('SET_ROUTERS', routers)
          resolve()
        })
      })
    }
  }
}

export default smallProgram