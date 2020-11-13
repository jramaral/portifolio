import React from "react";

import prev from "../../assets/preview.png";
import resume from "../../assets/resume.png";
import skill from "../../assets/skill.png";
import database from "../../assets/database.png";
import education from "../../assets/education.png";
import work from "../../assets/work.png";
import awards from "../../assets/awards.png";
import { Link } from "react-router-dom";
import "animate.css";

import * as S from "./styles";

export default function Database() {
  return (
    <S.Container>
      <Link to="/">
        <S.Navegacao>
          <img src={prev} alt="Preview" />
          <h1>DataBase</h1>
        </S.Navegacao>
      </Link>
      <S.Text>
        <p>Possuo conhecimentos nos seguintes bancos de dados: </p>
      </S.Text>
      <S.Lista>
        <ul>
          <li>SQL SERVER</li>
          <li>MYSQL</li>
          <li>POSTGRES</li>
        </ul>
      </S.Lista>
    </S.Container>
  );
}
