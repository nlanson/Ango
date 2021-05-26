import { Angoka } from '../src/angoka';


//Example with 100 strings.
for ( let i=0; i<100; i++ ) {
    
    //Generate non-Zero random number.
    let e = (): number => {
        let f: boolean = false;
        let n: number = 0;
        while ( !f ) {
            n = Math.floor(Math.random()*26);
            if ( n > 5 ) {
                f = true
            }
        }
        return n;
    };
    let r: number = e();


    //Generate string of length determined by the generated number.
    let s: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, r);


    //Pass random string into VevoAngo algo.
    let a = Angoka.VevoAngo()(s);


    //Log Input -> Output.
    console.log(`${s} -> ${a}`);
}
