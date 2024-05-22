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
            {name: 'Alex Mercer', salary: 10000, promote: false, favorite: false},
            {name: 'Cile Mur', salary: 20000, promote: false, favorite: true},
            {name: 'Pavlo Shur', salary: 30000, promote: false, favorite: false},    ],
            searchName: '',
            filterTab: 'all'
        }
    }

    filterByName = (name, data) => {
        if(!name || name === '') {
            return data;
        } else {
            const filteredEmployees = data.filter(item => {
                return item.name.match(name);
            });
            return filteredEmployees;
        }
    } 

    filterByTab = (tab, data) => {
        switch(tab) {
            case 'all':
                return data;
            case 'promote': 
                return data.filter(({promote}) => {return promote});
            case 'thousand': 
                return data.filter(({salary}) => {return +salary > 40000})
            default:
                return data;
        }
    }

    toggleStateProp = (id, prop) => {
        const result = this.state.employees.map((item, i) => {
            if(i === id) {
                item[prop] = !item[prop];
            }
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

    onSearch = (name) => {
        this.setState({
            searchName: name
        });
    }

    onFilter = (filter) => {
        this.setState({
            filterTab: filter
        });
    }

    onChangeSalary = (id, salary) => {
        const result = this.state.employees.map((item, i) => {
            if(i === id) {
                item.salary = salary;
            }
            return item;
        });
        this.setState({employees: result});
    }
    
    render() {
        const { employees, searchName, filterTab } = this.state;
        let filteredEmployees = this.filterByName(searchName, employees);
        filteredEmployees = this.filterByTab(filterTab, filteredEmployees);
        
        return (
            <div className='App'>
                <CompanyInfo companyName='Quntsoftware' employeeCount={employees.length} bonusCount={employees.filter(item => item.promote).length} />
                <div className="filter-panel">
                    <Search onSearch={this.onSearch}/>
                    <Filter activeTab={filterTab} onFilter={this.onFilter}/>
                </div>
                <EmployeeList onChangeSalary={this.onChangeSalary} onDelete={this.delete} onToggleStateProp={this.toggleStateProp} filteredEmployees={filteredEmployees}/>
                <CreateEmployee onAdd={this.add} />
            </div>
        );
    }
}

export default App;