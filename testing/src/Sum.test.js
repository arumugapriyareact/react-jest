import { add } from "./Sum";

test("Add", () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
