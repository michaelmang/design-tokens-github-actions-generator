<div align="center">
<h1>🎨 Design Tokens | Github Actions Generator</h1>
  
![style-dictionary](https://pbs.twimg.com/media/EswGlXQXAAA5prH?format=jpg&name=small)

<p>Generates a custom YAML file for common GitHub Actions workflows to automate the design token process.</p>

  
[Try it yourself](https://design-tokens-github-actions-generator.netlify.app/)

![design-tokens-github-actions-generator](https://user-images.githubusercontent.com/22566333/106957065-8774ac80-6705-11eb-84bf-6a7f78a9ad18.gif)

This tool was built using [Gatsby](https://www.gatsbyjs.com/) and [GitHub's Primer components](https://primer.style/components/).

</div>

---

## The motivation

I'm a visual person. I'm a UI developer.

When I went through the process of coming up with GitHub Action workflows for [my series on design tokens](https://www.michaelmang.dev/blog/introduction-to-design-tokens), I went googling for a "GitHub Actions generator."

I wanted to have a visual tool that I could interact with that would write the commands using [GitHub Actions syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions) to a YAML file.

I wasn't able to find a tool like, so I started to make one for my own.

Turns out, it's a lot of work to handle all the syntax. For example, the `on` property can a large combination of [events that trigger the workflow](https://docs.github.com/en/actions/reference/events-that-trigger-workflows).

I decided to cut the scope of my initial idea and just create a visual tool that generates the YAML files for [the workflows I created in my design tokens ](https://github.com/michaelmang/style-dictionary/tree/consuming-design-tokens-from-style-dictionary-with-github-actions/.github/workflows).

- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Roadmap 🚀

### My Roadmap
- [x] Transform Design Tokens On Update
- [x] Deliver Design Tokens To Consuming Applications ~ in the works

### If People Like the Idea/Wanted to Help Contribute
- [] Refactor
- [] Add More Control Over Options (updating the virtual environment, Node versions, etc.)
- [] Create More Design Tokens Automations Based On Community Input
- [] Have A Single Page for Doing the Automations
- [] Expand Automations Beyond Design Tokens
- [] Allow The User To Create A Workflow W/O An Automation (map forms to the GitHub Actions syntax)
- [] Allow The User To Select From Pre-Defined Actions In the Marketplace
- [] Whatever else would be of interest

## Contributing 💡
_Looking to contribute?_

Feel free to pick up one of the items on the roadmap.

## Contributors 😀
Yours truly.

Contribute to have your name, avatar, and a link added!
