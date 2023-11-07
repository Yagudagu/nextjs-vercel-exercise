import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2x1">Todos</h1>
      </header>{" "}
      <ul>
        <Link href="/1">Question One</Link>
        <Link href="/1">Question Two</Link>
        <Link href="/1">Question Three</Link>
        <Link href="/1">Question Four</Link>
        <Link href="/1">Question Five</Link>
      </ul>
    </>
  );
}
