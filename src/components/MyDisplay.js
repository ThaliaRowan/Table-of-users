import React, {Component} from 'react';
import MyTable from './MyTable';
import MyForm from './MyForm';


class MyDisplay extends Component {

    constructor(){
        super();
        this.state = {
            person: []
        }
    }
    
    userNames = [];



     AllUsers() {

        fetch('https://randomuser.me/api/?results=50&inc=name,gender,nat&noinfo&api_key=Z18T-11E7-HI7R-DKJ4')
        .then(res => res.json())
        .then(data => {
            this.userNames = data.results;
            this.setState({
                person: data.results
            })
        })
    }

    componentDidMount(){
        this.AllUsers();
    }
   


       
        
      filterGender = gender => {
        const lowerCaseGender = gender.toLowerCase();
        const filteredGender = this.state.person.filter(
          user => user.gender.toLowerCase().indexOf(lowerCaseGender) !== -1
        );
    
        this.setState({ person: filteredGender }, () => console.log(this.state.person));
      };
    
       
      
        
      SortNat = nat => {
        const sortNat = this.state.person.sort(
          (a, b) => {
              return (a.nat > b.nat) ? 1 : -1;
          }
          
        );
    
        this.setState({ person: sortNat }, () => console.log(this.state.person));
      };
    
    



    render(){
        return (
            <div>
                 <MyForm  SortNat={this.SortNat}
                           filterGender={this.filterGender} 
                                                />
       <MyTable  person={this.state.person}/>
            </div>
           
        )
    }
    
}

export default MyDisplay;
