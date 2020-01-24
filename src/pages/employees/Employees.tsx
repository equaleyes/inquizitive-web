import React from 'react';
import './Employees.scss';
import ShadowBox from '../../components/shadowBox/ShadowBox';
import Button from '../../components/button/Button';

const Employees = () => {
  const addNewEmployee = () => {

  };

  return (
    <div className="page employees">
      <ShadowBox>
        <h2>Zaposleni</h2>
        <Button onClick={addNewEmployee}>
          <span>+</span>Dodaj nov
        </Button>
      </ShadowBox>
      <ShadowBox>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Naziv</th>
              <th>Datum začetka/poteka</th>
              <th>Odziv</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="assets/doc.svg" alt="" />
              </td>
              <td>Mesec pozarne varnosti</td>
              <td>od 1.2. 2020 do 7.2. 2020</td>
              <td>
                bla bla
              </td>
            </tr>
            <tr>
              <td>
                <img src="assets/doc.svg" alt="" />
              </td>
              <td>Mesec pozarne varnosti</td>
              <td>od 1.2. 2020 do 7.2. 2020</td>
              <td>
                blabl a
              </td>
            </tr>
          </tbody>
        </table>
      </ShadowBox>
    </div>
  );
};

export default Employees;
