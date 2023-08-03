import { Work } from './types'

export const drawerWidth = 360

export function getTitles(works: Work[]) {
  const titles = works.map((work: { title: string }) => work.title)
  return titles
}

export function getKudos(works: Work[]) {
  const kudos = works.map((work: Work) => work.kudos)
  return kudos
}

export function getHits(works: Work[]) {
  const hits = works.map((work: Work) => work.hits)
  return hits
}

export function getBookmarks(works: Work[]) {
  const bookmarks = works.map((work: Work) => work.bookmarks)
  return bookmarks
}

export function getNumChapters(works: Work[]) {
  const numChapters = works.map((work: Work) => work.nchapters)
  return numChapters
}

export function getBatchHitsKudosRatio(hits: number[], kudos: number[], numChapters: number[]) {
  if (hits.length !== kudos.length) {
    return [] // TODO: Handle error
  }
  const hitsKudosRatio = []
  for (let i = 0; i < hits.length; i++) {
    hitsKudosRatio.push(getHitsKudosRatio(hits[i], kudos[i], numChapters[i]))
  }
  return hitsKudosRatio
}

export function getHitsKudosRatio(hits: number, kudos: number, numChapters: number) {
  if (!hits || !kudos || hits === 0 || kudos === 0) {
    return 0
  }
  const avgHits = numChapters > 1 ? getAvgHits(hits, kudos, numChapters) : hits
  return Math.round((kudos / avgHits) * 100)
}

export function getAvgHits(hits: number, kudos: number, numChapters: number) {
  return Math.abs(hits - kudos * numChapters)
}

export function removeSpecialChars(id: string) {
  return id.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '')
}
