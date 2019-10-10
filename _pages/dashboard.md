---
title: SDG Urban Dashboard
permalink: /dashboard/
layout: page
---

<h3 style="color:#26BDE2">Los Angeles</h3>

<div class="container-fluid">
  <div class="row justify-content-center">
    <!-- City Average -->
    <div class="col-xs-6 col-sm-4 col-md-2">
      <p>City Average Score</p>
      <div class="circle-graph" data-circle-graph data-percent="55.6">
        <div class="circle-graph-progress">
          <div class="circle-graph-progress-fill"></div>
        </div>
        <div class="circle-graph-percents">
          <div class="circle-graph-percents-wrapper">
            <span class="circle-graph-percents-number"></span>
            <span class="circle-graph-percents-units">of 100</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Reporting Status -->
    <div class="col-xs-6 col-sm-4 col-md-2">
      <p>Reporting Status</p>
      <div class="circle-graph" data-circle-graph data-percent="55.6">
        <div class="circle-graph-progress">
          <div class="circle-graph-progress-fill"></div>
        </div>
        <div class="circle-graph-percents">
          <div class="circle-graph-percents-wrapper">
            <span class="circle-graph-percents-number"></span>
            <span class="circle-graph-percents-units">of 100</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 5 Best and 5 Worst -->
    <div class="col-xs-12 col-sm-4 col-md-4">
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="heading-1">
            <h5 class="mb-0">
              <a
                class="collapsed"
                role="button"
                data-toggle="collapse"
                href="#collapse-1"
                aria-expanded="false"
                aria-controls="collapse-1"
              >
                5 Best and 5 Worst
              </a>
            </h5>
          </div>
          <div
            id="collapse-1"
            class="collapse show"
            data-parent="#accordion"
            aria-labelledby="heading-1"
          >
            <div class="card-body">
              <div id="accordion-1">
                <div class="card">
                  <div class="card-header" id="heading-1-1">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        href="#collapse-1-1"
                        aria-expanded="false"
                        aria-controls="collapse-1-1"
                      >
                        Best
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapse-1-1"
                    class="collapse"
                    data-parent="#accordion-1"
                    aria-labelledby="heading-1-1"
                  >
                    <div class="card-body">
                      Sick Leave Policy
                    </div>
                    <div class="card-body">
                      Climate Alliance Membership
                    </div>
                    <div class="card-body">
                      Family Leave Policy
                    </div>
                    <div class="card-body">
                      SO2 Emissions
                    </div>
                    <div class="card-body">
                      Smoking Rate
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="heading-1-2">
                    <h5 class="mb-0">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        href="#collapse-1-2"
                        aria-expanded="false"
                        aria-controls="collapse-1-2"
                      >
                        Worst
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapse-1-2"
                    class="collapse"
                    data-parent="#accordion-1"
                    aria-labelledby="heading-1-2"
                  >
                    <div class="card-body">
                      Affordable Housing
                    </div>
                    <div class="card-body">
                      Overcrowded Housing
                    </div>
                    <div class="card-body">
                      Banking Access
                    </div>
                    <div class="card-body">
                      Rural Infastracture Index
                    </div>
                    <div class="card-body">
                      Non-carbon Ccological Fooprint
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Chart -->
    <div class="col-xs-12 col-md-4">
      <img
        src="/open-sdg-site-starter/assets/img/Chart.png"
        alt="Chart of LA SDG"
        class="chartImage"
      />
    </div>
  </div>
  <!-- Progress Bars and Percentage Data For Each SDG -->
  <div class="row justify-content-center">
    <div class="col-xs-4 col-md-2">
      <span>
        <img
          style="height:100px; width:100px; float:left"
         alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-01-1024x1024.png"
        />
        <h3>20.4%</h3>
        <p>Below National Poverty Level</p>
      </span>
    </div>
    <br />
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-02-1024x1024.png"
      />
      <div style="float:right">
        <h3>29.2%</h3>
        <p>Food Insecure</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-03-1024x1024.png"
      />
      <div style="float:right">
        <h3>##%</h3>
        <p>Under 5 Mortality Rate</p>
        <h3>##%</h3>
        <p>Diabetes Mortality Rate</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-04-1024x1024.png"
      />
      <div style="float:right">
        <h3>49%</h3>
        <p>Students in 11th Grade not meeting Smarter Balance standards</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-05-1024x1024.png"
      />
      <div style="float:right">
        <h3>42.9%</h3>
        <p>
          Of total civilian population employed in Management Occupations who
          are women
        </p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-06-1024x1024.png"
      />
      <div style="float:right">
        <h3>##%</h3>
        <p>Wastewater safely treated</p>
        <h3>##%</h3>
        <p>Level of water stress</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-07-1024x1024.png"
      />
      <div style="float:right">
        <h3>0.34mJ/GDP</h3>
        <p>Energy Intensity</p>
        <h3>30%</h3>
        <p>population with primary reliance on clean fuels and technology</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-08-1024x1024.png"
      />
      <div style="float:right">
        <h3>4.75%</h3>
        <p>GDP Growth Rate</p>
        <h3>4.7%</h3>
        <p>Umemployed Rate</p>
        <h3>14%</h3>
        <p>Disconnected Youth</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-09-1024x1024.png"
      />
      <div style="float:right">
        <h3>##</h3>
        <p>Passenger and Freight Volume</p>
        <h3>8.35%%</h3>
        <p>Employment in Manufacturing</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-10-1024x1024.png"
      />
      <div style="float:right">
        <h3>##%</h3>
        <p>Growth in Household expenditure for bottom 40% of population</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-11-1024x1024.png"
      />
      <div style="float:right">
        <h3>52,800</h3>
        <p>Popualtion in informal settlements</p>
        <h3>##%</h3>
        <p>Land Consumption Rate</p>
        <h3>##%</h3>
        <p>Participation in Planning</p>
        <h3>11.3</h3>
        <p>PM2.5 levels</p>
        <h3>13.5%</h3>
        <p>Open Space</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-15-1024x1024.png"
      />
      <div style="float:right">
        <h3>##%</h3>
        <p>Forest Area</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-16-1024x1024.png"
      />
      <div style="float:right">
        <h3>259</h3>
        <p>Homicide Victims</p>
        <h3>29,100</h3>
        <p>Population Victims of Violence</p>
      </div>
    </div>
    <div class="col-xs-4 col-md-2">
      <img
        style="height:100px; width:100px; float:left"
        style="height:100px; width:100px"
       alt="goal" src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Inverted-Icons_WEB-17-1024x1024.png"
      />
      <div style="float:right">
        <h3>78.8%</h3>
        <p>with Broadband Connection</p>
      </div>
    </div>
  </div>
  <script>
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
});</script>
</div>
