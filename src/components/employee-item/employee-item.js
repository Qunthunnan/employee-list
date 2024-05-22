import { Component } from 'react';
import './employee-item.css';

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true
        }
    }
    render () {
        const {name, salary, id, promote, favorite , onToggleStateProp, onDelete} = this.props;
        const { valid } = this.state;
        return (
            <li key={id} className={'employee-item' + (promote ? ' promote' : '')}>
                <span onClick={onToggleStateProp} data-toggle-prop='favorite' className="employee-name">{name}</span>
                <input onChange={this.salaryValidation} className={'employee-salary ' + (valid ? '' : 'error')} value={`${salary}`}/>
                <div className="employee-controls">
                    <button onClick={onToggleStateProp} data-toggle-prop='promote' type="button" className="employee-cookie btn btn-light btn-sm">🍪</button>
                    <button onClick={onDelete} type="button" className="employee-delete btn btn-light btn-sm">🗑️</button>
                    <span style={ { display: favorite ? 'inline' : 'none' } } className='star'>⭐</span>
                </div>
            </li>
        );
    }

    salaryValidation = (e) => {
        const { onChangeSalary } = this.props;
        if(+e.target.value > 0) {
            onChangeSalary(+e.target.value);
            this.setState({valid: true});
        } else {
            this.setState({valid: false});
        }
    }
} 

export default EmployeeItem;