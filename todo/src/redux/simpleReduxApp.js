// import expect, { createSpy, spyOn, isSpy } from 'expect'

// var expect = require('expect');
// var createSpy = expect.createSpy;
// var spyOn = expect.spyOn;
// var isSpy = expect.isSpy;

function counter(state = 0, action) {
    if(action.type === 'INCREMENT') {
        return state + 1;
    } else if(action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state
    }
}

console.log(counter(1, {type: "INCREMENT"}))