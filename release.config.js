const name = process.env.APP_NAME;
const tag = process.env.IMAGE_TAG;

module.exports = {
  branches: ["main"],
  tagFormat: name + '-' + tag + '-plural' + '-v${version}',
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ],
  commitPaths: [
    name,
  ]
};
