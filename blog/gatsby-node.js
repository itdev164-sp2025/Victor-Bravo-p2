const path = require('path');
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulVideoTutorial {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      result.data.allContentfulVideoTutorial.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: require.resolve(`./src/templates/tutorial.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })

      resolve();
    })
  })
}
        