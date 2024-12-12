import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    return data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderBasedOnUserType = (userType) => {
    const filteredData = this.state.userData.filter(user => user.user_type === userType);
    return filteredData.map((user) => (
      <React.Fragment key={user.id}>
        <li className="list-elements">
          <span>Id: {user.id}</span>
          <span>Name: {user.name}</span>
          <span>User Type: {user.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderBasedOnLetterJ = () => {
    const filteredData = this.state.userData.filter(user => user.name.startsWith('J'));
    return filteredData.map((user) => (
      <React.Fragment key={user.id}>
        <li className="list-elements">
          <span>Id: {user.id}</span>
          <span>Name: {user.name}</span>
          <span>User Type: {user.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderBasedOnAge = () => {
    const filteredData = this.state.userData.filter(user => user.age > 28 && user.age <= 50);
    return filteredData.map((user) => (
      <React.Fragment key={user.id}>
        <li className="list-elements">
          <span>Id: {user.id}</span>
          <span>Name: {user.name}</span>
          <span>User Type: {user.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };
  

  renderTotalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter(user => user.user_type === 'Designer');
    const totalExperience = designers.reduce((acc, user) => acc + user.years, 0);
    return <div>{totalExperience} </div>;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>User Type:Designer</h1>
        <div>
          <ul>{this.renderBasedOnUserType('Designer')}</ul>
        </div>

        <h1>Filter all data starting with letter J</h1>
        <div>
          <ul>{this.renderBasedOnLetterJ()}</ul>
        </div>

        <h1>Filter all data based on age</h1>
        <div>
          <ul>{this.renderBasedOnAge(40)}</ul>
        </div>

        <h1>Total Experience of Designers</h1>
        {this.renderTotalExperienceOfDesigners()}
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;