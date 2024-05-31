module.exports = [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
 // 'strapi::body',
 {
    name: "strapi::body",
    config: {
      formLimit: "356mb", // modify form body
      jsonLimit: "356mb", // modify JSON body
      textLimit: "356mb", // modify text body
      formidable: {
        maxFileSize: 350 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
