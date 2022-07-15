
import './NutriNavDesktopConnection.css'
import { useState } from 'react';

function ModalDesktopRegister({ setRegister }) {
  return (
    <>
      <div id="modalDesktopRegister" />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setRegister(false)}>
            slt
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setRegister(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setRegister(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModalDesktopLogin({ setLogin }) {
  return (
    <>
      <div className="darkBG" />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setLogin(false)}>
            slt
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setLogin(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setLogin(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NutriNavDesktopConnection() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      <button onClick={() => setLogin(true)}>
        Se connecter
      </button>
      <button onClick={() => setRegister(true)}>
        S'inscrire
      </button>
      {login && <ModalDesktopLogin setLogin={setLogin} />}
      {register && <ModalDesktopRegister setRegister={setRegister} />}
    </>
  );
}

export default NutriNavDesktopConnection