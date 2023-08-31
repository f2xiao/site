# site

source code for [my site](https://f2xiao.github.io/site)

# Development

App Store:

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

Modules viewposts:

```mermaid
classDiagram
  class State
  State : tags
  State : viewposts
  class Mutations
  Mutations : init
```
## Post
```mermaid
flowchart LR;
  markdown.md-->vue.component-->html 
```
markdown.md file is parsed by `markdown-it` and styled with `highlightjs`, mermaid graph is supported by `markdown-it-mermaid` 

NOTE: `markdown-it-mermaid` can only parse 'GRAPH' in the markdown file at this moment 

# Deployment


# License

The following directories and their contents are Copyright (c) 2023, Fangfang Xiao. You may not reuse anything therein without my permission:

```
posts/
src/assets
data.json
```

