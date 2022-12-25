import { Board } from "../board";
import { Chip } from "../chip";
import { Square } from "../square";


describe('Board class', () => {
    it('should initialize board empty', () => {
        const board = new Board();
        board.initialize();
        const emptyBoard = board.getBoard();

        const expectedEmptyBoard = [
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY],
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY],
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY]]

        expect(emptyBoard).toEqual(expectedEmptyBoard)
    })

    it('should return that square empty', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.X, Chip.X],
            [Chip.X, Chip.X, Chip.X],
            [Chip.X, Chip.X, Chip.X]]

        board.setBoard(dummyBoard);
        const square = new Square(0, 0);

        expect(board.isEmpty(square)).toBeTruthy();
    })

    it('should return that square empty', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.X, Chip.X],
            [Chip.X, Chip.X, Chip.X],
            [Chip.X, Chip.X, Chip.X]]

        board.setBoard(dummyBoard);

        const square = new Square(0, 1);
        expect(board.isEmpty(square)).toBeFalsy();
    })


    it('should checkIfAllRowWithPlayerChip return true', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.X, Chip.X],
            [Chip.O, Chip.O, Chip.X],
            [Chip.X, Chip.X, Chip.X]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllRowWithSameChip()
        expect(checkRow).toBeTruthy();
    })

    it('should checkIfAllRowWithPlayerChip return false', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY],
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY],
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllRowWithSameChip()
        expect(checkRow).toBeFalsy();
    })

    it('should checkIfAllColumnWithPlayerChip return false', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.X, Chip.EMPTY, Chip.EMPTY],
            [Chip.X, Chip.EMPTY, Chip.EMPTY],
            [Chip.X, Chip.EMPTY, Chip.EMPTY]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllColumnWithSameChip()
        expect(checkRow).toBeTruthy();
    })

    it('should checkIfAllColumnWithPlayerChip return false', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.O, Chip.EMPTY],
            [Chip.EMPTY, Chip.O, Chip.EMPTY],
            [Chip.EMPTY, Chip.X, Chip.EMPTY]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllColumnWithSameChip()
        expect(checkRow).toBeFalsy();
    })

    it('should checkIfAllTransversalWithSameChip return true', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.O, Chip.X],
            [Chip.EMPTY, Chip.X, Chip.EMPTY],
            [Chip.X, Chip.X, Chip.EMPTY]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllTransversalWithSameChip()
        expect(checkRow).toBeTruthy();
    })

    it('should checkIfAllTransversalWithSameChip return true', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.O, Chip.O, Chip.EMPTY],
            [Chip.EMPTY, Chip.O, Chip.EMPTY],
            [Chip.X, Chip.X, Chip.O]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllTransversalWithSameChip()
        expect(checkRow).toBeTruthy();
    })

    it('should checkIfAllTransversalWithSameChip return false', () => {
        const board = new Board();

        const dummyBoard = [
            [Chip.EMPTY, Chip.O, Chip.X],
            [Chip.EMPTY, Chip.EMPTY, Chip.EMPTY],
            [Chip.O, Chip.X, Chip.EMPTY]]
        board.setBoard(dummyBoard);

        const checkRow = board.checkIfAllTransversalWithSameChip()
        expect(checkRow).toBeFalsy();
    })
})