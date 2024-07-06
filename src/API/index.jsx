export async function getAllProducts() {
  return await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((error) => {
      console.log(error);
    });
}

export async function addToCart(itemid) {
  return await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: itemid,
          quantity: 1,
        },
      ],
    }),
  }).then((res) => res.json());
}

export default { getAllProducts, addToCart };
