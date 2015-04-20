var tpl = _.template("<h1>My name is <%= name %> my favorite movie is <%= movie %>, I love living in <%= city %> and I love WDI because <%= reason %></h1>")

var data = {
  name: "James",
  movie: "Con Air",
  city: "Chicago",
  reason: "it's so much fun"
}
$('body').html(tpl(data))

var tpl2 = _.template("<h1>Last night's <%= city1 %> vs <%= city2 %> sports match was <%= team1 %> - <%= team1_score %>, <%= team2 %>-<%= team2_score %></h1>")
var score = {
  city1: "Chicago",
  city2: "Nashville",
  team1: "Blackhawks",
  team2: "Predators",
  team1_score: "4",
  team2_score: "2"
}
$('body').append(tpl2(score))
