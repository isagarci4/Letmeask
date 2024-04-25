import styled from "styled-components";

export const WarningContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    img {
        margin-bottom: 8px;
    }

    strong {
        color: ${(props) => props.theme.black};
        font-size: 18px;
    }

    p {
        font-size: 14px;
        color: ${(props) => props.theme["gray-medium"]};
    }
`