import React from "react";
import { render, getByTestId } from "@testing-library/react";

import Display from "./Display";


test("Locked and unlocked are displayed", () => {
    const {getByText, rerender} = render(<Display locked={true}/>);
    getByText(/locked/i);

    rerender(<Display locked={false} />);
    getByText(/unlocked/i)
})

test("Open and closed are displayed", () => {
    const {getByText, rerender} = render(<Display closed={true}/>);
    getByText(/closed/i);

    rerender(<Display closed={false} />);
    getByText(/open/i);
})

test("Locked or closed use the red-led class", () => {
    const {getByText} = render(<Display locked={true} closed={true} />);
    const redLocked = getByText(/locked/i);
    expect(redLocked.classList.contains('red-led')).toBe(true);
    const redClosed = getByText(/closed/i);
    expect(redClosed.classList.contains('red-led')).toBe(true);
})

test("Unlocked or open use the green-led class", () => {
    const {getByText} = render(<Display locked={false} closed={false} />);
    const greenUnlocked = getByText(/unlocked/i);
    expect(greenUnlocked.classList.contains('green-led')).toBe(true);
    const greenOpen = getByText(/open/i);
    expect(greenOpen.classList.contains('green-led')).toBe(true);
})


