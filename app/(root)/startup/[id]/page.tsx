import { client } from "@/sanity/lib/client";
import { startupByIdQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const post = await client.fetch(startupByIdQuery, { id });

  if (!post) {
    return notFound();
  }
  console.log("Startup data:", post);

  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default page;
