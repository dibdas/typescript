"use strict";
const x = 1;
console.log(x);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
function doSomething(keyPressed) {
    // do something.
    if (keyPressed === Direction.Left) {
        console.log("left");
    }
}
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 12] = "Up";
    Direction2[Direction2["Down"] = 13] = "Down";
    Direction2[Direction2["Left"] = 17] = "Left";
    Direction2[Direction2["Right"] = 18] = "Right";
})(Direction2 || (Direction2 = {}));
doSomething(Direction.Left);
console.log(Direction.Down); //1
console.log(Direction.Right); //3
console.log(Direction1.Down); // down
console.log(Direction1.Right); //right
console.log(Direction2.Down);
console.log(Direction2.Right);
console.log(Direction2.Left);
const app = express('express');
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/', (req, res) => {);
if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({});
}
app.get("/', (req, res) => {);
if (req.query.userId) {
    res.status(ResponseStatus.Success).json({});
}
