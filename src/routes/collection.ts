import type { FastifyInstance } from "fastify";
import type { PopularQuery } from "../types/query";
import { post } from "../request";
import { popularQuery } from "../query/Popular";
import { BackdropProfile, PosterProfile } from "../types/variables";

export default async function route(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const query = request.query as PopularQuery;

    const result = await post(popularQuery, {
      after: query.after,
      first: query.first,
      country: query.country,
      language: query.language,
      profile:
        PosterProfile[query.profile as unknown as keyof typeof PosterProfile],
      backdropProfile:
        BackdropProfile[
          query.backdropProfile as unknown as keyof typeof BackdropProfile
        ],
      format: query.format,
      popularTitlesSortBy: query.sort,
      popularTitlesFilter: {
        objectTypes: query.type,
        genres: query.genres,
        ageCertifications: query.ageRestriction,
        excludeGenres: query.excludeGenres,
        packages: query.provider,
      },
    });

    return reply
      .status(200)
      .send(result.data ? result.data.popularTitles : result);
  });
}
