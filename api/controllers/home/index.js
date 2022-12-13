module.exports = {
  friendlyName: 'Index',

  description: 'Index home.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.
    return {
      name: 'Conference API',
      description: 'Returns tech related conferences.',
    }
  },
}
