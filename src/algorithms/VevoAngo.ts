import BaseEncryptorClass from '../common/BaseEncryptionModule'; 

export class VevoAngo extends BaseEncryptorClass {
    
    constructor( 
        public input: string 
    ) {
        super( input );
    }

    public compute(): string {
        //Will have ciphering pipes.
        
        return this.input;
    }
}