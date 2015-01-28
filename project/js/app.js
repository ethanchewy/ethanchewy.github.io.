var time_input = 0;
var suggested_articles = [];
var json;

var staffpick_api = 'http://cors-enabler.herokuapp.com/http://www.kimonolabs.com/api/6jlkday2?apikey=73388f3a9262f1c93b0116ffed06c96a';
var culture_api = 'http://cors-enabler.herokuapp.com/http://www.kimonolabs.com/api/cr8sxmfu?apikey=73388f3a9262f1c93b0116ffed06c96a';
var tech_api = 'http://cors-enabler.herokuapp.com/http://www.kimonolabs.com/api/82ogjpbu?apikey=73388f3a9262f1c93b0116ffed06c96a';
var humor_api = 'http://cors-enabler.herokuapp.com/http://www.kimonolabs.com/api/dfhv6ko4?apikey=73388f3a9262f1c93b0116ffed06c96a';
var design_api = 'http://cors-enabler.herokuapp.com/http://www.kimonolabs.com/api/4zyez8ri?apikey=73388f3a9262f1c93b0116ffed06c96a';
document.getElementById('time_input').addEventListener('keypress', function (event) {
	if(event.keyCode !== 13)
		return

	time_input = document.getElementById('time_input').value;
	document.getElementById('articles').innerHTML = '';
	$.getJSON(staffpick_api, function (data) {
		json = data;
		for(var i = 0; i < json.results.read_times.length; i++)
			if(parseInt(json.results.read_times[i].time.substring(0,2), 10) <= time_input && parseInt(json.results.read_times[i].time.substring(0,2), 10) >= time_input-5)
				suggested_articles.push(i);
		displayArticles(json, suggested_articles);
	});
});

document.getElementById('option_picker').addEventListener('change', function (event) {
	time_input = document.getElementById('time_input').value;

	document.getElementById('articles').innerHTML = '';

	$.getJSON(eval(document.getElementById('option_picker').value), function (data) {
		json = data;
		for(var i = 0; i < json.results.read_times.length; i++)
			if(parseInt(json.results.read_times[i].time.substring(0,2), 10) <= time_input && parseInt(json.results.read_times[i].time.substring(0,2), 10) >= time_input-5)
				suggested_articles.push(i);
		displayArticles(json, suggested_articles);
	});
});

function displayArticles (json, articles) {
	for (var i = 0; i < articles.length; i++) {
		var title = json.results.titles[articles[i]].title.text;
		var article_link = json.results.titles[articles[i]].title.href;
		var read_time = json.results.read_times[articles[i]].time;

		var article_link_elem = document.createElement('a');
		article_link_elem.href = article_link;
		article_link_elem.setAttribute('target', '_blank');

		var title_elem = document.createElement('span');
		title_elem.innerHTML = title;

		article_link_elem.appendChild(title_elem);

		var read_time_elem = document.createElement('small');
		read_time_elem.innerHTML = read_time;

		var row = document.createElement('div');
		row.className = 'row';
		row.appendChild(article_link_elem);
		row.appendChild(read_time_elem);

		document.getElementById('articles').appendChild(row);
	};
}