import { type INode, NodeElement } from "htmlforge"

export class ComponentContainer implements INode {

    private readonly root : NodeElement

    constructor() {
        this.root = new NodeElement("div")
            .styleAdd("max-width", "640px")
            .styleAdd("padding", "10px")
            .styleAdd("display", "flex")
            .styleAdd("flex-direction", "column")
            .styleAdd("flex-grow", "1")
            .styleAdd("gap", "12px")
            .styleAdd("margin", "0 auto")
    }

    childAdd(node: INode) {
        this.root.childAdd(node)
        return this
    }

    build() {
        return this.root.build()
    }
}

