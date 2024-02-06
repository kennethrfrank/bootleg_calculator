import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import { GridRow, Grid, Header, GridColumn, 
  Button, Input, Form, FormSelect, List, ListItem } from 'semantic-ui-react';
import './App.css';
import { Component } from 'react';
const approachOptions = [
  {key: 1, text: "Google It", value: "Google"},
  {key: 2, text: "Use AI", value: "GPT"},
  {key: 3, text: "OG Calculator", value: "Traditional"}
]


class App extends Component {
  constructor(){
    super();

    this.state = {
      val1: "",
      val2: "",
      calcApproach: "Traditional",
      operation: "",
      result: "For a Result, Please Enter A Calculation"
    };
  }
  updateInputValue1(evt) {
    const val = evt.target.value;
    // ...       
    this.setState({
      val1: parseInt(val),
      result: "Continue your Calculatiion Inputs, Press '=' When Done"
    });
    
  }
  updateInputValue2(evt) {
    const val = evt.target.value;
    
    this.setState({
      val2: parseInt(val),
      result: "Continue your Calculatiion Inputs, Press '=' When Done"
    });
    
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value,
  result: "Continue your Calculatiion Inputs, Press '=' When Done" });

  calculateResult(e){
    const {val1, val2, calcApproach, operation}= this.state
    this.setState((state)=>{
      if(calcApproach == "Traditional"){
        if(operation == "+"){
        return{
          result: parseInt(val1, 10) + parseInt(val2, 10)
        }
        
        }
        if(operation == "/"){
          return{
            result: parseInt(val1, 10) / parseInt(val2, 10)
          }
          
        }
        if(operation == "-"){
          return{
            result: parseInt(val1, 10) - parseInt(val2, 10)
          }
          
        }
        if(operation == "X"){
          return{
            result: parseInt(val1, 10) * parseInt(val2, 10)
          }
          
        }
      
      }
    });
  }
  
  
  render(){
    const {val1, val2, calcApproach, operation}= this.state
    return (
      <Grid container>
        <GridRow centered className='introductoryInfo'>
          <GridColumn width={8} textAlign='center'>
              <Header textAlign='center' as="h1" >
                Calculator Assignment 1
              </Header>
              <div>Kenneth Frank</div>
              <div>Software Engineering - Spring 2024</div>
  
          </GridColumn>
          
        </GridRow>
        <GridRow centered>
          <GridColumn width={8}>
            <List ordered>
                <ListItem>
                <Header as="h5">
                Input two numbers
            </Header >
                </ListItem>
                <ListItem>
                <Header as="h5">
                Choose whether to add, subtract divide or multiply
            </Header>
                </ListItem>
                <ListItem>
                <Header as="h5" >
                Press the Equal Button for Result
            </Header>
                </ListItem>
            </List>
            
            
          
          </GridColumn>
        </GridRow>
        {/* <GridRow centered>
          <GridColumn width={5} textAlign='center'>
              <Form>
                <FormSelect fluid label="Calculation Approach:" placeholder='approach' name = "calcApproach" value={calcApproach} options={approachOptions} 
                onChange={this.handleChange}>
  
                </FormSelect>
              </Form>
          </GridColumn>
        </GridRow> */}
        <GridRow centered>
          <GridColumn width={3} textAlign='center'>
            <Input placeholder="?" onChange={evt => this.updateInputValue1(evt)}/>
          </GridColumn>
          <GridColumn width={10} textAlign='center'>
            <Button name="operation" value="+" onClick={this.handleChange}>
              +
            </Button>
            <Button name="operation" value="X" onClick={this.handleChange}>
              X
            </Button>
            <Button name="operation" value="/" onClick={this.handleChange}>
              /
            </Button>
            <Button name="operation" value="-" onClick={this.handleChange}>
              -
            </Button>
          </GridColumn>
          <GridColumn width={3} textAlign='center'>
            <Input placeholder="?" onChange={evt => this.updateInputValue2(evt)}/>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <GridColumn width={2} textAlign='center'>
            <Button onClick={evt=> this.calculateResult(evt)}>
              =
            </Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <GridColumn width={16}>
          <div>
          Calculation Approach: {this.state.calcApproach}
          </div>
          <div>
          Value 1: {this.state.val1} 
          </div>
          <div>
          Value 2: {this.state.val2}
          </div>
          <div>
          Operation: {this.state.operation}
          </div>
          <div>
          Result:  {this.state.result}
          </div>
          
         
          </GridColumn>
          
        </GridRow>
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
  </Grid> 
    );
  }

}

export default App;
