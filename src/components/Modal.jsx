import React, { useRef } from "react";
import scss from './modal.module.scss'

function Modal({ children, title, root }) {

    const ref = useRef(null)

    function callback(e) {
      root.unmount()
      ref.current.removeEventListener('animationend', callback)
    }

    const handleClick = () => {
      ref.current.classList.add(scss.fadeOut)
      ref.current.addEventListener('animationend', callback , {
        once: true
      })
    }
  return (
    <div ref={ref} className={scss.modalContainer}>
      <div className={scss.modalView}>
        <div className={scss.modalHeader}>
          <div>{title}</div>
          <div>
            <button onClick={handleClick} className={scss.closeButton}>x</button>
          </div>
        </div>
        <div className={scss.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
