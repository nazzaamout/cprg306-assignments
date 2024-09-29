import Link from "next/link";

export default function Home() {
  const weekAssignments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-0 left-0 p-5 text-sm text-gray-500">
        <p>CPRG306B</p>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between text=sm">
        <h1 className=" text-4xl font-bold mb-5">
          Web Development 2 Weekly Assignments
        </h1>
        <div className="text-lg">
          <ul>
            <li className="font-semibold">
              <Link
                href="/week-2"
                className="hover:text-green-500 hover:underline"
              >
                Week 2
              </Link>
              <br />
              <Link
                href="/week-3"
                className="hover:text-green-500 hover:underline"
              >
                Week 3
              </Link>
              <br />
              <Link
                href="/week-4"
                className="hover:text-green-500 hover:underline"
              >
                Week 4
              </Link>
              <br />
              <Link
                href="/week-5"
                className="hover:text-green-500 hover:underline"
              >
                Week 5
              </Link>
              <br />
              <Link
                href="/week-6"
                className="hover:text-green-500 hover:underline"
              >
                Week 6
              </Link>
              <br />
              <Link
                href="/week-7"
                className="hover:text-green-500 hover:underline"
              >
                Week 7
              </Link>
              <br />
              <Link
                href="/week-8"
                className="hover:text-green-500 hover:underline"
              >
                Week 8
              </Link>
              <br />
              <Link
                href="/week-9"
                className="hover:text-green-500 hover:underline"
              >
                Week 9
              </Link>
              <br />
              <Link
                href="/week-10"
                className="hover:text-green-500 hover:underline"
              >
                Week 10
              </Link>
              <br />
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-5 text-sm text-gray-500">
        <p>Student: Naz Zaamout </p>
        <p>Instructor: Aaron Warsylewicz</p>
      </div>
    </main>
  );
}
