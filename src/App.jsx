import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    test1: "",
    test2: "",
    password: "",
    validEmail: "",
    checkbox: "",
    date: "",
    color: "",
    datetimelocal: "",
    file: "",
    hidden: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    reset: "",
    search: "",
    submit: "",
    tel: "",
    text: "",
    time: "",
    url: "",
    week: "",
  });

  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputValue);
  };

  return (
    <>
      {/*LOGOS DE LA PÁGINA */}
      <div style={{ textAlign: "center" }}>
        <img src="./src/img/LogoTuxtepec.png" alt="" align="left" />
        <img src="./src/img/x.svg" alt="" align="right" />
        <h2>GuÍa Consultiva De Desempeño Municipal</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/*Grupo de los 8 modulos */}
      <div
        class="btn-group btn-group-md"
        role="group"
        aria-label="Large button group"
      >
        <button
          class="btn btn-success"
          data-bs-target="#Organizacion"
          data-bs-toggle="modal"
        >
          ORGANIZACIÓN
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#Hacienda"
          data-bs-toggle="modal"
        >
          HACIENDA
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#GestionDelTerritorio"
          data-bs-toggle="modal"
        >
          GESTIÓN DEL TERRITORIO
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#ServiciosPublicos"
          data-bs-toggle="modal"
        >
          SERVICIOS PÚBLICOS
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#MedioAmbiente"
          data-bs-toggle="modal"
        >
          MEDIO AMBIENTE
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#DesarrolloSocial"
          data-bs-toggle="modal"
        >
          DESARROLLO SOCIAL
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#DesarrolloEconomico"
          data-bs-toggle="modal"
        >
          DESARROLLO ECÓNOMICO
        </button>
        <button
          class="btn btn-success"
          data-bs-target="#GobiernoAbierto"
          data-bs-toggle="modal"
        >
          GOBIERNO ABIERTO
        </button>
      </div>
    {/*Inicio del primer modulo -Organizacion-*/}
      <div
        class="modal fade"
        id="Organizacion"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                ORGANIZACIÓN
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/*Cuerpo de la ventana organizacion */}
            <div class="modal-body">
              <div
                class="btn-group btn-group-md"
                role="group"
                aria-label="Large button group"
              >
                <button
                  class="btn btn-success"
                  data-bs-target="#Estructura"
                  data-bs-toggle="modal"
                >
                  Estructura
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#Planeacion"
                  data-bs-toggle="modal"
                >
                  Planeación
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#Contraloria"
                  data-bs-toggle="modal"
                >
                  Contraloría
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#Capacitacion"
                  data-bs-toggle="modal"
                >
                  Capacitación
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Ventana de organizacion, con sus 4 subtitulos */}
      <div
        class="modal fade"
        id="Estructura"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Estructura
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                class="btn btn-success"
                data-bs-target="#Estructura"
                data-bs-toggle="modal"
              >
                Estructuraaa
              </button>
              <label htmlFor="color">Color</label>
              <input
                className="mt-2"
                id="color"
                onChange={(e) => handleChangeInput(e)}
                type="color"
                name="color"
                value={inputValue.color}
              />
              <label htmlFor="file">File</label>
              <input
                className="mt-2"
                id="file"
                onChange={(e) => handleChangeInput(e)}
                type="file"
                name="file"
                value={inputValue.file}
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Guardar"
                data-bs-toggle="modal"
              >
                Guardar Cambios
              </button>
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Organizacion"
                data-bs-toggle="modal"
              >
                Regresar a organización
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div
        class="modal fade"
        id="Planeacion"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">
                Planeacion
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                class="btn btn-success"
                data-bs-target="#Planeacion"
                data-bs-toggle="modal"
              >
                ejemplo
              </button>
              <label htmlFor="color">Color</label>
              <input
                className="mt-2"
                id="color"
                onChange={(e) => handleChangeInput(e)}
                type="color"
                name="color"
                value={inputValue.color}
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Guardar"
                data-bs-toggle="modal"
              >
                Guardar Cambios
              </button>
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Organizacion"
                data-bs-toggle="modal"
              >
                Regresar a organización
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="Contraloria"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel4">
                Contraloría
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                class="btn btn-success"
                data-bs-target="#Contraloria"
                data-bs-toggle="modal"
              >
                ejemplo
              </button>
              <label htmlFor="color">Color</label>
              <input
                className="mt-2"
                id="color"
                onChange={(e) => handleChangeInput(e)}
                type="color"
                name="color"
                value={inputValue.color}
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Guardar"
                data-bs-toggle="modal"
              >
                Guardar Cambios
              </button>
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Organizacion"
                data-bs-toggle="modal"
              >
                Regresar a organización
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="Capacitacion"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel5"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel5">
                Capacitación
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                class="btn btn-success"
                data-bs-target="#Capacitacion"
                data-bs-toggle="modal"
              >
                ejemplo
              </button>
              <label htmlFor="color">Color</label>
              <input
                className="mt-2"
                id="color"
                onChange={(e) => handleChangeInput(e)}
                type="color"
                name="color"
                value={inputValue.color}
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Guardar"
                data-bs-toggle="modal"
              >
                Guardar Cambios
              </button>
              <button
                class="btn btn-outline-primary"
                data-bs-target="#Organizacion"
                data-bs-toggle="modal"
              >
                Regresar a organización
              </button>
            </div>
          </div>
        </div>
      </div>


       {/*Inicio del segundo modulo -Hacienda-*/}
      <div
        class="modal fade"
        id="Hacienda"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                ORGANIZACIÓN
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/*Cuerpo de la ventana organizacion */}
            <div class="modal-body">
              <div
                class="btn-group btn-group-md"
                role="group"
                aria-label="Large button group"
              >
                <button
                  class="btn btn-success"
                  data-bs-target="#Ingresos"
                  data-bs-toggle="modal"
                >
                  Ingresos
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#Egresos"
                  data-bs-toggle="modal"
                >
                  Egresos
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#DisciplinaFinanciera"
                  data-bs-toggle="modal"
                >
                  Disciplina Financiera
                </button>
                <button
                  class="btn btn-success"
                  data-bs-target="#Patrimonio"
                  data-bs-toggle="modal"
                >
                  Patrimonio
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
