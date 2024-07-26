export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  tags: string[]
  thumbnail: string
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}
