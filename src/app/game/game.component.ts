import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  board: string[][] = [];
  rows = 3;
  columns = 3;
  currentUser = 'X';
  winner: boolean = false;
  draw: boolean = false;

  constructor() {
    this.initboard()
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
  }

  captureUserMove(row: number, column: number) {
    console.log("Row: ", row, " Col: ", column, this.currentUser);

    if (this.board[row][column] == '' && !this.winner) {
      this.currentUser = this.currentUser == 'X' ? 'O' : 'X';
      this.board[row][column] = this.currentUser;
      this.checkWinner();
      if (!this.winner) {
        this.checkDraw();
      }
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
}
