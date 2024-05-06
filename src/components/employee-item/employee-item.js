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
            promote: props.promote,
        }
    }
    //Якщо нема додаткових дій у конструкторі, окрім виклику super(super), то не обов'язково прописувати конструктор, пропси додадуться без нього
    render () {
        const {name, salary, id} = this.props;
        const { promote } = this.state;
        return (
            <li key={id} className={'employee-item' + (promote ? ' promote' : '')}>
                <span className="employee-name">{name}</span>
                <input className="employee-salary" defaultValue={`${salary}₴`}/>
                <div className="employee-controls">
                    <button onClick={this.switchPromotion} type="button" className="employee-cookie btn btn-light btn-sm">🍪</button>
                    <button type="button" className="employee-delete btn btn-light btn-sm">🗑️</button>
                    <span>⭐</span>
                </div>
            </li>
        );
    }

    switchPromotion = () => {
        const { promote } = this.state;
        if( promote ) {
            this.setState({
                promote: false
            });
        } else {
            this.setState({
                promote: true
            });
        }
    }
}
//У класовому компоненті пропси передаються через конструктор, та записуются у this.props. Далі пропси можна деструктуризувати, та використовувати 

export default EmployeeItem;