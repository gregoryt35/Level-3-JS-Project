function initialize() {
    var strength = 6;
    var cunning = 6;
    var speed = 6;
    var fatigue = 30;
    isDefending = false;

    strengthModifier = Math.round((Math.random() * 2));
    modifyStats(strength, strengthModifier);

    cunningModifier = Math.round((Math.random() * 2));
    modifyStats(strength, cunningModifier);

    speedModifier = Math.round((Math.random() * 2));
    modifyStats(strength, speedModifier);

    fatigueModifer = Math.round((Math.random() * 7));
    modifyStats(strength, fatigueModifer);
    
}

function attack() {
    rnd = Math.round(Math.random() * 3) + 1;
    attackValue = (strength + speed + cunning) / rnd;
    return attackValue;
}

function defend() {
    if (isDefending) {
        defenseValue = speed + cunning;
        return defenseValue;
    }
    else {
        rnd = Math.round(Math.random() * 6) + 1;
        defenseValue = speed + rnd;
    }
}

function modifyStats(stat, modifier) {
    rnd = Math.round((Math.random() * 2) + 1);
    if (rnd === 1) stat += modifier;
    else stat -= modifier;
}