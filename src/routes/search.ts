import type { FastifyInstance } from "fastify";
import type { SearchQuery } from "../types/query";
import { post } from "../request";
import { searchQuery } from "../query/Search";
import { BackdropProfile, PosterProfile } from "../types/variables";

export default async function route(fastify: FastifyInstance) {
  fastify.get("/:query", async (request, reply) => {
    const params = request.params as { query: string };
    const query = request.query as SearchQuery;

    const result = await post(searchQuery, {
      after: query.after,
      first: query.first,
      country: query.country,
      language: query.language,
      format: query.format,
      profile:
        PosterProfile[query.profile as unknown as keyof typeof PosterProfile],
      backdropProfile:
        BackdropProfile[
          query.backdropProfile as unknown as keyof typeof BackdropProfile
        ],
      filter: {
        includeTitlesWithoutUrl: query.includeTitlesWithoutUrl
          ? JSON.parse(String(query.includeTitlesWithoutUrl))
          : false,
        searchQuery: params.query,
      },
    });

    return reply
      .status(200)
      .send(result.data ? result.data.popularTitles : result);
  });
}
