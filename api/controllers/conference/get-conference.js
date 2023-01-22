module.exports = {
  friendlyName: 'Get conference',

  description: '',

  inputs: {
    id: {
      type: 'number',
      description: 'The ID for the conference',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ id }) {
    const conference = await Conference.findOne(id)
    // All done.
    return {
      success: true,
      data: conference,
    }
  },
}
