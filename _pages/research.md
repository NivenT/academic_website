---
layout: page
permalink: /research/
title: research
description:
years: [2026, 2024, 2019]
nav: true
importance: 0
---

I am broadly interested in Diophantine/arithmetic geometry and arithmetic statistics. I tend to gravitate towards questions which are, directly or indirectly, related to (rational or integral) points on varieties, especially questions about their qualitatitve behavior (e.g. existence or (in)finiteness). I think the simple question of "when does a variety have any rational points?" is one of the most enticing source of problems in mathematics.

Much of my work involves the geometry and arithmetic of elliptic curves, both studied for its own sake and used to deduce results on other, related classes of varieties. I tend to take an algebro-geometric perspective on problems which, among other things, has fed interests in stacks, cohomology, etc. On this note, I think [my paper with Jackson](https://academic.oup.com/imrn/article-abstract/2024/10/8157/7223456?login=false) is an especially nice example converting a bit of algebraic geometry into nice arithmetic results. More recently, I have also been growing more interested in the utility of applying serious analytic inputs (e.g. Schinzel's Hypothesis) towards understanding rational points (e.g. towards studying ranks of elliptic curves, Brauer-Manin obstructions, etc.); see, for example, [my work with Katy](https://arxiv.org/abs/2611.16062).

If you want more details on the nature of my research, I wrote many statements describing my work in grad school when I was applying for postdocs. These include this [(long) research statement](/assets/pdf/Research_Statement_Long.pdf) aimed at mathematicians as well as this [(much shorter) statement](/assets/pdf/Oxford_Statement.pdf) aimed at a general scientific audience. Finally, one can look below for a list of my papers (publications + preprints).

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
