const getStoredCart = () =>{
    const storedCart = localStorage.getItem('prodCards');
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return [];
}
const saveCard = (id) =>{
    const storedCards = getStoredCart()
    const exists = storedCards.find(prodCardId => prodCardId == id)
    if(!exists){
        storedCards.push(id)
        localStorage.setItem('prodCards', JSON.stringify(storedCards))
    }
}


export {getStoredCart , saveCard }