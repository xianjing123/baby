//点击复制代办
//粉丝进度条
import React,{Component} from 'react'
import style from './index.module.scss'
import axios from 'axios'
import 'antd-mobile/dist/antd-mobile.css'
import { Toast,PullToRefresh} from 'antd-mobile';
class Head extends Component{
    render(){
        return <div className={style.head}>
            {
                this.state.ismaskshow?<div className={style.mask}>
                    <img src="http://t1.hucdn.com/upload/member/1905/28/12974903878826_750x1334.png" alt="" className={style.kuang}/>
                    <img src={this.state.maskimg} alt="" className={style.good1}/> 
                    <div className={style.masktext}>
                        <p className={style.p}>{this.state.des}</p>
                        <h2 className={style.h2}>￥{parseFloat(this.state.price/100)}</h2>
                    </div>
                    <img className={style.close} src="images/close.jpg" alt="×" onClick={()=>{
                        this.setState({
                            ismaskshow:false
                        })
                    }}/>
                </div>:null
            }
            <div className={style.topBlock}>
                <div className={style.avatar}>
                    <img src={this.state.avatar} alt=""/>
                </div>
                <div className={style.info}>
                    <h2>{this.state.tel}</h2>
                    <input ref="input" type="text" value={this.state.yaoqingma} style={{position:'absolute',opacity:'0',pointerEvents:'none'}}/>
                    <p>我的邀请码：{this.state.yaoqingma}  <span onClick={this.f1.bind(this)}>复制</span></p>
                </div>
            </div>
            <div className={style.midBlock}>
                <p className={style.myfan}>我的粉丝 <span>{this.state.fansNumber}</span></p>
                <div className={style.myprocess}>
                    <p>{this.state.fansNumber}人</p>
                    <h2>还差{this.state.needFansNumber-this.state.fansNumber}人</h2>
                    <div className={style.process}></div>
                    <p className={style.last}>{this.state.needFansNumber}人</p> 
                </div>
                <div className={style.pic}>
                    <img className={style.banner} src="https://h0.hucdn.com/open201910/ff34435295dbd8a6_654x130.png" alt=""/>
                    <p>邀请<del>20</del>名好友即可成为团长</p>
                    <h2>一次绑粉长期收益，返现高达40%</h2>
                    <div>
                        <img src="https://h0.hucdn.com/open201910/fa39ddfdb32e9797_133x49.png" alt="" className={style.tip}/>    
                        <h3>限时10名</h3>
                    </div>                     
                </div>
                <div className={style.levelUp}>
                   <img src="http://h0.hucdn.com/open/201905/f4f8bbf71d816ae1_1029x252.png" alt=""/>
                </div>
            </div>
            <div className={style.bottomBlock}>
                <div className={style.title}>邀新专区</div>
                <PullToRefresh
                    direction="up"
                    style={{marginBottom:'.6rem'}}
                    onRefresh={()=>{
                        this.setState({
                            page:this.state.page+1
                        })
                        axios({
                            url:`/mroute.html?method=beibei.vip.captain.home.get&_airborne_channel=beibei&page=${this.state.page}`
                        }).then(res=>{
                            var a = res.data.invite_items_area.invite_items
                            var b = this.state.data
                            b.invite_items_area.invite_items = [...b.invite_items_area.invite_items,...a]                               
                            this.setState({
                                data:b
                            })
                            console.log(this.state.data)
                        })
                    }}
                >
                    {
                        this.state.data.invite_items_area===undefined?null:this.state.data.invite_items_area.invite_items.map(item=>
                            <li key={item.iid} className={style.li}>
                                <div className={style.itemPic}><img src={item.img} alt=""/></div>
                                <div className={style.text}>
                                        <img src="http://h0.hucdn.com/open/201905/101cb7ee1242d036_162x45.png" className="icon" alt=""/>
                                        <h3>{item.title}</h3>
                                        <p>{item.award_tip}</p>
                                        <h2>￥{parseFloat(item.price/100)}</h2>
                                        <div className="btn" onClick={()=>{
                                            this.setState({
                                                ismaskshow:true,
                                                maskimg:item.img,
                                                price:item.price,
                                                des:item.title
                                            })
                                        }}>立即邀请</div>
                                </div>                                
                            </li>
                        )
                    }                    
                </PullToRefresh>
            </div>
        </div>
    }
    state={
        tel:18842606502,
        yaoqingma:'LYJPO2',
        avatar:'http://h0.hucdn.com/open/201824/a06ebf06867afc17_225x225.png',
        fansNumber:0,
        needFansNumber:20,
        data:{},
        page:1,
        ismaskshow:false,
        maskimg:'',
        des:'',
        price:''
    }
    componentDidMount(){
        axios({
            url:'/mroute.html?method=beibei.vip.captain.home.get&_airborne_channel=beibei&page=1'
        }).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    f1(){
        console.log(this)
        this.refs.input.select()
        document.execCommand("copy")
        Toast.info('复制成功', 2);
    }
}

export default Head