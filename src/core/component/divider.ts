import { type INode, NodeElement } from "htmlforge"

export class ComponentDivider implements INode {

    private readonly root : NodeElement

    constructor() {
        this.root = new NodeElement("div")
            .styleAdd("border-bottom", "dashed black 1px")
    }

    build() {
        return this.root.build()
    }
}
