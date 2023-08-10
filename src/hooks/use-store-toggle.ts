import { create } from "zustand";

interface useStoreToggleProps {
  enabled: boolean;
  setEnabled: () => void;
}

export const useStoreToggle = create<useStoreToggleProps>((set) => ({
  enabled: false,
  setEnabled: () => set((state) => ({ enabled: !state.enabled })),
}));
