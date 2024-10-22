export default function Item({ name, quantity, category }) {
  return (
    <section>
      <ul className="p-5 m-5 font-sans bg-white shadow-lg">
        <li className="font-bold text-2xl text-slate-800">{name}</li>
        <li className="font-thin text-sm text-slate-600">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
