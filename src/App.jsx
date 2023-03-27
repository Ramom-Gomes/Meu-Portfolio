import "./App.css";
import FotoGit from "./images/github.png";
import FotoLin from "./images/linkedin.png";
import FotoPessoal from "./images/Foto.jpeg";
import FotoReact from "./images/imagemreact.png";
import FotoJs from "./images/imagemjs.png";
import Fotohtml from "./images/imagemhtml.png";
import Fotocss from "./images/imagemcss.png";
import Fotosql from "./images/imagemsql.png";
import FotoIlustra from "./images/imagemilustra.jpg";
import FotoTelefone from "./images/telefoneazul.png";
import FotoEmail from "./images/emailazul.png";

const app = () => {
  
  return (
    <div>
      <div className="cabecalho">
        <header>
          <h1 id="home" className="titulo">Ramom.dev</h1>
        </header>
        <nav className="menuprincipal">
          <ul className="menu">
            <li className="links"><a className="links" href="#home">Home</a></li>
            <li className="links"><a className="links" href="#sobremim">Sobre</a></li>
            <li className="links"><a className="links" href="#portfolio">Projetos</a></li>
            <li className="links"><a className="links" href="#contatos">Contatos</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <section className="apresentacao">
          <div className="informacoes">
            <div className="informacoespessoais">
              <h1 className="informacoestitulo">Desenvolvedor Front-End React 👋🏿</h1>
              <p className="informacoesdescricao">Olá. Eu sou o Ramom. Um apaixado Desenvolvedor Front-End React.</p>
              <div className="portfolio">
              <a target={"_blank"} href="https://www.linkedin.com/in/ramomgomes/"><img className="redesimage" src={FotoLin} alt="" /></a>
              <a target={"_blank"} href="https://github.com/Ramom-Gomes"><img className="redesimage" src={FotoGit} alt="" /></a>
              </div>
            </div>
            <div className="foto">
              <img className="imagem" src={FotoPessoal} alt="" />
            </div>
          </div>
          <div className="tecnologias">
            <div id="sobremim" className="titulotecnologias">tecnologias |</div>
            <img className="imagemtecnologias" src={Fotohtml} alt="" />
            <img className="imagemtecnologias" src={Fotocss} alt="" />
            <img className="imagemtecnologias" src={FotoJs} alt="" />
            <img className="imagemtecnologias" src={FotoReact} alt="" />
            <img className="imagemtecnologias" src={Fotosql} alt="" />
          </div>
        </section>
        <section className="sobremim">
          <img className="imagemilustra" src={FotoIlustra} alt="" />
          <div className="sobreprincipal">
            <p className="sobretitulo">SOBRE MIM</p>
            <h3 className="sobresemititulo">Um dedicado Desenvolvedor Front-End 🧞.</h3>
            <p className="sobredescricao">Um jovem de 19 anos apaixonado por tecnologia e programação, 
              atualmente cursando o ensino superior em Análise e Desenvolvimento de Sistemas.
              Com foco na área de programação Front-End
              possuo um impressionante arsenal de habilidades em html, css, javascript, react e sql.Sou excelent
              em projetar e manter sites responsivos que oferecem uma experiência de usuário tranquila.</p>
          </div>
        </section>
        <section className="secaoport">
          <p id="portfolio" className="portfoliotitulo">PORTFÓLIO</p>
          <h3 className="portfoliodescricao">Cada projeto é uma peça única de desenvolvimento 🧩</h3>
          <div className="projetos">
            <img className="projetoimagem" src={FotoIlustra} alt="" />
            <div className="projetodescricao">
              <p className="projetotitulo">teste</p>
              <p className="projetosemititulo">esse é uma legenda para testar a posição</p>
              <div className="projetotecnologias">
                <p className="tecnologiausada">tecnologia</p>
                <p className="tecnologiausada">tecnologia</p>
              </div>
              <div className="projetoredes">
                <a className="projetogit" href="">Demo<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
                <a className="projetogit" href="">Demo<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="secaoport">
          <div className="projetos">
            <div className="projetodescricao2">
              <p className="projetotitulo">teste</p>
              <p className="projetosemititulo">esse é uma legenda para testar a posição</p>
              <div className="projetotecnologias">
                <p className="tecnologiausada">tecnologia</p>
                <p className="tecnologiausada">tecnologia</p>
              </div>
              <div className="projetoredes">
                <a className="projetogit" href="">Código<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
                <a className="projetogit" href="">Demo<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
              </div>
            </div>
            <img className="projetoimagem" src={FotoIlustra} alt="" />
          </div>
        </section>
        <section className="secaoport2">
          <div className="projetos">
            <img className="projetoimagem" src={FotoIlustra} alt="" />
            <div className="projetodescricao">
              <p className="projetotitulo">teste</p>
              <p className="projetosemititulo">esse é uma legenda para testar a posição</p>
              <div className="projetotecnologias">
                <p className="tecnologiausada">tecnologia</p>
                <p className="tecnologiausada">tecnologia</p>
              </div>
              <div className="projetoredes">
                <a className="projetogit" href="">Código<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
                <a className="projetogit" href="">Demo<img className="projetoredesimagem" src={FotoGit} alt="" /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="secaocontatos">
          <p id="contatos" className="contatotitulo">CONTATOS</p>
          <h3 className="contatosemititulo">não seja tímido! fale comigo 👇🏿</h3>
          <div className="contatosredes">
            <div className="contatospessoais">
              <img className="contatosfototelefone" src={FotoTelefone} alt="" />
              <div className="contatostelefone">
                <p className="contatosredestitulo">Telefone</p>
                <p>(11) 94262-7660</p>
              </div>
            </div>
            <div className="contatospessoais2">
              <img className="contatosfotoemail" src={FotoEmail} alt="" />
              <div className="contatosemail">
                <p className="contatosredestitulo">E-Mail</p>
                <p>ramomusica09@hotmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <div  className="faixa">
          <div className="faixalocal">
            <p className="mensagemfinal">Projeto desenvolvido com muito carinho</p>
            <a target={"_blank"} href="https://github.com/Ramom-Gomes"><img className="redesimagemfinal" src={FotoGit} alt="" /></a>
            <a target={"_blank"} href="https://www.linkedin.com/in/ramomgomes/"><img className="redesimagemfinal" src={FotoLin} alt="" /></a>
          </div>
        </div>
      </main>
    </div>
  )

}

export default app;