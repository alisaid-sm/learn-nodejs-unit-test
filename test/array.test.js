test("array", () => {
    const names = ["Miftakh", "Ali", "Said"];
    expect(names).toEqual(["Miftakh", "Ali", "Said"]);
    expect(names).toContain("Ali");
});
test("array object", () => {
    const persons = [
        {
            name: "Ali"
        },
        {
            name: "Said"
        }
    ];
    expect(persons).toContainEqual({
        name: "Ali"
    });
});
