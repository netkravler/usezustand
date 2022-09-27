import create from "zustand";

export const useModalStore = create((set) => ({
  ToggleModal: "none",
  setToggleModal: (toggleVal) => {
    set((state) => ({
      ToggleModal: (state.ToggleModal = toggleVal),
    }));
  },
  modalPayload: null,
  setModalPayload: (payload) => {
    set((state) => ({ modalPayload: (state.modalPayload = payload) }));
  },
}));
