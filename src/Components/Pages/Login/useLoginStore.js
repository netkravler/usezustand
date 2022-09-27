import create from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => {
      return {
        loggedIn: false,
        userName: "",
        access_token: "",
        userInfo: "",
        setLoggedIn: (loggedIn, userInfo, userName, token) => set((state) => ({ ...state, loggedIn, userInfo, userName, token })),
      };
    },
    { name: "token" }
  )
);
