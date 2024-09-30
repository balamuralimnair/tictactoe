import { Component } from '@angular/core';

@Component({
  selector: 'app-game-computer',
  standalone: true,
  imports: [],
  templateUrl: './game-computer.component.html',
  styleUrl: './game-computer.component.css'
})
export class GameComputerComponent {
  board: string[][] = [];
  rows = 3;
  columns = 3;
  currentUser = 'X';
  winner: boolean = false;
  draw: boolean = false;

  constructor() {
    this.newBoard();
  }

  initboard() {
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = '';
      }
    }
  }
  newBoard() {
    this.initboard();
    this.winner = false;
    this.draw = false;
    this.currentUser = 'X';
    this.decideComputerMove();
  }

  captureUserMove(row: number, column: number) {
    console.log("Row: ", row, " Col: ", column, this.currentUser);

    if (this.board[row][column] == '' && !this.winner) {
      // this.currentUser = this.currentUser == 'X' ? 'O' : 'X';
      this.currentUser = "O";
      this.board[row][column] = this.currentUser;
      this.checkWinner();
      if (!this.winner) {
        this.checkDraw();
      }
    }
    if (!this.winner && !this.draw) {
      this.currentUser = 'X';
      this.decideComputerMove();
    }
  }

  checkWinner() {
    console.log("Full Board: ", this.board);
    // Check columns
    if (this.board[0][0] == this.board[0][1] &&
      this.board[0][1] == this.board[0][2] && this.board[0][0] != '') {
      this.winner = true;
    }
    else if (this.board[1][0] == this.board[1][1] &&
      this.board[1][1] == this.board[1][2] && this.board[1][0] != '') {
      this.winner = true;
    }
    else if (this.board[2][0] == this.board[2][1] &&
      this.board[2][1] == this.board[2][2] && this.board[2][0] != '') {
      this.winner = true;
    }
    // Check rows
    else if (this.board[0][0] == this.board[1][0] &&
      this.board[1][0] == this.board[2][0] && this.board[0][0] != '') {
      this.winner = true;
    }
    else if (this.board[0][1] == this.board[1][1] &&
      this.board[1][1] == this.board[2][1] && this.board[0][1] != '') {
      this.winner = true;
    }
    else if (this.board[0][2] == this.board[1][2] &&
      this.board[1][2] == this.board[2][2] && this.board[0][2] != '') {
      this.winner = true;
    }
    // Check diagonals 
    else if (this.board[0][0] == this.board[1][1] &&
      this.board[1][1] == this.board[2][2] && this.board[0][0] != '') {
      this.winner = true;
    }
    else if (this.board[0][2] == this.board[1][1] &&
      this.board[1][1] == this.board[2][0] && this.board[0][2] != '') {
      this.winner = true;
    }
    else {
      this.winner = false;
    }
  }

  checkDraw() {
    let emptyCellFound = false;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.board[i][j] == '') {
          emptyCellFound = true;
          break;
        }
        if (emptyCellFound) {
          break;
        }
      }
    }
    if (!emptyCellFound) {
      this.draw = true;
    } else {
      this.draw = false;
    }
  }

  decideComputerMove() {
    if(this.isBoardEmpty()) {
      // First Move
      this.board[1][1] = 'X';
      console.log(1);
    } else {
      // Check if Computer is winning
      if (this.board[0][0] == this.board[0][1] &&
        this.board[0][0] == 'X' && this.board[0][2] == '') {
        this.board[0][2] = 'X';
        console.log(26);
      }
      else if (this.board[0][1] == this.board[0][2] &&
        this.board[0][1] == 'X' && this.board[0][0] == '') {
        this.board[0][0] = 'X';
        console.log(27);
      }
      else if (this.board[0][0] == this.board[0][2] &&
        this.board[0][0] == 'X' && this.board[0][1] == '') {
        this.board[0][1] = 'X';
        console.log(28);
      }
      else if (this.board[1][0] == this.board[1][1] &&
        this.board[1][0] == 'X' && this.board[1][2] == '') {
        this.board[1][2] = 'X';
        console.log(29);
      }
      else if (this.board[1][1] == this.board[1][2] &&
        this.board[1][1] == 'X' && this.board[1][0] == '') {
        this.board[1][0] = 'X';
        console.log(30);
      }
      else if (this.board[1][0] == this.board[1][2] &&
        this.board[1][0] == 'X' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
        console.log(31);
      }
      else if (this.board[2][0] == this.board[2][1] &&
        this.board[2][0] == 'X' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
        console.log(32);
      }
      else if (this.board[2][1] == this.board[2][2] &&
        this.board[2][1] == 'X' && this.board[2][0] == '') {
        this.board[2][0] = 'X';
        console.log(33);
      }
      else if (this.board[2][0] == this.board[2][2] &&
        this.board[2][0] == 'X' && this.board[2][1] == '') {
        this.board[2][1] = 'X';
        console.log(34);
      }
      // Check rows
      else if (this.board[0][0] == this.board[1][0] &&
        this.board[0][0] == 'X' && this.board[2][0] == '') {
        this.board[2][0] = 'X';
        console.log(35);
      }
      else if (this.board[1][0] == this.board[2][0] &&
        this.board[1][0] == 'X' && this.board[0][0] == '') {
        this.board[0][0] = 'X';
      }
      else if (this.board[0][0] == this.board[2][0] &&
        this.board[0][0] == 'X' && this.board[1][0] == '') {
        this.board[1][0] = 'X';
      }
      else if (this.board[0][1] == this.board[1][1] &&
        this.board[0][1] == 'X' && this.board[2][1] == '') {
        this.board[2][1] = 'X';
      }
      else if (this.board[1][1] == this.board[2][1] &&
        this.board[1][1] == 'X' && this.board[0][1] == '') {
        this.board[0][1] = 'X';
      }
      else if (this.board[0][1] == this.board[2][1] &&
        this.board[0][1] == 'X' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
      }
      else if (this.board[0][2] == this.board[1][2] &&
        this.board[0][2] == 'X' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
      }
      else if (this.board[1][2] == this.board[2][2] &&
        this.board[1][2] == 'X' && this.board[0][2] == '') {
        this.board[0][2] = 'X';
      }
      else if (this.board[0][2] == this.board[2][2] &&
        this.board[0][2] == 'X' && this.board[1][2] == '') {
        this.board[1][2] = 'X';
      }
      // Check diagonals 
      else if (this.board[0][0] == this.board[1][1] &&
        this.board[0][0] == 'X' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
      }
      else if (this.board[0][0] == this.board[2][2] &&
        this.board[0][0] == 'X' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
      }
      else if (this.board[1][1] == this.board[2][2] &&
        this.board[1][1] == 'X' && this.board[0][0] == '') {
        this.board[0][0] = 'X';
      }
      else if (this.board[0][2] == this.board[1][1] &&
        this.board[0][2] == 'X' && this.board[0][0] == '') {
          this.board[0][0] = 'X';
      }
      else if (this.board[1][1] == this.board[2][0] &&
        this.board[1][1] == 'X' && this.board[0][2] == '') {
          this.board[0][2] = 'X';
      }
      else if (this.board[0][2] == this.board[2][0] &&
        this.board[0][2] == 'X' && this.board[1][1] == '') {
          this.board[1][1] = 'X';
      }
      // Check opponent is winning
      else if (this.board[0][0] == this.board[0][1] &&
        this.board[0][0] == 'O' && this.board[0][2] == '') {
        this.board[0][2] = 'X';
        console.log(2);
      } 
      else if (this.board[0][1] == this.board[0][2] &&
        this.board[0][1] == 'O' && this.board[0][0] == '') {
          this.board[0][0] = 'X';
          console.log(3);
      }
      else if (this.board[0][0] == this.board[0][2] &&
        this.board[0][0] == 'O' && this.board[0][1] == '') {
        this.board[0][1] = 'X';
        console.log(4);
      }
      else if (this.board[1][0] == this.board[1][1] &&
        this.board[1][0] == 'O') {
        this.board[1][2] = 'X';
        console.log(5);
      }
      else if (this.board[1][1] == this.board[1][2] &&
        this.board[1][1] == 'O' && this.board[1][0] == '') {
        this.board[1][0] = 'X';
        console.log(6);
      }
      else if (this.board[1][0] == this.board[1][2] &&
        this.board[1][0] == 'O' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
        console.log(7);
      }
      else if (this.board[2][0] == this.board[2][1] &&
        this.board[2][0] == 'O' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
        console.log(8);
      }
      else if (this.board[2][1] == this.board[2][2] &&
        this.board[2][1] == 'O' && this.board[2][0] == '') {
        this.board[2][0] = 'X';
        console.log(9);
      }
      else if (this.board[2][0] == this.board[2][2] &&
        this.board[2][0] == 'O' && this.board[2][1] == '') {
        this.board[2][1] = 'X';
        console.log(10);
      }
      // Check rows
      else if (this.board[0][0] == this.board[1][0] &&
        this.board[0][0] == 'O' && this.board[2][0] == '') {
        this.board[2][0] = 'X';
        console.log(11);
      }
      else if (this.board[1][0] == this.board[2][0] &&
        this.board[1][0] == 'O' && this.board[0][0] == '') {
        this.board[0][0] = 'X';
        console.log(12);
      }
      else if (this.board[0][0] == this.board[2][0] &&
        this.board[0][0] == 'O' && this.board[1][0] == '') {
        this.board[1][0] = 'X';
        console.log(13);
      }
      else if (this.board[0][1] == this.board[1][1] &&
        this.board[0][1] == 'O' && this.board[2][1] == '') {
        this.board[2][1] = 'X';
        console.log(14);
      }
      else if (this.board[0][1] == this.board[2][1] &&
        this.board[0][1] == 'O' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
        console.log(15);
      }
      else if (this.board[1][1] == this.board[2][1] &&
        this.board[1][1] == 'O' && this.board[0][1] == '') {
        this.board[0][1] = 'X';
        console.log(16);
      }
      else if (this.board[0][2] == this.board[1][2] &&
        this.board[0][2] == 'O' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
        console.log(17);
      }
      else if (this.board[1][2] == this.board[2][2] &&
        this.board[1][2] == 'O' && this.board[0][2] == '') {
        this.board[0][2] = 'X';
        console.log(18);
      }
      else if (this.board[0][2] == this.board[2][2] &&
        this.board[0][2] == 'O' && this.board[1][2] == '') {
        this.board[1][2] = 'X';
        console.log(19);
      }
      // Check diagonals 
      else if (this.board[0][0] == this.board[1][1] &&
        this.board[0][0] == 'O' && this.board[2][2] == '') {
        this.board[2][2] = 'X';
        console.log(20);
      }
      else if (this.board[1][1] == this.board[2][2] &&
        this.board[1][1] == 'O' && this.board[0][0] == '') {
        this.board[0][0] = 'X';
        console.log(21);
      }
      else if (this.board[0][0] == this.board[2][2] &&
        this.board[0][0] == 'O' && this.board[1][1] == '') {
        this.board[1][1] = 'X';
        console.log(22);
      }
      else if (this.board[0][2] == this.board[1][1] &&
        this.board[0][2] == 'O' && this.board[0][0] == '') {
          this.board[0][0] = 'X';
          console.log(23);
      }
      else if (this.board[0][2] == this.board[2][0] &&
        this.board[0][2] == 'O' && this.board[1][1] == '') {
          this.board[1][1] = 'X';
          console.log(24);
      }
      else if (this.board[1][1] == this.board[2][0] &&
        this.board[1][1] == 'O' && this.board[0][2] == '') {
          this.board[0][2] = 'X';
          console.log(25);
      }
       // check empty row or column to play
      // Might be a draw find an empty space to play
      else {
        console.log("Under Draw Else Condition");
        if(this.board[0][0] == '') {
          this.board[0][0] = 'X';
        } else if (this.board[0][2] == '') {
          this.board[0][2] = 'X';
        } else if (this.board[2][0] == '') {
          this.board[2][0] = 'X';
        } else if (this.board[2][2] == '') {
          this.board[2][2] = 'X';
        } else {
          let boardSlot: {i: number, j: number} = this.findEmptySlot();
          this.board[boardSlot.i][boardSlot.j] = 'X'
          console.log("Empyt Slots: " + boardSlot.i + " && " + boardSlot.j);
        }
      }
    }
    this.checkWinner();
    if(!this.winner) {
      this.checkDraw();
    }
    if(!this.winner && this.draw) {
      this.currentUser = 'O';
    }
  }

  isBoardEmpty() {
    let boardEmpty = true;

    for(let i=0;i<this.rows;i++) {
      for(let j=0;j<this.columns;j++) {
        if(this.board[i][j]!='') {
          boardEmpty = false;
          break;
        }
      }
      if(!boardEmpty) {
        break;
      }
    }
    return boardEmpty;
  }

  findEmptySlot() {
    let boardRow = 0;
    let boardCol = 0;

    for(let i=0;i<this.rows;i++) {
      for(let j=0;j<this.columns;j++) {
        if(this.board[i][j]=='') {
          boardRow = i;
          boardCol = j;
          break;
        }
      }
      if(!(boardRow == 0 && boardCol == 0)) {
        break;
      }
    }
    return {i: boardRow,j:boardCol};
  }
}
