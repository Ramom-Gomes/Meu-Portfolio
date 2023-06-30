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
import FotoEcomerce from "./images/Ecomerce.jpeg";
import Fotoimc from "./images/imc.jpeg";
import FotoRickandMorty from "./images/rickandmorty.jpeg";
import { AiFillHtml5, AiOutlineConsoleSql, AiFillLinkedin, AiFillGithub, AiFillEye } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoGmail } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrDeploy } from 'react-icons/gr';
import { useState } from "react";

const app = () => {
  
  const [modo, setModo] = useState('light');

  const alternarModo = () => {
    setModo(modo === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`main ${modo}`}>
      <div className="cabecalho">
        <header>
          <h1 id="home" className={`titulo ${modo}`}>Ramom.dev</h1>
          <button onClick={alternarModo}>Alternar Modo</button>
        </header>
        <nav className="menuprincipal">
          <ul className="menu">
            <li className={`links ${modo}`}><a className={`links ${modo}`} href="#home">Home</a></li>
            <li className={`links ${modo}`}><a className={`links ${modo}`} href="#sobremim">Sobre</a></li>
            <li className={`links ${modo}`}><a className={`links ${modo}`} href="#portfolio">Projetos</a></li>
            <li className={`links ${modo}`}><a className={`links ${modo}`} href="#contatos">Contatos</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <section className="apresentacao">
          <div className="informacoes">
            <div className="informacoespessoais">
              <h1 className={`informacoestitulo ${modo}`}>Desenvolvedor Front-End React 👋🏿</h1>
              <p className={`informacoesdescricao ${modo}`}>Olá. Eu sou o Ramom. Um apaixonado Desenvolvedor Front-End React.</p>
              <div className="portfolio">
                <a target={"_blank"} href="https://www.linkedin.com/in/ramomgomes/">{<AiFillLinkedin size={40} color="#4169E1"/>}</a>
                <a target={"_blank"} href="https://github.com/Ramom-Gomes">{<AiFillGithub size={40} color="#4169E1"/>}</a>
              </div>
            </div>
            <div className="foto">
              <img className="imagem" src={FotoPessoal} alt="" />
            </div>
          </div>
          <div className="tecnologias">
            <div id="sobremim" className={`titulotecnologias ${modo}`}>tecnologias |</div>
            <div className="imagemtecnologias">{<AiFillHtml5 size={40} color="#4169E1"/>}</div>
            <div className="imagemtecnologias">{<IoLogoCss3 size={40} color="#4169E1"/>}</div>
            <div className="imagemtecnologias">{<BiLogoJavascript size={40} color="#4169E1"/>}</div>
            <div className="imagemtecnologias">{<BiLogoReact size={40} color="#4169E1"/>}</div>
            <div className="imagemtecnologias">{<BiLogoTypescript size={40} color="#4169E1"/>}</div>
            <div className="imagemtecnologias">{<AiOutlineConsoleSql size={40} color="#4169E1"/>}</div>
          </div>
        </section>
        <section className="sobremim">
          <img className="imagemilustra" src={FotoIlustra} alt="" />
          <div className="sobreprincipal">
            <p className="sobretitulo">SOBRE MIM</p>
            <h3 className={`sobresemititulo ${modo}`}>Um dedicado Desenvolvedor Front-End 🧞.</h3>
            <p className={`sobredescricao ${modo}`}>Um jovem apaixonado por tecnologia e programação, 
              atualmente cursando o ensino superior em Análise e Desenvolvimento de Sistemas.
              Com foco na área de programação Front-End
              possuo um impressionante arsenal de habilidades em html, css, javascript, react e sql. Sou excelent
              em projetar e manter sites responsivos que oferecem uma experiência de usuário tranquila.</p>
          </div>
        </section>
        <section className="secaoport">
          <p id="portfolio" className="portfoliotitulo">PORTFÓLIO</p>
          <h3 className={`portfoliodescricao ${modo}`}>Cada projeto é uma peça única de desenvolvimento 🧩</h3>
          <div className="projetos">
            <img className="projetoimagem" src={FotoEcomerce} alt="" />
            <div className="projetodescricao">
              <p className={`projetotitulo ${modo}`}>E-Commerce pizzas 🍕</p>
              <p className={`projetosemititulo ${modo}`}>Vai uma pizza ai? Esse site para compras de pizzas permite
               comprar pizzas de diversos sabores e tamanhos, basta adicionar no carrinho as suas escolhas.
              Ótimo para matar a fome.</p>
              <div className="projetotecnologias">
                <p className={`tecnologiausada ${modo}`}>Javascript</p>
                <p className={`tecnologiausada ${modo}`}>CSS</p>
              </div>
              <div className="projetoredes">
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://github.com/Ramom-Gomes/E-Comerce-de-pizzas">Código{<AiFillGithub size={35} color="#4169E1"/>}</a>
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://tangerine-flan-82ef74.netlify.app/">Demo{<AiFillEye size={35} color="#4169E1"/>}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="secaoport">
          <div className="projetos">
            <div className="projetodescricao2">
              <p className={`projetotitulo ${modo}`}>Calculadora IMC 🏋🏽</p>
              <p className={`projetosemititulo ${modo}`}>Quer calcular se você está no seu peso ideal? Esse site permite
              você calcular a sua massa corporal com base na sua altura e peso.
              Após isso ele te mostra em que estado você está. Muito importante para manter
              a saúde em dia.</p>
              <div className="projetotecnologias">
                <p className={`tecnologiausada ${modo}`}>Typescript</p>
                <p className={`tecnologiausada ${modo}`}>React</p>
              </div>
              <div className="projetoredes">
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://github.com/Ramom-Gomes/Calculadora-de-IMC.">Código{<AiFillGithub size={35} color="#4169E1"/>}</a>
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://deft-druid-7008d8.netlify.app/">Demo{<AiFillEye size={35} color="#4169E1"/>}</a>
              </div>
            </div>
            <img className="projetoimagem2" src={Fotoimc} alt="" />
          </div>
        </section>
        <section className="secaoport2">
          <div className="projetos">
            <img className="projetoimagem" src={FotoRickandMorty} alt="" />
            <div className="projetodescricao">
              <p className={`projetotitulo ${modo}`}>Rick and Morty 🥒</p>
              <p className={`projetosemititulo ${modo}`}>Quem nunca ouviu falar desse desenho não é mesmo?
                Esse site mostra os personagens do desenho, e você consegue trocar de página
                para ver todos os personagens. Cada persogem mostra o seu nome, se está vivo
                ou morto, a sua espécie, a primeira e última aparição no desenho.
              </p>
              <div className="projetotecnologias">
                <p className={`tecnologiausada ${modo}`}>Javascript</p>
                <p className={`tecnologiausada ${modo}`}>React</p>
              </div>
              <div className="projetoredes">
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://github.com/Ramom-Gomes/Rick-Morty">Código{<AiFillGithub size={35} color="#4169E1"/>}</a>
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://cute-arithmetic-afc5d4.netlify.app/">Demo{<AiFillEye size={35} color="#4169E1"/>}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="secaocontatos">
          <p id="contatos" className="contatotitulo">CONTATOS</p>
          <h3 className={`contatosemititulo ${modo}`}>não seja tímido! fale comigo 👇🏿</h3>
          <div className="contatosredes">
            <div className="contatospessoais">
            <div>{<BsTelephoneFill className="contatosfotoemail" size={25} color="#4169E1"/>}</div>
              <div className="contatostelefone">
                <p className={`contatosredestitulo ${modo}`}>Telefone</p>
                <p className={`contatosredesinfo ${modo}`}>(11) 94262-7660</p>
              </div>
            </div>
            <div className="contatospessoais2">
              <div>{<BiLogoGmail className="contatosfotoemail" size={35} color="#4169E1"/>}</div>
              <div className="contatosemail">
                <p className={`contatosredestitulo ${modo}`}>E-Mail</p>
                <p className={`contatosredesinfo ${modo}`}>rgs.ramomgomes@hotmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <div  className="faixa">
          <div className="faixalocal">
            <p className="mensagemfinal">Projeto desenvolvido com muita dedicação</p>
            <a target={"_blank"} href="https://github.com/Ramom-Gomes">{<AiFillGithub className="redesimagemfinal" size={40} color="#4169E1"/>}</a>
            <a target={"_blank"} href="https://www.linkedin.com/in/ramomgomes/">{<AiFillLinkedin className="redesimagemfinal" size={40} color="#4169E1"/>}</a>
          </div>
        </div>
      </main>
    </div>
  )

}

export default app;