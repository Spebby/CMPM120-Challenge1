class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        console.log("Play: constructor");
    }

    init(stats) {
        // passed data is sent to args of init.
        this.HP  = stats.HP;
        this.EXP = stats.EXP;
    }
    
    create() {
        console.log("Play: create");
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
    }
}
