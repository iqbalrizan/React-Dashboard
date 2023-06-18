export const GetProducts = () => {

    return 
    fetch("'https://dummyjson.com/products'")
    .then(res => res.json())

}