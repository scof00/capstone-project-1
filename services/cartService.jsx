export const getCartItems = () => {
    return fetch(`http://localhost:8088/carts?_expand=item&_expand=user`).then((res) =>
      res.json()
    );
  };