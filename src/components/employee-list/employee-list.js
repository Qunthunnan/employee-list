import './employee-list.css';
import EmployeeItem from '../employee-item/employee-item';

function EmployeeList ({filteredEmployees, onToggleStateProp, onDelete, onChangeSalary}) {
    const employeesItems = filteredEmployees.map((employee, id) => {
        return <EmployeeItem onDelete={()=>{ onDelete(id) }} 
        onToggleStateProp={ (e) => { onToggleStateProp(id, e.currentTarget.getAttribute('data-toggle-prop'))} } 
        onChangeSalary={ (value) => { onChangeSalary(id, value) } }
        key={id} 
        {...employee}/> 
    });
    return (
    <ul className="employee-list">
        {employeesItems}
    </ul>
    );
}

export default EmployeeList;