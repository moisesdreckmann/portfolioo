function Card({titulo, descricao, src, className, tituloClassName, espaco, btnEstilizacao, divBtn, linkProjeto, linkPage, tamanhoImg, descricaoClassName}) {
    return(
        <section className={className}>
            <img src={src} alt="imagem do projeto" className={tamanhoImg}/>
            <div className={espaco}>
                <p className={tituloClassName}>{titulo}</p>
                <p className={descricaoClassName}>{descricao}</p>
                <div className={divBtn}>
                    <button className={btnEstilizacao}><a href={linkProjeto} target="_blank" rel="noreferrer">PROJETO</a></button>
                    <button className={btnEstilizacao}><a href={linkPage} target="_blank" rel="noreferrer">PAGE</a></button>
                </div>
            </div>
        </section>
    )
}

export default Card