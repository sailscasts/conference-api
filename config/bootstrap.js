/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

require('dotenv').config()
module.exports.bootstrap = async function () {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if ((await Conference.count()) > 0) {
    return
  }

  await Conference.createEach([
    {
      name: 'Sailsconf 2023',
      city: 'Port Harcourt',
      country: 'Nigeria',
      date: 'June 14 - 16, 2023',
      location: 'https://youtube.com/@sailscasts',
      twitterUrl: 'https://twitter.com/sails_conf',
      website: 'https://sailsconf.com',
    },
  ])
  // ```
}
