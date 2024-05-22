import { Component } from 'react';
import './filter-panel.css';
import './filter.css';
class Filter extends Component {
    render() {
        const { onFilter, activeTab } = this.props;
        return (
            <div onClick={(e) => {
                if(e.target.getAttribute('data-filter'))
                    onFilter(e.target.getAttribute('data-filter'));
            }} className="filter btn-group">
                <button data-filter="all" type="button" className={'btn btn-outline-primary ' + (activeTab === 'all' ? 'active' : '')}>Усі співробітники</button>
                <button data-filter="promote" type="button" className={'btn btn-outline-primary ' + (activeTab === 'promote' ? 'active' : '')}>Ті, хто ідуть на підвищення</button>
                <button data-filter="thousand" type="button" className={'btn btn-outline-primary ' + (activeTab === 'thousand' ? 'active' : '')}>З/П більше 1000$</button>
            </div>
        );
    }
}

export default Filter;