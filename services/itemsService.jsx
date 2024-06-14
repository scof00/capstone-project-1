export const getAllUnsoldItems = () => {
    return fetch(
      "http://localhost:8088/items?purchased=false&_expand=rarity"
    ).then((res) => res.json());
  };
  
  export const getAllSoldItems = () => {
    return fetch(
      "http://localhost:8088/items?purchased=true&_expand=rarity"
    ).then((res) => res.json());
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
    return fetch(`http://localhost:8088/items/${itemId}`, 
    {method: "DELETE", })
  };
  
  export const createItem = (item) => {
    return fetch(`http://localhost:8088/items`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
  }