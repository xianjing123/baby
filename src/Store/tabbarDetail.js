function tabbarDetail(prevState=true,action={}){
    console.log("reducer",action)
    let {type,payload}  = action; 
    switch(type){
        case "showTabbarDetail":
            return payload;
        case "hideTabbarDetail":
            return payload;
        default :
            return prevState;
    }}
export default tabbarDetail;