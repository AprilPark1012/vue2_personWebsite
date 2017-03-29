<template>
    <div>
        
        <div class="mint-searchbar searchText">
            <span>目标价位：</span>
            <input type="text" class="searchInput" @keyup.enter="houseSearch">
           <!--  <button  @click="houseSearch">确定</button> -->
        </div>
       <!-- <mt-search
         cancel-text="取消"
         placeholder="搜索"
         @keyup="baiduSearch(value)" class="searchText">
       </mt-search> -->
        <transition name="fade">
            <div>
                <div class="houseInfo" v-if="show_house">
                    <ul>
                        <li v-for="item in house_info" >
                            <a v-bind:href="item.href">
                                <span>{{item.title}}</span>
                                <span>{{item.price}}</span>
                                <span>{{item.mianji}}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="waihui">
                        {{waihui}}
                    </div>
                </div>
                <div class="noInfo" v-if="noInfo">
                    暂时没有该价位的房源信息！
                </div>
            </div> 
        </transition>
        
    </div>
</template>
<script>

import {mapActions, mapState} from "vuex";


export default {
    data() {
        return {
            noInfo: false,
            waihui: ""
        }
    },
    methods: {
        houseSearch(e) {
            debugger
            if(isNaN(parseInt(e.currentTarget.value))) {
                alert("请输入数字");
                return false;
            }
            // this.$data.show  = false;

            //先清空数据
            document.querySelector('.indicator').classList.remove("hide_it");
            this.$data.house = [];

            this.get_house_info("?price=" + e.currentTarget.value);

            /*fetch('https://jasongan.cn/api/house' + "?price=" + e.currentTarget.value).then((res) => {
                return res.json();
            }).then((res) => {
                this.$data.noInfo = false;
                if(res.length >= 1) {
                    this.$data.house = [];
                    res.forEach((item) => {
                        this.$data.house.push(item);
                    })
                    this.$data.show = true;
                } else {
                    this.$data.noInfo = true;
                }
                document.querySelector('.indicator').classList.add("hide_it");
            })*/
        },
        ...mapActions([
            "get_waihui_info",
            "get_house_info"
        ])
    },
    computed: {
        ...mapState({
            house_info : state => state.house.get_house_info,
            show_house: state => state.house.showHouse,
        }) 
    },
    components: {
    },
    beforeCreated() {
    },
    created() {
            /*fetch('https://jasongan.cn/api/house').then((res) => {
                return res.json();
            }).then((res) => {
                res.forEach((item) => {
                    this.$data.house.push(item);
                })
                document.querySelector('.indicator').classList.add("hide_it");
                this.$data.show = true;
            })*/

            //获取租房信息接口
            debugger
            this.get_house_info.apply(this, arguments);

            /*fetch('https://jasongan.cn:8080/api/waihui').then((res) => {
                return res.json();
            }).then((res) => {
                res.forEach((item) => {
                    this.$data.house.push(item);
                })
                document.querySelector('.indicator').classList.add("hide_it");
                this.$data.show = true;
            })*/

            //获取外汇接口信息
            /*this.get_waihui_info((res)=> {
                debugger
                this.$data.waihui = JSON.stringify(res.list[0]);
            })*/
    },
    beforeUpdated() {
        
    },
    updated() {
        debugger

        /*function Observer(data) {
            this.data = data;
            this.walk(data);
        }

        Observer.prototype.walk = function(obj) {
            var val, _this = this;
            Object.keys(obj).forEach((key) => {
                val = obj[key];
                if(typeof val === "object"){
                    new Observer(val)
                }
                _this.convert(key, val);
            })
        } 

        Observer.prototype.convert = function(key, val) {
            Object.defineProperty(this.data, key, {
                configurable: true,
                enumarable: true,
                get: function() {
                    debugger
                    return val;
                },
                set: function(newVal) {
                    debugger
                    console.log('set');
                    console.log("新的"+key+"="+newVal);

                    if(typeof newVal === 'object') {
                        new Observer(newVal);
                    }

                    val = newVal;

                }

            })
        }


        let data = {
            user: {
                name: "hello world",
                age: "24"
            },
            address: {
                city: "beijing"
            }
        };
        debugger
        var app = new Observer(data);
        console.log(app.data.user);

        app.data.user = {name: "123", age:"23"};

        console.log(app.data.user);*/
    },
    beforeMounted() {
        debugger
    },
    mounted() {
        debugger
         document.querySelector('.indicator').classList.remove("hide_it");
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.houseInfo li {
    margin: 10px;
    text-align: center;
    font-size: 14px;
}
.houseInfo li span {
    margin-right: 20px;
}
.searchText {
    height: 50px;
    background: #eee;
}

.searchText button{
    width: 40px;
}

.searchText span {
    display: inline-block;
    width: 75px;
    font-size: 14px;
}

.searchInput {
    flex: 1;
    height: 24px;
    line-height: 24px;
    margin-right: 18px;
    border: 0;
}
.noInfo {
    text-align: center;
    margin-top: 50px;
}

</style>
