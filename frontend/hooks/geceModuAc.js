import { useState, useEffect } from "react";
import useLocalStorage from "./localStorageKullan"; 
const useGeceModuAc = () => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", false); 

  useEffect(() => {
    geceModu
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [geceModu]);

  return { geceModu, setGeceModu };
};

export default useGeceModuAc;