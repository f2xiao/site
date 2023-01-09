# site

source code for [my site](https://f2xiao.github.io/site)

# Development

```mermaid
classDiagram
  App Store <|-- viewposts : Modules
  App Store : State
  App Store : Modules
  viewposts : State
  viewposts: Mutations
  class State
  State : projects
  State : posts
  State : miniJavaScriptApps
  class Modules
  Modules : viewposts
```

```mermaid
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

