import adapter from "@sveltejs/adapter-static"; 

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "../docs",
            assets: "../docs"
        }),
        prerender: {
            default: true,
          },
        paths: {
            // change below to your repo name
            base: "/master-thesis",
        },
    }
};

export default config;