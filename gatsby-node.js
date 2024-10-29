const path = require('path'); // Import the path module
const currencies = require('./src/data/currencies.json'); // Import the list of currencies

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  /**
   * Page for using DSG
   */
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  /**
   * Page for strategies
   */
  const template = path.resolve(`src/templates/technical-analysis.js`); // Adjust if necessary

  currencies.forEach(currency => {
    createPage({
      path: `/technical-analysis/${currency}`,
      component: template,
      context: {
        currencyPair: `${currency.toUpperCase()}USDT`, // Pass the currency pair
      },
    });
  });
}
