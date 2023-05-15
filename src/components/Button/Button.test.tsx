import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

test("test Button", () => {
  const wrapper = render(<Button {...defaultProps}>提交</Button>);
  const element = wrapper.getByText("提交");
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  fireEvent.click(element);
  expect(defaultProps.onClick).toHaveBeenCalled();
});
