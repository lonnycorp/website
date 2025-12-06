import { NodeElement, type INode } from "htmlforge"

export class ComponentAnchor implements INode {

    private readonly root : NodeElement

    constructor(params : {
        href: string
    }) {
        this.root = new NodeElement("a")
            .attributeAdd("href", params.href)
            .styleAdd("color", "blue")
            .styleAdd("background", "blue", { pseudoSelector: ":hover" })
            .styleAdd("color", "white", { pseudoSelector: ":hover" })
    }

    childAdd(child: INode) {
        this.root.childAdd(child)
        return this
    }

    build() {
        return this.root.build()
    }

}
