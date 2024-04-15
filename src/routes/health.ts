import type { FastifyInstance } from "fastify";

export default async function route(fastify: FastifyInstance) {
  fastify.get("/", async (_, reply) => {
    return reply.status(200);
  });
}
