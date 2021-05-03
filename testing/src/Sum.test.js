import { add, total } from "./Sum";

test("Add", () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

//Integration testing
test("total", () => {
  const tdata = total(10, 100);
  expect(tdata).toBe("$110");
});
