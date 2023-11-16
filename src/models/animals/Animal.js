import { v4 as uuidv4 } from 'uuid';

export default class Animal {
    constructor(name, type, age, color, img, vaccine) {
        this.id = this.generateId();
        this.name = name;
        this.type = type;
        this.age = age;
        this.color = color;
        this.img = img;
        this.vaccine = vaccine;
    }

    generateId() {
        return uuidv4()
    }
}