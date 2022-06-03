/**
 * @jest-environment jsdom
 */


 const { game, newGame, showScore} = require("../game");

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
 });
 
 describe("game object contains correct keys", () => {
     test("score key exists", () => {
         expect("score" in game).toBe(true);
     });

     test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });

    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });

    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
 });


 beforeAll(() => {
     game.score = 42;
     game.playerMoves = ['button1', 'button2'];
     game.choices = ['button1', 'button2'];
     game.currentGame = ['button1', 'button2'];
     document.getElementById('score').innerText = '6'
     newGame()
 });


 describe("newGame function refreshes the game", () => {
     test("refreshes game score", () => {
         expect(game.score).toBe(0)
     });

     test("refreshes playerMoves", () => {
        expect(game.playerMoves.length).toBe(0)
    });

    test("refreshes choices", () => {
        expect(game.choices.length).toBe(0)
    });

    test("refreshes html score", () => {
        expect(document.getElementById('score').innerText).toEqual(0)
    });


 });