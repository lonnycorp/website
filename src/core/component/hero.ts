import { type INode, NodeElement } from "htmlforge"

export class ComponentHero implements INode {

    private readonly root : NodeElement

    constructor(imageURL: string) {
        this.root = new NodeElement("div")
            .styleAdd("display", "flex")
            .styleAdd("justify-content", "center")
            .childAdd(
                new NodeElement("img")
                    .attributeAdd("src", imageURL)
                    .styleAdd("height", "auto")
                    .styleAdd("max-width", "100%")
            )
    }

    build() {
        return this.root.build()
    }

}
