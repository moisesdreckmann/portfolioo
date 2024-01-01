import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

import java from '../assets/java.jpg'
import c from '../assets/c.png'
import americanas from '../assets/americanas.png'
import java2 from '../assets/JAVA2.png'

function Back() {
    return(
        <>
            <main className="containerFrontBack">
                <Navbar className="nav" />
                <Card
                src={americanas}
                titulo="RÉPLICA SITE DA AMERICANAS EM PHP"
                descricao="Código Reutilizavel com funções POO em PHP. 
                Pode ser acessada uma página esclusiva para Notebooks no Menu. 
                Produtos recomendados, com PHP e limitedrows incluso. 
                Alteração de senha. Envio de email apra confirmação e entrada no site. Senha criptografada no Banco sql. E muito mais disponivel em projeto no github."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/Americanas"
                linkPage="#"
                >
                </Card>

                <Card
                src={java2}
                titulo="BIBLIOTECA EM JAVA"
                descricao="É um sistema de software
                que automatiza as tarefas de gerenciamento de uma biblioteca. Ele inclui recursos para o cadastro
                de usuários, empréstimo de exemplares, devolução de exemplares e listagens (pesquisa) de alunos,
                empréstimos e exemplares. A tecnologia da implementação é java com spring boot como framework."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/javaAula2"
                linkPage="#"
                >
                </Card>

                <Card
                src={java}
                titulo="JAVA"
                descricao="Aulas de JAVA proporcionadas pela faculdade IFSUL(Instituto Federal Sul-Rio-Grandense). Herança, Polimorfismo, Associação entre classes, Exceções, Collections, Maven, Spring boot, Api, Crud, Api Rest."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/java"
                linkPage="#"
                >
                </Card>

                <Card
                src={c}
                titulo="PROJETO EM ESTRUTURA DE DADOS"
                descricao="Simulação de um caixa de loja. Foi utilizado: criação de structs, duas listas duplamente encadeadas, e salvamento de dados em bloco de notas, agindo como um banco de dados. Além de outras funcionadades extras."
                
                className="cardProject"
                espaco="espaco"
                descricaoClassName="descricaoClassName"
                divBtn="divBtn"
                tituloClassName="tituloClassName"
                btnEstilizacao="btnEstilizacao"
                tamanhoImg="tamanhoImg"
                linkProjeto="https://github.com/moisesdreckmann/projectCpp"
                linkPage="#"
                >
                </Card>
            </main>
            <Footer/>
        </>
    )
}

export default Back