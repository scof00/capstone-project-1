// gets all distributors 

export const getAllDistributors = () => {
    return fetch(`http://localhost:8088/distributors`).then((res) => res.json())
}

// grabs new distributors 
export const createDistributor = (distributor) => {
    return fetch (`http://localhost:8088/distributors`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(distributor)
    })
}

export const getDistributorById = (distributor) => {
    return fetch (`http://localhost:8088/distributors/${distributor}`).then((res) => res.json());
}

export const updateDistributor = (distributor) => {
    return fetch(`http://localhost:8088/distributors/${distributor.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(distributor),
    });
  };

  export const deleteDistributor = (distributorId) => {
    return fetch(`http://localhost:8088/distributors/${distributorId}`, {
      method: "DELETE",
    });
  };