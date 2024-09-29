export default function Dog({ name, breed, age, color }) {
  return (
    <section className="m-2 bg-neutral-600">
      <h3 className="text-xl font-bold text-violet-950">{name}</h3>
      <p>
        <span className="font-bold">Breed: </span>
        {breed}
      </p>
      <p>Age: {age}</p>
      <p>Color: {color}</p>
    </section>
  );
}
