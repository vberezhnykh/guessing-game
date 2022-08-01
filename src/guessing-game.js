class GuessingGame {
    constructor() {}

    setRange(min, max) {
/*         let array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }
        let start = 0;
        let end = array.length - 1; */
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round((this.min + this.max) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
