import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-xl py-10">Jacob Martin's Take Home Exercise</h1>
      <p className="py-6">
        Hi, I hope your day is going amazing! Below are links to all of the
        answers.
      </p>
      <ul>
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
    </div>
  );
}
