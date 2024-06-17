export const AddItemToShop = (item) => {
    return fetch(`http://localhost:8088/shopItems`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    })
}