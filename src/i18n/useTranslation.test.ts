import { renderHook } from "@testing-library/react-hooks";
import { useTranslation } from "./useTranslation";

describe("useTranslation", () => {
  it("should return the german translation by default", () => {
    const { result } = renderHook(() => useTranslation());
    const translation = result.current.t("zzz.testKey");
    expect(translation).toEqual("Test Schlüssel");
  });
});
