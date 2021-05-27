import { VevoAngo } from './algorithms/VevoAngo';

export class Angoka {
    //This function returns a function that returns a number.
    public static VevoAngo(): (packInput: string) => number {
        const func = (userInput: string): number => {
            let hashClass = new VevoAngo(userInput);
            let output = hashClass.compute();
            return output;
        }

        return func;
    }

    public static noHash(): (packInput: string) => string {
        const func = (userInput: string): string => {
            return userInput;
        }

        return func;
    }
}