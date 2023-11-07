import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2x1">Todos</h1>
      </header>{" "}
      <ul>
        <Link href="/1">Question One</Link>
        <Link href="/2">Question Two</Link>
        <Link href="/3">Question Three</Link>
        <Link href="/4">Question Four</Link>
        <Link href="/5">Question Five</Link>
      </ul>
    </>
  );
}
