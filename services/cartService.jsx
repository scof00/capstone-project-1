export const getCartItems = () => {
  return fetch(`http://localhost:8088/carts?_expand=item&_expand=user`).then(
    (res) => res.json()
  );
};

export const AddItemToCart = (item) => {
  return fetch(`http://localhost:8088/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export const deleteCartItem = (itemId) => {
  return fetch(`http://localhost:8088/carts/${itemId}`, { method: "DELETE" });
};

export const purchaseItems = (item) => {
    return fetch(`http://localhost:8088/purchasedItems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
}
