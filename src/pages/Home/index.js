import React from "react";

import foto from "../../assets/foto.png";
import resume from "../../assets/resume.png";
import skill from "../../assets/skill.png";
import database from "../../assets/database.png";
import education from "../../assets/education.png";
import work from "../../assets/work.png";
import awards from "../../assets/awards.png";
import { Link } from "react-router-dom";
import "animate.css";

import * as S from "./styles";

// const people = [
//   {
//     id: 1,
//     name: "Pedro",
//     age: 11,
//   },
//   {
//     id: 2,
//     name: "Guilherme",
//     age: 14,
//   },
//   {
//     id: 3,
//     name: "Jeferson",
//     age: 25,
//   },
// ];

export default function Home() {
  return (
    <div>
      <S.Container>
        {/* {people.map((person) => {
          const { id, name, age } = person;
          return (
            <S.StyledPerson key={id}>
              <S.StyledPersonList className={name}>
                <p>{age}</p>
                <p>{name}</p>
              </S.StyledPersonList>
            </S.StyledPerson>
          );
        })} */}

        <S.ContainerHead>
          <S.ItemHeaderImg className="animate__animated animate__fadeInDownBig ">
            <img src={foto} alt="Foto" />
          </S.ItemHeaderImg>
          <S.ItemHeaderName className="animate__animated animate__fadeInDownBig ">
            <h3 id="nome">JOSE ROBERTO DO AMARAL</h3>
            <h4 id="funcao">ANALISTA DESENVOLVEDOR </h4>
          </S.ItemHeaderName>
        </S.ContainerHead>

        <S.ContainerBody className="animate__animated animate__bounceInRight ">
          <div id="perfil">
            Trabalho com informática desde o ano de 1997. Sou autodidata, e ao
            longo dos anos fui buscando conhecimentos e adquirindo experiências,
            ora como instrutor de informática, ministrando cursos básicos e
            avançados, outra como técnico em manutenção de computadores, até
            chegar em uma das áreas da informática que mais me identifico, a
            programação. Hoje atuo como programador, desenvolvendo ferramentas e
            sempre trazendo tecnologias recentes. Sigo acreditando que "A
            persistência é o caminho do êxito" Charles Chaplin.
          </div>
        </S.ContainerBody>

        <S.ContainerBody className="animate__animated animate__bounceInLeft">
          <S.Item>
            <Link to="/resume">
              <h4>RESUME</h4>
              <div className="imgfig">
                <img src={resume} alt="Resumo" />
              </div>
            </Link>
          </S.Item>
          <S.Item>
            {" "}
            <Link to="/skill">
              <h4>PROGRAMMING LANGUAGE SKILLS AND TOOLS</h4>
              <div>
                <img
                  src={skill}
                  alt="Conhecimento em liguaguagem de programação"
                />
              </div>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/database">
              <h4> DATABASE SKILLS</h4>
              <div>
                <img src={database} alt="Conhecimentos de Banco de Dados" />
              </div>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/education">
              <h4> EDUCATION LEVEL</h4>
              <div>
                <img src={education} alt="Nível de Educação" />
              </div>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/work">
              <h4> WORK EXPERIENCE</h4>
              <div>
                <img src={work} alt="Experiência de Trabalho" />
              </div>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/awards">
              <h4>COURSES AND AWARDS</h4>
              <div>
                <img src={awards} alt="Cursos e premios" />
              </div>
            </Link>
          </S.Item>
        </S.ContainerBody>
      </S.Container>
    </div>
  );
}
