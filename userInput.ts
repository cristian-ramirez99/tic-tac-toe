import { Square } from "./square";

const prompt = require('prompt-sync')();

export class UserInput {
    inputMove() {
        do {
            const x = prompt('Indica la fila: ');
            const y = prompt('Indica la columna: ');

            try {
                const square = new Square(x, y)
                return square;
                
            } catch (err) {
                console.log('El movimiento no es válido')
            }
        } while (true)
    }
}