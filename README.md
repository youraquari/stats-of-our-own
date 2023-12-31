## ✏️ [SO3](https://stats-of-our-own.vercel.app/) - Stats of Our Own

### Introduction

A smart statistics page for Archive of Our Own (AO3) writers.

This was a lil weekend project to smartify AO3 stats. Made by yours truly. Feel free to contribute and/or hit me with a [Kofi](https://ko-fi.com/aquari)!

### Hits-Kudos Ratio

The widely used 'Golden Ratio' is 1 kudos per 10 hits, or 10%.

For works with > 1 chapter, we're averaging the number of hits per chapter with this calculation:

```bash
avgHits = totalHits - (totalKudos * numChapters)
```

The logic behind this calculation is not perfect, but has a reasonable amount of truth. For each chapter, we can assume with loose probability that each person who has left a kudos will read every chapter.

As always, take this calculation with a grain of salt and has room for improvement. Feel free to help me enhance this.

### Stack

- Front-End: Typescript + Nextjs + TailwindCSS + MUI
- Back-End: Python + Flask + the [unofficial AO3 API](https://github.com/ArmindoFlores/ao3_api)

### Setup

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Room for Improvement

#### Stats Over Time

- Something that I was bummed that the unofficial AO3 API didn't have natively. I would have to integrate a browser-based storage solution to track when a user calls the API so that when they come back, they can see that old information along with their new API call. Feels like a mess.

#### Subscriptions + Private Bookmarks + Comment Count

- In order to view more info about a specific work, you have to be logged in. The unofficial AO3 API has the capability for login, but I haven't looked too far into it.

#### Filtering + Enhanced Sorting

- Possibly a 2.0 item. Enable the ability to sort/filter by relationship, fandom, character, etc. Makes my brain feel fuzzy rn tho.
