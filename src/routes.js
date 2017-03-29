const routes = [
  {
    name: 'chat',
    path: '/chat',
    component: require('./views/chat.vue')
  },
  {
    name: 'me',
    path: '/me',
    component: require('./views/me.vue')
  },
  {
    name: 'house',
    path: '/house',
    //component: require('./views/house.vue')
    component: require('./views/houseChartt.vue')
  },
  {
    name: 'waihui',
    path: '/waihui',
    component: require('./views/waihui.vue')
  },
  {
    name: 'charts',
    path: '/charts',
    component: require('./views/houseChartt.vue')
  },
  {
    name: "building",
    path: "/building",
    component: require('./views/buildCharts.vue')
  },
  {
    name: 'index',
    path: '*',
    redirect: '/chat'
  }
]

export default routes
