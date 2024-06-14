export const getAllDistributors = () => {
    return fetch(`http://localhost:8088/Distributors`).then((res) => res.json())
}