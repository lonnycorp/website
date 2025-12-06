import { type INode, NodeElement, NodeText } from "htmlforge"
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from "shiki"
import nord from "shiki/dist/themes/nord.mjs"
import plsql from "shiki/dist/langs/plsql.mjs"

const CORE = createHighlighterCoreSync({
    themes: [nord],
    langs: [plsql],
    engine: createJavaScriptRegexEngine()
})

export class ComponentCode implements INode {

    private readonly root : NodeElement

    constructor(code: string, lang?: string) {
        const tokens = CORE.codeToTokens(code, {
            lang: lang ?? undefined,
            theme: "nord"
        })

        this.root = new NodeElement("pre")
            .styleAdd("white-space", "pre-wrap")
            .styleAdd("tab-size", "4")
            .styleAdd("padding", "12px")

        if (tokens.bg) {
            this.root
                .styleAdd("background-color", tokens.bg)
        }

        for (const tokenLines of tokens.tokens) {
            for (const token of tokenLines) {
                const chunk = new NodeElement("span")
                    .childAdd(new NodeText(token.content))
                if (token.bgColor) {
                    chunk.styleAdd("background-color", token.bgColor)
                }

                if (token.color) {
                    chunk.styleAdd("color", token.color)
                }

                this.root.childAdd(chunk)
            }
            this.root.childAdd(new NodeText("\n"))
        }
    }

    build() {
        return this.root.build()
    }
}

