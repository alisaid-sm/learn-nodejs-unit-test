test("string.not", () => {
    const name = "Miftakh Ali Said";

    expect(name).not.toBe("Alwi");
    expect(name).not.toEqual("Alwi");
    expect(name).not.toMatch(/Alwi/);
});

test("numbers.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
