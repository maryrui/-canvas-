<template>
    <div class="login_box">
       <div class="login_form">
           <label><i class="iconfont first-child">&#xe603;</i><input type="text" placeholder="请输入手机号码" v-model="phoneNum" :class="{ok_b:isPhoneNum}"></label>
           <label><i class="iconfont">&#xe75d;</i><input type="text"  v-model="codeNumInput" placeholder="请输入验证码"><button @click.prevent="times" v-show="!computerTime">{{btnText}}</button><button class="gray" @click.prevent v-show="computerTime">已发送{{computerTime}}</button></label>
            <span class="login_btn" @click="login">确定加入</span>
       </div>
    </div>
</template>
<script>
    import {setStore} from "./config/common"
    export default{
        data(){
          return {
            btnText: "获取验证码",
            computerTime: 0,
            phoneNum: "",
            codeNum: "",
            codeNumInput:""
          }
        },
        computed:{
            isPhoneNum:function(){
                return /^1\d{10}$/gi.test(this.phoneNum);
            }
        },
        methods:{
            /*随机code*/
            codes(){
                let code1=parseInt(Math.random()*10);
                let code2=parseInt(Math.random()*10);
                let code3=parseInt(Math.random()*10);
                let code4=parseInt(Math.random()*10);
                this.codeNum=""+code1+code2+code3+code4;
            },
            times(){
                 if(this.isPhoneNum){
                   this.computerTime=30;
                   this.codes();
                   this.timer=setInterval(()=>{
                     this.computerTime--;
                     if(this.computerTime==0){
                       clearInterval(this.timer);
                       this.timer=null;
                     }
                   },1000)

                   /*发送请求*/

                   this.$http.get("http://sms.leadyssg.com/api/SmsApi/SmsContract?recNum="+this.phoneNum+"&code="+this.codeNum).then(function(res){
                        console.log(res);
                   })

                 }else{
                    alert("手机号码格式错误！");
                 }
            },
            login(){
                if(! this.phoneNum){
                    alert("手机号码不能为空！");
                    return;
                }
                if(! this.codeNumInput){
                    alert("验证码不能为空！");
                    return;
                }
                if(this.codeNum==this.codeNumInput){
                    this.$http.get("http://contract.leadyssg.com/api/HomeApi/GetLogin?Phone="+this.phoneNum).then(res=>{
                      setStore("phone",this.phoneNum);
                      this.$router.push("/select");
                    });
                }else{
                  alert("验证码错误！");
                  return;
                }
            },
            addCookies(id,name,time){
              //获取当前时间
              var date=new Date();
              var expiresDays=time;
                //将date设置为10天以后的时间
              date.setTime(date.getTime()+expiresDays*24*3600*1000);
                //将userId和userName两个cookie设置为10天后过期
              document.cookie="userId="+id+"; expires="+date.toGMTString();
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "./font/iconfont.css";
    .login_box{
        background:url("/static/img/login_bg.png") no-repeat;
        background-size:100%;
        width:100%;
        height:100%;
        padding:0 .2rem;
        font-size:.44rem;
        position:relative;
        .login_form{
            position:absolute;
            background:#FFF9F2;
            left:50%;
            top:55%;
            width:90%;
            padding:0 .26rem;
            transform:translateX(-50%);

            /*----*/
            label{
                display:block;
                border:1px solid #ddd;
                line-height:.68rem;
                input{
                    background:transparent;
                    height:.48rem;
                    padding:.1rem .15rem;
                    font-size:.26rem;
                    border-left:1px solid #ddd;
                    width:50%;
                    border-radius:0;
                    vertical-align: middle;
                }
                i.first-child{
                    position:relative;
                    top:5px;
                }
                button{
                    float:right;
                    padding:.1rem .15rem;
                    background:#FE6120;
                    margin-top:.1rem;
                    margin-right:.1rem;
                    color:#fff;
                    vertical-align: middle;
                }
                .gray{
                    background:#ccc;
                }
            }
            span{
                display:block;
                width:60%;
                margin:.8rem auto;
                background:#FE6120;
                text-align:center;
                color:#fff;
                height:1rem;
                line-height:1rem;
                border-radius:5px;
                border-bottom:2px solid #B21510;
                font-size:.3rem;
            }
        }
    }
</style>