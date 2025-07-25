export default function Item({ item, onItemSelect }) {
  const { name, quantity, category } = item;

  return (
    <li
      className="border rounded-lg p-4 mb-2 shadow-sm bg-blue-800 text-black"
      onClick={onItemSelect}
       id={name}
    >
      <p className="text-lg font-semibold" id={name}>{name}</p>
      <p className="text-sm" id={name}>Quantity: {quantity}</p>
      <p className="text-sm" id={name}>Category: {category}</p>
    </li>
  );
}
