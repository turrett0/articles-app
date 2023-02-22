import { IPagination } from '../../shared'

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
  text: string
}

export type IArticlesSearchParams = {
  title?: string | null
  startDate?: string | null
  endDate?: string | null
}

export type TGetArticlesRequestParams = IPagination & IArticlesSearchParams
