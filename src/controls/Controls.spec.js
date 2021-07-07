import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("Open and close gate buttons work", () => {
    const {getByText, rerender} = render(<Controls closed={false}/>)
    const openButton = getByText(/close/i);
    fireEvent.click(openButton);
    getByText(/close/i);

    rerender(<Controls closed={true}/>)
    const closeButton = getByText(/open/i);
    fireEvent.click(closeButton);
    getByText(/open/i);
})
 
test("Lock and unlock buttons work", () => {  
    const {getByText, rerender} = render(<Controls locked={false} />);
    const unlockButton = getByText(/lock/i);
    fireEvent.click(unlockButton);
    getByText(/lock/i);

    rerender(<Controls locked={true}/>)
    const lockButton = getByText(/unlock/i);
    fireEvent.click(lockButton);
    getByText(/unlock/i);
})

test("Open button is disabled if gate is locked", () => {
    const toggleClosed= jest.fn();
    const {getByText} = render(<Controls closed={true} locked={true} toggleClosed={toggleClosed} />);
    const openDisabled = getByText(/open/i);
    fireEvent.click(openDisabled);
    expect(toggleClosed).not.toHaveBeenCalled();
})

test("Lock button is disabled if gate is open", () => {
    const toggleLocked = jest.fn();
    const {getByText} = render(<Controls closed={false} locked={false} toggleLocked={toggleLocked} />);
    const lockDisabled = getByText(/lock/i);
    fireEvent.click(lockDisabled);
    expect(toggleLocked).not.toHaveBeenCalled();
})

