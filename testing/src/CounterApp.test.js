import React from "react";
import { shallow } from "enzyme";
import CounterApp from "./CounterApp";

describe("Counter component", () => {
  it("starts with a count of 0", () => {
    const wrapper = shallow(<CounterApp />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 0");
  });
});

describe("test button click", () => {
  it("on click button", () => {
    const mockCallBack = jest.fn();
    // let count = 0;
    // const inc = () => {
    //   count++;
    // };
    const button = shallow(
      <button className="increment" onClick={mockCallBack}>
        Increment count
      </button>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
    // expect(count).toEqual(0);
  });
});
