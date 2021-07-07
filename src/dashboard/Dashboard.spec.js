import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";




test("Display component is rendered", () => {
    const {getByTestId} = render(<Dashboard />)
    getByTestId("display-component")
})

test("Controls component is rendered", () => {
    const {getByTestId} = render(<Dashboard />)
    getByTestId("controls-component")
})