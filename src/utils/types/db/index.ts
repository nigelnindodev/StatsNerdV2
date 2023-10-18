/**
 * File contains data types for to be used to inert new data to the database.
 * For reading data off the database, we'll make use of the entity itself as
 * it has more meta data i.e insert_id, created/updated at.
 */

import { BetProviders, Games } from "../common";

export interface TwoWayGameEvent {
    betProviderName: BetProviders;
    betProviderId: string;
    clubA: string;
    clubB: string;
    oddsAWin: number;
    oddsBWin: number;
    gameName: Games;
}

export interface ThreeWayGameEvent {
    betProviderName: BetProviders;
    betProviderId: string;
    clubA: string;
    clubB: string;
    oddsAWin: number;
    oddsBWin: number;
    oddsDraw: number;
    gameName: Games;
}
