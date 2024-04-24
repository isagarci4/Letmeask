import styled from "styled-components";

export const AdminHeader = styled.header`
    padding: 24px;
    border-bottom: 1px solid ${(props) => props.theme.gray};
`

export const AdminHeaderDiv = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DivLogo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    img {
            max-height: 45px;
    }

    button {
        background: transparent;
        border: none;
        color: ${(props) => props.theme.black};
        cursor: pointer
    }
`

export const DivCode = styled.div`
    display: flex;
    gap: 16px;

    button {
        height: 40px;
    }
`