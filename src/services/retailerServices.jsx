export const getAllRetailers = () => {
  return fetch(`http://localhost:8088/retailers`).then((res) => res.json());
};

export const createRetailer = (retailer) => {
  return fetch(`http://localhost:8088/retailers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(retailer),
  });
};

export const deleteRetailer = (retailerId) => {
  return fetch(`http://localhost:8088/retailers/${retailerId}`, {
    method: "DELETE",
  });
};

export const getRetailerById = (retailer) => {
  return fetch(
    `http://localhost:8088/retailers/${retailer}?_expand=distributor`
  ).then((res) => res.json());
};

export const getRetailerDetails = (retailer) => {
  return fetch(
    `http://localhost:8088/retailers/${retailer}?_expand=distributor`
  ).then((res) => res.json());
}

export const RetailerDistributorInfo = () => {
  return fetch(`http://localhost:8088/nurseryDistributors/?_expand=distributor&_expand=nursery`).then((res) => res.json())
}

export const getNurseryInformation = () => {
  return fetch(`http://localhost:8088/nurseryFlowers/?_expand=nursery&_expand=flower`).then((res) => res.json())
} 

export const updateRetailer = (retailer) => {
  return fetch(`http://localhost:8088/retailers/${retailer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(retailer),
  });
};
