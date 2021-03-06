import styled from 'styled-components';

export const WrapperLogoBar = styled.aside`
  display: flex;
  grid-area: LogoBar;

  align-items: center;
  justify-content: center;
  border-bottom: solid 0.3rem ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.secondary};

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.none};

    img {
      width: 8rem;
    }
  }

  @media (max-width: 576px) {
    width: 100%;

    & > a {
      img {
        display: flex;
        width: 8rem;
      }
    }
  }
`;
