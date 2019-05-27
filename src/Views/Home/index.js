import React,{Component} from 'react'
import axios from 'axios'
import style from './index.module.scss'
// import {Switch,Route} from 'react-router-dom'
import Detail from '../Detail'
//import Infinite from 'react-infinite-loading';
// import withRouter from 'react-router-dom'

class Home extends Component{
    state = {
      data:null,
      banner:null,
      shoplist:[]
    }
    render(){
        return <div> 
          {/* <Switch>
            <Route path='../Detail/:kerwinid'  component={Detail} /> 
          </Switch> */}

        
        {
          this.state.data?
          <div className={style.header}>
            <img className={style.headerimg} src={this.state.data.img} alt={this.state.data.desc}/>
            <span className={style.headerspan1}>{this.state.data.desc}</span>
            <span className={style.headerspan2} onClick={this.lijiqianwang.bind(this)}>{this.state.data.subtitle}</span>
          </div>:null}

{/* ----------------------------------------------------------------------------------------- */}
          {
            this.state.banner?
            <div className={style.banner}>
              <img className={style.bannerimg1} onClick={this.lijituan.bind(this)} src={this.state.banner[0].img} alt={this.state.banner[0].desc}/>
              <img className={style.bannerimg2} onClick={this.lijituan.bind(this)} src={this.state.banner[1].img} alt={this.state.banner[1].desc}/>
              <img className={style.bannerimg3} onClick={this.lijituan.bind(this)} src={this.state.banner[2].img} alt={this.state.banner[2].desc}/>
              <img className={style.bannerimg4} onClick={this.lijituan.bind(this)} src={this.state.banner[3].img} alt={this.state.banner[3].desc}/>
              <img className={style.bannerimg5} onClick={this.lijituan.bind(this)} src={this.state.banner[4].img} alt={this.state.banner[4].desc}/>
            
            </div>:null
          }

{/* -------------------------------------------------------------------------------------------------- */}
          {<ul className={style.nav}>
          <li className={style.navli}>今日特卖</li>
          <li className={style.navli}>童装</li>
          <li className={style.navli}>母婴</li>
          <li className={style.navli}>居家</li>
          <li className={style.navli}>美食</li>
          <li className={style.navli}>女装</li>
          <li className={style.navli}>鞋包</li>
          <li className={style.navli}>美妆</li>
          <li className={style.navli}>进口</li>
          </ul>}

          
{/* ----------------------------------------------------------------------------------------------------------- */}
        
          <div>
          <p className={style.p1}>每天9点准时上新</p>
{/* ----------------------------------------------------------------------------------------------------------- */}
          
          <ul>
            {
              this.state.shoplist.map(item=>
                <li key={item.type_home_item_single.product_id} data={item}>
                <div className={style.imglist}>
                <img onClick={this.lijituan.bind(this)} className={style.productimg} src={item.type_home_item_single.img}  alt={item.type_home_item_single.notify_body} />
                <img  className={style.productjieshao} src={item.type_home_item_single.icon_promotions.icon} alt={item.type_home_item_single.notify_body}/>
                </div>
                <div className={style.product}>
                <h5>{item.type_home_item_single.title}</h5>
                <p className={style.productmiaoshu}>{item.type_home_item_single.promotion_desc}</p>
                <p className={style.productprice}>￥{this.getPath(item.type_home_item_single.price)}<span className={style.productpricespan} onClick={this.lijituan.bind(this)}>立即团</span></p>
                </div>
                
                </li> 
                
              )
            }
          </ul>

          </div>
        

          <span className={style.icon} onClick={this.fanhuidingbu.bind(this)}>⇡</span>



        </div>

    }
    
    // handleLoading(){
    //   axios.get(`/martshow/v1/7702-1-all-0-1-0-12.html?client_info=&h5_uid=null`).then(res=>{
    //     console.log(res.data.martshows)
    //     this.setState({
    //       shoplist:res.data.martshows
       

    //   })
    // })

    

    fanhuidingbu(){
      console.log('cccc')
      document.body.scrollTop = document.documentElement.scrollTop = 0
      
    }

    lijiqianwang(){
      console.log('aaaa')
      window.location.href='https://api.beibei.com/app/call_app.html?noAppUrl=http%3A%2F%2Fa.app.qq.com%2Fo%2Fsimple.jsp%3Fpkgname%3Dcom.husor.beibei%26ckey%3DCK1293129009812&beibeiapp_info=%7B%22target%22%3A%20%22bb%2Fbase%2Fwebview%22%2C%20%22url%22%3A%22https%3A%2F%2Fm.beibei.com%2Fncm%2Factiv%2Factivity%2Fnormal_welfare.html%22%7D'
    }


    lijituan(){
      console.log('bbb')
    }


    getPath(path){
      return eval(path/100)
    }
    
    componentDidMount() {

      axios.get('/rms/h5.html?rms_id=571&app=beibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D').then(res=>{
        // console.log(res.data.h5_beibei_571s[0])
        this.setState({
          data:res.data.h5_beibei_571s[0]
        })
  
      })

      axios.get('/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D').then(res=>{
        // console.log(res.data.promotion_pro_shortcuts)
        this.setState({
          banner:res.data.promotion_pro_shortcuts
        })
      })

            axios.get(`/martshow/v1/7702-1-all-0-1-0-12.html?client_info=&h5_uid=null`).then(res=>{
        console.log(res.data.martshows)
        console.log(res.data.martshows.type_home_item_single)
        this.setState({
          shoplist:res.data.martshows
       

      })
    })
  }


  }

export default Home