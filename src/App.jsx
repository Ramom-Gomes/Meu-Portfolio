import "./App.css";
import FotoPessoal from "./images/Foto.jpeg";
import FotoIlustra from "./images/imagemilustra.jpg";
import FotoEcomerce from "./images/Ecomerce.jpeg";
import Fotoimc from "./images/imc.jpeg";
import FotoRickandMorty from "./images/rickandmorty.jpeg";
import FotoMarvel from './images/marvel.jpeg';
import { AiFillHtml5, AiOutlineConsoleSql, AiFillLinkedin, AiFillGithub, AiFillEye } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoGmail } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaSun, FaMoon } from 'react-icons/fa';
import {Link} from 'react-scroll';
import { useState } from "react"; 

const app = () => {
  
  const [modo, setModo] = useState('dark');

  const alternarModo = () => {
    setModo(modo === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`main ${modo}`}>
      <div className="cabecalho">
        <header>
          <h1 id="home" className={`titulo ${modo}`}>Ramom.dev</h1>
        </header>
        <nav className="menuprincipal">
          <ul className="menu">
            <Link to="home" className={`links ${modo}`} smooth={true} duration={500}>Home</Link>
            <Link to="sobremim" className={`links ${modo}`} smooth={true} duration={500}>Sobre</Link>
            <Link to="portfolio" className={`links ${modo}`} smooth={true} duration={500}>Projetos</Link>
            <Link to="contatos" className={`links ${modo}`} smooth={true} duration={700}>Contatos</Link>
            <li className="links" onClick={alternarModo}>{modo === 'light' ? <FaMoon cursor="pointer" color="#4169E1"/> : <FaSun cursor="pointer" color="#4169E1"/>}</li>
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
            <div id="sobremim" className={`titulotecnologias ${modo}`}>Tecnologias</div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<AiFillHtml5 size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">HTML</p>
            </div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<IoLogoCss3 size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">CSS</p>
            </div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<BiLogoJavascript size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">JAVASCRIPT</p>
            </div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<BiLogoReact size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">REACT</p>
            </div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<BiLogoTypescript size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">TYPESCRIPT</p>
            </div>
            <div className="tecnologiasPosition">
              <div className="imagemtecnologias">{<AiOutlineConsoleSql size={40} color="#4169E1"/>}</div>
              <p className="tecnologiasDescricao">SQL</p>
            </div>
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
            <img className="projetoimagem" src={Fotoimc} alt="" />
          </div>
        </section>
        <section className="secaoport">
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
        <section className="secaoport2">
          <div className="projetos">
            <div className="projetodescricao2">
              <p className={`projetotitulo ${modo}`}>Batalha Marvel ⚔️</p>
              <p className={`projetosemititulo ${modo}`}>Baseado no filme "capitão
                américa guerra civil", o projeto BatalhaMarvel é um jogo onde o usuário simula
                uma batalha entre a equipe do capitão américa e a equipe do homem de ferro.
                Nesse projeto o usuário consegue escolher no máximo três personagens de cada equipe
                e ver a equipe vencedora. A equipe vencedora é a que tiver uma média maior.</p>
              <div className="projetotecnologias">
                <p className={`tecnologiausada ${modo}`}>Javascript</p>
                <p className={`tecnologiausada ${modo}`}>React</p>
              </div>
              <div className="projetoredes">
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://github.com/Ramom-Gomes/BatalhaMarvel">Código{<AiFillGithub size={35} color="#4169E1"/>}</a>
                <a className={`projetogit ${modo}`} target={"_blank"} href="https://vermillion-licorice-a9b66a.netlify.app/">Demo{<AiFillEye size={35} color="#4169E1"/>}</a>
              </div>
            </div>
            <img className="projetoimagem" src={FotoMarvel} alt="" />
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