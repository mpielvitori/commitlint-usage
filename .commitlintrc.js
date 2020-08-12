module.exports = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  "rules": {
    "subject-case": [
      2,
      "always",
      ["sentence-case", "start-case", "pascal-case", "lower-case"]
    ],
    "header-max-length": [
      2,
      "always",
      120
    ],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "breaking",
        "config",
        "no-release"
      ]
    ]
  }
}
