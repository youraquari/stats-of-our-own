import { Work } from "./types";

export const drawerWidth = 360;

export function getTitles(works: any) {
  const titles = works.map((work: { title: string }) => work.title);
  return titles;
}

export function getKudos(works: any) {
  const kudos = works.map((work: { kudos: string }) => parseInt(work.kudos));
  return kudos;
}

export function getHits(works: any) {
  const hits = works.map((work: { hits: string }) => parseInt(work.hits));
  return hits;
}

export function getBookmarks(works: any) {
  const bookmarks = works.map((work: { bookmarks: string }) =>
    parseInt(work.bookmarks),
  );
  return bookmarks;
}

export function getBatchHitsKudosRatio(hits: number[], kudos: number[]) {
  if (hits.length !== kudos.length) {
    return []; // TODO: Handle error
  }
  const hitsKudosRatio = [];
  for (let i = 0; i < hits.length; i++) {
    hitsKudosRatio.push(getHitsKudosRatio(hits[i], kudos[i]));
  }
  return hitsKudosRatio;
}

export function getHitsKudosRatio(hits: number, kudos: number) {
  return Math.round((kudos / hits) * 100);
}
