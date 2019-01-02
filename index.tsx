import styled from "@emotion/styled";
import React, { HTMLProps } from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import { PoseElementProps } from "react-pose/lib/components/PoseElement/types";
import { Toggle } from "react-powerplug";
import AnimatedList from "./AnimatedList";

const items = [
    {
        color: "black",
    },
    {
        color: "red",
    },
    {
        color: "rebeccapurple",
    },
    {
        color: "cornflowerblue",
    },
];

const Box: React.ComponentType<HTMLProps<HTMLDivElement> & PoseElementProps> = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
});

const StyledBox = styled(Box)`
    &:hover {
        cursor: pointer;
    }
`;

const App = () => (
    <>
        <Toggle>
            {({ on, toggle }) => (
                <StyledBox pose={on ? "hidden" : "visible"} onClick={toggle}>
                    <h1>click me to toggle my visible state</h1>
                </StyledBox>
            )}
        </Toggle>
        <AnimatedList items={items} />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
