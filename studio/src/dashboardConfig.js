export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626d6034d7f289177641c938",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-esa735z6",
                  apiId: "8f69dc3b-3c67-4aba-b8f2-313c52b526ee",
                },
                {
                  buildHookId: "626d6035a2fb4e17c0c41b49",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ar8knhva",
                  apiId: "9e0a697f-55c6-4239-949d-c020c2c01ccf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nilis24/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ar8knhva.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
