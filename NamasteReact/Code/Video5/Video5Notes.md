# Their are two types of export:

    - default export
        - export default Component;
    - Named Export
        - export const Component =  content;

# Way to import exports are also different:

    - deafult export: import Component from './path';
    - named export: import { Component } from './path';

# Hooks:

    - Hooks in React is just a normal function in Javascript

# Two Most Important Hooks in React:

    - useState(): it is also called as state variable because it maintains the state of the variable
    syntax: let [listOfVariable, setListOfVariable] = useState();
        - setListOfVariable(UpdateValue);

        - Whenever there is change in any state variable React will find out the change between actual and Virtual DOM and modify it's

    - useEffect()

# useState() Defination: \* When ever a state variable update React re-render the component's.

\*\* \*

# React Virtual DOM and Reconciliation Algorithm

    - Virtual DOM exist way before React has introduce
    - React made their own algorithm to make efficient use of Virtual DOM and actual DOM manipulation
    - Reconciliation Algorithm is also known as React Fiber
    - Virtual DOM is a representation of actual DOM
    - Virtaul DOM is an Object
    - React use Diff Algorithm to update the actual DOM from the Virtual DOM
    - Whenever something change in UI it's through the Reconciliation Algorithm
    - React Fiber is the new way of finding the Diff and updating the DOM

# Diff Algorithm

    - Diff Algorithm basically finds out the difference between two virtual DOM's

    1. Previous Virtual DOM &
    2. Updated Virtual DOM

    - After getting the differnce it updates the actual DOM

\*\*

# Incremental Rendering:

    - The ability to split rendering work into chunks and spread it out over multiple frames.
    - new and efficient way to DOM manipulation

# Q. Interview Question: Why React is Fast ?

    - Because it uses Virtual DOM to efficently manipulate acutal DOM
    - It's uses Diff Algorithm which is every efficient for DOM manipulation
