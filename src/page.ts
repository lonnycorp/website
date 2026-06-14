import {
    Container,
    Divider,
    Head,
    Hero,
    Nav,
    Project,
    type ProjectParams,
} from "@src/component"
import { shim } from "@src/shim"
import { Document } from "@lonnycorp/htmlforge"

const IMAGE_PATH = "/asset/home-hero.webp"
const TITLE = "The Lonny Corporation"

const PROJECTS : ProjectParams[] = [
    {
        path: "https://hallways.lonnycorp.com",
        name: "Hallways",
        description: [
            "A first-person web browser for 3D spaces. Hyperlinks are replaced by portals that",
            "can be seamlessly walked through with no loading.",
        ].join(" ")
    },
    {
        path: "https://lonnymq.lonnycorp.com",
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
            "A minimal, zero dependency HTML builder with efficient ",
            "inline styling for Node.js/Typescript"
        ].join("")
    },
    {
        path: "https://github.com/lonnycorp/astroparse",
        name: "AstroParse",
        description: [
            "A minimal, zero dependency, fully-typed parser combinator ",
            "for Node.js/Typescript",
        ].join("")
    }
]

export const toString = () => {
    const doc = new Document()
    const body = new Container()

    shim(doc.body)
    doc.attribute("lang", "en-GB")
    doc.head.child(new Head(TITLE))

    body
        .child(new Nav(TITLE))
        .child(new Divider())
        .child(new Hero(IMAGE_PATH))
        .child(new Divider())

    for (const item of PROJECTS) {
        body.child(new Project(item))
    }

    doc.body
        .child(body)

    return doc.toString()
}
