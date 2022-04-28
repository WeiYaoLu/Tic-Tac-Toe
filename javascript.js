const Player = (name, tile) => {
    return { name, tile };
}

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board};
})();

const gamePlay = (() => {
    const {board} = gameBoard;
    let tile = '';
    let winner = '';
    const place = (e,i) => {
        console.log(e, i);
    }
    const setup = () => {
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', place(cells[i],i));
        }
    };
    const check = () => {

    }
    setup();
    return {setup};
}) ();


const p1 = Player("Player1", "O");
const p2 = Player("Player2", "X");
let players = [p1,p2];