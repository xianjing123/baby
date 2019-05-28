import React,{Component} from 'react'
import {hideTabbar,showTabbar}from './action'
import {connect} from 'react-redux'
import style from './index.module.scss'
import axios from 'axios'
import MyOne from '../MyOne/index.js'
import { Affix } from 'antd'
 
class Package extends Component{
    state = ({
        datalist:[],
        show : false
    })
    render(){
        let { show } = this.state;
        return <div onClick={this.handleJump.bind(this)}>
                    <div className={style.commonBack}>
                        {
                            show &&
                            <div onClick={this.goTo}><i className="iconfont icon-huidaodingbu"></i></div>
                        }
                    </div>

                    <div> 
                        <Affix offsetTop={this.state.top}>
                        <div
                            type="primary"
                            onClick={() => {
                                this.setState({
                                    top: this.state.top
                                });
                            }}
                        >
                            <div className={style.navbar}>
                                <div className={style.navbar1}>
                                <div className={style.l}>
                                    <i className="iconfont icon-jingxuandefault-"></i>
                                    <p>精选</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-baihuo"></i>
                                    <p>百货</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-Donut"></i>
                                    <p>食品</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-tongzhuang"></i>
                                    <p>童装</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-muying"></i>
                                    <p>母婴</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-jingxuandefault-"></i>
                                    <p>精选</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-nvzhuang"></i>
                                    <p>女装</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-meizhuang"></i>
                                    <p>美妆</p>
                                </div>
                                <div className={style.l}>
                                    <i className="iconfont icon-xiebaopeishizhuanhuan"></i>
                                    <p>鞋包</p>
                                </div> 
                            </div>
                            </div>
                        </div>
                        </Affix>
                    </div>

                        {
                            this.state.datalist.map(item=> 
                                <MyOne key={item.iid} contents={item} {...this.props}></MyOne>
                                )  
                        }
               </div>
    }
    handleJump(){
        this.props.history.push('/home')
    }
    goTo(){
            let scrollToTop = window.setInterval(function() {
            let pos = window.pageYOffset;
            if ( pos > 0 ) {
                window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 2);
      }
    componentDidMount(){ 

        axios.get("/martgoods/low_price/discover/1-30-.html?cat=all&h5_uid=null")
        .then(res=>{
                console.log(res.data.lists)
                this.setState({
                    datalist:res.data.lists
                })
        });
            this.props.hideTabbar();

                window.addEventListener('scroll' , ()=>{
                        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        if(scrollTop > 500){
                            this.setState({
                            show : true
                            })
                        }else{
                            this.setState({
                            show : false
                            })
                        }
                    })
        
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


export default connect(mapStateToProps,mapDispatchToProps)(Package);