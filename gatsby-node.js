const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const basePath = `data/${node.frontmatter.type}/`;
    const slug = createFilePath({ node, getNode, basePath });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'desktopImagesDir',
      value: `${slug.substring(1, slug.length - 1)}/images/desktop`,
    });
    createNodeField({
      node,
      name: 'mobileImagesDir',
      value: `${slug.substring(1, slug.length - 1)}/images/mobile`,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___publishDate] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              type
            }
            fields {
              slug
              desktopImagesDir
              mobileImagesDir
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.type)}.js`,
        ),
        context: {
          desktopImagesDir: node.fields.desktopImagesDir,
          mobileImagesDir: node.fields.mobileImagesDir,
        }, // additional data can be passed via context
      });
    });
    Promise.resolve();
  });
};
