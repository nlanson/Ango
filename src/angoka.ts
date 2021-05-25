import { VevoAngo } from './algorithms/VevoAngo';

export class Angoka {
    static VevoAngo(): (e: string) => string {
        const a = (b: string): string => {
            let c = new VevoAngo(b);
            let d = c.compute();
            return d;
        }

        return a;
    }
}