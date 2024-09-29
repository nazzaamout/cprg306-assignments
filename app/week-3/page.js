import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "Buddy",
    breed: "Australian Shepherd",
    age: 11,
    color: "black and white",
  };

  let dog2 = {
    name: "Dingo",
    breed: "Golden Retriever",
    age: 8,
    color: "golden",
  };

  let dog3 = {
    name: "Rex",
    breed: "German Shepherd",
    age: 3,
    color: "brown and black",
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-4xl font-bold">My Dogs</h1>
          <br />
          <Dog
            name={dog1.name}
            breed={dog1.breed}
            age={dog1.age}
            color={dog1.color}
          />
          <Dog
            name={dog2.name}
            breed={dog2.breed}
            age={dog2.age}
            color={dog2.color}
          />
          <Dog
            name={dog3.name}
            breed={dog3.breed}
            age={dog3.age}
            color={dog3.color}
          />
        </div>
      </main>
    </div>
  );
}
