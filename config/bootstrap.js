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
      name: 'DevFest Lagos',
      city: 'Lagos',
      country: 'Nigeria',
      date: 'Sat, Nov 26, 8:00 AM',
      location:
        'Landmark Event Center - Plot 3 & 4, Water Corporation Road, Oniru, Victoria Island Annex, Lagos Lagos, 101233',
      twitterUrl: 'https://twitter.com/gdglagos',
      website:
        'https://gdg.community.dev/events/details/google-gdg-lagos-presents-devfest-lagos-2022/',
    },
  ])
  // ```
}
