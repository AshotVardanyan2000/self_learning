import React, { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

function Modal({ children, ref, buttonCaption }) {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
      close() {
        modalRef.current?.close();
      },
    };
  });

  const backdropClick = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current.close();
    }
  };

  return createPortal(
    <dialog
      onClick={backdropClick}
      ref={modalRef}
      className="backdrop:bg-stone-900/90 backdrop:backdrop-blur-sm rounded-md p-4 shadow-md"
    >
      {children}

      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}

export default Modal;
