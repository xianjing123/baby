import React,{Component} from 'react'
import style from './index.module.css'
import item from './index.json'

class Cart extends Component{
    state = {
        no_shopcar:{
            display:"block"
        },
        shopcar:{
            display:"none"
        },
        total:1,
        datalist:[]
    }
    render(){
        return <div>
            <div className={style.no_shop} style={this.state.no_shopcar}>
                <img src="assets/upload_7557af7a9f322613d77290d8c9a72a8a_208x213.png" alt="" className={style.no_shop_shopcar}/>
                <p className={style.no_shop_span}>购物车还没有商品哦~</p>
            </div>
            <div className={style.shop} style={this.state.shopcar}>
                <div className={style.shop_cart}>
                    <span>￥{this.state.total}</span>
                </div>
                <input type="checkbox" className={style.shop_checkbox}></input>
                <ul className={style.shop_goods}>
                {
                    this.state.datalist.map(res=>
                        <li key={res.iid}>
                            <section>
                                <div className={style.cart_input_list}>
                                    <input type="checkbox"/>
                                </div>
                                <div className={style.cart_item_list}>
                                    <img src={res.img} alt=""/>
                                    <div className={style.cart_content}>
                                        <p style={{"WebkitBoxOrient": "vertical"}} className={style.cart_name}>{res.title}</p>
                                        <span>{res.sale_tip}</span>
                                        <p className={style.cart_price}>￥{
                                            res.price<10000?(""+res.price).slice(0,2):(""+res.price).slice(0,3)
                                        }</p>
                                        <p className={style.cart_number}>×1</p>
                                    </div>
                                </div>
                            </section>
                            <div className={style.cart_subtotal}>
                                <p>
                                    <span>小计:</span>
                                    <b>￥{
                                        res.price<10000?(""+res.price).slice(0,2):(""+res.price).slice(0,3)
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
                    <li key={res.iid} onClick={this.handleClick.bind(this,res)}>
                        <img src={res.img} alt=""/>
                        <div className={style.title} style={{"WebkitBoxOrient": "vertical"}}>{res.title}</div>
                        <div className={style.shop_recommend_num}>
                            <span className={style.shop_recommend_price}>￥<span>{
                                res.price<10000?(""+res.price).slice(0,2):(""+res.price).slice(0,3)
                            }</span></span>
                            <span className={style.shop_recommend_price_ori}>￥{
                                res.price_ori<10000?(""+res.price_ori).slice(0,2):(""+res.price_ori).slice(0,3)
                            }</span>
                        </div>
                    </li>
                    )
                }
                </ul>
            </div>
        </div>
    }
    handleClick(data){
        this.setState({
            no_shopcar:{
                display:"none"
            },
            shopcar:{
                display:"block"
            },
            datalist:[...this.state.datalist,data]
        })
        console.log(data)
    }
}

export default Cart