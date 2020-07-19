import React from "react";
import Button from "../Button";
import { mount } from "enzyme";

describe("A suite", function () {
  let component: any;
  beforeEach(() => {
    component = mount(<Button className="test-foo">Bar</Button>);
  });
  it("should render without throwing an error", function () {
    expect(component.find("NuiButton")).toHaveLength(1);
  });

  it('should be selectable by class "foo"', function () {
    expect(component.find("NuiButton").is(".test-foo")).toBe(true);
  });

  it("should mount in a full DOM", function () {
    expect(component.find("NuiButton.test-foo").length).toBe(1);
  });

  it("should render to static HTML", function () {
    expect(component.text()).toEqual("Bar");
  });
});
