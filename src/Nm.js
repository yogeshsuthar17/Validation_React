
import React from 'react';
class Nm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: " ",
      myarray: []
    };
  }

  onChangeDo(event) {
    this.setState({
      mytext: event.target.value
    })
    // event.preventDefualt();
  }

  onClickAdd(event) {
    let list = this.state.myarray;
    list.push(event) // array main push kiya text (this.state.mytext) jo niche se aaya and store hua as event
    this.setState({
      myarray: list,
      mytext: " "
    })
  }
  onDelete(event){
    let delList = this.state.myarray;
    delList.pop(event)
    this.setState({
      myarray : delList,
      mytext : " "
    })
}

  // }

    removeItem=(props)=>{
      this.setState({todoList:this.state.todoList.splice(props,1)})
      console.log(this.state.todoList)
  };



  removeItem(index) {
    let xyz = this.state.myarray.splice(index, 1)
    this.setState({
      todoListy: xyz,
    })
  }

  render() {

    return (
      <div>
        <center> <h1>TODO LIST </h1>
          <input type="date" /></center>
        <hr />
        <b>Enter your task : </b>
        <input type="text" name="txt" placeholder='Todays goal' value={this.state.mytext}
          onChange={this.onChangeDo.bind(this)} />
        &nbsp;&nbsp;&nbsp;

        <button className="AddButton" onClick={() => this.onClickAdd(this.state.mytext)} >Click ME </button>

        {/* <h3> 
        {this.state.myarray.map((value,index)=>
        <h2>
        {index+1} {value} 
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.onDelete(this.state.index)}>DELETE</button>
        </h2>)} 
        </h3> */}
{/* 
        <b>
          {this.state.myarray.map((value, index) =>
            <h4 key={index}>
              {index+1}. {value}
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => this.removeItem(index)}>DELETE</button>
            </h4>
          )}
        </b> */}



      </div>

    );
  }
}

export default Nm;
    