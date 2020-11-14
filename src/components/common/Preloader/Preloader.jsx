import styled from "@emotion/styled";

export const Preloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :after {
    content: "";
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px dotted blue;
    background: transparent;
    animation: preloader 2s linear infinite;
    @keyframes preloader {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
