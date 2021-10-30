export const getName = (name) => {
    let parts = name.split(" ")
    return {firstName:parts[0], lastName:parts[1]}
}

export const formatDate = (text) => {
    if(text){
        let index = text.indexOf("T");
        return text.substring(0,index);
    }
    return "none";
    
}

export const isAuthenticated = () => {
    let keys = Object.keys(localStorage)
    let result = false;
    keys.forEach((key) =>{
      if(key ==="authenticated" && localStorage.getItem(key)){
        result =true
      }
      else if(key ==="lwa" && localStorage.getItem(key)){
        result =true
      }
    })
    console.log("result")
    console.log(result)
    return result;
    
}