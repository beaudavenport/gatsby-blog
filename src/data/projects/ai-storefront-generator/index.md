---
type: projects
title: AI Storefront Generator
url: https://beaudavenport.github.io/ai-storefront-generator/
techStack: Gatsby, Bulma, Google Cloud Platform (Natural Language API), Deep AI API
deployDate: Dec 2020
caption: 'A silly assortment of e-commerce storefronts created with the power of machine learning!'
thumbnail: './images/desktop/ai-storefront-desktop-3.png'
---

AI Storefront Generator was my submission for the [Gatsby Silly Site Challenge 2020](https://www.gatsbyjs.com/blog/silly-site-challenge/). It takes a given text prompt, uses Google's Natural Language API to analyze the text, then uses Deep AI to generate a variety of products in a fake e-commerce storefront.

Much like this blog/portfolio site, it leverages Gatsby to generate a static site, which is then deployed on its own. The storefront generator also supports contributions via pull request to add new "prompts", allowing others to create their own storefronts.

**Unique Solutions**: Using Gatsby's Node API to interface with two seperate API's at build time was interesting, particularly when I encountered intermittent timeouts on the Deep AI API. In the end, I added functionality so that the build process would handle timeouts gracefully and fall back to the mock services I had used for initial development.