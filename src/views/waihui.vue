<template>
    <div>
        
        <transition name="fade">
            <div>
                <div class="waihuiInfo" v-if="showWaihui">
                    <ul>
                        <li><span>外汇</span><span>现钞买入价</span><span>现钞卖出价</span></li>
                        <li v-for="item in waihui" >
                            <span>{{item.name}}</span>
                            <span>{{item.chao_in}}</span>
                            <span>{{item.chao_out}}</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </transition>

    </div>
</template>
<script>

import {mapActions, mapState} from "vuex";

require('assets/css/base.scss')

export default {
    data() {
        return {
            house: [],
            noInfo: false,
        }
    },
    methods: {
        houseSearch(e) {
            debugger
            if(isNaN(parseInt(e.currentTarget.value))) {
                alert("请输入数字");
                return false;
            }
            this.$data.show  = false;

            //先清空数据
            document.querySelector('.indicator').classList.remove("hide_it");
            this.$data.house = [];

            this.get_house_info([(res)=> {
                this.$data.noInfo = false;
                if(res.length >= 1) {
                    
                    res.forEach((item) => {
                        this.$data.house.push(item);
                    })
                    this.$data.show = true;
                } else {
                    this.$data.noInfo = true;
                }
                document.querySelector('.indicator').classList.add("hide_it");
            }, "?price=" + e.currentTarget.value]);
        },

        ...mapActions([
            "get_waihui_info",
        ])
    },
    computed: {
        ...mapState({
            waihui: state => state.house.get_waihui_info,
            showWaihui: state => state.house.showWaihui
        })

    },
    components: {
    },
    beforeCreated() {
    },
    created() {
            //获取外汇接口信息
            this.get_waihui_info()
    },
    beforeUpdated() {
        
    },
    updated() {
        debugger
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


</style>
