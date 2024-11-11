import Searchbar from "@/components/Searchbar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
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
    </>
  );
}
