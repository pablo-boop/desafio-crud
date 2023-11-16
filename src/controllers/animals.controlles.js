import Animal from '../models/animals/Animal.js'
import AnimalList from '../models/animals/AnimalList.js'

const list = new AnimalList();

export const getAnimals = (req, res) => {
    const animals = list.getAnimals();
    const filterTypes = animals.map((animal) => animal.type)

    if (animals.length) {
        return res.status(200).send({ todosAnimais: list.animals.length, animaisPorTipo: filterTypes, animals })
    }

    return res.status(200).send({ message: "Animais não cadastrados" })
}

export const getAnimalById = (req, res) => {
    const { id } = req.params;
    const animal = list.getAnimalById(id);

    if (!animal) {
        return res.status(404).send({ message: "Animal não encontrado!" });
    }

    return res.status(200).send(animal)
}

export const addAnimal = (req, res) => {
    const { name, type, age, color, img, vaccine } = req.body;
    const animal = new Animal(name, type, age, color, img, vaccine);

    const isURLValida = (url) => {
        if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return true;
        } else {
            return false;
        }
    }

    if (name.length < 3 || name.length > 50) {
        return res.status(400).send({ message: "Tipo de nome inválido!" });
    } else if (!Number.isInteger(age)) {
        return res.status(400).send({ message: "Idade inválida!" });
    } else if (type == Number) {
        return res.status(400).send({ message: "O tipo precisa ser String!" });
    } else if (type.length > 30) {
        return res.status(400).send({ message: "O tamanho de tipo é inválido!" });
    } else if (color == Number) {
        return res.status(400).send({ message: "O tipo precisa ser String!" });
    }
    else if (color.length > 20) {
        return res.status(400).send({ message: "O tamanho de cor é inválido!" });
    } else if (typeof vaccine == Boolean) {
        return res.status(400).send({ message: "o tipo de vacina não está sendo booleano!" });
    } else if (!isURLValida(img)) {
        return res.status(400).send({ message: "URL da imagem é inválido!" });
    }

    list.addAnimal(animal);

    return res.status(200).send(animal)
}

export const updateAnimal = (req, res) => {
    const { id } = req.params;
    const { name, type, age, color, img, vaccine } = req.body;

    const animal = list.getAnimalById(id);

    if (!animal) {
        return res.status(400).send({ message: "animal não encontrado!" })
    }

    list.updateAnimal(id, name, type, age, color, img, vaccine);

    return res.status(200).send(animal);
}

export const deleteAnimal = (req, res) => {
    const { id } = req.params;
    const animal = list.getAnimalById(id);

    if (!animal) {
        return res.status(400).send({ message: "animal não encontrado!" })
    }

    list.deleteAnimal(id);

    return res.status(200).send(animal)
}