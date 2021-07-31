---
layout: page
permalink: /talks/
title: talks
description: Here is a list of more-or-less every talk I've ever given.
types: [Conference Talks, Seminar Talks, Other Talks]
nav: true
importance: 9
---

<div class="publications">

{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  <br>
  {% assign talks = site.talks | where: "type", t | sort: "date" | reverse %}
  <ul>
  {% for talk in talks %}
    <li> 
        '<b>{{talk.title}}</b>', <i>{{talk.seminar}}</i>, {{talk.location}} - {{talk.date | date: "%b %Y"}}
    </li>
    {% if talk.notes %}
        I wrote notes for this talk, which you can find <a href="{{ '/assets/pdf/' | relative_url}}/{{talk.notes}}">here</a>.
    {% endif %}
    {% if talk.paper %}
        This talk was on work published in <a href="{{ talk.paper }}">this paper</a>.
    {% endif %}
    <div style="margin-bottom:10px"></div>
  {% endfor %}
  </ul>
{% endfor %}

</div>
