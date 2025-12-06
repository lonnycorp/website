import { type INode, NodeFragment, NodeElement, NodeText } from "htmlforge"

export class ComponentHelmet implements INode {

    private readonly root : NodeFragment

    constructor(params : {
        title: string
    }) {
        this.root = new NodeFragment()
            .childAdd(
                new NodeElement("title")
                    .childAdd(new NodeText(params.title))
            )
            .childAdd(
                new NodeElement("meta")
                    .attributeAdd("charset", "UTF-8")
            )
            .childAdd(
                new NodeElement("meta")
                    .attributeAdd("name", "viewport")
                    .attributeAdd("content", "width=device-width, initial-scale=1.0")
            )
    }

    build() {
        return this.root.build()
    }
}

