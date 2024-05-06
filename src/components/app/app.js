import './app.css';
import './style-vars.css';
import CompanyInfo from '../company-info/company-info';
import Search from '../search/search';
import Filter from '../filter/filter';
import EmployeeList from '../employee-list/employee-list';
import CreateEmployee from '../create-employee/create-employee';

function App () {
    const employees = [{name: 'Alex Mercer', salary: 10000, promote: false},
                       {name: 'Cile Mur', salary: 20000, promote: true},
                       {name: 'Pavlo Shur', salary: 30000, promote: false},]
    return (
        <div className='App'>
            <CompanyInfo companyName='Quntsoftware' employeeCount='5' bonusCount='3' />
            <div className="filter-panel">
                <Search/>
                <Filter/>
            </div>
            <EmployeeList employees={employees}/>
            <CreateEmployee/>
        </div>
    );
}

export default App;