import { defineConfig } from "vite";

// Nothing fancy needed here -- app.js is a big classic script (not an ES
// module), so it's left alone rather than run through Vite's JS bundling
// pipeline; Vite still serves/copies it as a static asset and handles the
// module-based files (main.js and everything it imports) normally.
export default defineConfig({
  build: {
    // The bundled output can get large (app.js alone is ~360KB before
    // gzip, plus the whole exercise library baked into it) -- that's
    // expected for this app, so raise the warning threshold rather than
    // chase a false "this is too big" signal.
    chunkSizeWarningLimit: 1000,
  },
});
