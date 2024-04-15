import type { FastifyInstance } from "fastify";
import type { InfoQuery } from "../types/query";
import { post } from "../request";
import { infoQuery } from "../query/Info";
import type { Country } from "../types/country";
import { BackdropProfile, PosterProfile } from "../types/variables";

export default async function route(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const query = request.query as InfoQuery;

    const result = await post(infoQuery, {
      fullPath: query.path,
      episodeMaxLimit: query.episodeMaxLimit,
      country: query.path.split("/")[1].toUpperCase() as Country,
      language: query.language,
      format: query.format,
      profile:
        PosterProfile[query.profile as unknown as keyof typeof PosterProfile],
      backdropProfile:
        BackdropProfile[
          query.backdropProfile as unknown as keyof typeof BackdropProfile
        ],
    });

    return reply.status(200).send(result.data ? result.data.result : result);
  });
}
