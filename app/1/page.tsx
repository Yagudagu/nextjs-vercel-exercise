import { BackButton } from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton />

      <h1 className="py-10">
        1. Describe how you solved a challenge that one of your previous teams
        faced. How did you determine your solution was successful?
      </h1>

      <p>
        As a Support Engineer, I deal with many issues everyday and need to
        solve them fast. It requires a combination of rapid learning and
        colaboration to meet the needs of our many customers.
        <br />
        <br />
        One of our customers recently wanted to download data from our cloud
        portal in csv format, so they could do some comparison work for a DR
        exercise. Unfortunately, our portal doesn't have this feature. I asked
        around in company slack channels and found that other customers had been
        experiencing the same issue. In response, a group of colleagues
        developed a prototype of a native client tool that allows customers to
        download a CSV with details from their tenancies. With their permission,
        I gained access and provided that tool to the customer. I also had to
        quickly learn that tool, so that I could help the customer implement.
      </p>
    </>
  );
}
