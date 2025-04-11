---
layout: page
title: seminars
permalink: /seminars/
description: Some seminars I have (helped) organize.
nav: true
years: [2025, 2023]
horizontal: false
---

<!--
 The page is based off of Haitao Zou's seminar page
 https://github.com/htzoufdu/htzoufdu.github.io/tree/master
 https://htzoufdu.github.io/
-->
<div class="publications">
<h2 class="year"></h2><br>
</div>

<div class="projects">
{% for y in page.years %}
    <h2 class="year">{{y}}</h2>
    {% assign year_seminars = site.seminars | where: "year", y %}
    {% assign sorted_seminars = year_seminars | sort: "time" %}
        <div class="container">
            <div class="row row-cols-1">
            {% for seminar in sorted_seminars %}
                {% include seminars.html %}
            {% endfor %}
            </div>
        </div>
{% endfor %}
</div>
