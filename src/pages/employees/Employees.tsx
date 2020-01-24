import React, { useState } from 'react';
import './Employees.scss';
import ShadowBox from '../../components/shadowBox/ShadowBox';
import Button from '../../components/button/Button';
import Number from '../../components/number/Number';

type Employee = {
  name: string,
  number: string,
  activity: number,
  score: number,
}

const Employees = () => {
  const [filter, setFilter] = useState('');

  const employees: Employee[] = [
    { name: 'Janez Novak', number: '+386 31 753 292', activity: 12, score: 1298 },
    { name: 'Blaz Vantur', number: '+386 40 123 456', activity: 97, score: 3456 },
    { name: 'Mojca Pokrajculja', number: '+386 70 999 123', activity: 67, score: 7265 },
  ];

  const renderTable = () => {
    return employees.map((employee: Employee, index: number) => {
      return employee.name.includes(filter) ? (
        <tr key={index}>
          <td>
            <img src="assets/doc.svg" alt="" />
          </td>
          <td>{employee.name}</td>
          <td>{employee.number}</td>
          <td>
            <b>
              <Number value={employee.activity} symbol="%" />{' '}
            </b>
            <i>/ 100%</i>
          </td>
          <td>{employee.score}</td>
        </tr>
      ) : null;
    });
  };

  const handleFilterInput = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <div className="page employees">
      <ShadowBox>
        <h2>Zaposleni</h2>
        <div className="disable">
          <Button>
            <span>+</span>Dodaj nov
          </Button>
        </div>
      </ShadowBox>
      <ShadowBox>
        <div className="small-title">
          Zaposleni v podjetju: <i style={{ marginLeft: '5px', flexGrow: 1 }}> Pošta Slovenije</i>
          <div className="search">
            <img src="assets/search.svg" alt="" />
            <input type="text" onChange={handleFilterInput} />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Uporabnik</th>
              <th>Telefon</th>
              <th>Aktivnost</th>
              <th>Skupaj točke</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </ShadowBox>
    </div>
  );
};

export default Employees;
