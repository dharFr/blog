---
layout: post
title: jQuery plugin for ping-URL process
date: 2011-07-26
tags:
- JavaScript
- jQuery
- jQueryPlugin
---
If your page runs into an iframe hosted by another domain, you may want to keep the session open. The following jQuery plugin automates the "ping URL" process and provides some options.
<!--more-->

The pinger will ask the given URL every 'interval' minutes if it detects
some activity by listening to the events listed in 'listen' parameter.

Have a look to the 'defaults' variable below for further details about available parameters and default values.

{% gist 1107059 %}
