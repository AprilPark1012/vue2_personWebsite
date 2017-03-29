<template>
    <div class="_full_inner _effect component-me" :class="{'_effect--30':decline}">
        <div class="weui_cells weui_cells_access me-line">
            <div class="title"   @click='hrefShopping()'>个人博客</div>
           <!--  <div class="personalInfo">个人信息</div> -->
            <a class="weui_cell " href="javascript:;">
                <div class="weui_cell_hd">
                    <img src="../assets/images/webwxgeticon.jpg">
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <p>阿追</p>
                    <p><span>微信号:&nbsp;&nbsp;</span><span>Jason19900915</span></p>
                </div>
                <div class="weui_cell_ft">
                    <img class="_align-middle" style="height:25px;" src="../assets/images/chat-info-qr.png" @click="popQrcode">
                </div>
            </a>
            <div class="github">
                <p>Gitub: &nbsp;&nbsp; <a href="https://github.com/ganchengyuan1990">github.com/ganchengyuan1990</a></p>
                <!-- <p>微信公众号管理: &nbsp;&nbsp; http://weixin.jasongan.cn</p> -->
            </div>

            <div class='company'>
                <h1>公司项目</h1>
                <ul class="programs">
                    <!-- <li v-for="img in img_lists">
                         <img v-lazy="img" class="out">
                    </li> -->
                    <li>
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>登录页面</p>
                            <p><a href="http://m.feiniu.com/login/index.html">m.feiniu.com/login/index.html</a></p>
                        </div>
                    </li>
                    <li> 
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>订单列表页面</p>
                            <p><a href="http://m.feiniu.com/my/order/index.html">m.feiniu.com/my/order/index.html</a></p>
                        </div>
                    </li>
                    <li>
                        <div class="weui_cell_hd">
                            <img src="../assets/images/webwxgeticon.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>领券中心页面(APP内嵌)</p>
                            <p><a href="http://m.feiniu.com/my/recharge/vouchermark.html">recharge/vouchermark.html</a></p>
                        </div>
                    </li>
                </ul>

            </div>

            <mt-swipe :show-indicators="false">
               <mt-swipe-item class="lucky"> {{lucky}} </mt-swipe-item>
               <mt-swipe-item class="bad"> {{bad}} </mt-swipe-item>
           </mt-swipe> 

            
        </div>
        

    </div>
    <!-- <router-view transition="cover"></router-view> -->
</template>
<script>

import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'


// import MonthlyIncome from 'path/to/component/MonthlyIncome'

export default {
    route: {
        activate({
            from,
            to,
            next
        }) {
            this.set_menu_active(1)
            next()
        },
    },
    data() {
            return {
                decline: false,
                popupVisible: false,
                qrcodeVisible: false,
                dianzanNumber: 0,
                img_lists: [
                    {
                      src: "http://images.cnblogs.com/cnblogs_com/zhongweiv/569678/o_1.png",
                      error: "../assets/images/error.png",
                      loading: "../assets/images/loading.gif"
                    }
                ],
                lucky: "",
                bad: "",
            }
        },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    methods: {
        hrefShopping(){
            debugger
            this.set_iframe_url({title:"个人博客",url:"//ganchengyuan1990.github.io/blog/"},()=>{
                this.$router.go({
                    path: "/me/shopping"
                })    
            });
        },
        hrefWeatherInfo() {
            this.set_iframe_url({title:"个人博客",url:"//jasongan.cn/chart"},()=>{
                this.$router.go({
                    path: "/chart"
                })    
            });
        },
        popMention() {
            this.$data.popupVisible = !this.$data.popupVisible;
        },
        popQrcode(e) {
            /*e.stopPropagation(); 
            this.$data.qrcodeVisible = !this.$data.qrcodeVisible;*/
        },
        ...mapActions([
            "get_weather_info"
        ])
        
    },
    created() {
        // this.get_weather_info(true);
        /*fetch('http://jasongan.cn:8080/api/lucky').then((res) => {
            return res.json();
        }).then((res) => {
            debugger
            this.$data.lucky = res.yi;
            this.$data.bad = res.ji;
        })*/
    }
}
</script>
<style scoped>
.component-me {
    padding-top: 1px;
    background-color: #efeff4;
}
.qrcode {
    display: flex;
    align-items: center;
}
.qrcode img {
    width: 80%;
    height: 80%;
    flex: 1;
    margin: 1rem;
}
.weui_cells {
    margin-top: 0 !important;
}
.programs {
    /*border: 1px solid #333;*/
}
.programs li{
    padding: 5px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
 .github p {
    padding: 5px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 0.9rem;
 }
.company h1{
    text-align: center;
    margin: 0rem 1rem 0.5rem 1rem;
    border-bottom: 1px solid #444;
    padding: 0.5rem;
}
.title {
    border-bottom: 1px solid #444;
    margin: 0 1rem;
    color: #000;
    font-weight: 600;
}
.title:after {
    border-color: #333; 
}
section.app-content {
    overflow: scroll !important;
}

img.out {
    width: 100%;
    height: 300px;
}
.mint-swipe {
    margin-top: 10px;
    padding: 18px;
    height: 80px;
    text-align: center;
}


</style>
