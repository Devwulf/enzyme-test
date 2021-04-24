import { shallow } from "enzyme";
import React from "react";
import TestComponent from "./TestComponent";

test("getDOMNode", () => {
    const wrapper = shallow(<TestComponent />);
    const elem = wrapper.find({children: "test"});
    
    elem.getDOMNode();
});