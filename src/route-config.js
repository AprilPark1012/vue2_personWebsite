import store from 'store'
export default function(router) {
    //个人资料
    const personInfo = {
            component: resolve => {
                require(['./views/contact/person-info.vue'], resolve)
            },
            subRoutes: {
                //个人资料设置
                'person-info-set': {
                    component: resolve => {
                        require(['./views/contact/person-info-set.vue'], resolve)
                    }
                }

            }
        }
    //个人相册
    const albums = {
        component: resolve => {
            require(['./views/find/albums-friends.vue'], resolve)
        },
        subRoutes: {
            // //预览
            // 'preview': {
            //     component: resolve => {
            //         require(['./views/find/albums-friends-preview.vue'], resolve)
            //     }
            // },
            //个人资料
            'person-info': personInfo
        }
    }
    //相互引用
    personInfo.albums = albums

    //对话框
    const dialogue = {
            component: resolve => {
                require(['./views/chat/dialogue.vue'], resolve)
            },
            subRoutes: {
                //聊天详情
                'chat-detail': {
                    component: resolve => {
                        require(['./views/chat/chat-detail.vue'], resolve)
                    },
                    subRoutes: {
                        'person-info': personInfo
                    }
                },
                //群聊天信息
                'chat-info': {
                    component: resolve => {
                        require(['./views/chat/chat-info.vue'], resolve)
                    },
                    subRoutes: {
                        'person-info': personInfo
                    }
                },
                'link': {
                    component: resolve => {
                        require(['./components/iframe.vue'], resolve)
                    }
                }
            }
        }

    //map
    router.map({
        '/chat': {
            component: resolve => {
                require(['./views/chat.vue'], resolve)
            },
            subRoutes: {
                'dialogue': dialogue,
                'sao-yi-sao': {
                    component: resolve => {
                        require(['./views/find/sao-yi-sao.vue'], resolve)
                    }
                },
            }
        },
        '*': {
            name: '404',
            component: resolve => {
                require(['./views/404.vue'], resolve)
            }
        },
        '/me': {
            component: resolve => {
                require(['./views/me.vue'], resolve)
            },
            subRoutes: {
                'shopping': {
                    component: resolve => {
                        require(['./components/iframe.vue'], resolve)
                    }
                }
            }
        }
    })

    router.redirect({
        '/': '/chat'
    })

    router.afterEach(function({ from, to }) {
        let fromPath = from.path || '/';
        let toPath = to.path;
        let toPath_end = toPath.lastIndexOf('/');
        let backPath = toPath.slice(0, toPath_end);
        store.dispatch('BACK_PATH', backPath)
    })

}
