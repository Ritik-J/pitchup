import { formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    title,
    _createdAt,
    views,
    author,
    _id: postId,
    description,
    image,
    category,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formateDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/startup/${postId}`}>
            <p className="text-16-medium line-clamp-1">{title}</p>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src="/Apple.png"
            alt="user avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${postId}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={image}
          alt="post image"
          className="startup-card_img"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query/${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${postId}`}>View More</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
