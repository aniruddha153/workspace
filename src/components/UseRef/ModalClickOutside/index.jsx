import * as React from "react";

const ModalClickOutside = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null);

  const handleOpenModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    console.log("isOpen", isOpen);
    if (isOpen) {
      modalRef.current.show();

      const handleClickOutsideModal = (e) => {
        const modalElement = modalRef.current;
        if (modalElement && !modalElement.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleClickOutsideModal);

      return () => {
        document.removeEventListener("pointerdown", handleClickOutsideModal);
      };
    }
  }, [isOpen]);

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={modalRef}>
          <button onClick={handleCloseModal}>X</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
};

export default ModalClickOutside;
