import { useEffect, useState } from "react";
import "./styles/App.css";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  }

  const handleSuccess = () => {
    window.alert('Thanks for clicking!'); 
    toggleModal(); 
  }

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <div className="app">
      <h2 className="title">ReactJS Modal</h2>
      <div>
        <button className="modal-btn" onClick={toggleModal}>
          Open modal
        </button>
      </div>

      <Modal isOpen={modal}>
        <div className="modal">
          <span onClick={toggleModal} className="closeX">X</span>
          <h3>Modal</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia ea unde doloribus, perspiciatis veniam ipsam tenetur sint modi assumenda.</p>
          <button className="modal-btn send" onClick={handleSuccess}>Send</button>
          <button className="modal-btn close" onClick={toggleModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

