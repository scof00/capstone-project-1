export const getUserByPassword = (password) => {
    return fetch(`http://localhost:8088/users?password=${password}`).then((res) =>
      res.json()
    );
  };