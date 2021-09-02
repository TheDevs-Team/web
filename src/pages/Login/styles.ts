import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgb(130, 87, 229);
  background: linear-gradient(
    322deg,
    rgba(130, 87, 229, 1) 0%,
    rgba(91, 12, 125, 0.835171568627451) 50%,
    rgba(202, 102, 255, 1) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 90%;
  height: 80%;
  max-width: 1280px;
  max-height: 750px;

  border-radius: 30px;

  background: rgb(130, 87, 229);
  background: linear-gradient(
    322deg,
    rgba(130, 87, 229, 1) 0%,
    rgba(91, 12, 125, 0.835171568627451) 50%,
    rgba(202, 102, 255, 1) 100%
  );

  box-shadow: 0 2px 30px rgb(0 0 0 / 30%);

  display: flex;
  flex-direction: row;
`;

export const ImgContainer = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
  }
`;

export const FormContainer = styled.div`
  width: 45%;
  height: 100%;

  background: #f4f4f4;
`;
