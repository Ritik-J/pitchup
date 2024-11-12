import Searchbar from "@/components/Searchbar";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const post = [
    {
      title: "Image Genrator",
      createdAt: new Date(),
      views: 50,
      author: { id: 1, name: "Ritik" },
      postId: 10,
      description: "this is post description",
      image:
        "https://th.bing.com/th/id/OIP.04mIQUq2nUvN7JGWc5hRywHaEU?w=274&h=180&c=7&r=0&o=5&pid=1.7",
      category: "Ai",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup idea <br />
          Noticed by Angel Investors
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit, Share, Vote and Discuss about your Startup Idea. Get Guidance
          and Much More.
        </p>

        <Searchbar query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All Startups Post`}
        </p>

        <ul className="mt-7 card_grid">
          {post?.length > 0 ? (
            post.map((post: StartupCardType) => (
              <StartupCard key={post?.postId} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Idea or Pitch Found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
