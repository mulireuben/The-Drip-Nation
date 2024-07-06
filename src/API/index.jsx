export async function getAllProducts() {
  return await fetch('https://dummyjson.com/products').then((res) =>
    res.json()
  );
  // .then((error) => {
  //   console.log(error);
  // });
}

export const getProductsByCategory = (category) => {
  return fetch(`https://dummyjson.com/products/category/${category}`).then(
    (res) => res.json()
  );
};

export async function addToCart(id) {
  return await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }),
  }).then((res) => res.json());
}

export default { getAllProducts, addToCart };
