import { mkdir, rm, cp, writeFile } from "fs/promises"
import { dirname, join } from "path"
import type { HTML } from "htmlforge"
import { ROOT_DIRECTORY } from "@src/core/root"
import { ASSET_PREFIX, DIST_PATH } from "@src/core/constant"
import { homeBuild } from "@src/home"
import { blogBuild } from "@src/blog"
import { contactBuild } from "@src/contact"

const PAGES = [
    ... homeBuild(),
    ... blogBuild(),
    ... contactBuild(),
]

const clean = async () => {
    await rm(DIST_PATH, { recursive: true, force: true })
    await mkdir(DIST_PATH)
    await cp(join(ROOT_DIRECTORY, ASSET_PREFIX), join(DIST_PATH, ASSET_PREFIX), { recursive: true })
}

const pageBuild = async (params : {
    document: HTML,
    URL: string
}) => {
    const content = params.document.toString()
    const relPath = params.URL.substring(1)
    const path = join(DIST_PATH, relPath)

    await mkdir(dirname(path), { recursive: true })
    await writeFile(path, content)
}

await clean()
for (const page of PAGES) {
    await pageBuild(page)
}
