
import { create } from 'zustand';

interface AppStore {
    currentColor: string;
    currentMode: string;
    activeMenu: boolean;
    screenSize: number;
    themeSettings: boolean;      
    isClicked: {[key:string]: boolean}
     
    setCurrentColor: (color:string) => void;
    setThemeSettings: (isThemeSettingsOpen:boolean) => void;
    setCurrentMode: (mode:string) => void; //todo: create enum   
    setScreenSize: (size: number) => void;
    setActiveMenu: (isActive: boolean) => void;
    handleClick: (source: string) => void;
    
  } 

  const isClickedInit : {[key:string]: boolean} = {  
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,       
  } 

export const appStore = create<AppStore>((set) => ({
    currentColor: '#9e99ff',  //#9e99ff  #fcefc4
    activeMenu: true,
    screenSize: 1400,
    currentMode: '',
    themeSettings: false,
    isClicked: {
      chat: false, 
      cart: false, 
      userProfile: false, 
      notification: false, 
    },

    setThemeSettings: (isThemeSettingsOpen) => set((state)=>({themeSettings: isThemeSettingsOpen})),
    setCurrentColor: (color) => set((state)=>({currentColor: color})),
    setCurrentMode: (mode) => set((state)=>({currentMode: mode})),
    setActiveMenu: (isActive) => set((state)=>({activeMenu: isActive})),
    setScreenSize: (size) => set((state) => ({ screenSize: size })),
    handleClick: (source) => set((state) => ({isClicked: {...isClickedInit, [source]:!state.isClicked[source]}})),
  
    
   
  }));

//  deleteEverything: () => set({}, true), // clears the entire store, actions included
 