import React,{Component} from 'react'
import style from './index.module.css'
import item from './index.json'
import {Checkbox} from 'antd'
import 'antd/dist/antd.css'
import {fromJS} from 'immutable'

class Cart extends Component{
    state = {
        no_shopcar:{
            display:"block"
        },
        shopcar:{
            display:"none"
        },
        total:null,
        datalist:[],
        checkedAll:true,   
        span:1,
        allprice:0
    }
    render(){
        return <div>
            <div className={style.no_shop} style={this.state.no_shopcar}>
                <img src="assets/upload_7557af7a9f322613d77290d8c9a72a8a_208x213.png" alt="" className={style.no_shop_shopcar}/>
                <p className={style.no_shop_span}>购物车还没有商品哦~</p>
            </div>
            <div className={style.shop} style={this.state.shopcar}>
                <div className={style.shop_cart}>
                    <span className={style.total}>总计:￥{this.state.allprice}</span>
                    <div className={style.settlement} onClick={()=>{
                        this.props.history.push("/home")
                    }}>结算({this.state.datalist.length})</div>
                </div>
                <Checkbox checked={this.state.checkedAll} style={{marginLeft:"0.05rem"}} onClick={this.checkClick.bind(this)}>全选</Checkbox>
                <ul className={style.shop_goods}>
                {
                    this.state.datalist.map((res,index)=>
                        <li key={res.iid}>
                            <section>
                                <div className={style.cart_input_list}>
                                    <Checkbox type="checkbox" onClick={this.onChange.bind(this,index)} checked={this.state.datalist[index].checked} className={style.checkbox}/>
                                </div>
                                <div className={style.cart_item_list}>
                                    <img src={res.img} alt=""/>
                                    <div className={style.cart_content}>
                                        <p style={{"WebkitBoxOrient": "vertical"}} className={style.cart_name}>{res.title}</p>
                                        <span>{res.sale_tip}</span>
                                        <p className={style.cart_price}>￥{
                                            res.price/100
                                        }</p>
                                        <div className={style.plus} onClick={this.addition.bind(this,index)}>+</div>
                                        <div className={style.reduce} onClick={this.subtract.bind(this,index)}>-</div>
                                        <p className={style.cart_number}>×{res.count}</p>
                                    </div>
                                </div>
                            </section>
                            <div className={style.cart_subtotal}>
                            <div className={style.delete} onClick={this.deleteList.bind(this,res,index)}>删</div>
                                <p>
                                    <span>小计:</span>
                                    <b>￥{
                                        res.price/100*res.count
                                    }</b>
                                </p>
                            </div>
                        </li>
                    )
                }
                </ul>
            </div>
            <div className={style.shop_recommend}>
                <div className={style.shop_recommend_heart}>
                    <img src="assets/a455e163bad2ac29_32x32.png" alt=""/>
                    <span>大家还买了</span>
                </div>
                <ul className={style.shop_recommend_goods}>
                {
                    item.recom_items.map(res=>
                    <li key={res.iid} onClick={this.handleClick.bind(this,res,res.price,res.iid)}>
                        <img src={res.img} alt=""/>
                        <div className={style.title} style={{"WebkitBoxOrient": "vertical"}}>{res.title}</div>
                        <div className={style.shop_recommend_num}>
                            <span className={style.shop_recommend_price}>￥<span>{
                                res.price/100
                            }</span></span>
                            <span className={style.shop_recommend_price_ori}>￥{
                                res.price_ori/100
                            }</span>
                        </div>
                    </li>
                    )
                }
                </ul>
            </div>
        </div>
    }
    deleteList(data,index){
        const {datalist}=this.state
        const arr = fromJS(datalist)
        const newList = arr.splice(index,1)
        this.setState({
            datalist:newList.toJS()
        })
        setTimeout(()=>{
            this.setState({
                allprice:this.countprice()
            })
            setTimeout(()=>{
                if(datalist.length===1){
                    this.setState({
                        no_shopcar:{
                            display:"block"
                        },
                        shopcar:{
                            display:"none"
                        }
                    })
                }
            },0)
        },0)

    }
    checkClick(){
        const { checkedAll,datalist } = this.state;

            datalist.map(function(item){
                return item.checked = !checkedAll;
            })


          const check = datalist.every(function(item,index){
            return item.checked;
          })
          var arr = fromJS(datalist)
          for(var i=0;i<arr.size;i++){
              arr.getIn([i,"checked"],check)
          }
        this.setState({
          checkedAll: !checkedAll,
          datalist:arr.toJS(),
          allprice:checkedAll?0:this.countprice()
        });
    }
    onChange(index){
        var a = JSON.parse(JSON.stringify(this.state.datalist))
        a[index].checked=!a[index].checked
        this.setState({
            datalist:a,
            checkedAll:a.every(function(item){
                return item.checked;
              })
        })
        setTimeout(()=>{
            
            this.setState({
                allprice:this.countprice()
            })
        },0)
    }
    subtract(index){
        this.setState({
            span:this.state.span<=1?this.state.span:this.state.span-1
        })
        if(this.state.datalist[index].count>1){
            var a = JSON.parse(JSON.stringify(this.state.datalist))
            a[index].count--
            
            this.setState({
                datalist:a,            
            })
            setTimeout(()=>{
                this.setState({
                    allprice:this.countprice()
                })
            },0)
        }
        
    }
    countprice(){
        // console.log(this.state.datalist)
        // console.log('11')
        var sum = 0;
        for(var i=0;i<this.state.datalist.length;i++){
            if(this.state.datalist[i].checked){
                sum=sum + this.state.datalist[i].price*(this.state.datalist[i].count)
            }
        }
        return sum/100
    }
    addition(index){
        var a = JSON.parse(JSON.stringify(this.state.datalist))
        a[index].count++
        
        this.setState({
            datalist:a,
                
        })
        setTimeout(()=>{
            this.setState({
                allprice:this.countprice()
            })
        },0)
        
    }
    handleClick(data,price,id){
        data.count=1
        data.checked=true
        if (this.state.datalist.map(res=>{
            return res.iid
        }).indexOf(data.iid)===-1){
            this.setState({
                no_shopcar:{
                    display:"none"
                },
                shopcar:{
                    display:"block"
                },
                datalist:[...this.state.datalist,data]
            })
            setTimeout(()=>{
                this.setState({
                    allprice:this.countprice()
                })
            },0)
        }
        
       
    }
}

export default Cart