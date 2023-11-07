import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2x1">Todos</h1>
      </header>{" "}
      <ul className="pl-4">
        <li>
          <Link href="/1">Question One</Link>
        </li>
        <li>
          <Link href="/2">Question Two</Link>
        </li>
        <li>
          <Link href="/3">Question Three</Link>
        </li>
        <li>
          <Link href="/4">Question Four</Link>
        </li>
        <li>
          <Link href="/5">Question Five</Link>
        </li>
      </ul>
    </>
  );
}
