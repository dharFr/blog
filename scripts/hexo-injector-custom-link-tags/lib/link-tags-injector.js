
function linkTagsInject() {	
	return Object.entries(this.config.custom_link_tags).reduce((acc, [rel, href]) => {
  	acc += `<link rel="${rel}" href="${href}"/>\n`
  	return acc
  }, '')
}
module.exports = linkTagsInject;