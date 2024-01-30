export class TypeEmployee {
    name: string = '';
    allocation: number = 0;

    constructor(_name: string, _allocation: number)
    {
        this.name = _name;
        this.allocation = _allocation;
    }
}