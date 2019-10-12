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
      <h4>City Average Score</h4>
      <!-- Change City Average Score Percentage "data-percent" below -->
      <div class="circle-graph" data-circle-graph data-percent="55.6">
        <div class="circle-graph-progress">
          <div class="circle-graph-progress-fill"></div>
        </div>
        <div class="circle-graph-percents">
          <div class="circle-graph-percents-wrapper">
            <span class="circle-graph-percents-number"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Reporting Status -->
    <div class="col-xs-6 col-sm-4 col-md-2" style="margin-bottom:40px;">
      <h4>Reporting Status</h4>
      <!-- Change Reporting Status Percentage "data-percent" below -->
      <div class="circle-graph" data-circle-graph data-percent="47">
        <div class="circle-graph-progress">
          <div class="circle-graph-progress-fill"></div>
        </div>
        <div class="circle-graph-percents">
          <div class="circle-graph-percents-wrapper">
            <span class="circle-graph-percents-number"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 5 Best and 5 Worst -->
    <div class="col-xs-12 col-sm-4 col-md-4">
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="heading-1">
            <h5 class="accordion-header">
              5 Best and 5 Worst
            </h5>
          </div>
          <div
            id="collapse-1"
            class="collapse show"
            data-parent="#accordion"
            aria-labelledby="heading-1"
            style="margin-bottom:40px;"
          >
            <!-- <div class="card-body"> -->
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
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Climate Alliance Membership
                    </div>
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Family Leave Policy
                    </div>
                    <hr style="margin:0"/>
                    <div class="card-body">
                      SO2 Emissions
                    </div>
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Smoking Rate
                    </div>
                  </div>
                </div>
                <hr />
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
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Overcrowded Housing
                    </div>
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Banking Access
                    </div>
                    <hr style="margin:0"/>
                    <div class="card-body">
                      Rural Infastracture Index
                    </div>
                    <hr style="margin:0"/>
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
    <!-- Chart -->
    <div class="col-xs-12 col-md-4">
      <img
        src="/open-sdg-site-starter/assets/img/Chart.png"
        style="display:inline-block; vertical-align:top; margin-bottom:40px"
        alt="Chart of LA SDG"
        class="chartImage"
      />
    </div>
  </div>
  <!-- Progress Bars and Percentage Data For Each SDG -->
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-01-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#E5243B" />
        <span style="font-size:20px; color:#E5243B">20.4%</span>
        <span>Below National Poverty Level</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-02-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#DDA63A" />
        <span style="font-size:20px; color:#DDA63A">29.2%</span>
        <span>Food Insecure</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-03-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#4C9F38" />
        <span style="font-size:20px; color:#4C9F38">##%</span>
        <span>Under 5 Mortality Rate</span>
        <br/>
        <span style="font-size:20px; color:#4C9F38">##%</span>
        <span>Diabetes Mortality Rate</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-04-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#C5192D" />
        <span style="font-size:20px; color:#C5192D">49%</span>
        <span>Students in 11th Grade not meeting Smarter Balance standards</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-05-1024x1024.png"
      />
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
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-06-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#26BDE2" />
        <span style="font-size:20px; color:#26BDE2">##%</span>
        <span>Wastewater safely treated</span>
         <br/>
        <span style="font-size:20px; color:#26BDE2">##%</span>
        <span>Level of water stress</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-07-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FCC30B" />
        <span style="font-size:20px; color:#FCC30B">0.34mJ/GDP</span>
        <span>Energy Intensity</span>
         <br/>
        <span style="font-size:20px; color:#FCC30B">30%</span>
        <span>population with primary reliance on clean fuels and technology</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-08-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#A21942" />
        <span style="font-size:20px; color:#A21942">4.75%</span>
        <span>GDP Growth Rate</span>
         <br/>
        <span style="font-size:20px; color:#A21942">4.7%</span>
        <span>Umemployed Rate</span>
         <br/>
        <span style="font-size:20px; color:#A21942">14%</span>
        <span>Disconnected Youth</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FD6925" />
        <span style="font-size:20px; color:#FD6925">##</span>
        <span>Passenger and Freight Volume</span>
         <br/>
        <span style="font-size:20px; color:#FD6925">8.35%</span>
        <span>Employment in Manufacturing</span>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-10-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#DD1367" />
        <span style="font-size:20px; color:#DD1367">##%</span>
        <span>Growth in Household expenditure for bottom 40% of population</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-11-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#FD9D24" />
        <div class="col-6">
        <span style="font-size:20px; color:#FD9D24">52,800</span>
        <span>Popualtion in informal settlements</span>
         <br/>
        <span style="font-size:20px; color:#FD9D24">##%</span>
        <span>Land Consumption Rate</span>
         <br/>
        <span style="font-size:20px; color:#FD9D24">##%</span>
        <span>Participation in Planning</span>
        </div>
        <div class="col-6">
        <span style="font-size:20px; color:#FD9D24">11.3</span>
        <span>PM2.5 levels</span>
         <br/>
        <span style="font-size:20px; color:#FD9D24">13.5%</span>
        <span>Open Space</span>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-15-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#56C02B" />
        <span style="font-size:20px; color:#56C02B">##%</span>
        <span>Forest Area</span>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-16-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#00689D" />
        <span style="font-size:20px; color:#00689D">259</span>
        <span>Homicide Victims</span>
         <br/>
        <span style="font-size:20px; color:#00689D">29,100</span>
        <span>Population Victims of Violence</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-4" style="display:inline-block;">
      <img
        style="height:100px; width:100px; vertical-align:top; margin-bottom:40px;"
        alt="goal"
        src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-17-1024x1024.png"
      />
      <div class="text-percentages">
        <hr class="slash-1" style="color:#19486A" />
        <span style="font-size:20px; color:#19486A">78.8%</span>
        <span>with Broadband Connection</span>
      </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
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
    });
  </script>
</div>
