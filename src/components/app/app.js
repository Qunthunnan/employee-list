import './app.css';
import './style-vars.css';
import CompanyInfo from '../company-info/company-info';
import Search from '../search/search';
import Filter from '../filter/filter';
import EmployeeItem from '../employee-item/employee-item';
import CreateEmployee from '../create-employee/create-employee';

function App () {
    return (
        <div className='App'>
            <CompanyInfo/>
            <div className="filter-panel">
                <Search/>
                <Filter/>
            </div>
            <ul className="employee-list">
                <EmployeeItem/>
                <EmployeeItem/>
                <EmployeeItem/>
            </ul>
            <CreateEmployee/>
        </div>
    );
}

export default App;