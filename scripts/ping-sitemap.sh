#!/usr/bin/env bash
# Notify Google and Bing that sitemap was updated (run after deploy or when you add new pages).
# This does NOT replace submitting sitemap in Google Search Console; it only pings crawlers to recrawl the sitemap.

SITEMAP_URL="https://www.borealgrit.com/sitemap.xml"
ENCODED=$(echo "$SITEMAP_URL" | sed 's/:/%3A/g; s/\//%2F/g')

echo "Pinging search engines with sitemap: $SITEMAP_URL"
echo ""

# Google
if curl -s -o /dev/null -w "%{http_code}" "https://www.google.com/ping?sitemap=$ENCODED" | grep -q "200"; then
  echo "  Google: ping sent (200)"
else
  echo "  Google: ping sent (check above for status)"
fi

# Bing
if curl -s -o /dev/null -w "%{http_code}" "https://www.bing.com/ping?sitemap=$ENCODED" | grep -q "200"; then
  echo "  Bing:   ping sent (200)"
else
  echo "  Bing:   ping sent (check above for status)"
fi

echo ""
echo "Done. Crawlers may recrawl your sitemap in the next hours/days."
echo "To submit sitemap or request indexing for a URL, use Google Search Console."
