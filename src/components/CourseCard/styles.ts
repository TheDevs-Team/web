import styled from 'styled-components';
import { colors } from '~/theme';
import { FaMoneyBillWave } from '~/utils';

export const CoursesCard = styled.div`
  width: 21%;
  height: 350px;
  background: #2b2b2c;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid #38c58d;
  cursor: pointer;
  margin: 15px 0;

  &:hover {
    background: #38383a;
    transition: 0.5;
  }
`;

export const CoursesCardContent = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 15px auto 0;
  background: none;
`;

export const BackgroudIconCard = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #38c58d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconMoney = styled(FaMoneyBillWave)`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
`;

export const TitleCard = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${colors.primary.white};
`;

export const DescriptionCard = styled.h4`
  font-size: 13px;
  font-weight: 300;
  color: ${colors.primary.light};
  margin-top: 0.2rem;
`;
