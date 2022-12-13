function initialize() {
    var strength = 6;
    var cunning = 6;
    var speed = 6;
    var fatigue = 30;

    modifier = (int) (Math.random() * 2); // 


}

function modifyStats(stat, modifier) {
    rnd = Math.round((Math.random() * 2) + 1); // 1 to increase, 2 to decrease
    if (rnd === 1) stat += modifier;
    else stat -= modifier;
}