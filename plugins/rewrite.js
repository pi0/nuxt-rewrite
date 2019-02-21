export default function ({ req, beforeNuxtRender, app }) {
  if (process.server) {
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.pathname = req.url
    })
  } else {
    const { pathname } = window.__NUXT__
    if (pathname && window.location.pathname !== pathname) {
      window.location = pathname
    }
  }
}
