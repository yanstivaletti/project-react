import styled from 'styled-components';

export const WrapperContentUsers = styled.div`
  grid-area: Content;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListUsers = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: Content;
  justify-self: center;

  margin-top: ${({ theme }) => theme.spacing.tight};
  margin-bottom: ${({ theme }) => theme.spacing.tight};
  width: 90%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.tight};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};

  @media (max-width: 576px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.extraTight};
  }
`;

export const WrapperButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.text};
`;
export const WrapperInput = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.text};
`;
