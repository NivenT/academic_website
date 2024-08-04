---
layout: page
permalink: /notes/
title: notes
description: Various notes I've written. They all contain my confusions, mistakes, and/or TODOs, but hopefully are nevertheless useful.
types: [Course Notes, Notes for Talks, Seminar Notes, Other Notes]
nav: true
importance: 9
---

<div class="publications">

{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  <br>
  {% assign notes = site.notes | where: "type", t | sort: "importance" %}
  <ul>
  {% for note in notes %}
    <li> 
        <a href="{{ '/assets/pdf' | relative_url }}/{{ note.pdf }}">{{note.title}}</a> 
    </li>
    {{note.content}}
    <div style="margin-bottom:10px"></div>
  {% endfor %}
  </ul>
{% endfor %}

</div>
