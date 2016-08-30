{% extends 'common:page/layout.tpl' %}
{% block content %}
    {% require "technologyarticles:static/css/technologyarticles.css" %}
	<div class="tech-arti-main">
		<div class="tech-arti-detail">
			<div class="tech-arti-left">
			{% widget "technologyarticles:widget/first/first.tpl"%}
			{% widget "technologyarticles:widget/tag/tag.tpl"%}
			{% widget "technologyarticles:widget/mainlist/mainlist.tpl"%}
			{% widget "technologyarticles:widget/pagination/pagination.tpl"%}
			</div>
			<div class="tech-arti-right">
			{% widget "technologyarticles:widget/publishPassage/publishPassage.tpl"%}
			{% widget "technologyarticles:widget/hottags/hottags.tpl"%}
			{% widget "technologyarticles:widget/recommendArti/recommendArti.tpl"%}
			</div>
		</div>
	</div>
{% endblock %}