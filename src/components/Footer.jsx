import '@fortawesome/fontawesome-free/css/all.css'

function Footer() {
    return(
        <footer className="footer">
        <p className="textFooter">&copy; Desenvolvido por Moisés Dreckmann utilizando React</p>
        <div>
          <p className="textFooter">Contato: </p>
          <a href="https://www.facebook.com/profile.php?id=100009115980070" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/mois%C3%A9s-dreckmann-245756219/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    )
}

export default Footer