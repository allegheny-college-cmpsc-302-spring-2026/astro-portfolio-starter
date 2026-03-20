# Portfolio Starter Kit

[![Gatorgrade](../../actions/workflows/grade.yml/badge.svg?branch=main)](../../actions/workflows/grade.yml)
[![Playwright Tests](../../actions/workflows/playwright.yml/badge.svg?branch=main)](../../actions/workflows/playwright.yml)

### Enabling Site Build

This site deploys via Github Pages using the Astro static site building system.

1. Go to the `Settings` menu on this repository and locate the `Pages` submenu.

![GitHub Settings, Pages submenu](https://raw.githubusercontent.com/ReadyResearchersTemplates/site-template/media/img/600%20-%20Site%20Template%20-%20Github%20Pages%20Menu.png)

2. On the resulting screen, find the `Build and deployment` menu; select `GitHub Actions`

![GitHub pages, Build and Deployment item](https://raw.githubusercontent.com/ReadyResearchersTemplates/site-template/media/img/600%20-%20Site%20Template%20-%20Github%20Actions%20Menu.png)

## Dependencies

This repository uses both `node` and `python`; it contains setup for typical Allegheny College
CIS department build using `uv`. Grader setup is only required for a student's time
in CMPSC 302, and should be removed after the course has been completed.

In addition, this project uses [Playwright](https://playwright.dev/), a testing framework for 
web applications, to test and evaluate the end product of various exercises and the overall
course project.

### Installation

#### `node`

The easiest way to install and manage your `node` installation is to use `nvm`.

|OS |Repository |
|:--|:----------|
|Windows |[nvm-windows](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file) |
|Apple, Unix |[nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) |


#### `uv`

If you already have `uv` installed _or_ have another installation of Python already installed,
you can skip this dependency.

##### Mac and Unix

Use `curl` to download and install the package manager:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

>[!NOTE]
> In the event of an error, you should also try:
> ```bash
> wget -qO- https://astral.sh/uv/install.sh | sh
> ```

##### Windows

Use `Powershell` to install `uv`:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

##### Installing `Python`

Use `uv` to install the latest version of Python:
```bash
uv python install
```

To verify your installation, run:
```bash
uv run python --version
```

#### `node` dependencies

Once the above steps are complete, run:
```bash
npm install
```

#### Test your installation

##### `astro`

To test your installation, run:
```bash
npm run dev
```

##### `uv`

To test your installation, and the grader, run:
```bash
uv run gatorgrade
```

## README

This document will be revised as part of coursework. On final submission of this portfolio site,
this `README` should/will be revised to remove much of the information below, which is provided
for students to learn more about the build system supporting our work.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
