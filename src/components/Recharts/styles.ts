import styled from 'styled-components';
import { AreaChart, ResponsiveContainer } from 'recharts';

export const Container = styled(ResponsiveContainer).attrs({
  width: '98%',
  height: '95%',
})``;

export const AreaChartStyled = styled(AreaChart)`
  width: 700px;
  height: 250px;
`;
