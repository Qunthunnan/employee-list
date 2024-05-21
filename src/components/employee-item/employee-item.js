import { Component } from 'react';
import './employee-item.css';
// function EmployeeItem ({name, salary, promote, id}) {
//     return (
//         <li key={id} className={'employee-item' + (promote ? ' promote' : '')}>
//             <span className="employee-name">{name}</span>
//             <input className="employee-salary" defaultValue={`${salary}₴`}/>
//             <div className="employee-controls">
//                 <button type="button" className="employee-cookie btn btn-light btn-sm">🍪</button>
//                 <button type="button" className="employee-delete btn btn-light btn-sm">🗑️</button>
//                 <span>⭐</span>
//             </div>
//         </li>
//     );
// }

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        }
        //Стейт записується у конструкторі у властивість state об'єктом.
    }
    render () {
        const {name, salary, id, promote, onSwitchPromotion, onDelete} = this.props;
        const { favorite } = this.state;
        return (
            <li key={id} className={'employee-item' + (promote ? ' promote' : '')}>
                <span onClick={this.switchFavorite} className="employee-name">{name}</span>
                <input className="employee-salary" defaultValue={`${salary}₴`}/>
                <div className="employee-controls">
                    <button onClick={onSwitchPromotion} type="button" className="employee-cookie btn btn-light btn-sm">🍪</button>
                    <button onClick={onDelete} type="button" className="employee-delete btn btn-light btn-sm">🗑️</button>
                    <span style={ { display: favorite ? 'inline' : 'none' } } className='star'>⭐</span>
                </div>
            </li>
        );
    }

    switchFavorite = ( event ) => {
        this.setState(({ favorite }) => ({
            favorite: !favorite,
        }));
    }
    //Для зміни даних у стейті застосовується метод this.setState, в нього передаємо об'єкт, у якому зазначаємо властивість, яку треба змінити. Це не перепише увесь об'єкт стейту, а тільки ту властивість, що ми вкажемо у об'єкті. Метод setState - асинхроний через те що, він запускає переренд усього компоненту. Тому, якщо передбачається послідовна робота зі стейтом, то замість об'єкта у this.setState варто передати колбек функцію у форматі 
}
//У класовому компоненті пропси передаються через конструктор, та записуются у this.props. Далі пропси можна деструктуризувати, та використовувати 

export default EmployeeItem;