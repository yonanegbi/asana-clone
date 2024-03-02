
import { create } from 'zustand';

interface AppStore {
    currentColor: string;
    currentMode: string;
    activeMenu: boolean;
    screenSize: number;
    themeSettings: boolean;
     
    setCurrentColor: (color:string) => void;
    setThemeSettings: (isThemeSettingsOpen:boolean) => void;
    setCurrentMode: (mode:string) => void; //todo: create enum   
    setScreenSize: (size: number) => void;
    setActiveMenu: (isActive: boolean) => void;
  } 

export const appStore = create<AppStore>((set) => ({
    currentColor: 'blue',
    activeMenu: true,
    screenSize: 1400,
    currentMode: '',
    themeSettings: false,

    setThemeSettings: (isThemeSettingsOpen) => set((state)=>({themeSettings: isThemeSettingsOpen})),
    setCurrentColor: (color) => set((state)=>({currentColor: color})),
    setCurrentMode: (mode) => set((state)=>({currentColor: mode})),
    setActiveMenu: (isActive) => set((state)=>({activeMenu: isActive})),
    setScreenSize: (size) => set((state) => ({ screenSize: size })),
   
  }));

//  deleteEverything: () => set({}, true), // clears the entire store, actions included
 