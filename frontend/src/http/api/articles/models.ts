export interface IArticlePreview {
  date: string
  id: string
  title: string
}

export interface IArticle {
  date: string
  id: string
  text: string
  title: string
}

export interface ICreateArticleFormData {
  title: string
  content: string
}
