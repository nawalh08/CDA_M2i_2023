export class person {
    static count = 0;

    #id;
    #firstname;
    #lastname;
    #birth

    constructor(firstname, lastname, birth) {
        this.id = ++person.count;
        this.firstname = firstname;
        this.#lastname = lastname;
        this.birth = birth;

    }
    get id() {
        return this.#id;
      }

    get fullname() {
        return `${this.#toCapitilized(this.#firstname)} ${this.#lastname.toCapitilized()}`
    }

    #toCapitilized(text) {
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }

    get birth() {
        return this.#birth;
    }


    set firstname(value) {
        if (typeof value === "string") {
            if (value !== "Titi") {
                this.#firstname = value;
            } else console.warn("Titi isn't allowed");
        } else console.warn("It's not a string!");
    }


}