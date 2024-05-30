const uuid = require('uuid');

module.exports = ({ env }) => ({
    graphql: {
        config: {
            endpoint: '/graphql',
            depthLimit: 100,
            amountLimit: 1000,
            defaultLimit: 10000,
            maxLimit: 10000,
        },
    },
    "apollo-sandbox": {
        // enables the plugin only in development mode
        // if you also want to use it in production, set this to true
        // keep in mind that graphql playground has to be enabled
        enabled: process.env.NODE_ENV === "production" ? false : true,
    },
    'drag-drop-content-types': {
        enabled: true
    },
    'publisher': {
        enabled: true
    },
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST'),
            port: env('SMTP_PORT'),
            auth: {
              user: env('SMTP_USER'),
              pass: env('SMTP_PASS'),
            },
            secure: true,
            logger: true,
            // ... any custom nodemailer options
          },
          settings: {
            defaultHeaders: {
              References: uuid.v4(),
              'X-Entity-Ref-ID': uuid.v4(),
            },
            headers: {
              References: uuid.v4(),
              'X-Entity-Ref-ID': uuid.v4(),
            },
            defaultFrom: env('SMTP_DEFAULT_FROM'),
            defaultReplyTo: env('SMTP_DEFAULT_REPLYTO'),
          },
        },
    },
});
