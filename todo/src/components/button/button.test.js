import React, { Component } from 'react';
import { render, fireEvent } from "@testing-library/react";

import Button from "./button";

it("checkButtonRender", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("AddTodo");
    expect(btn).toBeTruthy();
});