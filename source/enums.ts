enum Directions {
    Up,
    Down = 50,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
console.log(directions[0]);

// Reverse mapping
console.log(Directions[50]);
// Print Down