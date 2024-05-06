import './company-info.css';
//Компоненту можна задавати пропси, на основі яких від будуватиметься
function CompanyInfo({companyName = 'name', employeeCount = 0, bonusCount = 0}) {
    return (
        <div className="company-info">
            <h1>Облік співробітників у компанії {companyName}</h1>
            <h2>Загальна кількість співробітників: {employeeCount}</h2>
            <h2>Премію отримають: {bonusCount}</h2>
        </div>
    );
}

export default CompanyInfo;