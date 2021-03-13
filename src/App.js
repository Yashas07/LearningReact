import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/Validation'
import CharComponent from './CharComponent/CharComponent'
// import Radium, { StyleRoot }from 'radium';
class App extends Component {


state = {
  persons : [
    {id: 'abcde',name : 'yashas',age: 10},
    {id: 'bcdef',name : 'suhas',age: 35},
    {id: 'asdfg',name : 'rahul',age: 22}
  ],
  other : 'Some other state',
  showPerson : false
}


//   switchNameHandler = (newName) => {
 
//   this.setState({
//     persons : [
//     {name : newName,age: 10},
//     {name : 'suhas',age: 35},
//     {name : 'rahul',age: 42}
//     ]
//   })
// }

nameChangedHandler = (event,id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id
  })

  const person = {...this.state.persons[personIndex]};

  // const person = Object.assign({},this.state.person[personIndex])
  person.name = event.target.value;

  const persons = [...this.state.persons];

  persons[personIndex] = person;


  this.setState({
    persons : persons
  })
}


 togglePersonNames = () => {
  const curPerson = this.state.showPerson;
  this.setState({
    showPerson : !curPerson
  })
 }

 deletePersonsHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons]
  persons.splice(personIndex,1)
  this.setState({
    persons : persons
  })
 }

//  deleteCharacterHandler = (index) => {
//    const characters = [...this.state.persons[0].name]
//    characters.splice(index,1);
//    console.log(characters)
//    console.log(characters.toString())
//    const persons = [...this.state.persons];
//    persons[0].name = characters.join("");

//    this.setState({
//      persons : persons
//    })

//  }
  render() {

    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      // ':hover': {
      //   backgroundColor : 'white',
      //   color : 'green'
      // }
    }

    let persons = null;
    if (this.state.showPerson)
    {
      persons = (
        
             <div>
               {this.state.persons.map((person,index) => {
                 return (
                   <Person
                   click={() => this.deletePersonsHandler(index)}
                   name={person.name}
                   age={person.age}
                   key={person.id}
                   changed={(event) => this.nameChangedHandler(event,person.id)}
                   />
                 );
               })}
            </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'].backgroundColor = 'yellow';
      // style[':hover'].color = 'red';
    }

    const classes = []

    if(this.state.persons.length<=2)
      classes.push('red');
    if(this.state.persons.length<=1)
      classes.push('bold');
    // const arr = [...this.state.persons[0].name]

    // let letters = (
    //  arr.map((character,index) => {
    //     return (
    //       <CharComponent 
    //       letter={character}
    //       click={(event) => this.deleteCharacterHandler(index)}
    //       key={Math.random()*30}
    //       />
    //     )
    //  })
    // )
    return (
      // <StyleRoot>
      <div className="App">
        <h1>I'm a React APP</h1>
        <p className={classes.join(' ')}>This is working !!</p>
        <button 
        style={style}
        onClick={this.togglePersonNames}>Toggle</button>
        {persons}
        {/* <input type="text" onChange={(event) => this.nameChangedHandler(event,this.state.persons[0].id)} value={this.state.persons[0].name}></input> */}
        {/* <h1>count : {this.state.persons[0].name.length}</h1>
        {<Validation name={this.state.persons[0].name} />}
        {letters}
        <p></p> */}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
