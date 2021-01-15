import React, { Component } from 'react';
import { render, fireEvent } from "@testing-library/react";

import Input from "./Input";

it("inputRenderCheck", () => {
    const { queryByTitle } = render(<Input />);
    const input = queryByTitle("TodoInput");
    expect(input).toBeTruthy();
});

describe("changeInInput", () => {
    it("onChange", () => {
        const { queryByTitle } = render(<Input />);
        const input = queryByTitle("TodoInput");
        fireEvent.change(input, { target: {value: "NewTodo"}});
        expect(input.value).toBe("NewTodo");
    });
});

