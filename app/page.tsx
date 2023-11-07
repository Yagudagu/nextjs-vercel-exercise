import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-xl py-10">Jacob Martin's Take Home Exercise</h1>
      <p className="py-10">
        Hi, I hope your day is going amazing! Below are links to all of the
        answers.
      </p>
      <ul>
        <li className="py-1 hover:text-white">
          <Link href="/1">
            1. Describe how you solved a challenge that one of your previous
            teams faced.
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/2">
            2. How would you compare Next.js with another framework?
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/3">
            3. When would you choose to use Edge Functions, Serverless
            Functions, or Edge Middleware with Vercel?
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/4">
            4. A customer has a project on Vercel and they want to redirect the
            /blog path to another website.
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/5">
            5. Imagine that the customer from Question 4 responds with the
            following email.
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/6">
            6. A customer is creating a site and would like their project not to
            be indexed by search engines.
          </Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link href="/7">
            7. How could we improve or alter this familiarization exercise?
          </Link>
        </li>
      </ul>
    </div>
  );
}
