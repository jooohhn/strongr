// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../colors';

type Props = {
  orm: number,
  untrained: number,
  novice: number,
  intermediate: number,
  advanced: number,
  elite: number
};

const Bar = styled.div`
  height: 16px;
  background-color: #e3e6e8;
  border-radius: .25rem;
  display: flex;
  overflow: hidden;
`;

const SubBar = styled.div`
  display: flex;
  overflow: visible;
  width: ${props => props.width}%;
  height: 16px;
  background-color: ${props => props.color};
  font-size: 70%;
`;

const UpperInfo = styled.div`
  background-color: gray;
  height: 20px;
  font-size: 70%;
  margin-bottom: 20px;
`;
const Marker = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: ${props => props.left}%;
`;

export default function ProgressBar(props: Props) {
  const { orm, untrained, novice, intermediate, advanced, elite } = props;
  const novicePercentage = novice / elite;
  const intermediatePercentage = intermediate / elite - novicePercentage;
  const advancedPercentage = advanced / elite - intermediatePercentage;
  const elitePercentage = elite / elite - advancedPercentage;
  const ormPercentage = orm / elite;
  // console.log(novicePercentage);
  // console.log(intermediatePercentage);
  // console.log(advancedPercentage);
  // console.log(elitePercentage);
  // console.log(elitePercentage + novicePercentage + intermediatePercentage + advancedPercentage);
  return (
    <div>
      <UpperInfo>
        <Marker left="-2">
          <div>
            {untrained}
          </div>
          <div>Untrained</div>
        </Marker>
        <Marker left={novicePercentage * 100 * 0.33}>
          <div>
            {novice}
          </div>
          <div>Novice</div>
        </Marker>
      </UpperInfo>
      <Bar>
        <SubBar width={novicePercentage * 100} color="blue">
          {novice}
        </SubBar>
        <SubBar width={intermediatePercentage * 100} color="red">
          {intermediate}
        </SubBar>
        <SubBar width={advancedPercentage * 100} color="green">
          {advanced}
        </SubBar>
        <SubBar width={advancedPercentage * 100} color="violet">
          {elite}
        </SubBar>
      </Bar>
    </div>
  );
}
