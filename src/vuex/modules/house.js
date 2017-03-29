// import { SET_MENU } from '../mutation-types'
import {
    fetchWaihui,
    fetchApi
} from './api.js'

let state = {
    get_waihui_info: [],
    get_house_info: [],
    get_dianzan_info: '',
    showHouse: false,
    showWaihui: false
}

const store = {
    state: state,
    actions: {
        get_waihui_info : ({commit}, fn) => {
            commit('NOT_GET_WAIHUI_INFO');
            fetchApi("waihui").then((res) => {
                commit('GET_WAIHUI_INFO', res.list);
                document.querySelector('.indicator').classList.add("hide_it");
            });
        },
        get_house_info : ({commit}, argu) => {
            debugger
            
            var keyWord= "house";
            if(argu) {
                keyWord = keyWord + argu
            }
            var keyWord2 = { a:1, arr: [1,2] };
            var argu2 = {};
            
            commit('NOT_GET_HOUSE_INFO');
            
            Object.assign(argu2, keyWord2);
            fetchApi(keyWord, argu).then((res) => {
                document.querySelector('.indicator').classList.add("hide_it");
                commit('GET_HOUSE_INFO', res);
            });
        },
        get_dianzan_info: ({commit}, argu) => {
            var keyWord= "dianzan";
            if(argu) {
                keyWord = keyWord + argu
            }
            fetchApi(keyWord, argu).then((res) => {
                commit('GET_DIANZAN_INFO', res.number);
                document.querySelector('.indicator').classList.add("hide_it");
            });
            //commit('GET_HOUSE_INFO', true);
        },

    },
    mutations: {
        ['GET_WAIHUI_INFO'](state, flag) {
            state.showWaihui = true;
            state.get_waihui_info = flag;
        },
        ['NOT_GET_WAIHUI_INFO'](state, flag) {
            state.showWaihui = false;
        },
        ['GET_HOUSE_INFO'](state, flag) {
            state.showHouse = true;
            state.get_house_info = flag;
        },
        ['NOT_GET_HOUSE_INFO'](state, flag) {
            state.showHouse = false;
        },
        ['GET_DIANZAN_INFO'](state, flag) {
            state.get_dianzan_info = flag;
        },
    },
    getters: {
       /* iframe_url: ( state ) => {
            return state.iframe_url;
        },
        iframe_title: (state) => {
            return state.iframe_title;
        } */
    }
}



export default store