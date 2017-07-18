var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 50] = "Down";
    Directions[Directions["Left"] = 51] = "Left";
    Directions[Directions["Right"] = 52] = "Right";
})(Directions || (Directions = {}));
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions[0]);
//# sourceMappingURL=enums.js.map