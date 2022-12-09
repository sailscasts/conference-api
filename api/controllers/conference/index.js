module.exports = {
  friendlyName: "Index",

  description: "Index conference.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.
    return [
      {
        name: "Black Hat",
        location: "Las Vegas",
      },
    ];
  },
};
