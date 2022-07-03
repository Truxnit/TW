import { renderHook } from "@testing-library/react-hooks";
import { useInput } from "src/utils/hooks/useInput";

describe("useForm", () => {
  it("initially", () => {
    const { result } = renderHook(() => useInput({ username: "" }));
    expect(result.current.inputValue.username).toEqual("");
  });
});
