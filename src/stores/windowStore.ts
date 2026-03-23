import { create } from 'zustand';

export interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface WindowConfig {
  id: string;
  title: string;
  icon: string;
  defaultSize: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
}

interface WindowStore {
  windows: Record<string, WindowState>;
  topZIndex: number;
  configs: Record<string, WindowConfig>;

  registerWindow: (config: WindowConfig) => void;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
  updateSize: (id: string, size: { width: number; height: number }) => void;
  getOpenWindows: () => string[];
}

const getRandomOffset = () => ({
  x: 80 + Math.random() * 200,
  y: 60 + Math.random() * 100,
});

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: {},
  topZIndex: 100,
  configs: {},

  registerWindow: (config) => {
    set((state) => ({
      configs: { ...state.configs, [config.id]: config },
      windows: {
        ...state.windows,
        [config.id]: state.windows[config.id] || {
          isOpen: false,
          isMinimized: false,
          isMaximized: false,
          zIndex: 100,
          position: config.defaultPosition || getRandomOffset(),
          size: config.defaultSize,
        },
      },
    }));
  },

  openWindow: (id) => {
    const state = get();
    const newZ = state.topZIndex + 1;
    set((s) => ({
      topZIndex: newZ,
      windows: {
        ...s.windows,
        [id]: {
          ...s.windows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: newZ,
        },
      },
    }));
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: false,
          isMaximized: false,
        },
      },
    }));
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMinimized: true,
        },
      },
    }));
  },

  maximizeWindow: (id) => {
    set((state) => {
      const win = state.windows[id];
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...win,
            isMaximized: !win.isMaximized,
          },
        },
      };
    });
  },

  focusWindow: (id) => {
    const state = get();
    const newZ = state.topZIndex + 1;
    set({
      topZIndex: newZ,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          zIndex: newZ,
        },
      },
    });
  },

  updatePosition: (id, position) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position },
      },
    }));
  },

  updateSize: (id, size) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], size },
      },
    }));
  },

  getOpenWindows: () => {
    const state = get();
    return Object.entries(state.windows)
      .filter(([, w]) => w.isOpen)
      .map(([id]) => id);
  },
}));
