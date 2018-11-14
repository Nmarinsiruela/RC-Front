export class Character {
    id: number;
    name: string;
    status: string;
    image: string;

    constructor(id: number, name: string, status: string, image: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.image = image;
    }
}
