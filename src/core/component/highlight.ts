import { type INode, NodeElement } from "htmlforge"


export type EmphasisType = "STRONG" | "CODE" | "EMPHASIS"

const HIGHLIGHT_COLORS = {
    STRONG: ["#00FFFF", "#000000"],
    CODE: ["#2E3440FF", "#D8DEE9FF"],
    EMPHASIS: ["#FFFF00", "#000000"]
} as const

export class ComponentHighlight implements INode {

    private readonly root : NodeElement

    constructor(emphasisType: EmphasisType) {
        const [backgroundColor, textColor] = HIGHLIGHT_COLORS[emphasisType]
        this.root = new NodeElement("span")
            .styleAdd("background", backgroundColor)
            .styleAdd("color", textColor)
    }

    childAdd(node : INode) {
        this.root.childAdd(node)
        return this
    }

    build() {
        return this.root.build()
    }
}


