import { create } from "zustand";
import { Alert } from "../component/layout/sidebar/SideBarType";
import authAxios from "../utill/ApiUtills";
import { API_PATH } from "../constants/ApiPath";

type WebHookModalStoreType = {
  alerts: Alert[];
  isWebHookModalOpen: boolean;
  setAlerts: (alerts: Alert[]) => void;
  openWebHookModal: (folderId: number) => void;
  closeWebHookModal: () => void;
};

export const useWebHookModalStore = create<WebHookModalStoreType>(
  (set, get) => ({
    alerts: [],
    isWebHookModalOpen: false,
    setAlerts: (alerts: Alert[]) => {
      set({ alerts });
    },
    openWebHookModal: (folderId: number) => {
      const currentState = get().isWebHookModalOpen;
      if (currentState) {
        return;
      }

      set(() => ({
        isWebHookModalOpen: true,
      }));

      authAxios.get(API_PATH.ALERT.GET_ALL(folderId)).then(function (response) {
        if (response.status != 200) {
          return;
        }

        const alerts: Alert[] = response.data.data.alerts;
        set(() => ({
          alerts: alerts,
        }));
      });
    },
    closeWebHookModal: () => {
      set(() => ({
        alerts: [],
        isWebHookModalOpen: false,
      }));
    },
  })
);
