import { useState, useEffect } from "react";

const useLocalStorage = (key, baslangicDegeri) => {
  const [deger, setDeger] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : baslangicDegeri;
    } catch (error) {
      console.log(error);
      return baslangicDegeri;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(deger));
    } catch (error) {
      console.log(error);
    }
  }, [key, deger]);

  return [deger, setDeger];
};

export default useLocalStorage;