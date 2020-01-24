import React from 'react';
import '../Quizes.scss';
import ShadowBox from '../../../components/shadowBox/ShadowBox';
import ProgressBar, { ProgressBarColor } from '../../../components/progressBar/ProgressBar';

const CompletedQuizes = () => {
  return (
    <ShadowBox>
      <h2 className="light">Pretekli kvizi</h2>
      <table className="light">
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Datum začetka/poteka</th>
            <th>Odziv</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mesec pozarne varnosti</td>
            <td>od 1.2. 2020 do 7.2. 2020</td>
            <td>
              <ProgressBar value={92} color={ProgressBarColor.Light} />
            </td>
          </tr>
          <tr>
            <td>Mesec pozarne varnosti</td>
            <td>od 1.2. 2020 do 7.2. 2020</td>
            <td>
              <ProgressBar value={85} color={ProgressBarColor.Light} />
            </td>
          </tr>
          <tr>
            <td>Mesec pozarne varnosti</td>
            <td>od 1.2. 2020 do 7.2. 2020</td>
            <td>
              <ProgressBar value={12} color={ProgressBarColor.Light} />
            </td>
          </tr>
        </tbody>
      </table>
    </ShadowBox>
  );
};

export default CompletedQuizes;
