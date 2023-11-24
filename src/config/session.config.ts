import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';
import session from 'express-session';
import { UserEntity } from '../gql-resources/users/entities/user.entity';
import RedisStore from 'connect-redis';

const client = createClient({
  username: 'default',
  password: 'Yl2VWc9ZpfaNSaXpsG1tZmjuXTzok8ls',
  socket: {
    host: 'redis-17401.c322.us-east-1-2.ec2.cloud.redislabs.com',
    port: 17401,
  },
});
client.on('error', (err) => console.log('Redis Client Error', err));

async function setupRedis() {
  await client.connect();

  await client.set('foo', 'bar');
  const value = await client.get('foo');
  console.log(value); // returns 'bar'
}

setupRedis();

const store = new RedisStore({
  client: client,
});

export const redisSession = session({
  secret: process.env['SESSION_SECRET'],
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  },
  store: store,
  genid: () => {
    return uuidv4();
  },
});

declare module 'express' {
  interface Request {
    user: UserEntity;
  }
}
