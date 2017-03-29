import { SET_MENU } from '../mutation-types'

import {
    fetchApi,
    fetchWeather
} from './api.js'
let state = {
    iframe_url:'',
    iframe_title:'',
    get_weather_info: '',
    page_num: 0,
    get_nba_info: '',
    userInput: '',
}

const store = {
    state: state,
    actions: {
        set_iframe_url : ({commit}, urlObj, fn) => {
            commit('SET_IFRAME_URL', urlObj)
            !!fn && fn()
        },
        set_userInput: ({ commit }, value) => {
            commit('SET_USERINFO', value);
        },
        get_weather_info: ({ commit }, fn) => {
            debugger
            fetchApi("weather").then((res) => {
                var result = res.weatherinfo;
                commit('GET_WEATHER_INFO', "今天" + result.city + "的最高气温是" + result.temp1 + "，最低气温是" + result.temp2 + "，" + result.weather + '。');
            });
            
        },
        get_nba_info: ({ commit }, fn) => {
            debugger
            fetchApi("nba").then((res) => {
                commit('GET_NBA_INFO', res);
            });
        },
    },
    mutations: {
        ['SET_IFRAME_URL'](state,urlObj){
            state.iframe_url = urlObj.url
            state.iframe_title = urlObj.title
        },
        ['GET_WEATHER_INFO'](state, flag) {
            state.get_weather_info = flag;
        },
        ['GET_NBA_INFO'](state, flag) {
            state.get_nba_info = flag;
        },
        ['SET_USERINFO'](state, flag) {
            state.userInput = flag;
        },
    },
    getters: {
        iframe_url: ( state ) => {
            return state.iframe_url;
        },
        iframe_title: (state) => {
            return state.iframe_title;
        } 
    }
}


const mutations = {
    ['SET_IFRAME_URL'](state,urlObj){
        state.iframe_url = urlObj.url
        state.iframe_title = urlObj.title
    },
    ['GET_WEATHER_INFO'](state, flag) {
        state.get_weather_info = flag;
    },
}

/*export default {
  state,
  mutations
}*/

export default store