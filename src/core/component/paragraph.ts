import { type INode, NodeElement } from "htmlforge"

export class ComponentParagraph implements INode {

    private readonly root : NodeElement

    constructor() {
        this.root = new NodeElement("div")
    }

    childAdd(node : INode) {
        this.root.childAdd(node)
        return this
    }

    build() {
        return this.root.build()
    }
}

