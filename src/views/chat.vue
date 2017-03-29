<template>
    <div class="_full_inner _scroll _effect component-chat" :class="{'_effect--30':decline}">
        <div class="weather" @click="hrefWeatherInfo()">{{this.weatherinfo}}</div>

    <div class="swipeImg">
        <mt-swipe :show-indicators="false">
           <mt-swipe-item v-for="img in nba_imgList">
                <img v-lazy="img" class="out">
           </mt-swipe-item>
       </mt-swipe> 
    </div>
       

        <div class="home">
            <h3 data-v-a51f793e="" class="services">前端工程师 - Nodejs工程师</h3>
            <div data-v-a51f793e="" id="headlines">
                <h1 data-v-a51f793e="" class="text-center textItem">Hello <span data-v-a51f793e="" class="blue">Vue2.0</span></h1> 
                <h1 data-v-a51f793e="" class="text-center textItem">我是<span data-v-a51f793e="" class="blue">JasonGan</span></h1>  
                <h1 data-v-a51f793e="" class="text-center textItem">时间<span data-v-a51f793e="" class="blue">很可爱</span> 同样<span data-v-a51f793e="" class="blue">也很可怕</span></h1> 
                <h1 data-v-a51f793e="" class="text-center textItem"><span data-v-a51f793e="" class="blue">不积跬步 </span>无以至千里</h1> 
                <h1 data-v-a51f793e="" class="text-center textItem">开始<span data-v-a51f793e="" class="blue">行动</span>起来</h1> 
            </div>
        </div>

        <div class="dianzan">
            <span class="zan" @click="dianzan">赞</span>
            <span class=""_v-4c9a58bf="">{{this.dianzanNumber}}</span>
        </div>

        <!-- <input type="text" :value='userInput' @keyup.enter="inputListen"> -->


    </div>


    <!-- router -->
    <!-- <router-view transition="cover" keep-alive></router-view> -->
</template>
<script>

import {mapActions, mapState} from "vuex";


export default {
    data() {
        return {
            decline: false,
            currentIndex: -1, //列表item处在左划状态
            isTouchSwipe: false, //验证是否处于左划状态,
            value: "",
            searchShow: false,
        }
    },
    methods: {
        baiduSearch(value) {
            var search = $('.searchText input').val();
            var _url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+search+'&json=1&p=3&sid=20144_1467_19033_20515_18240_17949_20388_20456_18133_17001_15202_11615&req=2&csor=2&pwd=s&cb=jQuery110207612423721154653_1467355506619&_=1467355506623';
            this.$http({
                method: "GET",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                dataType:'jsonp',
                async:true,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback:'jQuery110207612423721154653_1467355506619',
                url:_url,
            }).then((response) => {
                debugger
            }).catch(function(response){
                debugger
            });
        },
        inputListen(e) {
            this.set_userInput(e.target.value);
        },
        //首页点赞功能
        dianzan() {
            
            document.querySelector('.indicator').classList.remove("hide_it");
            /*fetch("https://jasongan.cn/api/dianzan?plus=1").then((res) => {
                return res.json();
            }).then((response) => {
                this.$data.dianzanNumber = response.number;
                document.querySelector('.indicator').classList.add("hide_it");
            })*/
            this.get_dianzan_info("?plus=1");
        },
        ...mapActions([
            'get_weather_info',
            "get_nba_info",
            "get_dianzan_info",
            "set_userInput"
        ]),
    },
    components: {
    },
    computed: {
        ...mapState({
            weatherinfo: state => state.me.get_weather_info,
            nba_imgList: state => state.me.get_nba_info,
            dianzanNumber: state => state.house.get_dianzan_info,
            userInput: state => state.me.userInput
        }),
    },
    created() {
        
        var _interval = 0;

        setInterval(function() {
            var textItem = document.getElementsByClassName('textItem');
            var displayItem = document.querySelector('.current');
            if(displayItem) displayItem.classList.remove('current');
            if(textItem.length > 0) textItem[_interval % textItem.length].classList.add('current');
            _interval++;
        }, 3000);


        //获取天气信息
        this.get_weather_info()

        /*fetch("https://jasongan.cn/api/weather").then((res) => {
            return res.json();
        }).then((response) => {
            var result = response.weatherinfo;
            debugger
            this.$data.weatherinfo = "今天" + result.city + "的最高气温是" + result.temp1 + "，最低气温是" + result.temp2 + "，" + result.weather + '。';
        })*/


        /*fetch("https://jasongan.cn/api/dianzan").then((res) => {
            return res.json();
        }).then((response) => {
            this.$data.dianzanNumber = response.number;
        })*/
        //获取点赞信息
        this.get_dianzan_info();
        //获取NBA漫画信息
        this.get_nba_info();
        /*fetch("https://jasongan.cn/api/nba").then((res) => {
            return res.json();
        }).then((response) => {
            debugger
            this.$data.img_lists = response;
        })*/
    }
}
</script>
<style scoped>
.dataInfo {
    background: #eee;
    line-height: 2rem;
    height: 2rem;
    padding-left: 0.5rem;
    color: #999;
}
.swipe {
    height: 14rem !important;
    margin: 30px;
}
.swipe img{
   width: 100%;
}
/* .mint-search {
    height: 2.75rem !important;
}
.searchContent {
    display: none;
} */
.weather {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    color: #999;
    /*position: fixed;
    bottom: 3rem;*/
    width: 100%;
    font-size: 12px;
    background: #eee;
}
.dianzan {
    text-align: center;
}
.zan {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    color: #fff;
    background: #f44336;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
    display: block;
    width: 56px;
    height: 56px;
    text-align: center;
    margin: 0 auto;
}

.home {
  height: 120px;
  width: 100%;
}
.services {
    border-bottom: 3px solid #333;
    text-transform: uppercase;
    margin: 0 auto;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 35px;
    font-weight: 700;
    max-width: 300px;
    min-width: 260px;
}
#headlines .textItem {
    color: #333
}

#headlines .current {
    display: block;
    opacity: 1 !important
}

#headlines .textItem {
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all ease 800ms;
    text-transform: uppercase;
    margin: 10px 0 !important;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 10px;
    font-family: pinghe;
    font-weight: 700;
    color: #333;
}
.blue {
    color: #38b7ea;
}
.swipeImg {
    height: 240px;
    padding: 20px;
}
.swipeImg img {
    width: 100%;
}
</style>
