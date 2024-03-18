export async function updateCart(id, quantity){
    console.log("function updateCart before. id: ", id)
    const response = await fetch('http://localhost:8000/updateCart', {
        method: 'POST',
        body: JSON.stringify({id: id, quantity: quantity}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("after POST method")
    const resData = await response.json();

    if (!response.ok){
        throw new Error("Failed to update item to the cart.")
    }
    console.log("resData", resData)
    // return resData.message;
}