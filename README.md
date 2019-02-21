# nuxt-rewrite

## What it does?

This is a [nuxt.js](https://github.com/nuxt/nuxt.js) module that adds edge-level rewrite support.

There are conditions that we need to rewrite routes via reverse-proxy, like nginx.
So that the final URL that users see is different from what is being rendered.
This breaks SSR hydration process becuase client side router tries to render and hydrate an invalid URL.

This module fixes this problem by preserving original rendered URL in the universal state and faking `vue-router` during initial render with History API. Users still see the requested URL because module reverts it back to the orginal non-rewritten one as soon as initial render happended.

## How to use this module?

Via NPM:

```
npm install nuxt-rewrite
```

Via Yarn:

```
yarn add nuxt-rewrite
```

Then add the module to the `modules[]` section of `nuxt.config`:

```js
{
  modules: [
    'nuxt-rewrite'
  ]
}
```

## Notes

- Having multiple routes that render the same content has really bad SEO effects. Using [Canonical](https://moz.com/learn/seo/canonicalization) meta-tag is mondatory.
- By doing rewrite at edge level, this happens for SSR requests only and not client-side navigations. So either:
  - Ensure no links in your application explicitly need rewrite
  - If for any reason you have such links, use plain `<a>` tag that causes a SSR render during navigation so rewrite happens

## Development / Demo

- Clone this repository
- Install dependencies with `yarn`
- Use `yarn dev` to run demo server.
- Navigate to http://localhost:3000/test . You should see `/` route being rendered correctly!

## License

MIT
