import { Component } from 'react';
import './create-employee.css';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: '',
                salary: ''
            }
        }
    }

    render () {
    const { name, salary, errors } = this.state;
    return <div className="create-employee">
            <h2>Додайте нового співробітника</h2>
            <form onSubmit={ (e) => {
                e.preventDefault();
                this.submit();
            }} className='create-employee-form' action="#">
            <div className="create-employee-input-wrapper">
                <input onChange={this.changeValue} id='name' name='name' value={ name } className='create-employee-name' placeholder="Ім'я нового співробітника" type="text" />
                <label htmlFor="name" className='create-employee-error'>{errors.name}</label>
            </div>
            <div className="create-employee-input-wrapper">
                <input onChange={this.changeValue} id='salary' name='salary' value={ salary } className='create-employee-salary' placeholder='З/П у $' type="number" />
                <label htmlFor="salary" className='create-employee-error'>{errors.salary}</label>
            </div>

                <button type='submit' className="btn btn-outline create-employee-btn">Додати</button>
            </form>
        </div>
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = () => {
        const { onAdd } = this.props;
        const { name, salary } = this.state;

        if (this.validation()) {
            onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            });
        }
    }

    validation = () => {
        const { name, salary } = this.state;
        const resultErrors = {
            name: '',
            salary: '',
        }

        if(name.length < 2) {
            resultErrors.name = "Ім'я може бути не менше, ніж 2 символи";
        }

        if(name.length > 256) {
            resultErrors.name = "Ім'я може бути не більше, ніж 256 символів";
        }

        if(+salary <= 0) {
            resultErrors.salary = 'Зарплатня повинна бути більше 0₴';
        }

        this.setState({
            errors: resultErrors
        });

        return resultErrors.name === '' && resultErrors.salary === ''
    }
}

export default CreateEmployee;