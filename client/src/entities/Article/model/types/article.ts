import { type User } from 'entities/User'

export enum ArticleContentType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export enum ArticleType {
    IT = 'IT',
    NATURE = 'NATURE',
    SCIENCE = 'SCIENCE'
}

export interface ArticleContentBase {
    id: string
    type: ArticleContentType
}

export interface ArticleCodeContent extends ArticleContentBase {
    type: ArticleContentType.CODE
    code: string
}

export interface ArticleImageContent extends ArticleContentBase {
    type: ArticleContentType.IMAGE
    src: string
    title?: string
}

export interface ArticleTextContent extends ArticleContentBase {
    type: ArticleContentType.TEXT
    title?: string
    paragraphs: string[]
}

export type ArticleContent = ArticleCodeContent | ArticleImageContent | ArticleTextContent

export interface Article {
    id: string
    user: User
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    content: ArticleContent[]
}

export enum ArticleDisplayType {
    COMPACT = 'compact',
    SINGLE = 'single'
}
