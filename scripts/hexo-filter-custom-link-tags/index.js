/* global hexo */
'use strict';

const config = hexo.config;

if (config.custom_link_tags != false) {
    hexo.extend.filter.register('after_render:html', require('./lib/link-tags-injector'));
}
