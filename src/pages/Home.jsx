import { useState } from "react"
import { useEffect } from "react"
import CardTecnologia from "../components/CardTecnologia.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

function Home() {
    const [dadosUsuario, setDadosUsuario] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/moisesdreckmann')
        .then((res) => res.json())
        .then((json) => setDadosUsuario(json))
    }, [])

    return(
        <>
            <main className="container">
                <Navbar className="nav" />
                <div className="containerPart1">
                    <a href="https://github.com/moisesdreckmann"><img className="imgSelf" src={dadosUsuario.avatar_url} alt="imagem de perfil do github"/></a>
                </div>
                <div className="containerPart2">
                    <p className="text">
                        Me chamo Moisés Dreckmann. Sou um desenvolvedor front-end com profunda expertise no backend utilizando PHP, Mysql ou Postgresql. Meu primeiro contato com Hello World foi através de C++. Desde então, tenho ampliado meu conhecimento em diversas tecnologias, destacando-me em Estrutura de Dados na faculdade. 
                    </p>
                    <p className="text">
                        No front-end, destaco minha extensa experiência com React e JavaScript, e dominio do CSS. Fui capaz de aprimorar minhas habilidades na criação de interfaces interativas e responsivas. Trabalhei em projetos desafiadores, aplicando boas práticas de desenvolvimento e mantendo-me atualizado com as últimas tendências no ecossistema. Estou entusiasmado em continuar contribuindo para o desenvolvimento de soluções inovadoras e eficientes.
                    </p>
                    <div className="containerPart3">
                        <p className="text">Minhas Tecnologias:</p>
                        <div className="containerCardTecnologia">
                            <p className="text">Front-End: </p>
                            <CardTecnologia className="cardTecno" text="REACT" color={'#6ADBF8'}/>
                            <CardTecnologia className="cardTecno" text="JAVASCRIPT" color={'#ffdd1b'}/>
                            <CardTecnologia className="cardTecno" text="BOOTSTRAP" color={'#8B26F6'}/>
                            <CardTecnologia className="cardTecno" text="CSS 3" color={'#2072B3'}/>
                            <CardTecnologia className="cardTecno" text="HTML 5" color={'#E14F2B'}/>
                        </div>
                        <div className="containerCardTecnologia">
                            <p className="text">Back-End: </p>
                            <CardTecnologia className="cardTecno" text="PHP" color={'#7490BC'}/>
                            <CardTecnologia className="cardTecno" text="MYSQL" color={'#106089'}/>
                            <CardTecnologia className="cardTecno" text="POSTGRESQL" color={'#37678F'}/>
                            <CardTecnologia className="cardTecno" text="C" color={'#135B99'}/>
                            <CardTecnologia className="cardTecno" text="JAVA" color={'#DF3030'}/>
                            <CardTecnologia className="cardTecno" text="SPRINGBOOT" color={'#62B641'}/>
                        </div>
                        <div className="containerCardTecnologia">
                            <p className="text">Outros: </p>
                            <CardTecnologia className="cardTecno" text="GIT" color={'#EE512F'}/>
                            <CardTecnologia className="cardTecno" text="PHOTOSHOP" color={'#83B4E1'}/>
                            <CardTecnologia className="cardTecno" text="FILMORA" color={'#1E394C'}/>
                        </div>
                    </div>
                </div>   
            </main>
            <Footer/>
        </>
        
    )
}

export default Home