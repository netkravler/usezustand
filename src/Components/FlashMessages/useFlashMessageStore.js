import create from "zustand";

export const useFlashMessageStore = create((set) => ({
  flashMessageges: null,
  setFlashMessage: (message) => {
    set((state) => ({
      flashMessageges: (state.flashMessageges = message),
    }));
  },
  removeFlashmessage: () => {
    set((state) => ({ flashMessageges: (state.flashMessageges = null) }));
  },
}));
