import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="main-div container-mx-auto">
          <h1 className="main-font">DANIEL COSTA </h1>
          <h1 className="main-font2">DEVELOPER</h1>

          <div>
            <img src="images\SPRINKLES.svg" alt="teste" className="img-main" />
            <img src="images\perfil.png" alt="perfil" className="img-main2" />
            <img src="images\setaMain.svg" alt="seta" className="seta-main" />

            <div>
              <button className="btnContratar">Contratar</button>

              <button className="btnBaixarCv">Baixar CV</button>
            </div>

            <div>
                <img src="images\Scroll-Down.svg" alt="scroll" className="scroll-down"/>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
