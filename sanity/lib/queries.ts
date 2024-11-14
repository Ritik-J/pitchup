import { defineQuery } from "next-sanity";

export const startupQuery =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search)|| category match $search || title match $search || author -> name match $search]{
  _id,
  _createdAt,
  title,
  slug,
  category,
  image,
  description,
  views,
  author ->{
    _id,
    name,
    image,
    bio
  },
}`);
