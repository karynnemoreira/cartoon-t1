import React from "react"
import Cn from './imagensHeader/cn.png'
import Jogos from "./imagensHeader/jogos.png"
import Programacao from "./imagensHeader/programacao.png"

import * as S from "./EstiloHeader.jsx" //Tudo que tiver S vai ser estilizado no arquivo Estilo.header.jsx

function Header() {
    return (
        <S.HeaderEstilo>
            <img src={Cn} alt="" />

            <S.Section>
                <S.Div>
                    <img src={Jogos} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>

            </S.Section>

        </S.HeaderEstilo>
    )
}

export default Header