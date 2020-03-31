import React,{Component} from 'react'
import {Table,Container} from 'react-bootstrap'
import '../styles/Game.css'
class Game extends Component{
    constructor(props) {
        super(props);
        this.state={
            cells: Array(9).fill(null),
            flag: true,
            winner: ""
        }
    }
    win=()=>{
        let winComb=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let value = (this.state.flag===true)? "X" : "O";
        for (let i = 0; i < winComb.length;i++)
        {
            let comb = winComb[i];
            if (this.state.cells[comb[0]] === value &&
                this.state.cells[comb[1]] === value &&
                this.state.cells[comb[2]] === value){
                this.setState({winner: value })
                }
        }
    }
    changer = event => {
        let id = event.target.getAttribute('id');
        let currentCells = this.state.cells;
        let w = this.state.winner;
        if (currentCells[id] === null && w == ""){
            currentCells[id]=(this.state.flag === true)? "X" : "O";
            this.setState({flag: !this.state.flag, cells: currentCells});
        }

        this.win();
    }
    clean = () =>{
        setTimeout(()=>{
            this.setState({cells: Array(9).fill(null), flag: true, winner: ""})
        },2500)
    }
    render(){

        let status;
        let draw = this.state.cells.some(function (check){
            return check == null;
        });
        if (this.state.winner=="X"){
            status="Победил X!";
            this.clean()
        }
        else if (this.state.winner=="O"){
            status="Победил O!";
            this.clean()
        }
        else if (this.state.winner=="" && !draw){
            status="Ничья!";
            this.clean()
        }
        else{
        status="Кто сейчас играет: " + ((this.state.flag === true)? "X" : "O");
        }
        return (
            <div>
                <h1 align="center">Tic tac toe</h1>
            <h1 align="center">{status}</h1>
            <Container>
            <Table striped bordered size="sm">
                        <tr>
                            <td id="0" onClick={this.changer}>{this.state.cells[0]}</td>
                            <td id="1" onClick={this.changer}>{this.state.cells[1]}</td>
                            <td id="2" onClick={this.changer}>{this.state.cells[2]}</td>
                        </tr>
                        <tr>
                            <td id="3" onClick={this.changer}>{this.state.cells[3]}</td>
                            <td id="4" onClick={this.changer}>{this.state.cells[4]}</td>
                            <td id="5" onClick={this.changer}>{this.state.cells[5]}</td>
                        </tr>
                        <tr>
                            <td id="6" onClick={this.changer}>{this.state.cells[6]}</td>
                            <td id="7" onClick={this.changer}>{this.state.cells[7]}</td>
                            <td id="8" onClick={this.changer}>{this.state.cells[8]}</td>
                        </tr>
                </Table>

            </Container>
            </div>
        );
    }
}

export default Game;
