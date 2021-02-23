import { Component } from "react";
import rock from "./images/rock.jpg";
import paper from "./images/paper.jpg";
import scissors from "./images/scissor.jpg";

class RockPaperScissorsGame extends Component {
  computerOutput = "";

  constructor(props) {
    super(props);
    this.state = {
      computerScore: 0,
      playerScore: 0,
    };
  }

  componentDidUpdate() {
    if (this.state.playerScore === 5) {
      alert("Player won the game!");
      this.resetGame();
    } else if (this.state.computerScore === 5) {
      alert("Computer won the game!");
      this.resetGame();
    }
  }

  playersMove(n) {
    this.setState({ playerChoice: n });
  }

  computerMove() {
    let RandomNumber = Math.floor(Math.random() * 3) + 1;
    if (RandomNumber === 1) {
      this.computerOutput = "Rock";
    }
    if (RandomNumber === 2) {
      this.computerOutput = "Paper";
    }
    if (RandomNumber === 3) {
      this.computerOutput = "Scissors";
    }
    console.log("score:" + this.state.computerScore);
    console.log("Choice:" + this.state.computerChoice);
  }

  playGame() {
    this.computerMove();

    let winnerOutput = "";
    let gameWinnerOutput = "";
    let playerPoint = 0;
    let computerPoint = 0;

    if (this.state.playerScore < 5 && this.state.computerScore < 5) {
      if (
        (this.state.playerChoice === "Rock" &&
          this.state.computerChoice === "Rock") ||
        (this.state.playerChoice === "Paper" &&
          this.state.computerChoice === "Paper") ||
        (this.state.playerChoice === "Scissors" &&
          this.state.computerChoice === "Scissors")
      ) {
        winnerOutput = "Tie";
      }

      if (
        (this.state.playerChoice === "Rock" &&
          this.state.computerChoice === "Scissors") ||
        (this.state.playerChoice === "Paper" &&
          this.state.computerChoice === "Rock") ||
        (this.state.playerChoice === "Scissors" &&
          this.state.computerChoice === "Paper")
      ) {
        winnerOutput = "You won this round";
        playerPoint = this.state.playerScore + 1;
        this.setState({
          computerChoice: this.computerOutput,
          winner: winnerOutput,
          gameWinner: gameWinnerOutput,
          playerScore: playerPoint,
        });
      }

      if (
        (this.state.playerChoice === "Rock" &&
          this.state.computerChoice === "Paper") ||
        (this.state.playerChoice === "Paper" &&
          this.state.computerChoice === "Scissors") ||
        (this.state.playerChoice === "Scissors" &&
          this.state.computerChoice === "Rock")
      ) {
        winnerOutput = "Computer won this round";
        computerPoint = this.state.computerScore + 1;
        this.setState({
          computerChoice: this.computerOutput,
          winner: winnerOutput,
          gameWinner: gameWinnerOutput,
          computerScore: computerPoint,
        });
      }
    }
    this.setState({
      computerChoice: this.computerOutput,
      winner: winnerOutput,
      gameWinner: gameWinnerOutput,
      playerScore: playerPoint,
      computerScore: computerPoint,
    });
  }

  resetGame() {
    this.setState({
      playerScore: 0,
      computerScore: 0,
      playerChoice: "",
      computerChoice: "",
      gameWinner: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Paper, Rock, Scissors</h1>
        <button class="GameButton" onClick={() => this.playersMove("Rock")}>
          <img src={rock} width="150" height="150" alt="rock" />
        </button>
        <button class="GameButton" onClick={() => this.playersMove("Paper")}>
          <img src={paper} width="150" height="150" alt="paper" />
        </button>
        <button class="GameButton" onClick={() => this.playersMove("Scissors")}>
          <img src={scissors} width="150" height="150" alt="scissors" />
        </button>
        <h1>Scoreboard:</h1>
        <button class="GameButton" onClick={() => this.playGame()}>
          PLAY
        </button>
        <button class="GameButton" onClick={() => this.resetGame()}>
          RESET
        </button>

        <h4>Computer has chosen: {this.state.computerChoice}</h4>
        <h3>The Winner is: {this.state.winner}</h3>
        <h3>Score</h3>
        <h4>Player: {this.state.playerScore}</h4>
        <h4>Computer: {this.state.computerScore}</h4>
        <h3>{this.state.gameWinner}</h3>
      </div>
    );
  }
}

export default RockPaperScissorsGame;
