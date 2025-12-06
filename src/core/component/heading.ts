import { type INode, NodeElement } from "htmlforge"

export type HeadingType = "H1" | "H2" | "H3"

const HEADING_SIZE = {
    "H1": "16px",
    "H2": "14px",
    "H3": "12px",
} as const

export class ComponentHeading implements INode {

    private readonly root : NodeElement

    constructor(headingType: HeadingType) {
        this.root = new NodeElement("div")
            .styleAdd("font-weight", "bold")
            .styleAdd("font-size", HEADING_SIZE[headingType])
            .styleAdd("text-decoration", "underline")
            .styleAdd("margin", "0")
    }

    childAdd(child : INode) {
        this.root.childAdd(child)
        return this
    }

    build() {
        return this.root.build()
    }
}

