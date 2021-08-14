import React from "react"
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {

    const { usuario } = useParams()

    return (
        <div>
            <h1>O presente projeto foi desenvolvido com pensamento em proporcionar ao consumista uma
maneira de economizar na conta de luz e no gás de cozinha. Montou-se um protótipo de um sistema programado em arduino, combinando
tecnologia e técnicas especificas de mobilidade e funcionamento do circuito,
proporcionando a movimentação do prototipo para que o mesmo se encontre de frente a luz em diversas situações</h1>
            
        </div>
    )
}

export default Conteudo01