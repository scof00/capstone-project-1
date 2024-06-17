export const getUserByPassword = (password) => {
  return fetch(`http://localhost:8088/users?password=${password}`).then((res) =>
    res.json()
  );
};

export const getNonAdminUsers = () => {
  return fetch(`http://localhost:8088/users?isAdmin=false`).then((res) =>
    res.json()
  );
};

export const addGold = (user) => {
  return fetch(`http://localhost:8088/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const getUserById = (user) => {
  return fetch(`http://localhost:8088/users/${user}`).then((res) =>
    res.json()
)
}

export const getAllUsers = () => {
  return fetch(`http://localhost:8088/users/`).then((res) =>
    res.json()
)
}