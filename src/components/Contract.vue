<template>
    <div>
        <div class="contract_box">
            <h1>一生时光食客招募合同</h1>
            <p class="form_write"><label>甲方(服务方)：</label><span class="write_text">深圳市利德行商业运营科技开发有限公司</span></p>
            <p class="form_write"><label>联系地址：</label><span class="write_text">深圳市福田区上梅林文体中心三层</span></p>
            <p class="form_write"><label>联系电话：</label><span class="write_text">0755-83112590 </span></p>
            <div class="second_box">
                <p class="form_write">
                    <label>乙方(合作方)：</label><input type="text" v-model="companyName" placeholder="请输入姓名/公司名称">
                </p>
                <p class="form_write">
                    <label>联系地址：</label><input type="text" v-model="companyAddress" placeholder="请输入联系地址">
                </p>
                <p class="form_write">
                    <label>联系电话：</label><input type="text" v-model="phone" placeholder="请输入联系电话">
                </p>

            </div>
            <div>
                <p>根据《中华人民共和国公司法》、《中华人民共和国合同法》等有关法律、法规的规定，甲乙双方在“平等自愿、诚实守信、互惠互利、长期合作”的原则基础上，经友好协商，甲乙双方签署本招募合同。</p>
                <h2>一、合作内容</h2>
                <p class="text_indent">甲方招募乙方为“一生时光”平台的   食客会员    ,为乙方提供一个以轨道交通为主的美食权威平台。乙方作为入驻 合作方  ，应积极配合平台各项活动，为平台起到一定的宣传推广和促进消费的作用。</p>
                <p>入驻（招募）条件及证明：食客——美食权威专家及餐饮知名人士。</p>
                <h2>二、合作内容</h2>
                <h2>甲方权利与义务</h2>
                <ul class="box">
                    <li><i>1.</i> 甲方为乙方提供“一生时光”平台，供乙方在平台上进行自身推广及个人品牌塑造。</li>
                    <li><i>2.</i>甲方保证乙方在入驻平台后的知名度提升和平台相应收益的分配。</li>
                    <li><i>3.</i>甲方以季度或年度的形式，给予乙方季度或年度分红。</li>
                    <li><i>4.</i>乙方如在平台有违规操作，不法言论。甲方有权解除乙方合作关系，一切活动与甲方平台无关，如给甲方造成经济损失的甲方有权追究乙方责任并赔偿相应的损失。</li>
                </ul>
                <h2>乙方权利与义务</h2>
                <ul class="box">
                    <li><i>1.</i> 乙方入驻“一生时光”成为平台  食客  代表人物，为平台产生影响力推广。</li>
                    <li><i>2.</i>每个<span class="border_b">食客</span>  有权限自主招募  <span class="border_b">食王</span>   即食客招募食王，食王招募食家，食家招募食客，以此类推，形成阶梯式发展。招募下级代理和推荐会员产生消费均可得到平台返利佣金。</li>
                    <li><i>3.</i>乙方月均不少于在平台进行美食推荐<span class="border_b">5</span>次和美食文章发布<span class="border_b">5</span>篇。</li>
                    <li><i>4.</i>乙方应遵守甲方平台的规章制度，积极配合。</li>
                </ul>
                <h2>三、费用及分红</h2>
                <p class="text_indent">
                    乙方作为甲方招募的  <span class="border_b">食客会员</span>  ，可在平台上获取推荐注册用户消费金额的<span class="border_b">1</span>%作为报酬分红（具体以季度或年度来结算）。
                </p>
            </div>
            <div>
                <h2>四、合同期限</h2>
                <p class="date_box text_indent">本合同有效期为壹年，即自 <span class="border_b">{{year}}</span>年<span class="border_b">{{month}}</span>月<span class="border_b">{{day}}</span> 日起至<span class="border_b">{{year+1}}</span>年<span class="border_b">{{month}}</span>月 <span class="border_b">{{day}}</span>日止。有效期满后，双方可视合作情况续约，届时双方另行签订入驻合同。</p>
            </div>
            <div>
                <h2>五、不可抗力</h2>
                <p class="text_indent">因不可抗力或者其他意外事件，使得本协议不能履行的，甲乙双方均不承担违约责任：本合同所称之“不可抗力”包括但不限于战争、台风、水灾、地震、罢工、暴动、法定流行疾病、黑客攻击、网络病毒、电信部门技术管制、互联网联通中断、系统故障、政府行为或其他自然或人为灾难等客观情况。</p>
            </div>
            <div>
                <h2>
                    六、合同变更、终止及违约责任
                </h2>
                <ul class="box">
                   <li> <i>1.</i>甲乙双方应本着诚实信用的原则履行本合同。任何一方在履约过程中采用欺诈、胁迫或者不正当竞争的手段，另一方均可以解除本合同并要求对方赔偿由此造成的损失。</li>
                   <li><i>2.</i>在本合同履行期间，如果双方或一方认为需要终止，应提前一个月通知对方，双方在财务结算完毕、各自责任明确履行之后，方可终止合同。</li>
                    <li><i>3.</i>经双方协商达成一致，可对本合同有关条款进行变更，但应当以书面形式确认。</li>
                    <li><i>4.</i>本协议生效后，除甲乙双方或不可抗拒的原因外，任何一方不得单方解除本合同。</li>
                    <li><i>5.</i>任何一方不履行本合同规定的义务，均须依法承担相应的违约责任。</li>
                    <li><i>6.</i>本协议一式贰份，双方各执壹份。未尽事宜，经双方磋商后，可另立补充协议，具有同等法律效力。</li>
                    <li><i>7.</i>因本合同所引起的任何纠纷或争议，首先应协商解决，协商不成的，双方同意通过法律途径诉讼解决，应向甲方所在地人民法院提起诉讼。</li>
                    <li><i>8.</i>本合同最终解释权归甲方所有。</li>
                </ul>
            </div>
            <div class="assign_box">
                <div class="first_company">
                    <p><label>甲方(公章)：</label>一生时光 </p>
                    <p>（深圳市利德行商业运营科技开发有限公司）</p>
                    <p><label>甲方签字:</label></p>
                    <p><label>地址：</label>深圳市福田区上梅林文体中心三层</p>
                    <p><label>电话：</label>0755-83112590 </p>
                    <p><label>时间：</label>0755-83112590 </p>
                    <div class="stamp">

                    </div>
                </div>
                <div class="second_company">
                    <p @click="assign=true;"><label>乙方签字:</label><span class="assign_img" id="assign_img"><img :src="imgSrc" alt="" v-show="imgSrc"></span>(点击手写签字)</p>
                    <p><label>地址：</label>{{companyAddress}}</p>
                    <p><label>电话：</label>{{phone}}</p>
                    <p><label>时间：</label></p>
                </div>
            </div>
        </div>
        <p class="submit" @click="submit">提交合同</p>
        <div class="mask_box" v-show="assign">
            <div class="assgin_alert_box">
                <h2>请签名 <i class="iconfont" @click="assign=false;">&#xe667;</i></h2>
                <canvas id="canvas" @touchmove="onMouseMove($event)" @touchstart="onMouseDown($event)" @touchend></canvas>
                <p class="assign_btn_box">
                    <span @click="clear">清除</span>
                    <span @click="preview">确定</span>
                </p>
            </div>
        </div>
        <Loading v-show="loading"></Loading>
    </div>
