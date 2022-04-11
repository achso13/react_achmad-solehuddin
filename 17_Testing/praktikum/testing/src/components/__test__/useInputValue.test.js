import { act, renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "../useInputValue";

describe("when rendered", () => {
  it("returns current initial value", () => {
    const { result } = renderHook(() => useInputValue("Testing Input"));
    expect(result.current.value).toEqual("Testing Input");
  });
});

describe("when updating values", () => {
  it("changes the value with target value", () => {
    const { result } = renderHook(() => useInputValue("Testing Input"));

    act(() =>
      result.current.onChange({
        target: {
          value: "Updated Testing Input",
        },
      })
    );
    expect(result.current.value).toEqual("Updated Testing Input");
  });

  it("changes the value with target value", () => {
    const { result } = renderHook(() => useInputValue("Testing Input"));

    act(() =>
      result.current.onChange({
        target: {
          value: "",
        },
      })
    );
    expect(result.current.value).toBeUndefined();
  });
});
