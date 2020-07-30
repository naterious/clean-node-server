import {Cacher, RedisApi, RedisCacheStorage} from "@internal/cache-library";
import {config} from "../../config";
import {logger} from "../../logger";

export const redisApi = new RedisApi({
  config: config.redis,
  logger,
});

export const cacher = new Cacher({
  cacheConfig: {
    redisKeyPrefix: "",
  },
  cacheStorage: new RedisCacheStorage({
    redisApi,
  }),
  logger,
});

export const cacheStorage = new RedisCacheStorage({redisApi});
