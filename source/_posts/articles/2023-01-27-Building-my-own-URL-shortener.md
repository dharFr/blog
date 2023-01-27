---
title: Building my own URL shortener
tags:
  - IndeWeb
  - BlogMeta
  - Code
date: 2023-01-27 22:55:20
---

<p class="p-bridgy-mastodon-content" style="display: none;">
  #BlogPost: Building my own URL shortener. <br/>
  #blog #IndeWeb #permashortlink <br/>
</p>
<data class="p-bridgy-omit-link" value="false"></data>

As I was looking into the different options to _Publish on my Own Site, Syndicate Elsewhere_ (see [<abbr>POSSE</abbr>](https://indieweb.org/POSSE)), I came across the idea of having a custom [permashortlink](https://indieweb.org/permashortlink) service.
<!-- more -->

Blog posts _permalinks_ are usually quite long. On this website, for example, they include publication date as well as the full title of the post. Using long &  explicit URLs is considered a good practice from a <abbr title="Search Engine Optimisation">SEO</abbr> standpoint, but also comes with a few drawbacks. It makes URL difficult to read, and possibly annoying to select/copy or type. Additionally, it also used to be an issue when sharing on Twitter, even though it's not a problem anymore. Short links, on the contrary, are easier to remember, and more convenient when one's need to type it manually (when displayed on a slide-deck during a presentation for example). 
More than anything, I thought it was a nice pet project to work on. One that could be shipped in a reasonable amount of time, and could be a nice addition to my website. 

## Step 1: Getting a personal short domain

That one was not that difficult. As I already own `audard.net`, and host this site on `olivier.audard.net`, I decided to go with `o.audard.net`. It's not the shortest possible domain, but it's short enough. Plus, I didn't want to buy a new domain just for this, and setting up a new <abbr title="Domain Name System">DNS</abbr> record looked simple enough for a pet project. 

## Step 2: Deciding how to shorten URLs

That part gets slightly less trivial. There are a few interesting examples on [permashortlink](https://indieweb.org/permashortlink) page. Using an algorithmic solution is a nice idea as it doesn't require saving anything in a database and most likely maintain a decent level of readability for humans. 
I couldn't find any ready-to-use JavaScript implementation besides [whistler](https://www.npmjs.com/package/whistler). On that one, I found the _sexagesimal epoch days_ date encoding it uses not so readable for most people. It also adds some complexity to the implementation and I wanted something easy to maintain, even if I had to come back to it in a few years from now...

I finally decided to implement my own solution, mostly inspired from [Whistle](https://tantek.pbworks.com/w/page/21743973/Whistle#design), but with a few simplifications on the design. 

It goes as below:

 - My posts have a permalink URL matching the following pattern: `https://olivier.audard.net/CATEGORY/YYYY/MM/DD/TITLE/`
   - `CATEGORY`: There are only 2 different categories at the moment, `articles` and `notes`, but there might be more in the future
   - `YYYY/MM/DD/`: this is the publication date of the post
   - `TITLE/`: The full title of the post, which might be quite long depending on the content.
 - Permashortlinks are matching the following: `https://o.audard.net/CYYYYMMDDN`
   - `C`: The first letter of the category (`a` for `articles`, `n` for `notes`)
   - `YYYYMMDD`: Publication date again, but without any unnecessary slash.
   - `N`: The last character is the Nth post of that category on that day.

Using only the first letter from the `CATEGORY` looks good enough for my use-case. It’s not as robust as the original design, but as I don’t plan to have many different categories in the future, I should be fine.
`N` as the last character is useful to distinguish between 2 different posts on the same day. As I don't publish that much content, I initially thought I could skip that part, but as I'm planning to 

## Step 3: Implementation

Implementation goes in 3 different parts:
 1. The shorten/expand algorithmic logic lives on [dharFr/url-courte](https://github.com/dharFr/url-courte)(GitHub) and has been published on NPM under [@dhar/url-courte](https://www.npmjs.com/package/@dhar/url-courte). 
 2. The redirection logic lives on its own microservice, using Netlify's [serverless functions](https://docs.netlify.com/functions/overview/). Converting the `N` ordinal was the more tricky part, as Hexo blog engine doesn't provide this data out of the box. I finally choose to fetch my blog JSON feed and filter the result on a specific date to find the correct post. It's probably not optimal, but it's good enough for now. Once the URL is expanded, the service return a `302` redirect to the correct URL on the principal domain.
 3. Displaying shortlink in the article meta is achieved thanks to a custom [Hexo helper](https://hexo.io/api/helper).

## All done!

Good. Now I have my own custom URL shortening service. Maybe not the most useful feature, but it was interesting to build and a good opportunity to learn more about Netlify serverless functions. And it's also quite rewarding to be able to share my own shortlinks instead of using 3rd party solutions as I used to do in the past. It feels like I have more control on the content I publish online, and that's pretty cool.
