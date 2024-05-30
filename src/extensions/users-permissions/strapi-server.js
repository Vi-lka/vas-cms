module.exports = (plugin) => {
  // *** custom controller ***
  plugin.controllers.user.updateMe = async (ctx) => {
    // needs to be logged in
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }
    // Extract only the fields that need to be updated from the request body
    const updatedUserData = {
      // ...ctx.request.body,
      username: ctx.request.body.username,
      subscribed: ctx.request.body.subscribed,
      report: ctx.request.body.report,
      metadata: ctx.request.body.metadata
      // email: ctx.state.user.email || ctx.request.body.email,
    };
    try {
      // Update the user data in the database
      await strapi.query('plugin::users-permissions.user').update({
        where: { id: ctx.state.user.id },
        data: updatedUserData,
      })
      .then((res) => {
        ctx.response.body = res;
        ctx.response.status = 200;
      });
    } catch (error) {
      console.error('Error updating user data:', error);
      ctx.response.status = 500;
    }
  };

  // *** custom route ***
  plugin.routes['content-api'].routes.push({
    method: 'PUT',
    path: '/user/me',
    handler: 'user.updateMe',
    config: {
      prefix: '',
      policies: [],
    },
  });

  return plugin;
};