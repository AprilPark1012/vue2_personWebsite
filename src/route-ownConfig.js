export default function(router) {
  router.map({
      '/chat': {
          component: require('./views/chat.vue')
      },
      '/me': {
          component: require('./views/me.vue')
      },
      '/house': {
          component: require('./views/house.vue')
      },
  });

  router.redirect({
      '/': '/chat'
  })
}