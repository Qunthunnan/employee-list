import { Component } from 'react';

import CompanyInfo from '../company-info/company-info';
import Search from '../search/search';
import Filter from '../filter/filter';
import EmployeeList from '../employee-list/employee-list';
import CreateEmployee from '../create-employee/create-employee';

import './app.css';
import './style-vars.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees : [
            {name: 'Alex Mercer', salary: 10000, promote: false},
            {name: 'Cile Mur', salary: 20000, promote: false},
            {name: 'Pavlo Shur', salary: 30000, promote: false},    ]
        }
    }

    switchPromotion = (id) => {
        const result = this.state.employees.map((item, i) => {
            if(i === id) {
                item.promote = !item.promote;
            }
            console.log(id, i, item);
            return item;
        });
        this.setState(() => {
            return {
                employees: result
            } 
        });
    } 
    delete = (id) => {
        this.setState(({ employees }) => {
            return {
                employees: employees.filter((item, i) => i !== id)
            } 
        });
    }

    add = (name, salary) => {
        this.setState(({employees}) => {
            return {
                employees: [...employees, {name: name, salary: salary, promote: false}]
            }
        });
    }
    
    render() {
        const { employees } = this.state;
        return (
            <div className='App'>
                <CompanyInfo companyName='Quntsoftware' employeeCount={employees.length} bonusCount={employees.filter(item => item.promote).length} />
                <div className="filter-panel">
                    <Search/>
                    <Filter/>
                </div>
                <EmployeeList onDelete={this.delete} onSwitchPromotion={this.switchPromotion} employees={employees}/>
                <CreateEmployee onAdd={this.add} />
            </div>
        );
    }
}

export default App;