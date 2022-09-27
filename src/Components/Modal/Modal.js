import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { ToggleModal, modalPayload, setToggleModal } = useModalStore((store) => ({
    ToggleModal: store.ToggleModal,
    modalPayload: store.modalPayload,
    setToggleModal: store.setToggleModal,
  }));

  return (
    <ModalStyled showmodal={ToggleModal}>
      <main>
        <span onClick={() => setToggleModal("none")}>&times;</span>
        {modalPayload}
      </main>
    </ModalStyled>
  );
};

export default Modal;
