import Searchbar from "@/components/Searchbar";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { startupQuery } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const { data: post } = await sanityFetch({ query: startupQuery, params });

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
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Idea or Pitch Found.</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
