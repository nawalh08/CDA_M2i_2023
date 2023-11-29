export class person {
    static count = 0;

    constructor(firstname, lastname, birth ){
        this.id = ++person.count;
        this.firstname = firstname;
        
    }
}