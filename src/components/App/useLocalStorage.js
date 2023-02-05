import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Simulo llamada a la API dándole un Timeout

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName));
        }

        setItems(parsedItem);
        // Podría ponerse el setLoading justo al final de "useLocalStorage"? Comprobarlo
        setLoading(false);
      }, 1500);
    } catch (error) {
      setError(error);
    }
  }, []);

  const saveItems = (newItem) => {
    let newItemStringified = JSON.stringify(newItem);
    localStorage.setItem(itemName, newItemStringified);
    setItems(newItem);
  };

  return { items, error, loading, saveItems };
}
export { useLocalStorage };
