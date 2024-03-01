import { create } from "zustand";
import { Alert, Folder } from "../component/layout/sidebar/SideBarType";
import authAxios from "../utill/ApiUtills";
import { API_PATH } from "../constants/ApiPath";

type WebHookModalStoreType = {
  alerts: Alert[];
  isWebHookModalOpen: boolean;
  folderForModal?: Folder;
  setAlerts: (alerts: Alert[]) => void;
  addAlert: (newAlert: Alert) => void;
  openWebHookModal: (folder: Folder) => void;
  closeWebHookModal: () => void;
};

export const useWebHookModalStore = create<WebHookModalStoreType>(
  (set, get) => ({
    alerts: [],
    isWebHookModalOpen: false,
    folderForModal: undefined,
    setAlerts: (alerts: Alert[]) => {
      set({ alerts });
    },
    addAlert: (newAlert: Alert) =>
      set((prev) => ({ alerts: [...prev.alerts, newAlert] })),
    openWebHookModal: (folder: Folder) => {
      const currentState = get().isWebHookModalOpen;
      if (currentState) {
        return;
      }

      set(() => ({
        isWebHookModalOpen: true,
        folderForModal: folder,
      }));

      authAxios.get(API_PATH.ALERT.GET_ALL(folder.id)).then(function (response) {
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
        folderForModal: undefined,
      }));
    },
  })
);
