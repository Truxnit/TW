import { useCallback, useState } from "react";
import { useWindowEventListener } from "src/utils/hooks/useWindowEventListener";

const LOCAL_STORAGE_UPDATE_EVENT = "localStorageUpdated";

export class LocalStorageUpdateEvent extends Event {
  readonly key: string;

  constructor(key: string) {
    super(LOCAL_STORAGE_UPDATE_EVENT);
    this.key = key;
  }
}

export const reactiveLocalStorage = {
  setItem(key: string, newValue: string): void {
    localStorage.setItem(key, newValue);
    window.dispatchEvent(new LocalStorageUpdateEvent(key));
  },

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  },
  removeItem(key: string): void {
    localStorage.removeItem(key);
    window.dispatchEvent(new LocalStorageUpdateEvent(key));
  },
};

export const useReactiveLocalStorage = (key: string): string | null => {
  const [value, setValue] = useState(localStorage.getItem(key));

  const updateEventListener = useCallback(
    (event: Event) => {
      if (
        event instanceof StorageEvent ||
        event instanceof LocalStorageUpdateEvent
      ) {
        if (event.key === key) {
          setValue(localStorage.getItem(key));
        }
      }
    },
    [key]
  );

  useWindowEventListener("storage", updateEventListener);
  useWindowEventListener(LOCAL_STORAGE_UPDATE_EVENT, updateEventListener);

  return value;
};
