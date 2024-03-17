export async function addItemToCart(id, quantity){
    console.log("function addItemToCart before. id: ", id)
    const response = await fetch('http://localhost:8000/addToCart', {
        method: 'POST',
        body: JSON.stringify({id: id, quantity: quantity}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("after POST method")
    const resData = await response.json();

    if (!response.ok){
        throw new Error("Failed to add new item to the cart.")
    }
    console.log("resData", resData)
    // return resData.message;
}