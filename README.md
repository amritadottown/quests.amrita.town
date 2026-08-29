# quests.amrita.town

cool ideas that the [amrita.town](https://amrita.town) community wants to see
built, for the community by the community. [https://quests.amrita.town](https://quests.amrita.town)

## what is inside

The site is one page with two sections:

- **unclaimed quests** — ideas waiting for people to pick them up.
- **completed quests** — projects the community already shipped.

Each quest is a markdown file in `src/quests`. The page renders every file.
There is no other content source. Every card shows a placeholder image until
the quest gets a real one.

## stack

The site mirrors [clubs.amrita.town](https://clubs.amrita.town):

- Astro 6, static output.
- One page, no scripts, no runtime.
- Cloudflare static assets via `wrangler.jsonc`.

## commands

Run these commands in the project folder.

- `bun install` — install the dependencies.
- `bun run dev` — start the dev server.
- `bunx astro check` — typecheck the project.
- `bun run build` — build the production bundle into `dist`.
- `bun run preview` — preview the production bundle.
- `wrangler deploy` — deploy `dist` to Cloudflare.

## adding a quest

Create a file in `src/quests`, for example `src/quests/my-idea.md`:

```md
---
name: my-idea.amrita.town
status: unclaimed
order: 5
repo: https://github.com/example/my-idea
image: /my-idea.png
---
```

Frontmatter fields:

| field    | required | meaning                                       |
| -------- | -------- | --------------------------------------------- |
| `name`   | yes      | the quest name, shown on the card             |
| `status` | yes      | `unclaimed` or `completed`                    |
| `order`  | yes      | sort order within its section                 |
| `repo`   | no       | link to the repository, shown as `repo`       |
| `site`   | no       | link to the live site, shown as `site`        |
| `image`  | no       | path or url of the card image, 16:9           |

Every card shows `/placeholder.svg` until the quest sets `image`. Put the
image in `public/` and reference it with a leading slash, for example
`/my-idea.png`. A 16:9 image works best; the card crops with `object-fit:
cover`.

`order` numbers do not need to be unique across sections. The sections sort
independently.

## brand

The site uses the canonical [amrita.town.css](https://github.com/amritadottown/amrita.town.css)
stylesheet, vendored at `src/styles/style.css`, and the canonical logo at
`public/favicon.png`. Keep both copies in sync with the brand repo.

The canonical sheet has no quest-card component. The local component lives in
`src/styles/quests.css` and uses brand tokens only. If the component ever
becomes canonical, move it upstream and delete the local copy.