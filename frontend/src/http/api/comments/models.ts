export interface IComment {
  article: string;
  id: number;
  text: string;
  user: string;
}

export interface ICreateCommentFormData {
  title: string
  content: string
}
