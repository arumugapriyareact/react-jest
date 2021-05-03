import React from "react";
import { shallow } from "enzyme";
import CounterApp from "./CounterApp";
import renderer from "react-test-renderer";

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
      <button className="Increment" onClick={mockCallBack}>
        Increment count
      </button>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
    // expect(count).toEqual(0);
  });
});

describe("decrement the count", () => {
  it("decrement value", () => {
    const wrapper = shallow(<CounterApp />);
    const decbtn = wrapper.find("button.Decrement");
    decbtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: -1");

    const mockCallBack = jest.fn();
    const decBtnClick = shallow(
      <button className="Decrement" onClick={mockCallBack}>
        Decrement count
      </button>
    );
    decBtnClick.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe("test snap", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<CounterApp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
