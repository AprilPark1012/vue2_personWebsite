import Vue from 'vue'
import Vuex from 'vuex'

//基本通用
// import base from './modules/base'
//聊天
import chat from './modules/chat'
//联系人
// import contacts from './modules/contacts'
//发现
import me from './modules/me'

import house from './modules/house'

/*import getters from './getters.js'
import actions from './actions.js'*/

Vue.use(Vuex)


export default new Vuex.Store({
    
    /*actions,
    getters,*/
    modules: {
        chat,
        me,
        house
    },
    // getters,
    strict: true
})
