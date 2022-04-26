---
layout: page
permalink: /badnotes/
title: badnotes
description: These are notes of poor enough quality to not go in the `notes' page, but which I nevertheless may share with some people.
list: [Arithmetic_Statistics_Seminar_Notes.pdf, AWS_2022_Notes.pdf, Hurwitz_Counting_Talk.pdf, New_Gap_Talk.pdf, PCMI_2021_Notes.pdf, Quals_Notes.pdf, Rational_Points_Seminar_Notes.pdf, Reparameterizations_Talk.pdf, RTG_Workshop_Notes.pdf, STAGE_FALL_2021_Notes.pdf]
nav: false
secret: true
importance: 9
---

<div class="publications">

<h2 class="year">Bad Notes</h2>
<br>
<ul>
    {% for note in page.list %}
        <li>
            <a href="{{ '/assets/pdf/bad/' | relative_url}}/{{note}}">{{note}}</a>
        </li>
    {% endfor %}
</ul>

</div>
