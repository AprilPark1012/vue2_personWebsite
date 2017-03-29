<template>
  <div id="app">
      <header class="app-header" v-show="appload">
        <div class="_effect" :class="{'_effect--50':decline}">
            <index-header style="overflow:visible;"></index-header>
        </div>
    </header>
     <section class="app-content" v-show="appload">
        <!-- index router -->
        <router-view keep-alive></router-view>
    </section>
    <footer class="app-footer _line-fine" style="display:none;" v-show="appload">
        <div class="_effect " :class="{'_effect--50':decline}">
            <index-nav :nav-items="navItems"></index-nav>
        </div>
    </footer> 
    <!-- <index-footer></index-footer>   -->
    

    <section class="welcome" v-show="welcome" transition="welcome">
        <div class="pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </section>


    <pop-mask></pop-mask>
    <loading></loading>
  </div>
</template>
<script>
import store from 'store'
import indexHeader from 'components/index-header.vue'
import indexNav from 'components/index-nav.vue'
import popMask from "components/mask.vue"
import indexFooter from "components/footer.vue"
import loading from "components/loading.vue"





require('assets/css/common.scss')
require('assets/css/base.scss')

export default {
   store,
   data() {
        return {
            navItems: [1, 2, 3],
            appload: true,//主结构
            welcome: false,//欢迎页
            isnotMobile:false,//是否为移动设备访问
            decline: false //router animation
        }
   },
   mounted() {
        
        debugger
        if (this.$route.matched.length === 1) {
            this.welcome = true;
        }
        this.appload = true;
        setTimeout(() => {
            //debugger
            this.welcome = false;
        }, 2000)
   },
   components: {
        indexHeader,
        indexNav,
        popMask,
        indexFooter,
        loading
  }
}
</script>
<style scoped>
.welcome {
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    transition: .25s all linear;
    /*background: url(./assets/images/launchimage.png) no-repeat center center;*/
    background-color: white;
}

.welcome-leave {
    opacity: 0;
}
.mobile-tips{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,.75);
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile-tips-inner{
    width: 330px;
    padding-bottom: 200px;
}
.mobile-model{
    flex-grow: 1;
}

-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

.pacman {
  left: 50%;
  top: 50%;
  margin-top: -2rem;
  margin-left: -1.5rem;
  position: absolute;
}
.pacman > div:nth-child(2) {
  -webkit-animation: pacman-balls 1s -0.99s infinite linear;
  animation: pacman-balls 1s -0.99s infinite linear;
}
.pacman > div:nth-child(3) {
  -webkit-animation: pacman-balls 1s -0.66s infinite linear;
  animation: pacman-balls 1s -0.66s infinite linear;
}
.pacman > div:nth-child(4) {
  -webkit-animation: pacman-balls 1s -0.33s infinite linear;
  animation: pacman-balls 1s -0.33s infinite linear;
}
.pacman > div:nth-child(5) {
  -webkit-animation: pacman-balls 1s 0s infinite linear;
  animation: pacman-balls 1s 0s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(2) {
  width: 0;
  height: 0;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -3rem;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: rgb(216, 65, 65);
  /*width: 15px;
  height: 15px;*/
  border-radius: 100%;
  margin: 1rem;
  width: 1rem;
  height: 1rem;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
  -ms-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: .4rem;
  left: 4.2rem;
}

#app {
  overflow: scroll !important;
}
</style>
