export function useGetTotal({ cart }) {
  let total = 0;
  cart.forEach(prod => {
    total += prod.subtotal;
  });
  return { total };
}
