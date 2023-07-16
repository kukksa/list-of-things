import { Component } from "react";
import TrashBox from './icons8-trash-100.png'

export class TravelPlan extends Component {
    state = {
        userInput: "",
        thingList: []   
    }

    onChangeEvent(e) {
        this.setState({userInput: e}); 
    }

    addItem(input) {
        if (input === '') {  
        alert ("Please enter an item!")
        } else {
        let listArray = this.state.thingList;
        listArray.push({input});
        this.setState({thingList: listArray, userInput: ''})
    }
    }

    deleteItem(index) {
        let listArray = this.state.thingList;
        listArray.splice (index, 1);
        this.setState({thingList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
    <div>
        <form onSubmit={this.onFormSubmit}>
        
    <div className="container">
        <input className="addText" type="text" placeholder='Write something...' onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
    </div>

    <div className="container">
        <button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>add</button>
    </div>
    
    <ul>
        {this.state.thingList.map((item, index) =>(
        <li key={index}>
        <input type="checkbox" className="checkbox"/>
        <p>{item.input}</p>
        <img onClick={() => this.deleteItem(index)} src={TrashBox} alt="trash" height="60px"/>  
        </li>
        ))}        
    </ul>
    </form>
    </div>
    )
    }
}