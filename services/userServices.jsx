export const getUserByPassword = (password) => {
    return fetch(`http://localhost:8088/users?password=${password}`).then((res) =>
      res.json()
    );
  };

  export const getNonAdminUsers = () => {
    return fetch(`http://localhost:8088/users?isAdmin=false`).then((res) =>
      res.json()
    );
  }