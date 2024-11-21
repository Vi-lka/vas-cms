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
            t.boolean('subscribedContent');
            t.boolean('subscribedReport');
            t.boolean('report');
            t.json('metadata');
            t.string('status');
            t.string('statusComment');
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
            t.string('image', {
              type: 'UploadFileEntityResponse',
              resolve: async (root, args) => {
                const userData = await strapi.db.query('plugin::users-permissions.user').findOne({
                  select: [],
                  where: { id: root.id },
                  populate: { image: true },
                });
                const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
                return toEntityResponse(userData.image ?? null, {
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
  async bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],

      async beforeUpdate(event) {
        const { data, where } = event.params

        const id = where.id

        const existingData = await strapi.entityService.findOne("plugin::users-permissions.user", id)

        if (existingData.subscribedReport && (data.status !== undefined) && (data.status !== existingData.status)) {
          const statusCommentChanged = data.statusComment && (data.statusComment.length > 1) && (existingData.statusComment !== data.statusComment)

          const emailTemplate = {
            subject: 'Статус Заявки - VII (XXIII) Всероссийский Aрхеологический Cъезд',
            text: `Статус Вашей Заявки сменился на: ${data.status}.`,
            html: `
              <h3>Статус Вашей Заявки сменился</h3>
              <p>На: <b>${data.status}</b></p>
              ${statusCommentChanged 
                ? `
                  <p>Комментарий: </p>
                  <p>${data.statusComment}</p>
                  ` 
                : ``
              }
              <p>Вы получили это сообщение, потому что подписаны на рассылку о статусе заявки.</p>
              <p>Чтобы отключить рассылку <a href="https://vas.sfu-kras.ru/account">Перейдите в профиль ↗</a></p>
            `,
          };

          await strapi.plugins['email'].services.email.sendTemplatedEmail(
            {
              to: existingData.email,
              // from: is not specified, the defaultFrom is used.
            },
              emailTemplate,
            // {
            //   user: _.pick(user, ['username', 'email', 'firstname', 'lastname']),
            // }
          );
        }
      },
    });
  },
};
