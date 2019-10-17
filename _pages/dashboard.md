---
title: SDG Urban Dashboard
permalink: /dashboard/
layout: page
---

<h3 style="color:#26BDE2">Los Angeles</h3>

<div class="container-fluid">
  <div class="row justify-content-center">
    <!-- City Average -->
    <div class="col-md-4">
      <canvas id="doughnut-chart" width="800" height="450"></canvas>
      <!-- Reporting Status -->
      <canvas id="doughnut-chart2" width="800" height="450"></canvas>
      <!-- 5 Best and 5 Worst -->
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="heading-1">
            <h5 class="accordion-header">
              5 Best and 5 Worst
            </h5>
          </div>
          <div id="collapse-1" class="collapse show" data-parent="#accordion" aria-labelledby="heading-1"
            style="margin-bottom:40px;">
            <!-- <div class="card-body"> -->
            <div id="accordion-1">
              <div class="card">
                <div class="card-header" id="heading-1-1">
                  <h5 class="mb-0">
                    <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1" aria-expanded="false"
                      aria-controls="collapse-1-1">
                      Best
                    </a>
                  </h5>
                </div>
                <div id="collapse-1-1" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                  <div class="card-body">
                    Sick Leave Policy
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Climate Alliance Membership
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Family Leave Policy
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    SO2 Emissions
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Smoking Rate
                  </div>
                </div>
              </div>
              <hr />
              <div class="card">
                <div class="card-header" id="heading-1-2">
                  <h5 class="mb-0">
                    <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-2" aria-expanded="false"
                      aria-controls="collapse-1-2">
                      Worst
                    </a>
                  </h5>
                </div>
                <div id="collapse-1-2" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-2">
                  <div class="card-body">
                    Affordable Housing
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Overcrowded Housing
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Banking Access
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Rural Infastracture Index
                  </div>
                  <hr style="margin:0" />
                  <div class="card-body">
                    Non-carbon Ecological Fooprint
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Spider Plot -->
    <div class="col-md-7 offset-1" style="text-align:center;">
      <div id="spiderPlot"></div>
    </div>
  </div>
  <!-- Progress Bars and Percentage Data For Each SDG -->
  <div class="row justify-content-center" style="margin-top:30px">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-01-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#E5243B" />
        <span style="font-size:20px; color:#E5243B">20.4%</span>
        <span>Below National Poverty Level</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-02-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#DDA63A" />
        <span style="font-size:20px; color:#DDA63A">29.2%</span>
        <span>Food Insecure</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#4C9F38" />
        <span style="font-size:20px; color:#4C9F38">##%</span>
        <span>Under 5 Mortality Rate</span>
        <br />
        <span style="font-size:20px; color:#4C9F38">##%</span>
        <span>Diabetes Mortality Rate</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#C5192D" />
        <span style="font-size:20px; color:#C5192D">49%</span>
        <span>Students in 11th Grade not meeting Smarter Balance standards</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-05-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FF3A21" />
        <span style="font-size:20px; color:#FF3A21">42.9%</span>
        <span>
          Of total civilian population employed in Management Occupations who
          are women
        </span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-06-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#26BDE2" />
        <span style="font-size:20px; color:#26BDE2">##%</span>
        <span>Wastewater safely treated</span>
        <br />
        <span style="font-size:20px; color:#26BDE2">##%</span>
        <span>Level of water stress</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-07-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FCC30B" />
        <span style="font-size:20px; color:#FCC30B">0.34mJ/GDP</span>
        <span>Energy Intensity</span>
        <br />
        <span style="font-size:20px; color:#FCC30B">30%</span>
        <span>population with primary reliance on clean fuels and technology</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-08-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#A21942" />
        <span style="font-size:20px; color:#A21942">4.75%</span>
        <span>GDP Growth Rate</span>
        <br />
        <span style="font-size:20px; color:#A21942">4.7%</span>
        <span>Umemployed Rate</span>
        <br />
        <span style="font-size:20px; color:#A21942">14%</span>
        <span>Disconnected Youth</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FD6925" />
        <span style="font-size:20px; color:#FD6925">##</span>
        <span>Passenger and Freight Volume</span>
        <br />
        <span style="font-size:20px; color:#FD6925">8.35%</span>
        <span>Employment in Manufacturing</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-10-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#DD1367" />
        <span style="font-size:20px; color:#DD1367">##%</span>
        <span>Growth in Household expenditure for bottom 40% of population</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-11-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FD9D24" />
        <div class="col-6">
          <span style="font-size:20px; color:#FD9D24">52,800</span>
          <span>Popualtion in informal settlements</span>
          <br />
          <span style="font-size:20px; color:#FD9D24">##%</span>
          <span>Land Consumption Rate</span>
          <br />
          <span style="font-size:20px; color:#FD9D24">##%</span>
          <span>Participation in Planning</span>
        </div>
        <div class="col-6">
          <span style="font-size:20px; color:#FD9D24">11.3</span>
          <span>PM2.5 levels</span>
          <br />
          <span style="font-size:20px; color:#FD9D24">13.5%</span>
          <span>Open Space</span>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-15-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#56C02B" />
        <span style="font-size:20px; color:#56C02B">##%</span>
        <span>Forest Area</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-16-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#00689D" />
        <span style="font-size:20px; color:#00689D">259</span>
        <span>Homicide Victims</span>
        <br />
        <span style="font-size:20px; color:#00689D">29,100</span>
        <span>Population Victims of Violence</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;" alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-17-1024x1024.png" />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#19486A" />
        <span style="font-size:20px; color:#19486A">78.8%</span>
        <span>with Broadband Connection</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center" style="margin-top:50px">
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG1: No Poverty</h4>
      <p>1.2.1 percent below national poverty level</p>
      <p>1.4.1 access to basic services</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG2: Zero Hunger</h4>
      <p>2.1.2 Food Insecurity</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG3: Good Health and Well Being</h4>
      <p>3.2.1 Under-Five Mortality Rate</p>
      <p>3.4.1 Cardiovascular Disease Mortality</p>
      <p>3.6.1 Traffic Deaths</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG4: Quality Education</h4>
      <p>4.1.1 School Reading and Math Proficiency</p>
      <p>4.2.2 Preschool Enrollment</p>
      <p>4.5.1 Gender Parity in Education</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG5: Gender Equality</h4>
      <p>5.2.1 Violence by Intimate Partner</p>
      <p>5.5.1 Women in Government</p>
      <p>5.5.2 Women in Managerial Positions</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG6: Clean Water and Sanitation</h4>
      <p>6.1.1 Access to Drinking Water</p>
      <p>6.2.1 Access to Sanitation Services</p>
      <p>6.3.1 Percentage of Wastewater Treated</p>
      <p>6.4.1 Water Use Efficiency</p>
      <p>6.4.2 Level of Water Stress</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG7: Affordable and Clean Energy</h4>
      <p>7.1.1 Access to Electricity</p>
      <p>7.2.1 Renewable Energy in Final Energy Consumption</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG8: Decent Work and Economic Growth</h4>
      <p>8.1.1 GDP growth per capita</p>
      <p>8.2.1 GDP growth per employed person</p>
      <p>8.5.2 Unemployed Rate</p>
      <p>8.6.1 Disengaged Youth</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG9: Industry, Innovation and Infrastructure</h4>
      <p>9.4.1 GHG Efficiency</p>
      <p>9.c.1 Access to Mobile Network</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG10: Reduced Inequalities</h4>
      <p>10.1.1 Population Below 50% of Median Income</p>
      <p>10.3.1 Experience Discrimination</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG11: Sustainable Cities and Communities</h4>
      <p>11.1.1 People in Informal Settlements</p>
      <p>11.2.1 Access to Public Transportation</p>
      <p>11.3.2 Participation Structure in Government</p>
      <p>11.5.1 Deaths Due to Disaster</p>
      <p>11.6.1 Solid Waste Collected</p>
      <p>11.6.2 Particulate Matter</p>
      <p>11.7.1 Public Open Space</p>
      <p>11.7.2 Physical/ Sexual Violence</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG12: Sustainable Consumption and Production</h4>
      <p>12.5.1 Recylcing Rate</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG15: Life on Land</h4>
      <p>15.1.1 Forest Area</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG16: Peace, Justice, and Strong Instituations</h4>
      <p>16.1.1 Intentional Homicide</p>
    </div>
    <div class="col-xs-12 col-md-4">
      <h4 style="color:#26BDE2">SDG17: Partnerships for the Goals</h4>
      <p>17.6.2 Access to Broadband</p>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
  <script src="https://cdn.rawgit.com/uscensusbureau/citysdk/Release1.1/js/citysdk.js"></script>
  <script src="https://cdn.rawgit.com/uscensusbureau/citysdk/Release1.1/js/citysdk.census.js"></script>
  <script>
    //  -------------------Start Doughnut Charts------------------
    new Chart(document.getElementById("doughnut-chart"), {
      type: "doughnut",
      data: {
        labels: ["City Average Score", "Out of 100%"],
        datasets: [
          {
            label: "City Average Score",
            backgroundColor: ["#26BDE2", "#C0C0C0"],
            data: [0.55, 0.45]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "City Average Score"
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(
                ((currentValue / total) * 100).toFixed(1)
              );
              return currentValue + " (" + percentage + "%)";
            },
            title: function (tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }
    });
    new Chart(document.getElementById("doughnut-chart2"), {
      type: "doughnut",
      data: {
        labels: ["Reported online", "Exploring Data Sources"],
        datasets: [
          {
            label: "Reporting Status",
            backgroundColor: ["#5cb85c", "#E27874"],
            data: [0.47, 0.53]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Reporting Status"
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(
                ((currentValue / total) * 100).toFixed(1)
              );
              return currentValue + " (" + percentage + "%)";
            },
            title: function (tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }
    });
    // -------------------End Doughnut Charts------------------
    // -------------------Start Spider Plot------------------
    var width = 500,
      height = 500,
      radius = Math.min(width, height) / 2,
      innerRadius = 0.35 * radius;
    var pie = d3.layout
      .pie()
      .sort(null)
      .value(function (d) {
        return d.width;
      });
    var tip = d3
      .tip()
      .attr("class", "d3-tip")
      .offset([0, 0])
      .html(function (d) {
        return (
          d.data.label + ": <span style='color:red'>" + d.data.score + "</span>"
        );
      });
    var arc = d3.svg
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(function (d) {
        return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
      });
    var outlineArc = d3.svg
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);
    var svg = d3
      .select("#spiderPlot")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    svg.call(tip);
    d3.csv(
      "https://raw.githubusercontent.com/lindamejia/open-sdg-site-starter/develop/indicator-summary%20-%20Sheet1.csv",
      function (error, data) {
        data.forEach(function (d) {
          d.id = d.id;
          d.order = +d.order;
          d.color = d.color;
          d.weight = +d.weight;
          d.score = +d.score;
          d.width = +d.weight;
          d.label = d.label;
        });
        // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }
        var path = svg
          .selectAll(".solidArc")
          .data(pie(data))
          .enter()
          .append("path")
          .attr("fill", function (d) {
            return d.data.color;
          })
          .attr("class", "solidArc")
          .attr("stroke", "gray")
          .attr("d", arc)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);
        var outerPath = svg
          .selectAll(".outlineArc")
          .data(pie(data))
          .enter()
          .append("path")
          .attr("fill", "none")
          .attr("stroke", "gray")
          .attr("class", "outlineArc")
          .attr("d", outlineArc);
        // calculate the weighted mean score
        var score =
          data.reduce(function (a, b) {
            //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
            return a + b.score * b.weight;
          }, 0) /
          data.reduce(function (a, b) {
            return a + b.weight;
          }, 0);
        svg
          .append("svg:text")
          .attr("class", "aster-score")
          .attr("dy", ".35em")
          .attr("text-anchor", "middle") // text-align: right
          .text("LA SDGs");
      }
    );
    //-------------------End Spider Plot------------------
  </script>
</div>
