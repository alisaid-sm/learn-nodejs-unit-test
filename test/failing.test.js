import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
    expect(sayHello("Ali")).toBe("Hello Ali");
});

test.failing("sayHello error", () => {
    sayHello(null);
});
