import { mkdirSync, rmSync, cpSync, writeFileSync } from "fs"
import { dirname, join } from "path"
import type { HTMLDocument } from "htmlforge"
import { ROOT_DIRECTORY } from "@src/core/root"
import { ASSET_PREFIX, DIST_PATH } from "@src/core/constant"
import { homeBuild } from "@src/page/home"
import { blogBuild } from "@src/page/blog"
import { contactBuild } from "@src/page/contact"

type Page = {
    path: string
    document: HTMLDocument
}

const PAGES = [
    ... homeBuild(),
    ... blogBuild(),
    ... contactBuild(),
]

const clean = () => {
    rmSync(DIST_PATH, { recursive: true, force: true })
    mkdirSync(DIST_PATH)
    cpSync(
        join(ROOT_DIRECTORY, ASSET_PREFIX),
        join(DIST_PATH, ASSET_PREFIX),
        { recursive: true }
    )
}

const pageBuild = (page: Page) => {
    const content = page.document.toString()
    const relPath = page.path.substring(1)
    const path = join(DIST_PATH, relPath)

    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, content)
}

clean()
for (const page of PAGES) {
    pageBuild(page)
}
