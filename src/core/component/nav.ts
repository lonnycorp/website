import { ComponentAnchor } from "@src/core/component/anchor"
import { SITEMAP, TITLE_PREFIX } from "@src/core/constant"
import { type INode, NodeElement, NodeText } from "htmlforge"

export class ComponentNav implements INode {

    private readonly root : NodeElement

    constructor() {
        this.root = new NodeElement("div")
            .styleAdd("display", "flex")
            .styleAdd("gap", "10px")
            .styleAdd("justify-content", "center")
            .childAdd(
                new NodeElement("div")
                    .styleAdd("background", "black")
                    .styleAdd("color", "white")
                    .childAdd(new NodeText(TITLE_PREFIX))
            )
            .childAdd(
                new ComponentAnchor({ href: SITEMAP.home.URL })
                    .childAdd(new NodeText(SITEMAP.home.name))
            )
            .childAdd(
                new ComponentAnchor({ href: SITEMAP.blog.URL })
                    .childAdd(new NodeText(SITEMAP.blog.name))
            )
            .childAdd(
                new ComponentAnchor({ href: SITEMAP.contact.URL })
                    .childAdd(new NodeText(SITEMAP.contact.name))
            )
    }

    build() {
        return this.root.build()
    }


}
