module.exports = {
  friendlyName: 'Index',

  description: 'Index conference.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const conferences = await Conference.find()
    // All done.
    return {
      success: true,
      data: conferences,
    }
  },
}
