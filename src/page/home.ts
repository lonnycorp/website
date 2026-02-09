import { ComponentContainer } from "@src/core/component/container"
import { ComponentDivider } from "@src/core/component/divider"
import { ComponentFooter } from "@src/core/component/footer"
import { ComponentHero } from "@src/core/component/hero"
import { ComponentHelmet } from "@src/core/component/helmet"
import { ComponentNav } from "@src/core/component/nav"
import { HTMLDocument, NodeElement, NodeText, type INode } from "htmlforge"
import { bodyStyle } from "@src/core/shim/body-style"
import { SITEMAP, TITLE_PREFIX } from "@src/core/constant"
import { ComponentAnchor } from "@src/core/component/anchor"

type Project = {
    path: string,
    name: string,
    description: string,
}

const IMAGE_PATH = "/asset/home-hero.png"

const PROJECTS : Project[] = [
    {
        path: "https://github.com/lonnycorp/halls",
        name: "Halls",
        description: [
            "A free, open source first-person exploration game. Players traverse ",
            "3D spaces hosted anywhere on the internet, linked by portals that are addressed ",
            "by URL. No objective - just portals to step through and places to see!"
        ].join("")
    },
    {
        path: "https://github.com/lonnycorp/lonnymq",
        name: "LonnyMQ",
        description: [
            "A high performance, multi-tenant, zero dependency, PostgreSQL ",
            "message queue implementation for Node.js/Typescript.",
        ].join("")
    },
    {
        path: "https://github.com/lonnycorp/htmlforge",
        name: "HTMLForge",
        description: [
            "A minimal, zero dependency library for building fully-styled HTML ",
            "in Node.js/Typescript without using stylesheets."
        ].join("")
    },
    {
        path: "https://github.com/lonnycorp/astroparse",
        name: "AstroParse",
        description: [
            "A minimal, zero dependency, fully-typed parser combinator library."
        ].join("")
    },
]

class ComponentProject implements INode {

    private readonly root : NodeElement

    constructor(project : Project) {
        this.root = new NodeElement("div")
            .childAdd(
                new ComponentAnchor({ href: project.path })
                    .childAdd(new NodeText(project.name))
            )
            .childAdd(new NodeText(" - "))
            .childAdd(new NodeText(project.description))
    }

    build() {
        return this.root.build()
    }

}

export const homeBuild = () => {
    const doc = new HTMLDocument()
    const container = new ComponentContainer()

    bodyStyle(doc.body)
    doc.attributeAdd("lang", "en-GB")

    doc.head
        .childAdd(new ComponentHelmet({ title: `${TITLE_PREFIX} | ${SITEMAP.home.name}` }))
        .childAdd(container)
        .childAdd(new ComponentFooter())

    container
        .childAdd(new ComponentNav())
        .childAdd(new ComponentDivider())
        .childAdd(new ComponentHero(IMAGE_PATH))
        .childAdd(new ComponentDivider())

    for (const project of PROJECTS) {
        container.childAdd(new ComponentProject(project))
    }

    return [{
        path: SITEMAP.home.path,
        document: doc
    }]
}
