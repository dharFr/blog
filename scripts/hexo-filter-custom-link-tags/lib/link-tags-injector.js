
function linkTagsInject(content) {	
	const linkTags = Object.entries(this.config.custom_link_tags).reduce((acc, [rel, href]) => {
    	acc += `<link rel="${rel}" href="${href}"/>\n`
    	return acc
    }, '')

    return content.replace(/<head>(?!<\/head>).+?<\/head>/s, str => str.replace('</head>', `${linkTags}</head>`));
}
module.exports = linkTagsInject;