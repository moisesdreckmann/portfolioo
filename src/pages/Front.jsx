import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import spacezone from '../assets/spacezone.png'
import chocolateria from '../assets/chocolate.png'
import calculadora from '../assets/calculadora.png'
import formjs from '../assets/formjs.png'
import apple from '../assets/apple.gif'
import goblin from '../assets/goblin.gif'
import jogo from '../assets/jogo.png'
import jogosIfood from '../assets/jogosIfood.png'
import github from '../assets/github.png'

function Front() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />
                <Card
                src={jogo}
                titulo="JOGO DESENVOLVIDO COM VITE E JAVASCRIPT"
                descricao="Criação de objetos, 
                Modularização com Vite, 
                Atributos de gaming, como atirar, colisões, 
                Manipulação de audio, 
                Deploy no netlify."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogoNave"
                linkPage="https://jogo-nave-moises.netlify.app/index.html"
                >
                </Card>

                <Card
                src={formjs}
                titulo="FORMULARIO EM REACT"
                descricao="Formulário desenvolvido em react, com utilização do react-hook-form
                e yup para validação de campos."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/formulariojs"
                linkPage="https://moisesdreckmann.github.io/formulariojs/"
                >
                </Card>

                <Card
                src={jogosIfood}
                titulo="MINI JOGOS DESENVOLVIDOS IFOOD TECH"
                descricao="Orientação a prototipo, Manipulação de listas, Manipulação de DOM,
                Utilização do Vite para organização do projeto."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/jogosDio"
                linkPage="https://moisesdreckmann.github.io/jogosDio/"
                >
                </Card>

                <Card
                src={calculadora}
                titulo="CALCULADORA FUNCIONAL EM REACT"
                descricao="Realizada com react e vite. Projeto voltado para praticar props, useState para alterar o estado dos componentes, componentização, arquitetura CSS no react."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/calculadoraReact"
                linkPage="https://moisesdreckmann.github.io/calculadoraReact/"
                >
                </Card>

                <Card
                src={github}
                titulo="CONSUMINDO GITHUB POR AXIOS"
                descricao="Projeto feito com react, javascript utilizando axios para consumo de API."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/apiGit"
                linkPage="https://moisesdreckmann.github.io/apiGit/"
                >
                </Card>

                <Card
                src={chocolateria}
                titulo="PROJETO CHOCOLATERIA"
                descricao="Site voltado a venda de chocolates. 

                Utilizado: Efeito parallax, Flexbox, Media queries e responsividade, Variaveis CSS para paleta de cores,
                Position, Menu fixed, Menu interativo para dispositivos moveis, Otimização de imagens e icones para boa performance,
                SEO, Acessibilidade, Arquitetura BEM."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-parallax-chocolateria"
                linkPage="https://moisesdreckmann.github.io/project-parallax-chocolateria/"
                >
                </Card>

                <Card
                src={apple}
                titulo="PROJETO APPLE"
                descricao="Animação de cores com logo Apple

                Animation. Otimização de imagem para boa performance. SEO. Filters Effect. 
                Box-Shadow personalizado"
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-apple"
                linkPage="https://moisesdreckmann.github.io/project-apple/"
                >
                </Card>

                <Card
                src={goblin}
                titulo="ANIMATION CSS/JS"
                descricao="Algumas animações interessantes, de login de formulario, barra de carregamento, loading, eskeleton para carregamento de imagens navBar interativo, e um goblin em constante movimento utilizando sprite e JS (setInterval) para controle."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/animation01"
                linkPage="https://moisesdreckmann.github.io/animation01/"
                >
                </Card>

                <Card
                src={spacezone}
                titulo="PROJETO SPACEZONE"
                descricao="Buscador de imagens estilizado. 

                Utilizado: Flexbox, Animation, Efeitos em imagens através de pseudo-elements, Select personalizado Dark theme, Responsividade, Boa performance, Acessibilidade, SEO, Funções pequenas de JS, Arquitetura BEM."

                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/project-spacezone"
                linkPage="https://moisesdreckmann.github.io/project-spacezone/"
                >
                </Card>
            </main>
            <Footer/>
        </>
    )
}

export default Front