import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Locked and unlocked are displayed", () => {
    const {getByText, rerender} = render(<Display locked={true}/>)
    getByText(/locked/i);

    rerender(<Display locked={false} />)
    getByText(/unlocked/i)
})

test("Open and closed are displayed", () => {
    const {getByText, rerender} = render(<Display closed={true}/>)
    getByText(/closed/i);

    rerender(<Display closed={false} />)
    getByText(/open/i)
})

