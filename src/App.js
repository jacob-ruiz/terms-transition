import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

export default function App() {
  const [term, setTerm] = useState({
    type: null,
  });

  const showPreview = term.type !== null;

  const updateTerm = (e) => {
    // Case where user is toggling off the type
    if (e.target.value === term.type) {
      setTerm({
        ...term,
        type: null,
      });
    } else {
      // Case where user is setting the type
      setTerm({
        ...term,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Modal term={term} updateTerm={updateTerm} />
        <CSSTransition
          in={showPreview}
          timeout={400}
          classNames="preview"
          unmountOnExit
        >
          <Preview term={term} />
        </CSSTransition>
      </div>
    </div>
  );
}

const Modal = ({ term, updateTerm }) => (
  <div class={term.type ? 'modal hasType' : 'modal'}>
    <div className="button-container">
      <button
        className={`toggle-button green ${
          term.type === 'approved' ? 'active' : ''
        }`}
        name="type"
        value="approved"
        onClick={updateTerm}
      >
        APPROVED
      </button>
      <button
        className={`toggle-button red ${
          term.type === 'dontUse' ? 'active' : ''
        }`}
        name="type"
        value="dontUse"
        onClick={updateTerm}
      >
        DON'T USE
      </button>
      <button
        className={`toggle-button yellow ${
          term.type === 'pending' ? 'active' : ''
        }`}
        name="type"
        value="pending"
        onClick={updateTerm}
      >
        PENDING
      </button>
    </div>
  </div>
);

const Preview = ({ term }) => <div className="preview">Preview</div>;
