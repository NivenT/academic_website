---
layout: page
title: hobbies
permalink: /hobbies/
description: Sometimes I find myself doing things other than math
nav: true
display_categories: [work, fun]
horizontal: false
importance: 10
---
<div class="projects">
    {% assign hobbies = site.hobbies | sort: "importance" %}
    {% for hobby in hobbies %}
        <h2 class="category">{{hobby.title}}</h2>
        <div class="container">
            <div class="row justify-content-sm-center">
                <div class="col-sm-8 mt-3 mt-md-0">
                    {{hobby.content}}
                </div>
                <div class="col-sm-4 mt-3 mt-md-0">
                    {% if page.horizontal %}
                    <div class="container">
                        <div class="row row-cols-2">
                            {% include hobbies_horizontal.html %}
                        </div>
                    </div>
                    {% else %}
                    <div class="grid">
                        {% include hobbies.html %}
                    </div>
                    {% endif %}
                </div>
            </div>
        </div>
    {% endfor %}
</div>
