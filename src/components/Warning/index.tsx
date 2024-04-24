import { WarningContainer } from "./styles";
import semPerguntaImg from '../../assets/images/image.png'

type WarningProps = {
    content: string
}


export function Warning({content}: WarningProps) {
    return(
        <WarningContainer>
            <img src={semPerguntaImg} alt="" />
            <strong>Nenhuma pergunta por aqui...</strong>
            <p>{content}</p>
        </WarningContainer>
    )
}