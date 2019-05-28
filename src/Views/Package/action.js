function hideTabbar(){
    return {
        type:"hideTabbar",
        payload:false
    }
}

function showTabbar(){
    return {
        type:"showTabbar",
        payload:true
    }
}

export {hideTabbar,showTabbar}