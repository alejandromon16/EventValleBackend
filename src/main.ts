import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import passport from 'passport';
import { redisSession } from './config/session.config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

const { combine, timestamp, printf, colorize, align } = winston.format;
const logtail = new Logtail('4L54yTKPpdREb6pW2wQshFVg');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      format: combine(
        colorize({ all: true }),
        timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
      ),
      transports: [new LogtailTransport(logtail)],
    }),
    cors: {
      credentials: true,
      origin: (reqOrigin, callback) => {
        callback(null, reqOrigin);
      },
    },
  });

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 8000;

  app.use(redisSession);
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
