import styled from "styled-components";

export const PageRoom = styled.div`
    header {
        padding: 24px;
        border-bottom: 1px solid ${(props) => props.theme.gray};

        .content {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > img {
                max-height: 45px;
            }

            > div {
                display: flex;
                gap: 16px;

                button {
                    height: 40px;
                }
            }
        }
    }

    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: ${(props) => props.theme.black};
            }

            span {
                margin-left: 16px;
                background: ${(props) => props.theme["pink-dark"]};
                border-radius: 9999px;
                padding: 8px 16px;
                color: ${(props) => props.theme.white};
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: ${(props) => props.theme["white-details"]};
                box-shadow: 0 2px 12px ${(props) => props.theme.shadow};
                resize: vertical;
                height: 130px;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }

                    span { 
                        margin-left: 8px;
                        color: #29292e;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }

                > span {
                    font-size: 14px;
                    color: ${(props) => props.theme["gray-dark"]};
                    font-weight: 500;

                    button {
                        background: transparent;
                        border: 0;
                        color: ${(props) => props.theme.purple};
                        text-decoration: underline;
                        font-size: 14px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 32px;
        }
    }
`

export const RoomContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        max-height: 45px;
    }

    > div {
        display: flex;
        gap: 16px;

        button {
            height: 40px;
        }
    }
`

export const RoomTitle = styled.div`
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${(props) => props.theme.black};
    }

    span {
        margin-left: 16px;
        background: ${(props) => props.theme["pink-dark"]};
        border-radius: 9999px;
        padding: 8px 16px;
        color: ${(props) => props.theme.white};
        font-weight: 500;
        font-size: 14px;
    }
`
