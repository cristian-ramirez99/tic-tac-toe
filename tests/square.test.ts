import { Square } from "../square";


describe('Square class', () => {
    it('should initialize x and y', () => {
        const square = new Square(0, 0)
        expect(square.getX()).toEqual(0);
        expect(square.getY()).toEqual(0);
    })
    it('should throw error out of range -1', () => {
        expect(() => { new Square(-1, 2) }).toThrow(Error('Square out of range'));

    })
    it('should throw error out of range 3', () => {
        expect(() => { new Square(1, 3) }).toThrow(Error('Square out of range'));
    })

    it('should throw error out of range -1 and 3', () => {
        expect(() => { new Square(-1, 3) }).toThrow(Error('Square out of range'));
    })
})