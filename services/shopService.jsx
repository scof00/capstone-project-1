export const AddItemToShop = (item) => {
    return fetch(`http://localhost:8088/shopItems`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    })
}

export const getShopItems = () => {
    return fetch("http://localhost:8088/shopItems?_expand=rarity&_expand=item").then((res) =>
        res.json()
      );
}

export const deleteShopItems = async (itemId) => {
    return fetch(`http://localhost:8088/shopItems/${itemId}`, { method: "DELETE" });
  }