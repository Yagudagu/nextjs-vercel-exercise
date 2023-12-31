import { BackButton } from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton />

      <h1 className="py-10">
        2. How would you compare Next.js with another framework? Feel free to
        compare with a framework of your choice.
      </h1>

      <p>
        Next.js is a server side rendering framework for React. Doing the
        rendering work on the server side saves processing power and network
        bandwidth on the client side.{" "}
      </p>
    </>
  );
}
