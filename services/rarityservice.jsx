export const getRarities = () => {
    return fetch("http://localhost:8088/rarities").then((res) => res.json())
}