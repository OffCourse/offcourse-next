import { useEffect, useContext } from "react";
import { AppStateContext } from "../contexts";

const useGlobalEvents = () => {
  const { searchbar, sidebar, overlay } = useContext(AppStateContext);

  const handleKeyPress = e => {
    const { keyCode, ctrlKey, altKey } = e;

    if (keyCode === 27) {
      sidebar.close() && searchbar.close() && overlay.close();
    }
    if (keyCode === 191 && ctrlKey) {
      searchbar.toggle();
    }
    if (keyCode === 191 && altKey) {
      sidebar.toggle();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};

export default useGlobalEvents;
