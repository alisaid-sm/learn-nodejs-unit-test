test("string", () => {
    const name = "Miftakh Ali Said";

    expect(name).toBe("Miftakh Ali Said");
    expect(name).toMatch(/Ali/);
});