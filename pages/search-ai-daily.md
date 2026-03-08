---
layout: null
permalink: /search-ai-daily/
---
[
  {% assign ai_daily_posts = site.ai_daily | sort: 'date' | reverse %}
  {% for post in ai_daily_posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ post.external_url | default: post.url | relative_url }}",
      "date"     : "{{ post.date }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
