import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import {VFile} from 'vfile'


//const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(id) {
    const p = path.join(process.cwd(), 'posts');
    const fullPath = path.join(p, `${'Lesson_' + id}.md`)
    //const vpath = new VFile({path: path.join(process.cwd(), 'posts', 'Lesson_', id, '.md')})
    //const fullPath = postsDirectory + 'postsLesson_' + id + '.md';
    //const fullPath = '../posts/Lesson_' + id.toString() + '.md';
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    //const fileName = path.join(VFile.cwd, "posts", "Lesson_", id, ".md")
    //console.log(fileName)
    //const file = new VFile({path: fileName, value: 'Alpha *braavo* charlie.'})
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    /*
    const processedContent = await remark()
      .use(html, {allowDangerousHtml: true})
      .process(matterResult.content)
    */
      const processedContent = await remark()
      .use(remarkParse)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(matterResult.orig)
    /*
      console.log(matterResult)
    console.log(matterResult.content)
    
    const processedContent = await unified()
    .use(remarkParse)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content)
    */
    const contentHtml = processedContent.toString();
    
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }
  

export function getSortedPostsData() {
  const p = path.join(process.cwd(), 'posts');
  // Get file names under /posts
  const fileNames = fs.readdirSync(p)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(p, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}