import { ChartType } from 'chart.js'

export type User = {
  username: string
  bio?: string
}

export type Work = {
  authors: string[]
  bookmarks: number
  categories: string[]
  chapter_titles: string[]
  characters: string[]
  comments: number
  complete: boolean
  date_updated: string
  expected_chapters: number
  fandoms: string[]
  hits: number
  id: number
  kudos: number
  language: string
  nchapters: number
  rating: string
  relationships: string[]
  restricted: boolean
  series: string[]
  status: string
  summary: string
  tags: string[]
  title: string
  warnings: string[]
  words: number
}

export type MinimalDataset = {
  type: ChartType
  label: string
  data: number[]
  color: string
  hidden: boolean
}
