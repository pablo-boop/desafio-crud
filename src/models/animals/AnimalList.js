export default class AnimalList {
    constructor() {
        this.animals = [];
    }

    getAnimals() {
        return this.animals;
    }

    getAnimalById(id) {
        return this.animals.find((animal) => animal.id === id)
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    updateAnimal(id, name, type, age, color, img, vaccine) {
        const animal = this.getAnimalById(id);

        if (animal) {
            animal.name = name;
            animal.type = type;
            animal.age = age;
            animal.color = color;
            animal.img = img;
            animal.vaccine = vaccine;
        }
        return animal;
    }

    deleteAnimal(id) {
        this.animals = this.animals.filter((animal) => animal.id !== id)
    }
}