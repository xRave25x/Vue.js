import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import bestsellers from './bestsellers'
import goods from './goods'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    bestsellers,
    goods,
    coffee,
    links
  }
})

export default store