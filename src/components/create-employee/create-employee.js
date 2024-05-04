import './create-employee.css';

function CreateEmployee () {
    return (
        <div className="create-employee">
            <h2>Додайте нового співробітника</h2>
            <form className='create-employee-form' action="#">
                <input className='create-employee-name' placeholder="Ім'я нового співробітника" type="text" />
                <input className='create-employee-salary' placeholder='З/П у $' type="text" />
                <button type='button' className="btn btn-outline create-employee-btn">Додати</button>
            </form>
        </div>
    )
}

export default CreateEmployee;