export const FACTIONS = {
    Autobots: 'autobots',
    Decepticons: 'decepticons',
};

export class Robot {
    constructor (name, faction) {
        this.name = name;
        this.faction = faction;
        this.power = 1000;
    }
    greet () {
        return `Hi, I'm ${this.name}`;
    }
};

export class OptimusPrime extends Robot {
    constructor () {
        super ("Optimus Prime", FACTIONS.Autobots);
    }
};

export class Ironhide extends Robot {
    constructor () {
        super ("Ironhide", FACTIONS.Autobots);
    }
};

export class Megatron extends Robot {
    constructor () {
        super ("Megatron", FACTIONS.Decepticons);
    }
};

export class Starscream extends Robot {
    constructor () {
        super ("Starscream", FACTIONS.Decepticons);
    }
};

export default {
    optimusPrime: new OptimusPrime(),
    ironhide: new Ironhide(),
    megatron: new Megatron(),
    starscream: new Starscream()
};