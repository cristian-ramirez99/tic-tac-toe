import { Chip } from "./chip";

export class Player {
    private chip: Chip;

    constructor(chip: Chip) {
        this.chip = chip
    }

    getChip(): Chip {
        return this.chip;
    }
}