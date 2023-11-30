require("dotenv").config({ path: ".env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH_FRONTEND,
  DEPLOY_REF,
  DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH_FRONTEND,
      "post-setup": `cd ${DEPLOY_PATH_FRONTEND}/source/frontend && npm i && npm run build `,
    },
  },
};
