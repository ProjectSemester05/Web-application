export const getName = (name) => {
    let parts = name.split(" ")
    return {firstName:parts[0], lastName:parts[1]}
}