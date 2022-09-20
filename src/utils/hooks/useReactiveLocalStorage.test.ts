import {
  reactiveLocalStorage,
  useReactiveLocalStorage,
} from "src/utils/hooks/useReactiveLocalStorage";
import { act, renderHook, waitFor } from "@testing-library/react";

const testKey = "testKey";

describe("useReactiveLocalStorage", () => {
  beforeEach(() => {
    localStorage.setItem(testKey, "initial value");
  });

  describe("initially", () => {
    it("loads the value from local storage", () => {
      const { result } = renderHook(() => useReactiveLocalStorage(testKey));

      expect(result.current).toEqual("initial value");
    });
  });

  describe("updates its value", () => {
    it("if a new value is set via reactiveLocalStorage.setItem", async () => {
      const { result } = renderHook(() => useReactiveLocalStorage(testKey));

      act(() => {
        reactiveLocalStorage.setItem(
          testKey,
          "new value via reactiveLocalStorage"
        );
      });
      await waitFor(() => {
        expect(result.current).toEqual("new value via reactiveLocalStorage");
      });
      expect(localStorage.getItem(testKey)).toEqual(
        "new value via reactiveLocalStorage"
      );
    });
    it("if a storage-event is received", async () => {
      const { result } = renderHook(() => useReactiveLocalStorage(testKey));
      act(() => {
        localStorage.setItem(testKey, "new value via storage-event");
        window.dispatchEvent(new StorageEvent("storage", { key: testKey }));
      });
      await waitFor(() => {
        expect(result.current).toEqual("new value via storage-event");
      });
      expect(localStorage.getItem(testKey)).toEqual(
        "new value via storage-event"
      );
    });
  });
  describe("set its value to null", () => {
    it("if 'reactiveLocalStorage.removeItem' is called", async () => {
      const { result } = renderHook(() => useReactiveLocalStorage(testKey));
      act(() => {
        reactiveLocalStorage.removeItem(testKey);
      });
      await waitFor(() => {
        expect(result.current).toBeNull();
      });
      expect(localStorage.getItem(testKey)).toBeNull();
    });

    it("if a storage-event is received and the value is null", async () => {
      const { result } = renderHook(() => useReactiveLocalStorage(testKey));
      act(() => {
        localStorage.removeItem(testKey);
        window.dispatchEvent(new StorageEvent("storage", { key: testKey }));
      });
      await waitFor(() => {
        expect(result.current).toBeNull();
      });
      expect(localStorage.getItem(testKey)).toBeNull();
    });
  });
});
