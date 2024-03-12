import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
    const result = await sayHelloAsync("Ali");
    expect(result).toBe("Hello Ali");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Ali")).resolves.toBe("Hello Ali");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
