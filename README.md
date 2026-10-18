# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

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

## 🖼️ Adding project previews

1. Drop images into `src/assets/projects/<slug>/` (png, jpg, webp, or gif). Astro resizes and converts them at build time.
2. In `src/data/projects.ts`, add them to that project:

   ```ts
   screenshots: [
     { file: "mech/hangar.png", alt: "Mech hangar screen", caption: "Loadout editor" },
   ],
   demoUrl: "https://claude.ai/...", // optional live demo; must be publicly shared
   ```

The first screenshot becomes the cover on the Showcase, project cards, and social previews. Set `featured: true` to show a project on the home page. If a referenced file is missing, the build fails with an error that names it.
