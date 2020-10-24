export const state = () => ({
  cacheVersion: '',
  header: {},
  footer: {}
})

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version
  },
  setHeader(state, version) {
    state.header = version
  },
  setFooter(state, version) {
    state.footer = version
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('loadHeader')
    await dispatch('loadFooter')
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
      commit('setCacheVersion', res.data.space.version)
    })
  },
  loadHeader({ commit }) {
    return this.$storyapi.get(`cdn/stories/global/header-nav`).then((res) => {
      commit('setHeader', res.data)
    })
  },
  loadFooter({ commit }) {
    return this.$storyapi.get(`cdn/stories/global/footer-nav`).then((res) => {
      commit('setFooter', res.data)
    })
  },
}
