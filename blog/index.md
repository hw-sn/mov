---
title: Updates
layout: page
crawl: false
---


{% for item in site.pages %}
{% if item.category contains "blog" %}
{{ item.title | escape }}
{% endif %}
{% endfor %}

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
