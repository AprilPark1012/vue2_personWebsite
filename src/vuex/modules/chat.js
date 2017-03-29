import {
    SET_MENU_WECHAT_LIST,
    CHAT,
    SET_MENU,
    SET_NEWS_STATE,
    DELETE_NEWS,
    SET_MENU_ACTIVE
} from '../mutation-types'

let state = {
    wechat_list: [/*{
        "base": {
            "id": 0,
            "name": "",
            "wxid": "",
            "qq": "",
            "email": "",
            "type": "firends",
            "iconSrc": "",
            "qrCode": "",
            "signature": ""
        },
        "chatBaseModel": {
            "newsUnreadCount": null,
            "endTimeStr": null,
            "endChatAuth": "",
            "endChatTxt": "",
        },
        "chatConfigModel": {
            "chatBackground": null, //背景
            "groupNotice": null, //群公告
            "isStick": null, //置顶
            "newsMute": true, //消息免打扰
            "contactsSave": null,
            "showGroupNickname": null //显示群聊天昵称
        }
    }*/],
    //base
    chat_base: {
        "id": 1,
        "name": "聊天中",
        "wxid": "",
        "qq": "",
        "email": "",
        "type": "friends",
        "iconSrc": "",
        "qrCode": "",
        "signature": ""
    },
    //dialogue
    dialogue_type: 'friends',
    //聊天内容
    dialogue: [],
    //聊天bar
    dialogue_bar: {
        menu: [{
            title: '',
            link: '',
            subMenu: [{
                title: '',
                link: ''
            }, {
                title: '',
                link: ''
            }]
        }]
    },
    //聊天人员
    chat_member: [{"id": 1,iconSrc:"",name:""}],
    //聊天配置
    chat_config: {
        "chatBackground": null, //背景
        "groupNotice": "", //群公告
        "isStick": false, //置顶
        "newsMute": true, //消息免打扰
        "contactsSave": false,
        "showGroupNickname": true, //显示群聊天昵称
    },
    index_nav: [{
        index: 0,
        path: {
            path: '/chat'
        },
        hint: { type: "count", count: 0 }, //count,dot
        iconClass: 'icon-wechat',
        text: '时间的追逐者'
    }],
    menu_active: { text: "时间的追逐者", index: 0 },
}

const store = {
    state: state,
    actions: {
        get_index_nav: ({ commit, dispatch }) => {
            let index_nav = require('../../mock/index-nav')
            debugger
            commit('SET_MENU', index_nav)
        },
        set_menu_active: ({ commit }, _index) => {
            debugger
            commit('SET_MENU_ACTIVE', _index)
        }
    },
    mutations: {
        [SET_MENU](state, index_nav) {
            debugger
            state.index_nav = index_nav;
        },
        [SET_MENU_ACTIVE](state, _index) {
            //底部导航激活
            debugger
            state.menu_active = state.index_nav[_index]
        }
    },
    getters: {
        index_nav: ( state ) => {
            return state.index_nav;
        }
    }
}

/*const mutations = {
    [SET_MENU_WECHAT_LIST](state, list) {
        state.wechat_list = list
    },
    [CHAT](state, {
        base,
        // chatBaseModel,
        chatDialogueModel,
        chatDialogueBarModel,
        chatMemberModel,
        chatConfigModel
    }) {
        state.dialogue_type = base.type;
        state.chat_base = base;
        state.dialogue = chatDialogueModel
        state.dialogue_bar = chatDialogueBarModel;
        state.chat_member = chatMemberModel;
        state.chat_config = chatConfigModel;
    },
    [SET_NEWS_STATE](state,index,val){
        state.wechat_list[index].chatBaseModel.newsUnreadCount = val
    },
    [DELETE_NEWS](state,index){
        state.wechat_list.splice(index,1);
    },
    [SET_MENU_ACTIVE](state, _index) {
        //底部导航激活
        debugger
        state.menu_active = state.index_nav[_index]
    }

}*/

/*export default {
    state,
    mutations
}*/

export default store;