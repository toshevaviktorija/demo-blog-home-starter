import '../styles/globals.scss'
import { UniformTracker } from "@uniformdev/optimize-tracker-react";
import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import intentManifest from "../lib/uniform/contextManifest.json"

const localTracker = createDefaultTracker({
  intentManifest
})

function MyApp({ Component, pageProps }) {
  return (
    <UniformTracker tracker={localTracker}>
      <Component {...pageProps} />
    </UniformTracker>
  )
 
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
