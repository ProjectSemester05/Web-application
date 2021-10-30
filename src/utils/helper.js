export const getName = (name) => {
    let parts = name.split(" ")
    return {firstName:parts[0], lastName:parts[1]}
}

export const formatDate = (text) => {
    let index = text.indexOf("T");
    return text.substring(0,index);

}