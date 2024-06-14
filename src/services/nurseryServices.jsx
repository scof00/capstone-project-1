{
  /* AUTHOR: Chelsea Brooks | PURPOSE: Task Fetch Calls */
}

//get all nurseries fetch call for module NurseriesList.jsx
export const getAllNurseries = () => {
  return fetch(`http://localhost:8088/nurseries`).then((res) => res.json());
};

export const createNursery = (nurseries) => {
  return fetch(`http://localhost:8088/nurseries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nurseries),
  });
};
export const deleteNursery = (nurseryId) => {
  return fetch(`http://localhost:8088/nurseries/${nurseryId}`, {
    method: "DELETE",
  });
};

export const updateNursery = (nursery) => {
  return fetch(`http://localhost:8088/nurseries/${nursery.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nursery),
  });
};

export const getNurseryById = (nursery) => {
  return fetch(`http://localhost:8088/nurseries/${nursery}`).then((res) =>
    res.json()
  );
};

export const getNurseryDistributors = () => {
  return fetch(
    `http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`
  ).then((res) => res.json());
};
