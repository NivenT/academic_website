---
layout: page
permalink: /talks/
title: talks
description: Here is a list of more-or-less every talk I've ever given.
types: [Conference Talks, Research Seminar Talks, Learning Seminar Talks, Other Talks]
nav: true
has_math: true
importance: 9
---

<div class="publications">

{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  <br>
  <br>
  {% assign talks = site.talks | where: "type", t | sort: "date" | reverse %}
  <ul>
  {% for talk in talks %}
    <li> 
        <b>
            {% if talk.researchseminars %}
                <a href="{{ talk.researchseminars }}">{{talk.title}}</a>
            {% else %}
                {{talk.title}}
            {% endif %}
        </b>, 
        <i>
            {% if talk.seminarpage %}
                <a href="{{ talk.seminarpage }}">{{talk.seminar}}</a>
            {% else %}
                {{talk.seminar}}
            {% endif %}
        </i>,
        {{talk.location}} - {{talk.date | date: "%b %Y"}}
    </li>
    {% if talk.paper %}
        This was based on the work in <a href="{{ talk.paper }}">this paper</a>.
    {% endif %}
    {% if talk.notes %}
        I wrote notes for this talk, which you can find <a href="{{ '/assets/pdf' | relative_url}}/{{talk.notes}}">here</a>.
    {% endif %}
    {% if talk.slides %}
        My slides can be found <a href="{{ '/assets/pdf/slides' | relative_url}}/{{talk.slides}}">here</a>.
    {% endif %}
    {% if talk.abstract %}
        I wrote an extended abstract for this talk, which you can find <a href="{{ '/assets/pdf/abstracts' | relative_url}}/{{talk.abstract}}">here</a>.
    {% endif %}
    <div style="margin-bottom:15px"></div>
  {% endfor %}
  </ul>
{% endfor %}

</div>
