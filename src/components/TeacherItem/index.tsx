import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/15737711?s=460&u=61470ffb1a39ff66fe2524157c6d5bcf593369e0&v=4" alt="Gustavo Chagas"/>
        <div>
          <strong>Gustavo Chagas</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis laudantium sed aliquid assumenda corporis, eius odit tenetur quam aperiam, atque vel sapiente.
        <br /><br />
        Commodi sequi obcaecati, quaerat maxime earum minima?</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
