export default function Page() {
  return (
    <h1>
      3. When would you choose to use Edge Functions, Serverless Functions, or
      Edge Middleware with Vercel?
    </h1>
    <p>Serverless functions are great for a personal project, but Edge functions are a better choice if the highest level of performance is required. 
      
       Edge middleware is a way to affect a request before it gets to the Edge cache, so it's a great way to provide personalization without sacraficing performance.</p>
  );
}
