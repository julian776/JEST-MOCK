import * as app from "./../src/app";
import * as math from "./../src/math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);
  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});