const x: number = 1;
console.log(x);
enum Direction {
    Up,
    Down,
    Left,
    Right
}
enum Direction1 {
    Up='up',
    Down='down',
    Left='left',
    Right='right'
}


function doSomething(keyPressed: Direction) {
	// do something.
    if(keyPressed===Direction.Left){
        console.log("left");
        
    }

}
enum Direction2 {
    Up=12,
    Down,
    Left=17,
    Right
}
 
doSomething(Direction.Left)
console.log(Direction.Down);//1
console.log(Direction.Right);//3

console.log(Direction1.Down); // down
console.log(Direction1.Right); //right

console.log(Direction2.Down)
console.log(Direction2.Right)
console.log(Direction2.Left)


const app = express('express')
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
})



app.get("/', (req, res) => {
    if (req.query.userId) {
        res.status(ResponseStatus.Success).json({});
    }
})


