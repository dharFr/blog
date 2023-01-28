/* global hexo */
'use strict';

const config = hexo.config;

if (config.custom_link_tags != false) {
    hexo.extend.injector.register('head_end', require('./lib/link-tags-injector').bind(hexo));
}