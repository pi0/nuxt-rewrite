// Detect rewrites in client-side and update browser URL in that case
// Doing this before router creation to prevent race-conditions
let historyTempURL

if (process.client) {
  const { pathname } = window.__NUXT__
  if (pathname && window.location.pathname !== pathname) {
    if (typeof history !== 'undefined') {
      historyTempURL = window.location.pathname
      history.replaceState(null, null, pathname)
    } else {
      window.location = pathname
    }
  }
}

export default function ({ req, beforeNuxtRender, app: { router } }) {
  // Preserve original requested URL in nuxtState
  if (process.server) {
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.pathname = req.url
    })
    return
  }

  if (historyTempURL) {
    router.onReady(() => {
      history.replaceState(null, null, historyTempURL)
      historyTempURL = undefined
    })
  }
}
