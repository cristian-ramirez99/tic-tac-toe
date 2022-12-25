import { Board } from "./board";
import { Chip } from "./chip";
import { Player } from "./player";
import { UserInput } from "./userInput";

export class Game {
    playerX: Player;
    playerO: Player;
    playerTurn: Chip;
    board: Board;

    constructor() {
        this.playerX = new Player(Chip.X);
        this.playerX = new Player(Chip.O);
        this.playerTurn = Chip.X;
        this.board = new Board();
    }

    start() {
        this.board.initialize();
        let gameRunning: boolean = true;

        do {
            this.board.print();
            this.makeMove();

            if (this.hasWinner()) {
                this.board.print();
                console.log(this.playerTurn + ' is the winner');
                gameRunning = false;
            }

            this.swapPlayerTurn();
        } while (gameRunning);
    }


    makeMove() {
        let userInput = new UserInput();
        let validMove: boolean = true;
        do {
            const move = userInput.inputMove();

            if (this.board.isEmpty(move)) {
                validMove = false;
                this.board.makeMove(move, this.playerTurn);
            }
        } while (validMove);
    }

    swapPlayerTurn() {
        if (this.playerTurn === Chip.X) {
            this.playerTurn = Chip.O;
        } else if (this.playerTurn === Chip.O) {
            this.playerTurn = Chip.X;
        }
    }
    


    hasWinner(): boolean {
        return this.board.checkIfAllColumnWithSameChip()
            || this.board.checkIfAllRowWithSameChip()
            || this.board.checkIfAllTransversalWithSameChip()
    }


}