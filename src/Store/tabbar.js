function tabbar(prevState=true,action={}){
    console.log("reducer",action)
    let {type,payload}  = action; 
    switch(type){
        case "showTabbar":
            return payload;
        case "hideTabbar":
            return payload;
        default :
            return prevState;
    }}
export default tabbar