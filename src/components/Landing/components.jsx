import { styled } from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  /* background-color: red; */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #023047;
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubscribeParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px;

  h2 {
    font-size: 78px;
    font-weight: 900;
    margin-bottom: 24px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
    width: 100%;
    max-width: 500px;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const EmailContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px 12px;

  label {
    font-size: 16px;
    font-weight: 600;
  }

  input {
    height: 56px;
    border: 1px solid gray;
    margin: 12px 0 18px 0;
    border-radius: 6px;
    font-size: 24px;
  }

  button {
    height: 48px;
    border: none;
    border-radius: 6px;
    background-color: #023047;
    color: white;
    font-size: 18px;
    font-weight: 600;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      background-color: #e76f51;
    }
  }
`;

export const ImageContainer = styled.div``;

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
`;

export const SuccessParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 28px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  button {
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    border: none;
    border-radius: 6px;
    background-color: #023047;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;
