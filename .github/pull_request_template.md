- Give your PR a recognizable title. For example: "FE-123: Add new prop to component" or "Resolve Issue #123: Fix bug in component"
- Your PR title will be visible in changelogs

### What Changed

- What changes does this PR propose?
- Provide screenshots or [screen recordings](https://getkap.co/) for any visual changes.

### How To Test or Verify

- Describe any steps that may help reviewers verify changes.
- Anything beyond basic unit testing, such as assistive tech usage, or special interactions.

### PR Checklist

Below are some checklists to follow for the correct procedure in different circumstance. The first list ("All PRs Checklist") should be followed for ALL PRs. The next 2 are additive to this list depending on what type of PR you are using.

For example: If you are submitting a content change to one of the support documents, your checklist would include the:

- "All PRs Checklist"
- AND the "Content Changes Checklist

If you are submitting a feature addition, enhancement, or bug fix, your checklist would include the:

- "All PRs Checklist"
- AND the "Development Changes Checklist"

#### All PRs Checklist

- [ ] Give your pull request a meaningful name.
- [ ] Use lowercase filenames.
- [ ] Apply at least one team label according to which team is the content expert (ie. `team-FE` or `team-SAZ`)
- [ ] Pull request approval from the FE team or content experts (see label applied above) that isn't the content creator.

#### Content Changes Checklist

- [ ] Check that your article looks correct in the preview here or in a [Netlify deploy preview](https://app.netlify.com/sites/support-docs/deploys).
- [ ] Check the links in your article.
- [ ] Check the images in your article (if there are any)
- [ ] Check to make sure you are using markdown appropriately as outlined in `examples/article.md` in the root of the project directory and on the momentum doc's [preface article](https://support.sparkpost.com/momentum/4/4-preface)
- [ ] Check to make sure the [Copy and Tone Guidelines are followed](https://docs.google.com/document/d/1dej9J7N9M8lcbJXnT9kxyNB_EFBPHIBLZBbHaxRWqhQ/edit).

#### Development Changes Checklist (some checks are automatic github actions and will not be listed here. ie. "all tests pass")

- [ ] The appropriate tests are created in `cypress/` directory in the root of the project
- [ ] The lighthouse score is passing according to the [FE Support Docs' Service Outline](https://sparkpost.atlassian.net/wiki/spaces/ENG/pages/1238728726/FE+Support+Docs) SLI/SLOs
