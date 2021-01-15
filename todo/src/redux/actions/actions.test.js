import { multiplyer, toLowerCase } from "./actions";

test("multiply", () => {
    expect(multiplyer(2, 3)).toBe(6);
    expect(multiplyer(10, -3)).toBe(-30);
});

test("toLowerCase", () => {
    expect(toLowerCase("Ivaylo")).toBe("ivaylo")
})