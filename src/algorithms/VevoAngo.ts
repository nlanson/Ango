import BaseEncryptorClass from '../common/BaseEncryptionModule'; 

export class VevoAngo extends BaseEncryptorClass {
    
    constructor( 
        public input: string 
    ) {
        super( input );
    }

    public compute(): any {
        var h: number = 0;
        if (this.input.length == 0) {
            return h;
        }
        for (var i = 0; i < this.input.length; i++) {
            var chr: number = this.input.charCodeAt(i);
            h = ((h<<5)-h)+chr;
            h |= 0;
        }
        return h;
    }

    
}