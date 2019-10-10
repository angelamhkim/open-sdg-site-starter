var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$("[data-circle-graph]").each(function() {
  var $graph = $(this),
    percent = parseInt($graph.data("percent"), 10),
    deg = (360 * percent) / 100;
  if (percent > 50) {
    $graph.addClass("gt-50");
  }
  $graph
    .find(".circle-graph-progress-fill")
    .css("transform", "rotate(" + deg + "deg)");
  $graph.find(".circle-graph-percents-number").html(percent + "%");
});
