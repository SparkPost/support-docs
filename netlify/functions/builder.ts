import { builder, Handler } from '@netlify/functions';

const originalResponse = {
  body: ':thumbsup:',
  statusCode: 200,
  ttl: 3600,
};

const myHandler: Handler = async (event, context) => {
  // logic to generate the required content

  return originalResponse;
};

const handler = builder(myHandler);

export { handler };
