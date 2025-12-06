import { ComponentHighlight } from "@src/core/component/highlight"
import { ComponentHeading } from "@src/core/component/heading"
import { ComponentParagraph } from "@src/core/component/paragraph"
import { NodeFragment, NodeText, type BuildArtifact, type INode } from "htmlforge"
import type { PhrasingContent } from "mdast"
import { fromMarkdown } from "mdast-util-from-markdown"
import { ComponentCode } from "@src/core/component/code"

const phrasingContentRender = (content : PhrasingContent) => {
    if (content.type === "text") {
        return new NodeText(content.value)
    } else if (content.type === "inlineCode") {
        return new ComponentHighlight("CODE")
            .childAdd(new NodeText(content.value))
    } else if (content.type === "emphasis") {
        const emphasis = new ComponentHighlight("EMPHASIS")
        for (const child of content.children) {
            emphasis.childAdd(phrasingContentRender(child))
        }
        return emphasis
    } else if (content.type === "strong") {
        const emphasis = new ComponentHighlight("STRONG")
        for (const child of content.children) {
            emphasis.childAdd(phrasingContentRender(child))
        }
        return emphasis
    } else {
        throw new Error(`Unsupported PhrasingContent: ${content.type}`)
    }
}

const headingTypeParse = (content: 1 | 2 | 3 | 4 | 5 | 6) => {
    if (content === 1) {
        return "H1"
    } else if (content === 2) {
        return "H2"
    } else {
        return "H3"
    }
}

export class ComponentMarkdown implements INode {

    private readonly root : NodeFragment

    constructor(markdown : string) {
        this.root = new NodeFragment()
        const rootNode = fromMarkdown(markdown)
        for (const el of rootNode.children) {
            if (el.type === "heading") {
                const headingType = headingTypeParse(el.depth)
                const heading = new ComponentHeading(headingType)
                this.root.childAdd(heading)
                for (const content of el.children) {
                    heading.childAdd(phrasingContentRender(content))
                }
            } else if (el.type === "paragraph") {
                const paragraph = new ComponentParagraph()
                this.root.childAdd(paragraph)
                for (const content of el.children) {
                    paragraph.childAdd(phrasingContentRender(content))
                }
            } else if (el.type === "list") {
                //TODO: FIX
                continue
            } else if (el.type === "code") {
                this.root.childAdd(new ComponentCode(el.value, el.lang ?? undefined))
            } else {
                throw new Error(`Unsupported RootContent: ${el.type}`)
            }
        }
    }

    build(): Iterable<BuildArtifact> {
        return this.root.build()
    }

}
