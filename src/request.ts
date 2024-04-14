import type { InfoVariables, PopularVariables, SearchVariables } from "./types/variables";

const JUSTWATCH_API = "https://apis.justwatch.com/graphql";

export async function post(
  query: string,
  variables: PopularVariables | SearchVariables | InfoVariables
) {
  const response = await fetch(JUSTWATCH_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return await response.json();
}
