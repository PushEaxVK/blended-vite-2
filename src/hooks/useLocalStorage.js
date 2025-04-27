import { useState, useEffect } from 'react';

export const useLocalStorage = (key = 'todos', defaultValue = []) => {
  // Тут повинен бути власний хук для збереження і отримання даних з localStorage
  // Даний хук повинен отримувати key, defaultValue і повертати дані з localStorage,
  // якщо дані були збережені.
  // Якщо в localStorage не були збережені дані з ключем key, то хук повинен повертати defaultValue.
  const [storedData, setStoredData] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Помилка читання localStorage ключа "${key}":`, error);
      return defaultValue;
    }
  });

  const setStoreData = value => {
    try {
      const newData = value instanceof Function ? value(storedData) : value;
      setStoredData(newData);
      window.localStorage.setItem(key, JSON.stringify(newData));
    } catch (error) {
      console.error(`Помилка запису localStorage ключа "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = event => {
      if (event.key === key) {
        setStoredData(
          event.newValue ? JSON.parse(event.newValue) : defaultValue
        );
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, defaultValue]);

  return [storedData, setStoreData];
};
