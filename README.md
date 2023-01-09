# site

source code for [my site](https://f2xiao.github.io/site)

# Development

```mermaid
---
title: App Store
---
classDiagram
  class State
  State : projects
  State : posts
  State : miniJavaScriptApps
  class Modules
  Modules : viewposts
```

```mermaid
---
title: viewposts module
---
classDiagram
  class State
  State : tags
  State : viewposts
  class Mutations
  Mutations : init
```

# License

The following directories and their contents are Copyright (c) 2023, Fangfang Xiao. You may not reuse anything therein without my permission:

```
posts/
src/assets
data.json
```

