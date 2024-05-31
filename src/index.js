'use strict';

module.exports = {
  
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: 'UsersPermissionsMe',
          definition(t) {
            // here define fields you need
            t.boolean('subscribed');
            t.boolean('report');
            t.json('metadata')
            t.string('file', {
              type: 'UploadFileEntityResponse',
              resolve: async (root, args) => {
                const userData = await strapi.db.query('plugin::users-permissions.user').findOne({
                  select: [],
                  where: { id: root.id },
                  populate: { file: true },
                });
                const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
                return toEntityResponse(userData.file ?? null, {
                  args,
                  resourceUID: "plugin::uploads.uploads",
                })
              },
            });
          },
        }),
      ]
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
