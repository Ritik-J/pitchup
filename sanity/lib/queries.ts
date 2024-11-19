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

export const startupByIdQuery =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  pitch,
}`);

export const startupPostViewQuery =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, views}`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
    *[_type == "author" && id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }
    `);
