---
layout: page
permalink: /research/
title: research
description:
years: [2024, 2023, 2019]
nav: true
importance: 0
---

So far, I have mostly worked on projects related to, either directly or indirectly, points on varieties. But I have broader interests in most things that fall under arithmetic/algebraic geometry. 

If you want more details on the nature of my research, I wrote many statements describing my work in grad school when I was applying for postdocs. These include this [(long) research statement](/assets/pdf/Research_Statement_Long.pdf) aimed at mathematicians as well as this [(much shorter) statement](/assets/pdf/Oxford_Statement.pdf) aimed at a general scientific audience. Finally, one can look below for a list of my papers (publications + preprints).

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
