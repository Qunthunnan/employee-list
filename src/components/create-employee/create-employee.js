import { Component } from 'react';
import './create-employee.css';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    render () {
    const { onAdd } = this.props;
    const { name, salary } = this.state;
    return <div className="create-employee">
            <h2>Додайте нового співробітника</h2>
            <form onSubmit={ (e) => {
                e.preventDefault();
                onAdd(name, salary);
            }} className='create-employee-form' action="#">
                <input onChange={this.changeValue} name='name' value={ name } className='create-employee-name' placeholder="Ім'я нового співробітника" type="text" />
                <input onChange={this.changeValue} name='salary' value={ salary } className='create-employee-salary' placeholder='З/П у $' type="number" />
                <button type='submit' className="btn btn-outline create-employee-btn">Додати</button>
            </form>
        </div>
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 
}

export default CreateEmployee;