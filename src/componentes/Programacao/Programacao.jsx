import React, { useState } from "react"
import Dexter from "./ImagensProgramacao/dexter.png"
import VacaeFrango from "./ImagensProgramacao/vacaeofrango.png"
import Du from "./ImagensProgramacao/du.png"
import Coragem from "./ImagensProgramacao/coragem.png"
import Jorel from "./ImagensProgramacao/jorel.png"
import Turma from "./ImagensProgramacao/turma.png"
import Steven from "./ImagensProgramacao/steven.png"
import Billy from "./ImagensProgramacao/billy.png"
import * as S from "./EstiloProgramacao.jsx"

function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { hora: "7:00h", nome: "O LABORATÓRIO DE DEXTER", imagem: Dexter, desenhoManha: true },
        { hora: "8:00h", nome: "A VACA E O FRANGO", imagem: VacaeFrango, desenhoManha: true },
        { hora: "9:00h", nome: "DU, DUDU E EDU", imagem: Du, desenhoManha: true },
        { hora: "10:00h", nome: "CORAGEM, O CÃO COVARDE", imagem: Coragem, desenhoManha: true },
        { hora: "11:00h", nome: "IRMÃO DO JOREL", imagem: Jorel, desenhoManha: true },
        { hora: "12:00h", nome: "TURMA DA MÔNICA JOVEM", imagem: Turma, desenhoManha: false },
        { hora: "13:00h", nome: "STEVEN UNIVERSO", imagem: Steven, desenhoManha: false },
        { hora: "14:00h", nome: "BILLY E MANDY", imagem: Billy, desenhoManha: false },
    ])

    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)

    return (
        <>
            <S.Section>
                {desenhos.map((item) => (
                    <S.Card>
                        <h2>{item.hora}</h2>
                        <h2> {item.nome} </h2>
                        <img src={item.imagem} alt="" />
                    </S.Card>
                ))}
            </S.Section>

            <S.Section2>
                <h2>Desenhos da manhã</h2>

                {desenhoAntesMeioDia.map((item) => (
                    <div>
                        <h3> {item.nome} </h3>
                        <h3> {item.hora}  </h3>
                        <img src={item.imagem} alt={item.nome} />
                    </div>

                ))}

            </S.Section2>

        </>

    )
}

export default Programacao