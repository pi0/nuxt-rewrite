// Detect rewrites in client-side and update browser URL in that case
if (process.client) {
  const { pathname } = window.__NUXT__
  if (pathname && window.location.pathname !== pathname) {
    if (typeof history !== 'undefined') {
      history.replaceState(null, null, pathname)
    } else {
      window.location = pathname
    }
  }
}

export default function ({ req, beforeNuxtRender }) {
  // Preserve original requested URL in nuxtState
  if (process.server) {
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.pathname = req.url
    })
  }
}
