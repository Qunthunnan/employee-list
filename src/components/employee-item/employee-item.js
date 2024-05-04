import './employee-item.css';
import './employee-list.css';
function EmployeeItem () {
    return (
        <li className="employee-item">
            <span className="employee-name">Ім'я та Призвище</span>
            <span className="employee-salary">1000</span>
            <div className="employee-controls">
                <button type="button" class="employee-cookie btn btn-light btn-sm">🍪</button>
                <button type="button" class="employee-delete btn btn-light btn-sm">🗑️</button>
                <button type="button" class="employee-star btn btn-light btn-sm">⭐</button>
            </div>
        </li>
    );
}

export default EmployeeItem;