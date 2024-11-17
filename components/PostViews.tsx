import { client } from "@/sanity/lib/client";
import PostViewDot from "./PostViewDot";
import { startupPostViewQuery } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const PostViews = async ({ id }: { id: string }) => {
  const { views: postViewCount } = await client
    .withConfig({ useCdn: false })
    .fetch(startupPostViewQuery, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: postViewCount + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <PostViewDot />
      </div>
      <p className="view-text">
        <span className="font-black">{postViewCount} views</span>
      </p>
    </div>
  );
};

export default PostViews;
