const fs = require('fs')

module.exports.generateMarkdown = (slug, author) => {
	const path = '/content/' + slug + '.md'
	const content = `
	---
	title:
	description:
	thumbnail:
	slug: ${slug}
	author: ${author}
	---
	`
	fs.appendFile(path, content)

}