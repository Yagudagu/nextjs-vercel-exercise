import { BackButton } from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton />
      <h1 className="py-10">
        4. A customer has a project on Vercel and they want to redirect the
        /blog path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </h1>

      <p>
        Hi, redirecting on Vercel is easy! Please take a look at this document
        below. https://vercel.com/docs/edge-network/redirects
        <br />
        <br />
        Static redirects would be the same for everyone and dynamic redirects
        are an option if you need to change the redirects based on the
        interaction with the site. For dynamic redirects, Edge Middleware or
        Functions would provide the fastest performance for redirecting, but
        Serverless Functions will also work. Using the configuration redirect
        might be the best option for a static redirect, or you could just use a
        Link in your frontend code.
      </p>
    </>
  );
}
