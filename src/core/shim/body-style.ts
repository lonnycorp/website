import { NodeElement } from "htmlforge"

export const bodyStyle = (node : NodeElement) => {
    node
        .styleAdd("color", "black")
        .styleAdd("font-family", "monospace")
        .styleAdd("display", "flex")
        .styleAdd("flex-direction", "column")
        .styleAdd("margin", "0px")
        .styleAdd("height", "100vh")
        .styleAdd("padding", "0px")
        .styleAdd("font-size", "12px")
        .styleAdd("box-sizing", "border-box")
}
