module.exports = {
  friendlyName: 'Index',

  description: 'Index home.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.
    return {
      conferencesUrl: `${sails.config.custom.baseUrl}/conferences`,
      conferenceUrl: `${sails.config.custom.baseUrl}/conferences/{ID}`,
      meta: {
        hostUrl: 'https://render.com',
        databaseProviderUrl: 'https://neon.tech',
        sailscastsCommunityUrl: 'https://sailscasts.com/chat',
      },
    }
  },
}
