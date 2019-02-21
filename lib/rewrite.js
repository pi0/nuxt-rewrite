// Detect rewrites in client-side and update browser URL in that case
// Doing this before router creation to prevent race-conditions
let historyTempURL

if (process.client) {
  const { url } = window.__NUXT__

  const windowUrl = window.location.pathname  + window.location.search

  if (url && windowUrl && windowUrl !== url) {
    if (typeof history !== 'undefined') {
      historyTempURL = windowUrl
      history.replaceState(undefined, undefined, url)
    } else {
      window.location = url
    }
  }
}

export default function ({ req, beforeNuxtRender, app: { router } }) {
  // Preserve original requested URL in nuxtState
  if (process.server) {
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.url = req.url
    })
    return
  }

  if (historyTempURL) {
    router.onReady(() => {
      history.replaceState(undefined, undefined, historyTempURL)
      historyTempURL = undefined
    })
  }
}
