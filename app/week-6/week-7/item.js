
export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-lg p-4 mb-2 shadow-sm bg-blue-800 text-black">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </li>
  );
}
