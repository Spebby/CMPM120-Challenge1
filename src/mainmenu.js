class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
        console.log("MainMenu: constructor");
    }

    create() {
        console.log("MainMenu: create");

        // creating an "object package", according to prof
        let playerStats = {
            HP:  this.HP,
            EXP: this.EXP,
        }
        // ok he meant a struct

        // second argument passes data through scenes.
        // we can use registry as a "large" global.
        // this is intended for passing small chunks only.
        // this is specifically sent to init function
        this.scene.start("playScene", playerStats);
    }

    // init is implicitly called before create
    init() {
        console.log("MainMenu: init");

        this.HP  = 100;
        this.EXP = 0;

        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
    }
}
