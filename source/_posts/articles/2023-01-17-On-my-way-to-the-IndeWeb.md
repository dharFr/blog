---
title: On my way to the IndeWeb
tags:
  - IndeWeb
  - Blog Meta
date: 2023-01-17 21:16:27
---

As you might know, I'm [taking some distance from Twitter](/articles/2023/01/02/moving-away-from-twitter-to-mastodon-my-own-website/) and I'm trying to get back ownership on the content I publish online. Clearly I'm not the only one to take that path, neither the first one... In fact, there is a whole community of people or companies who share those values and principles. This community identify itself as the [IndieWeb](https://indieweb.org).

<!-- more -->

> The IndieWeb is a community of independent & personal websites connected by simple standards, based on the principles of: owning your domain & using it as your primary identity, publishing on your own site (optionally syndicating elsewhere), and owning your data.

There are plenty of resources to learn about the IndeWeb, and how to take part of it, and to be honest, I'm still scratching the surface. But I believe in the core principles, and I've decided to progressively improve this website to better support standards from the IndeWeb.

Would you like to check if your own site is IndeWeb compliant? Or are you interested learning how to improve it? 

**--> https://indiewebify.me is a very good place to start**

So far, I checked the following:

 - ✅ **_Get your own domain name_**: This one was already done, since a while 😄
 - ✅ **_Set up Web Sign In_**: Links to my 3rd party identities now have a `rel=me` attribute. Additionally, this allows my Mastodons profiles to get a verified link (see [mamot.fr/@oad](https://mamot.fr/@oad) for example)!
 - ✅ **_Mark up your content with [microformats2](https://microformats.org/)_**: Home page and posts on this site now support `h-card` and `h-entry` microformats. If you're also using [Hexo](https://hexo.io/) blog framework with [cactus-dark](https://probberechts.github.io/hexo-theme-cactus/) theme, I created a [pull-request](https://github.com/probberechts/hexo-theme-cactus/pull/346) so you can also benefit from that one.

 As a next step, I'll look into [POSSE](https://indieweb.org/POSSE). I'd love to automatically share content I write here to Mastodon and other platforms. For now, I updated the structure of this blog to add a new [/notes/] section. It's intended to receive my toots from Mastodon and other short notes in the future.

[_Webmentions_](http://webmention.org/) are also quite interesting, but one step at a time...

