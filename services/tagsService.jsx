export const getTags = () => {
  return fetch("http://localhost:8088/tags").then((res) => res.json());
};

export const createItemTags = (item) => {
  return fetch(`http://localhost:8088/itemTags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
