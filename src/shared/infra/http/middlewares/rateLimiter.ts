import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import * as redis from "redis";

import { AppError } from "@shared/errors/AppError";

interface IRedisClient {
    host: string;
    port: number;
    password?: string | undefined;
}

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS || undefined,
} as IRedisClient);

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 10, // 5 requests
    duration: 5, // per 5 seconds by IP
});

export default async function rateLimiter(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    try {
        await limiter.consume(request.ip);

        return next();
    } catch (error) {
        throw new AppError("Too many requests", 429);
    }
}
