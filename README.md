# Utility functions **for Node.js**

See also [@twodash/universal](#) for all platforms, and [@twodash/browser](#) for the browser (including Webpack). Planned for the future are more platform-specific functions: "@twodash/rnative" for React Native, "@twodash/ionic", and in a galaxy far far away "@twodash/quasar".

# Installation

These are exported for your choice of environment. When importing, specify **cjs**/**esm**/**\_\_** format. The **\_\_** is meant to be used with the browser `<script>` tag. It creates a `window.__` variable.

```JavaScript
  import { sort_by_rating_and_position } from "@twodash/universal/esm/sort_strings"
```

```JavaScript
  const sort_strings = require("@twodash/universal/esm/sort_strings")
```

Why not UMD modules standard? **Code splitting**. By specifying your choice "esm" (ES Modules), "cjs" (CommonJS) or "\_\_" (`window.__`), you're able to download only the specific functions you actually need, not everthing else. Additionally on the browser, you can download multiple times using multiple`<script>`tags (for example both`twodashes-universal`and`twodashes-browser`, or`/sort_strings`and`/arrays`). All downloaded scripts will be combined into one single flat`window.__` dictionary/object. See [code sandbox](https://codesandbox.io/s/twodashes-universal-demo-2r4os). Please do message ([Paul](https://paulshorey.com)) if this is unclear, or if may know a better way of accomplishing all this.

# Documentation

- coming soon - for now please see "./src" folder which uses standard JsDoc comments

# Not ready

Currently under development. Not stable. Adding more functions.
