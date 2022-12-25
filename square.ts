import { Board } from "./board";

export class Square {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        if (x >= 0 && x <= Board.ROW_LENGTH - 1 && y >= 0 && y <= Board.COLUMN_LENGTH - 1) {
            this.x = x;
            this.y = y;
        } else {
            throw new Error('Square out of range')
        }
    }

    getX() {
        return this.x;

    }

    getY() {
        return this.y;
    }

}