</template>

<script>
    import Loading from "./Loading.vue"
    import {getStore} from "./config/common"
    export default{
        data(){
            return {
                assign:false,
                canvas:null,
                lineX:[],
                lineY:[],
                lineN:[],
                flag:0,
                content:null,
                lastX:0,
                lastY:0,
                imgSrc:"",
                companyAddress:"",
                phone:"",
                companyName:"",
                year:"",
                month:"",
                day:"",
                loading:false
            }
        },
        mounted(){
          this.canvas=document.getElementById("canvas");
           this.content=this.canvas.getContext("2d");
           this.date();
           console.log(getStore("phone"));
            if(!getStore("phone")){
              this.$router.push("/");
              console.log(111);
            }
        },
        components:{
            Loading
        },
        methods:{
            date(){
                var timestamp = new Date();
                this.year = timestamp.getFullYear();
                this.month = timestamp.getMonth()+1;
                this.day = timestamp.getDate();
            },
            getPos(evt){

                var rect = this.canvas.getBoundingClientRect();
                var x,y;
                if(evt.targetTouches) {
                    x=evt.targetTouches[0].clientX;
                    y=evt.targetTouches[0].clientY;
                    return {
                      x:(x - rect.left) * (this.canvas.width / rect.width),
                      y:(y - rect.top) * (this.canvas.height / rect.height)
                    }
                }

            },
            onMouseMove(evt){
                var x = this.getPos(evt).x;
                var y = this.getPos(evt).y;
                if(this.flag == 1){

                    this.lineX.push(x);
                    this.lineY.push(y);
                    this.lineN.push(1);
                      this.content.save();
                      this.content.translate(this.content.canvas.width / 2, this.content.canvas.height / 2);
                      this.content.translate(-this.content.canvas.width / 2 , -this.content.canvas.height / 2);
                      this.content.beginPath();
                      this.content.lineWidth = 2;
                    for(var i=0;i<this.lineX.length;i++){
                        this.lastX=this.lineX[i];
                        this.lastY=this.lineY[i];
                        if(this.lineN[i]==0){
                            this.content.moveTo(this.lastX,this.lastY);
                        }else{
                          this.content.lineTo(this.lastX,this.lastY);
                        }
                    }
                    this.content.ShadowBar=2;
                    this.content.stroke();
                    this.content.restore();
                }
                evt.preventDefault();
            },
            onMouseUp(){
                this.flag=0;
            },
            onMouseDown(evt){
                this.flag=1;
                var x=this.getPos(evt).x;
                var y=this.getPos(evt).y;
                this.lineX.push(x);
                this.lineY.push(y);
                this.lineN.push(0);
                document.body.style.overflow="hidden";
            },
            clear(){
                this.lineX =[];
                this.lineY = [];
                this.lineN =[];
                this.content.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },
            preview(){
                this.imgSrc=this.canvas.toDataURL("i/png");
                this.assign=false;
                document.body.style.overflow="auto";
                this.clear();
            },
            submit(){
//              http://api.leadyssg.com/Help
//              var img = JSON.stringify(this.imgSrc);
      /*        var s=this.imgSrc.split(",")[1];
              console.log(s);
                this.$http.post(" http://api.leadyssg.com/api/UploadImgApi/UploadImage",{
                  "Base64": s,
                  "SuffixType": "jpg"
                }).then(function(res){
                    console.log(res);
                })*/

                if(! this.companyAddress) {
                    alert("请滑动最顶部填写地址！");
                    return;
                }
                if(! this.companyName){
                    alert("请滑动最底部填写名称！");
                    return;
                }
                if(! this.phone){
                    alert("请滑动最顶部填写电话！");
                    return;
                }
                if(! this.imgSrc){
                    alert("请点击签名手写签名");
                    return;
                }

                var s=this.imgSrc.split(",")[1];
                var data={
                  "Phone": this.phone,
                  "Name": this.companyName,
                  "Address":this.companyAddress,
                  "Base64":s,
                  "SuffixType": "png"
                }
                this.loading=true;
                var me=this;
                this.$http.post("http://contract.leadyssg.com/api/HomeApi/SignContract",data).then(function(res){
                    me.loading=false;
                    alert(res.data.Msg);
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .contract_box{
        background:#fff;
        color:#333;
        font-size:.2rem;
        padding:0 .15rem .3rem;
        .form_write{
            line-height:.55rem;
            label{
                font-weight:700;
            }
           input,span{
                border-radius:0;
                border-bottom:1px solid #000;
            }
           input{
               padding-left:.1rem;
               color:#333;
               width:60%;
           }

        }
        .second_box{
            margin:.3rem 0;
        }
        h1{
            font-weight:700;
            font-size:.34rem;
            text-align:center;
            line-height:.65rem;
        }
        .box{
            list-style:circle;
            padding-left:.26rem;
            li{
                padding-left:.52rem;
                position:relative;
                line-height:.55rem;
                i{
                    font-style:none;
                    position:absolute;
                    left:0;
                }
            }
        }
        p{
            line-height:.45rem;
        }
        .text_indent{
            text-indent:.52rem;
        }
        .border_b{
            display: inline-block;
            padding:0 .26rem;
            border-bottom:1px solid #000;
            font-weight:600;
            text-indent:0;
        }
        h2{
            font-size:.26rem;
            font-weight:700;
            line-height:.6rem;
        }
        .assign_box{
            /*display:flex;*/
            margin-top:.2rem;
            label{
                font-weight:700;
            }
            &>div{
                width:80%;
                margin:.2rem auto;

             }
        }
        .first_company{
            position:relative;
            .stamp{
                width:2.5rem;
                height:2.5rem;
                background:url("/static/img/stamp.png") no-repeat;
                background-size:100%;
                position:absolute;
                top:0;
                right:0;
            }
        }
        .second_company{
            .assign_img{
                display:inline-block;
                width:1rem;
                height:.4rem;
                background:#ccc;
                border:1px solid #fff;
                vertical-align: middle;
                margin:0 .1rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
    .mask_box{
        width:100%;
        height:100%;
        position:fixed;
        background:rgba(0,0,0,.6);
        left:0;
        top:0;
        .assgin_alert_box{
            width:90%;
            height:60%;
            position:absolute;
            left:50%;
            top:50%;
            transform: translate(-50%, -50%);
            background:#ff8a04;
            text-align:center;
            padding:.1rem;
            h2{
                color:#fff;
                position:relative;
                i{
                    top:-60%;
                    right:-.31rem;
                    font-size:.5rem;
                    color:#fff;
                    position:absolute;
                }
            }
            canvas{
                width:100%;
                background:#fff;
                height:4rem;
            }
            .assign_btn_box{
                width:80%;
                margin:.1rem auto;
                display:flex;
                justify-content:space-between;
                span{
                    width:40%;
                    color:#fff;
                    padding:.1rem .15rem;
                    border-bottom:2px solid #2a3856;
                    background:#637fbe;
                    border-radius:3px;
                    &:last-child{
                        background:#fe6120;
                        border-bottom-color:#5b220b;
                     }
                }

            }
        }
    }
    .submit{
        position:fixed;
        text-align:center;
        bottom:0;
        left:0;
        width:100%;
        height:1rem;
        background:#ff8a04;
        line-height:1rem;
        color:#fff;
    }
</style>