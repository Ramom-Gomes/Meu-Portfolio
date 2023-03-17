import "./App.css";
import FotoGit from "./images/github.png";
import FotoLin from "./images/linkedin.png";
import FotoPessoal from "./images/Foto.jpeg";

const app = () => {
  
  return (
    <div>
      <div className="cabecalho">
        <header>
          <h1 className="titulo">Ramom.dev</h1>
        </header>
        <nav className="menuprincipal">
          <ul className="menu">
            <li className="links"><a className="links" href="">Home</a></li>
            <li className="links"><a className="links" href="">Sobre</a></li>
            <li className="links"><a className="links" href="">Projetos</a></li>
            <li className="links"><a className="links" href="">Contatos</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <section className="apresentacao">
          <div className="informacoes">
            <div className="informacoespessoais">
              <h1 className="informacoestitulo">Desenvolvedor Front-End React</h1>
              <p className="informacoesdescricao">Olá. Eu sou o Ramom. Um apaixado Desenvolvedor Front-End React.</p>
              <div className="portfolio">
              <a href=""><img className="redesimage" src={FotoLin} alt="" /></a>
                <a href=""><img className="redesimage" src={FotoGit} alt="" /></a>
              </div>
            </div>
            <div className="foto">
              <img className="imagem" src={FotoPessoal} alt="" />
            </div>
          </div>
          <div>
            <div>tecnologias:</div>
          </div>
        </section>
      </main>
    </div>
  )

}

export default app;