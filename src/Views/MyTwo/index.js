import React,{Component} from 'React'
import axios from 'axios'
import style from './swipe.module.scss'
import { Carousel } from 'antd'
import {hideTabbar,showTabbar} from '../Package/action.js'
import {connect} from 'react-redux'
class MyTwo extends Component{
    state = ({
        
        datalist:[]
    })
    render(){
        return <div>
            <Carousel className={style.swiper}>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1807/18/24901768497097_800x800.jpg!640.webp"/>
   
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70084243487097_800x800.jpg!640.webp"/> 
               
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70086282767097_800x800.jpg!640.webp"/>
 
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70086282767097_800x800.jpg!640.webp"/>
 
                </div>
                <div>
                    <img src="https://b1.hucdn.com/upload/item/1811/30/70088018917097_800x800.jpg!640.webp"/>
 
                </div>
                
            </Carousel>  
            <div className={style.flashSale}>
                <img src="http://h0.hucdn.com/open201915/61538a1101becc26_183x45.png"/>
                <div>
                    <span>距结束仅剩</span>
                    <div></div>
                </div>
            </div>
            {
                this.state.datalist.map(contents=>
                   
                    <div> 
                      
                        {/* <p>{contents.discount}</p> */}
                    </div>
                )
            }
        </div>
    }
    componentDidMount(){
 
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


export default connect(mapStateToProps,mapDispatchToProps)(MyTwo);