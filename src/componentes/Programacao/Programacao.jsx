import React, {useState} from "react"

export default function Programacao(){

const [desenhos, setDesenhos] = useState([
    {nome: "Scooby Doo", hora: "6:00h"},
    {nome: "Dexter", hora: "7:00h"},
    {nome: "Coragem, o cão covarde", hora: "8:00h"},
    {nome: "Du, Dudu e Edu", hora: "9:00h"},
    {nome: "A vaca e o frango", hora: "10:00h"}
])

    return(
        <>
        <h2>PROGRAMAÇÃO DOS DESENHOS</h2>
        </>
    )
}