const config = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        preset: "angular",
        releaseRules: [
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
          { type: "test", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "build", release: "patch" },
          { type: "perf", release: "patch" },
          { breaking: true, release: "major" }, // Breaking changes
          { revert: true, release: "patch" }, // Reverts
          { type: "feat", release: "minor" }, // New features
          { type: "fix", release: "patch" }, // Bug fixes
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "build", section: "Build System", hidden: false },
            { type: "chore", section: "Build System", hidden: false },
            { type: "ci", section: "Continuous Integration", hidden: false },
            { type: "docs", section: "Documentation", hidden: false },
            { type: "feat", section: "Features", hidden: false },
            { type: "fix", section: "Bug Fixes", hidden: false },
            {
              type: "perf",
              section: "Performance Improvements",
              hidden: false,
            },
            { type: "refactor", section: "Code Refactoring", hidden: false },
            { type: "style", section: "Styles", hidden: false },
            { type: "test", section: "Tests", hidden: false },
          ],
        },
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        pkgRoot: ".",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "dist/*.js",
          "dist/*.js.map",
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
  preset: "angular",
  tagFormat: "v${version}",
};

module.exports = config;
