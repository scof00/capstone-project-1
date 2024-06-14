export const getAllFlowers = () => {
    return fetch('http://localhost:8088/flowers')
    .then((res) => res.json())
}

export const newFlower = (flower) => {
    return fetch('http://localhost:8088/flowers', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(flower),
    })
}

export const deleteFlower = (flowerId) => {
    return fetch(`http://localhost:8088/flowers/${flowerId}`, {
        method: "DELETE",
    })
}

export const updateFlower = (flower) => {
    return fetch(`http://localhost:8088/flowers/${flower.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(flower)
    })
}

export const getFlowerById = (flower) => {
    return fetch(`http://localhost:8088/flowers/${flower}`).then((res) => res.json());
}

// export const getFlowerById = (flowerId) => {
//     return fetch(`http://localhost:8088/flowers/${flowerId}`)
//     .then((res) => res.json())
//   return fetch("http://localhost:8088/flowers").then((res) => res.json());
// };


// export const getFlowerById = (flower) => {
//     return fetch(`http://localhost:8088/flowers/${flower}`).then((res) => res.json());
// }