export default abstract class BaseEncryptorClass {

    constructor(
        public input: string
    ) { }

    abstract compute(): string;
}