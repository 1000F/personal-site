import { fetchSubstackPosts } from "./substack";

export const SUBSTACK_PUBLICATION = "https://moreblood.substack.com";
export const SUBSTACK_HANDLE = "moreblood";

export const site = {
  name: "Adam O’Brien",
  title: "Director of Strategy & Growth",
  headline: "Writing, experiments, and notes.",
  substackUrl: SUBSTACK_PUBLICATION,
  domain: "adamobrien.com",
  about:
    "I’m Adam O’Brien. I do strategy & growth work (mostly through partnerships). I write at More Blood — short notes on momentum, learning, and craft.",
  email: "",
};

export async function getPosts(limit = 12) {
  return fetchSubstackPosts({
    publicationUrl: SUBSTACK_PUBLICATION,
    handle: SUBSTACK_HANDLE,
    limit,
  });
}
