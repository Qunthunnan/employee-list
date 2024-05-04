import './filter-panel.css';
import './filter.css';
function Filter () {
    return (
        <div className="filter btn-group">
            <button type="button" className="btn btn-outline-primary">Усі співробітники</button>
            <button type="button" className="btn btn-outline-primary">Ті, хто ідуть на підвищення</button>
            <button type="button" className="btn btn-outline-primary">З/П більше 1000$</button>
        </div>
    );
}

export default Filter;