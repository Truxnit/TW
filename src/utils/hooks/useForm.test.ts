import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "src/utils/hooks/useForm";
describe("useForm", () => {
  it("initially", () => {
    const { result } = renderHook(() => useForm({ username: "" }));

    /* expect(result.current.inputValue.username).toEqual("");*/
  });
});
