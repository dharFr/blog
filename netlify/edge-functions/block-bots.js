// Blockin' bots on Netlify
// see:
// - https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
// - https://github.com/ai-robots-txt/ai.robots.txt

// inspired (and taken) from ethan marcotte's blog post
// https://ethanmarcotte.com/wrote/blockin-bots/
const botUas = [
    'AdsBot-Google',
    'AwarioRssBot',
    'AwarioSmartBot',
    'DataForSeoBot',
    'peer39_crawler',
    'AI2Bot',
    'Ai2Bot-Dolma',
    'Amazonbot',
    'anthropic-ai',
    'Applebot',
    'Applebot-Extended',
    'Brightbot 1.0',
    'Bytespider',
    'CCBot',
    'ChatGPT-User',
    'Claude-Web',
    'ClaudeBot',
    'cohere-ai',
    'cohere-training-data-crawler',
    'Crawlspace',
    'Diffbot',
    'DuckAssistBot',
    'FacebookBot',
    'FriendlyCrawler',
    'Google-Extended',
    'GoogleOther',
    'GoogleOther-Image',
    'GoogleOther-Video',
    'GPTBot',
    'iaskspider/2.0',
    'ICC-Crawler',
    'ImagesiftBot',
    'img2dataset',
    'ISSCyberRiskCrawler',
    'Kangaroo Bot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'OAI-SearchBot',
    'omgili',
    'omgilibot',
    'PanguBot',
    'PerplexityBot',
    'PetalBot',
    'Scrapy',
    'SemrushBot-OCOB',
    'SemrushBot-SWA',
    'Sidetrade indexer bot',
    'Timpibot',
    'VelenPublicWebCrawler',
    'Webzio-Extended',
    'YouBot',
  ]
  
  export default async (request, context) => {
    const ua = request.headers.get('user-agent');
  
    let isBot = false
  
    botUas.forEach(u => {
      if (ua.toLowerCase().includes(u.toLowerCase())) {
        isBot = true
      }
    })
  
    const response = isBot ? new Response(null, { status: 401 }) : await context.next();
    return response
  };