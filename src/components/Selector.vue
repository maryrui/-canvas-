<template>
    <div class="selector_box">
        <div class="container">
            <p>招募正在火热进行中...</p>
            <ul>
               <router-link tag="li" :to='{path:"/contract"}'></router-link>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getStore} from "./config/common"
    export default{
        data(){
            return {

            }
        },
        mounted(){
           if(! getStore("phone")){
              this.$router.push("/");
           }
        }
    }
</script>
<style lang="scss" scoped>
    .selector_box{
        width:100%;
        height:100%;
        background:#ff7717;
        .container{
            color:#fff;
            width:100%;
            height:100%;
            background:url("/static/img/btn_bg.png") no-repeat;
            background-size:100%;
            padding-top:80%;
            p{
                color:inherit;
                text-align:center;
                font-size:.3rem;
            }
            ul{
                overflow:hidden;
                padding:.5rem .3rem 0;
                li{
                    float:left;
                    width:45%;
                    height:1.2rem;
                    margin-bottom:.2rem;
                    border-radius:12px;
                }
                li:nth-child(2n){
                    margin-left:5%;
                }
                li:first-child{
                    background:url("/static/img/btn1.png") no-repeat;
                    background-size:100%;
                }
                li:first-child+li{
                    background:url("/static/img/btn2.png") no-repeat;
                    background-size:100%;
                }
                li:first-child+li+li{
                    background:url("/static/img/btn3.png") no-repeat;
                    background-size:100%;
                }
                li:first-child+li++li+li{
                    background:url("/static/img/btn4.png") no-repeat;
                    background-size:100%;
                }
            }
        }
    }
</style>