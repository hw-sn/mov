---
title:  Home
layout: page
crawl:  true
no_breadcrumbs: true
---

{% for p in site.posts %}
{{p.title}}
{% endfor%}


## Recent updates
<ul class="list-group list-group-flush">
{% for item in site.pages %}
{% if item.url contains "blog/" and item.url != "/blog/" %}
<li class="list-group-item">
<a href="{{site.baseurl}}{{item.url}}">{{item.description | escape }}</a>
<p class="excerpt">{{ item.title | escape }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
