import React,{Component} from 'react'
import style from './MyOne.module.scss'


class MyOne extends Component{
    render(){ 
        var item = this.props.contents;
        return <div onClick={this.handleClickMyOne.bind(this)}>
            <div className={style.display}>
                <div className={style.block}>
                    <img src={item.img} className={style.imgs} alt=""/>
                    <p className={style.title}>{item.title}</p>
                    <p className={style.price}>{this.handlePrice(item.price)}</p>
                </div>
            </div>

        </div>
    } 
    handleClickMyOne(){
        this.props.history.push("/mytwo")
    }
    handlePrice(item){
        return "¥"+Math.round(item)/100+"0"
    }

    
}


export default MyOne;