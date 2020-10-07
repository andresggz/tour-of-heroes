import { Hero }from './hero.model';

export interface ResponsePaginationHero {
    result: Hero[],
    total: number,
    page: number,
    returnedRecords: number
}