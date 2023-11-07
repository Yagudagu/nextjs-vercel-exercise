import { BackButton } from "@/components/BackButton";

export default function Page() {
  return (
    <>
      <BackButton />
      <h1 className="py-10">
        5. Imagine that the customer from Question 4 responds with the following
        email. “I’m so frustrated. I’ve been trying to make this work for hours
        and I just can’t figure it out. It must be a platform issue so why don't
        you just fix it for me instead of asking me questions.” What response
        would you write back?
      </h1>
      <p>
        I would first check to see if there are any possible platform issues.
        Then I would respond with something like this:
        <br />
        <br />
        Sorry to hear that you are having this issue. Developing a website can
        be tricky but we are here to help! At this time, there are no known
        issues with our platform that would cause your problem. Can you provide
        an error message and more details on the behavior you are experiencing?
      </p>
    </>
  );
}
