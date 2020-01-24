import React from 'react';
import '../Quizes.scss';
import ShadowBox from '../../../components/shadowBox/ShadowBox';
import ProgressBar from '../../../components/progressBar/ProgressBar';

const ActiveQuizes = () => {
  return (
    <ShadowBox>
      <h2>Aktualni kvizi</h2>
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
              <ProgressBar value={33} />
            </td>
          </tr>
          <tr>
            <td>
              <img src="assets/doc.svg" alt="" />
            </td>
            <td>Mesec pozarne varnosti</td>
            <td>od 1.2. 2020 do 7.2. 2020</td>
            <td>
              <ProgressBar value={76} />
            </td>
          </tr>
        </tbody>
      </table>
    </ShadowBox>
  );
};
export default ActiveQuizes;
