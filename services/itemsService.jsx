export const getAllUnsoldItems = () => {
  return fetch(
    "http://localhost:8088/items?_expand=rarity&_embed=itemTags&_embed=shopItems"
  ).then((res) => res.json());
};

export const getItemById = (item) => {
  return fetch(`http://localhost:8088/items/${item}?_expand=rarity`).then(
    (res) => res.json()
  );
};

export const changItemStatus = async (modifiedItemObject) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedItemObject),
  };
  const response = await fetch(
    `http://localhost:8088/items/${modifiedItemObject.id}`,
    putOptions
  );
};

export const deleteItems = async (itemId) => {
  return fetch(`http://localhost:8088/items/${itemId}`, { method: "DELETE" });
};

export const createItem = (item) => {
  return fetch(`http://localhost:8088/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => {
    return res.json()
  }).then((item) => {
    console.log(item.id)
    return item.id;
  });
};

export const updateItem = (item) => {
  return fetch(`http://localhost:8088/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};

export const getItemsFromItemTags = () => {
  return fetch("http://localhost:8088/itemTags?_expand=item&_expand=tag").then(
    (res) => res.json()
  );
};
