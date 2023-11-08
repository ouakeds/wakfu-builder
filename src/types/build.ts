import { Cost } from "./cost";
import { Level } from "./level";

export default interface Build {
    id: string;
    name: string;
    job: string; // classe of character -> class is a reserved word
    author: string;
    items: [];
    favorite: boolean;
    votes: {
        upvotes: number;
        downvotes: number;
    }
    level: {
        start: Level,
        end: Level;
    }
    cost: Cost;
    pve: boolean;
}