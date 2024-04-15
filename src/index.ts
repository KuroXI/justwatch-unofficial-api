import Fastify from "fastify";
import FastifyCors from "@fastify/cors";
import FastifyHelmet from "@fastify/helmet";
import qs from "qs";

import health from "./routes/health";
import collection from "./routes/collection";
import search from "./routes/search";
import info from "./routes/info";

const fastify = Fastify({
  logger: true,
  requestTimeout: 30000,
  querystringParser: (str) => qs.parse(str),
});

fastify
  // Plugins
  .register(FastifyCors, { origin: "*", methods: "GET" })
  .register(FastifyHelmet, { global: true });

// Routes
await fastify.register(health, { prefix: "/health" });
await fastify.register(collection, { prefix: "/collection" });
await fastify.register(search, { prefix: "/search" });
await fastify.register(info, { prefix: "/info" });

fastify.listen(
  { host: "0.0.0.0", port: Number(process.env.PORT) || 8080 },
  (err, address) => {
    if (err) throw err;
    console.log(`Listening to ${address}`);
  }
);