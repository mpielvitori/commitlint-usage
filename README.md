# Commit lint basic configuration

Extending [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

Quick types ref:
```
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'breaking',
  'config',
  'no-release'
]
```

## Option 1(current project configuration)
Using `.huskyrc` file
* Install commitlint libraries globally
`npm i -g @commitlint/cli @commitlint/config-conventional`

* Create project husky hooks
`npm i`

## Option 2
Configuring husky on `package.json`

* Add following config
```
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "devDependencies": {
    "@commitlint/cli": "latest",
    "@commitlint/config-conventional": "latest",
    "husky": "latest"
  }
}
```

* Create project husky hooks
`npm i`

## Option 3
Run on gitlab pipeline linting the last commit
```
  before_script:
    - npm i -g @commitlint/cli @commitlint/config-conventional
    - echo $(git log -1 --pretty=%B) | commitlint
```

Or linting all the commits to merge
```
  before_script:
    - npm i -g @commitlint/cli @commitlint/config-conventional
    - commitlint --from=$CI_BUILD_BEFORE_SHA
```

## Option 4
Add [GitLab push rules](https://docs.gitlab.com/ee/push_rules/push_rules.html)

```
(^(Notes added by \'git notes add\'))|(^(feat|fix|docs|breaking|config|no-release|style|refactor|test|build|ci|perf|chore)(\(.+\))?\:\s(.{3,}))
```

Regex using workaround for semantic release -> [issue](https://github.com/semantic-release/semantic-release/issues/1446)
