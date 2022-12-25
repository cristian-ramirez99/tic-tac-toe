import { Chip } from "./chip";
import { Square } from "./square";

export class Board {
    static readonly ROW_LENGTH = 3;
    static readonly COLUMN_LENGTH = 3
    private board: Chip[][];

    initialize() {
        this.board = [];
        for (let row = 0; Board.ROW_LENGTH > row; row++) {
            this.board[row] = []
            for (let column = 0; Board.ROW_LENGTH > column; column++) {
                this.board[row][column] = Chip.EMPTY;
            }
        }
    }


    print() {
        for (let row = 0; Board.ROW_LENGTH > row; row++) {
            console.log(this.board[row][0] + '|' + this.board[row][1] + '|' + this.board[row][2])
        }
    }

    getBoard() {
        return this.board;
    }

    isEmpty(square: Square): boolean {
        return this.board[square.getX()][square.getY()] === Chip.EMPTY;
    }


    makeMove(square: Square, chip: Chip) {
        this.board[square.getX()][square.getY()] = chip;
    }


    setBoard(board: Chip[][]) {
        this.board = board;
    }


    checkIfAllRowWithSameChip(): boolean {
        for (let row = 0; Board.ROW_LENGTH > row; row++) {
            const squareEmpty = this.isEmpty(new Square(row, 0));
            const equalRowChip = this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2];

            if (!squareEmpty && equalRowChip) {
                return true
            }
        }
        return false
    }

    checkIfAllColumnWithSameChip(): boolean {
        for (let column = 0; Board.COLUMN_LENGTH > column; column++) {
            const squareEmpty = this.isEmpty(new Square(column, 0));
            const equalColumnChip = this.board[0][column] === this.board[1][column] && this.board[1][column] === this.board[2][column];

            if (!squareEmpty && equalColumnChip) {
                return true
            }
        }
        return false
    }

    checkIfAllTransversalWithSameChip(): boolean {
        const transversal1 = this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2];
        const transversal2 = this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2];
        const middleSquareEmpty = this.isEmpty(new Square(1, 1));


        return (transversal1 || transversal2) && !middleSquareEmpty;
    }


}

