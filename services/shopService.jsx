export const AddItemToShop = (item) => {
  return fetch(`http://localhost:8088/shopItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export const getShopItems = () => {
  return fetch(
    "http://localhost:8088/shopItems?_expand=rarity&_expand=item"
  ).then((res) => res.json());
};

export const deleteShopItems = async (item) => {
  return fetch(`http://localhost:8088/shopItems/${item}`, {
    method: "DELETE",
  });
};

export const reduceQuantity = (item) => {
  return fetch(`http://localhost:8088/shopItems/itemId=${item}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
