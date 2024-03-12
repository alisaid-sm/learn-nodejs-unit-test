import { MyException, callMe } from "../src/exception";

test("exception", () => {
    expect(() => callMe("Ali")).toThrow();
    expect(() => callMe("Ali")).toThrow(MyException);
    expect(() => callMe("Ali")).toThrow("Ups my exception happens");
});

test("exception not happen", () => {
    expect(callMe("Alwi")).toBe("OK");
});
