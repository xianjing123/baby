import React,{Component} from 'React'
import axios from 'axios'
import style from './swipe.module.scss'
import { Carousel } from 'antd'
// import { Carousel, WingBlank } from 'antd-mobile'
import {hideTabbar,showTabbar} from '../Package/action.js'
import {connect} from 'react-redux'

class MyTwo extends Component{ 
    state = ({
        datalist:[],
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        // data: ['1', '2', '3'],
        // imgHeight: 176

    })
    render(){
        return <div>
             {/* <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank> */}
            <Carousel className={style.swiper}>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1807/18/24901768497097_800x800.jpg!640.webp" alt=""/>
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70084243487097_800x800.jpg!640.webp" alt=""/>            
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70086282767097_800x800.jpg!640.webp" alt=""/>
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70086282767097_800x800.jpg!640.webp" alt=""/>
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70088018917097_800x800.jpg!640.webp" alt=""/>
                </div>                
            </Carousel>  
            <div className={style.flashSale}>
                <p>限时特卖</p>
                <div>
                    <h4>
                        <span>距结束仅剩:</span>
                        <span> {this.state.day}天 {this.state.hour}:{this.state.minute}:{this.state.second}</span>
                    </h4>
                </div>
            </div>
            <div className={style.money}>
                <span>¥16.9</span>
                <span>¥39</span> 
                <span>640人已团</span> 
            </div>
            <div className={style.Limit}>
                <h3>
                    限量1000件 25卷50卷 柔之选本色无芯卷纸家用卫生纸巾厕纸
                </h3>
                <a>
                    <i className="iconfont icon-shoucang"></i>
                    <p>收藏</p>
                </a>
            </div>
            <div className={style.bottomTabbar}>

            </div>
            {
                this.state.datalist.map(contents=>
                   
                    <div className={style.detail}> 
                      <img src={contents.img} className={style.detailImg} alt=""/>
                      <p className={style.p}>{contents.title}</p>                     
                    </div>
                )
            }
        </div>
    }
    componentDidMount(){

        // setTimeout(() => {
        //     this.setState({
        //       data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        //   }, 100);

        const end = Date.parse(new Date('2019-05-29 24:00'))
        this.countFun(end);

            axios.get("/mroute.html?method=beibei.module.pintuan.recom.list.get&_airborne_channel=beibei&scene_id=app_item_detail_buy_recom&iid=34672591&event_id=107893267&uid=0")
            .then(res=>{
                    console.log(res.data.recom_items)
                    this.setState({
                        datalist:res.data.recom_items
                    })
            }); 
                
                this.props.hideTabbar();      
    }
    componentWillUnmount(){
        
        this.props.showTabbar();   
    }
    countFun = (end) => {
         
             let now_time = Date.parse(new Date());
             var remaining = end - now_time;
          
             this.timer = setInterval(() => {
                 //防止出现负数
               if (remaining > 1000) {
                 remaining -= 1000;
                 let day = Math.floor((remaining / 1000 / 3600) / 24);
                 let hour = Math.floor((remaining / 1000 / 3600) % 24);
                 let minute = Math.floor((remaining / 1000 / 60) % 60);
                 let second = Math.floor(remaining / 1000 % 60);
         
                 this.setState({
                    day:day,
                   hour:hour < 10 ? "0" + hour : hour,
                     minute:minute < 10 ? "0" + minute : minute,
                     second:second < 10 ? "0" + second : second
                 })
               } else {
                 clearInterval(this.timer);
               //倒计时结束时触发父组件的方法
                 //this.props.timeEnd();
               }
             }, 1000);
           }
} 
    var mapStateToProps = ()=>{
        return {
        }
    }

    var mapDispatchToProps = {
        getMoney(){
            console.log("需要钱")
        },
        hideTabbar,
        showTabbar
    }

    // ReactDOM.render(<App />, mountNode);
export default connect(mapStateToProps,mapDispatchToProps)(MyTwo);