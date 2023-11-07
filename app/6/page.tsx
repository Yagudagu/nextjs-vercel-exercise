import { BackButton } from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton />
      <h1 className="py-10">
        6. A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </h1>
      <p>
        Hi customer, Please take a look a the document below. As it shows, you
        can prevent your site from being indexed by search engines using the
        X-Robots-Tag - no-index header. This is automatically included if you
        are using one of our domains. If you are using a custom domain, you just
        need to include it in the vercel.json file as showin the document.
        https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
      </p>
    </>
  );
}
