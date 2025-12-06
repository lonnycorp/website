import { NodeElement, NodeText, type BuildArtifact, type INode } from "htmlforge"

const FOOTER_TEXT = "2025 The Lonny Corporation. All rights reserved."

export class ComponentFooter implements INode {

    private readonly root : INode

    constructor() {
        this.root = new NodeElement("div")
            .styleAdd("background", "black")
            .styleAdd("color", "white")
            .styleAdd("padding", "6px")
            .styleAdd("text-align", "center")
            .childAdd(new NodeText(FOOTER_TEXT))
    }

    build() {
        return this.root.build()
    }

}
