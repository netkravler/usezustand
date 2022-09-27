import { useFlashMessageStore } from "../FlashMessages/useFlashMessageStore";
import { useModalStore } from "../Modal/useModalStore";
import Login from "./Login/Login";

export const Home = () => {
  const { setModalPayload, setToggleModal } = useModalStore((store) => ({
    setModalPayload: store.setModalPayload,
    setToggleModal: store.setToggleModal,
  }));

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  return (
    <div>
      Home
      <br />
      <button onClick={() => setFlashMessage("Jeg er en flashmessage")}>Show me a flashmessage</button>
      <br />
      <button
        onClick={() => {
          setModalPayload(<ModalPayload />);
          setToggleModal("block");
        }}
      >
        Show me a modal with component
      </button>
      <br />
      <button
        onClick={() => {
          setModalPayload(<aside>Jeg er sendt som text</aside>);
          setToggleModal("block");
        }}
      >
        Show me a modal with Text
      </button>
      <br />
      <button
        onClick={() => {
          setModalPayload(<Login />);
          setToggleModal("block");
        }}
      >
        Login modal
      </button>
      <br />
    </div>
  );
};

const ModalPayload = () => {
  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  return (
    <div>
      <h2>Jeg er en fed Modal</h2>
      <button onClick={() => setFlashMessage("Jeg er sendt fra modal")}>Tricker message from modal</button>
    </div>
  );
};
