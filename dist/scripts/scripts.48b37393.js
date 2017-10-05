"use strict";var app=angular.module("poolprosApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngCookies"]);app.config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),b.hashPrefix(""),b.html5Mode(!0),b.hashPrefix("")}]),app.controller("MainCtrl",["$scope","$filter","$http",function(a,b,c){a.dealers=[],a.longDealerName="",a.filterResultsCount=0,a.onLoadDealersCount=0,a.hasFilter=!1,a.sendTo={},a.isTapNavOpen=!1,a.isMobileFilterOpen=!1,a.nameField="",a.phoneField="",a.emailField="",a.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a.inputs=[{name:"name",value:a.nameField,type:"text",isRequired:!0,isValid:!1},{name:"tel",value:a.phoneField,type:"number",isRequired:!0,isValid:!1},{name:"email",value:a.emailField,type:"email",isRequired:!0,isValid:!1}],a.openTapNav=function(){a.isTapNavOpen=!0},a.closeTapNav=function(){a.isTapNavOpen=!1},a.toggleMobileFilter=function(){a.isMobileFilterOpen?a.isMobileFilterOpen=!1:a.isMobileFilterOpen=!0},a.arrangeHours=function(a){return a},a.isCertified=function(a,b){var c=!1;return angular.forEach(a,function(a){a===b&&(c=!0)}),c},a.isDealerNameShort=function(a){return a.length<26?"l-height-85":""},a.checkName=function(b){angular.forEach(b,function(b){b.data.name.length>20&&(a.longDealerName="longDealerName")})},a.getDealers=function(){c.get("storage/dealers.json").then(function(b){var c=b.data.dealers;a.checkName(c),a.onLoadDealersCount=c.length,a.filterResultsCount=c.length,a.dealers=c},function(a){console.log(a)})},a.getDealers(),a.model={service:!1,installation:!1,residential:!1,commercial:!1},a.filterDealers=function(b,c){if(b.service||b.installation||b.residential||b.commercial){a.hasFilter=!0;var d=a.dealers.filter(function(a){return a.data.certifications.indexOf(c)>-1});a.filterResultsCount=d.length,a.dealers=d}else a.filterResultsCount=a.onLoadDealersCount,a.getDealers()},a.sentTo=function(b){a.sendTo=b},a.isFieldValid=function(b,c,d,e){var f=!1,g=a.inputs.filter(function(a){return a.name.indexOf(b)>-1});g.value=c,g.isRequired=d,g.type=e,g.name=b;var h=(g.name,g.value),e=g.type,d=g.isRequired;return d&&""!==h&&"text"===e?f=!0:d&&""!==h&&"number"===e?f=!0:d&&""!==h&&"email"===e&&a.emailRegex.test(h)&&(f=!0),f}}]),angular.module("poolprosApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("poolprosApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<ng-include src="\'views/shared/header.html\'"> </ng-include> <div class="container full-w mar-right-0" ng-controller="MainCtrl"> <div class="row"> <div class="col-md-12 pad-0"> <!-- Main  --> <div class="col-md-12 pad-0 pad-right-0 mar-0 text-center main-content-container"> <!-- Filter --> <div class="col-md-12 full-w main-content minh-550 pad-0"> <div class="col-md-12 pad-0 pady-0" id="filter-holder"> <div class="row filter-holder-row"> <div class="top-filter col-md-12 text-center mar-right-0 pad-right-0"> <img src="../../images/filter.061a8648.jpg" class="full-w"> <!-- Filter Controls --> <div class="col-md-12 pad-10 mar-top-0 mar-neg-top-60 pad-x-0 filter-controls-container"> <div class="col-md-10 col-md-offset-1 pad-10 mar-top-0 filter-controls"> <!-- Result Counts --> <div class="col-md-3 col-sm-6 col-xs-6 pad-0 text-right-sm text-right filter-results-count"> <label ng-if="!filterResultsCount && hasFilter"> 7 dealers in 7 </label> <label ng-if="filterResultsCount && hasFilter"> {{ filterResultsCount }} dealers in 8 </label> </div> <div class="col-md-2 pad-0 col-sm-6 col-xs-6 text-left-sm text-center filter-results-count-label"> <label> Filter Results </label> <a href="#" ng-click="toggleMobileFilter()" class="filter-toggler"> <i class="fa" ng-class="isMobileFilterOpen ? \'fa-sort-down\' : \'fa-caret-right\'"></i> </a> </div> <!-- Result Counts Ends--> <!-- Filter Options --> <div class="col-md-7 pad-0 pad-left mar-neg-top-3 filter-selection" ng-class="isMobileFilterOpen ? \'on-play\' : \'\'"> <!-- Filter Selection --> <div class="col-md-2 pad-0 mar-left-15 pad-x-5 filter-selection-opt"> <input type="checkbox" name="filter" class="mar-right-10" ng-model="filter.service" ng-change="filterDealers(filter,\'Service Pro\')"> Service </div> <div class="col-md-2 pad-0 mar-left-15 filter-selection-opt"> <input type="checkbox" name="filter" class="mar-right-10" ng-model="filter.installation" ng-change="filterDealers(filter,\'Installation Pro\')"> Installation </div> <div class="col-md-2 pad-0 mar-left-15 filter-selection-opt"> <input type="checkbox" name="filter" class="mar-right-10" ng-model="filter.residential" ng-change="filterDealers(filter,\'Residential Pro\')"> Residential </div> <div class="col-md-3 pad-0 mar-left-15 filter-selection-opt"> <input type="checkbox" name="filter" class="mar-right-10" ng-model="filter.commercial" ng-change="filterDealers(filter,\'Commercial Pro\')"> Commercial <a href="#" class="mar-left-5"> <i class="fa fa-question"></i> </a> </div> <!-- Filter Selection Ends --> </div> <!-- Filter Options Ends --> </div> </div> </div> </div> <div class="col-md-12 pad-0 pady-0" id="filter-holder-2"> <div class="row"> <div class="top-filter col-md-12 text-center mar-right-0 pad-right-0 pady-0"> <div class="col-md-12 pad-10 mar-top-5 pad-x-0 pad-y-0 mar-y-0 pady-0"> <div class="col-md-10 col-md-offset-1 pad-10 mar-top-0 filter-result-container pad-x-0"> <!-- <div class="col-md-12  col-md-offset-1 pad-10 mar-top-0 filter-result-container"> --> <div class="col-md-4 col-sm-6 filter-result text-center pad-left-0 pad-y-20 pad-top-0" ng-repeat="dealer in dealers" ng-animate="\'animate\'"> <div class="col-md-12 filter-result-content pad-x-10"> <div class="filter-result-head pad-y-10" ng-class="longDealerName"> <label ng-class="isDealerNameShort(dealer.data.name)"> {{ dealer.data.name }} <!-- Aqua Pro --> </label> </div> <div class="filter-result-contact pad-y-10"> <label class="contact-label"> <span class="phone-wrap"> <i class="icon fa fa-phone"></i> </span> {{ dealer.data.phone1 }} </label> </div> <div class="text-center filter-result-contact-top-label pad-y-10"> <p> Can\'t talk now? Click here below to send an email. </p> </div> <div class="text-center filter-result-contact-email pad-y-10 mar-bot-15"> <a href="#" class="mar-right-0 box-anchor" ng-click="sentTo(dealer.data)" data-email="{{ dealer.data.email }}" data-toggle="modal" data-target="#sendInquiry" ng-model="sendTo"> <i class="fa fa-envelope" aria-hidden="true"></i> Contact this Pro </a> </div> <div class="text-center filter-result-business-hours pad-y-10 mar-y-25"> <h4>Business Hours</h4> <ul class="text-center pad-left-0"> <li ng-repeat="day in dealer.data.weekHours track by $index"> <!-- \n                                          FOR REVISION!!\n                                          Temporary Solution\n                                          This is not the best way to iterate things like this\n                                         --> <!-- Weekdays --> {{ $index == 0 ? \'Monday\': \'\' }} {{ $index == 1 ? \'Tuesday\':\'\' }} {{ $index == 2 ? \'Wednesday\': \'\' }} {{ $index == 3 ? \'Thursday\':\'\' }} {{ $index == 4 ? \'Friday\': \'\' }} <!-- Weekends --> {{ $index == 5 ? \'Saturday\': \'\' }} {{ $index == 6 ? \'Sunday\':\'\' }} <!-- Time --> {{ arrangeHours(day) !== \'\' ? day : \'CLOSED\' }} </li> </ul> </div> </div> <div class="col-md-12 text-center filter-result-categories pad-y-10 mar-y-25 mar-bot-0"> <div class="row pad-10 text-left"> <div class="col-md-6 col-sm-6 text-center-sm text-center-xs col-xs-6" ng-if="isCertified(dealer.data.certifications,\'Installation Pro\')"> <span class="span-ct"> <i class="fa fa-star fa-spin"></i> Installation Pro </span> </div> <div class="col-md-6 col-sm-6 text-center-sm text-center-xs col-xs-6 text-left" ng-if="isCertified(dealer.data.certifications,\'Service Pro\')"> <span class="span-ct"> <i class="fa fa-cog fa-spin"></i> Service Pro </span> </div> <div class="col-md-6 col-sm-6 text-center-sm text-center-xs col-xs-6 text-left" ng-if="isCertified(dealer.data.certifications,\'Residential Pro\')"> <span class="span-ct"> <i class="fa fa-home"></i> Residential Pro </span> </div> <div class="col-md-6 col-sm-6 text-center-sm text-center-xs col-xs-6 text-left" ng-if="isCertified(dealer.data.certifications,\'Commercial Pro\')"> <span class="span-ct"> <i class="fa fa-users"></i> Commercial Pro </span> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Footer --> <ng-include src="\'views/shared/footer.html\'"> </ng-include> <!-- Footer Ends --> </div> </div> </div> <!-- Main Ends --> </div> </div> </div> <!-- Modal --> <div id="sendInquiry" class="modal fade" role="dialog"> <div class="modal-dialog"> <!-- Modal content--> <div class="modal-content"> <div class="modal-header sendInquiry-header font-white"> <button type="button" class="close font-white font-n font-30 op-1" data-dismiss="modal">&times;</button> <h4>Email</h4> <h4 class="modal-title">{{sendTo.name}}</h4> </div> <div class="modal-body"> <h4>Fill out the form below and {{sendTo.name}} will get in touch.</h4> <div class="panel panel-default"> <div class="panel-body"> <form name="inquire-form"> <!-- Name --> <div class="form-group"> <label class="full-w" for="name">First and last name <span class="pull-right pad-x-5"> <i class="fa" ng-class="isFieldValid(\'name\',nameField,true,\'text\') && nameField !== \'\' ? \'fa-check-circle-o\' : \'fa-circle-thin\'"></i> </span> </label> <input type="text" class="form-control" ng-model="nameField" id="name" name="name"> </div> <!-- Phone --> <div class="form-group"> <label class="full-w" for="phone">Phone number <span class="pull-right pad-x-5"> <i class="fa" ng-class="isFieldValid(\'tel\', phoneField, true,\'number\') && phoneField !== null ? \'fa-check-circle-o\' : \'fa-circle-thin\'"></i> </span> </label> <input type="number" class="form-control" ng-model="phoneField" id="phone" name="phone"> </div> <!-- Email --> <div class="form-group"> <label class="full-w" for="email">Email address <span class="pull-right pad-x-5"> <i class="fa" ng-class="isFieldValid(\'email\', emailField, true,\'email\') ? \'fa-check-circle-o\' : \'fa-circle-thin\'"></i> </span> </label> <input type="email" class="form-control" required ng-model="emailField" id="email" name="email"> </div> <!-- Comments --> <div class="form-group"> <label class="full-w" for="pwd">Comments or questions <span class="pull-right optional-label pad-x-5">optional</span> </label> <textarea class="form-control full-w" rows="3" name="comment" id="comment"></textarea> </div> <!-- Confirmation --> <div class="form-group"> <label class="full-w" for="own-pool"> Do you currently own a pool or spa? <span class="pull-right optional-label pad-x-5">optional</span> </label> <input type="radio" class="radio-owner-yes" checked value="1" name="own"> <input type="radio" class="radio-owner-no" value="0" name="own"> </div> <button type="submit" class="btn btn-default">Send My Email <i class="fa fa-chevron-right"></i> </button> <input type="submit" id="send-inquiry-a" class="btn btn-default-mobile" value="Send"> </form> </div> </div> </div> <div class="modal-footer text-left"> <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum, ex sit amet iaculis vulputate, nunc magna efficitur tortor, a euismod nisl nunc eget velit." </p> </div> </div> </div> </div></div>'),a.put("views/shared/footer.html",'<div class="col-md-12 pad-0"> <div class="row"> <div class="top-filter col-md-12 text-center mar-right-0 pad-right-0 pady-0"> <div class="col-md-12 pad-10 mar-top-5 pad-x-0 pad-y-0 mar-y-0 pady-0"> <!-- <div class="col-md-10  col-md-offset-1 pad-10 mar-top-0 filter-result-container pad-x-0">\n\n\n\n                      </div> --> <div class="col-md-12 pad-0 footer-top pad-y-30"> <div class="col-md-12 text-center pad-y-10 pad-top-20"> <img src="../../images/footer-logo.55299a86.png"> </div> <div class="col-md-12 text-center pad-y-10 pad-top-0"> <label> Connect with us </label> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-youtube"></i></a> </div> </div> </div> </div> </div> </div> <div class="col-md-12 pad-0 mar-top-0" id="footer-bot"> <div class="row"> <div class="top-filter col-md-12 text-center mar-right-0 pad-right-0 pady-0"> <div class="col-md-12 pad-10 mar-top-0 pad-x-0 pad-y-0 mar-y-0 pady-0 footer-bot-container"> <div class="col-md-12 pad-0 footer-bot pad-y-0 visible-xs"> <div class="col-md-12 text-center pad-y-10 fa-white"> <a href="#" class="mar-right-20 font-white"> Dealers and Distributors </a> <a href="#" class="mar-right-0 font-white"> Commercial Service <i class="fa fa-sign-out" aria-hidden="true"></i> </a> </div> </div> <div class="col-md-12 pad-0 footer-bot pad-y-0"> <div class="col-md-12 text-center pad-y-10 fa-white"> <!--  <img src="../../images/footer-logo.55299a86.png"> --> <label id="copyright" class="pad-x-10"> &copy; 2017 Pool Pages </label> | <a href="#" class="privacy-policy pad-x-10"> Privacy Policy </a> | <a href="#" class="terms-condition pad-x-10"> Term and Conditions </a> </div> <!-- <div class="col-md-12 text-center pad-y-10">\n                            <label>\n                              Connect with us\n                            </label>\n                            <a href="#"><i class="fa fa-twitter"></i></a>\n                            <a href="#"><i class="fa fa-facebook"></i></a>\n                            <a href="#"><i class="fa fa-youtube"></i></a>\n                          </div> --> </div> </div> </div> </div> </div>'),a.put("views/shared/header.html",'<nav class="navbar navbar-default navbar-fixed-top border-bot-hr-2"> <div class="container-fluid text-right top-header-navigation pad-y-10 pad-x-50 visible-sm visible-md visible-lg"> <a href="#" class="mar-right-35"> Dealers and Distributors </a> <a href="#" class="mar-right-60 mar-r-sm-0"> Commercial Service <i class="fa fa-sign-out" aria-hidden="true"></i> </a> </div> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header col-md-3 col-sm-3 pad-x-sm-0"> <a class="mar-left-35 mar-right-50 pad-x-40 pad-x-sm-0 mar-x-sm-0" href="/"> <img class="mar-top-25 mar-bot-25 logo-nav-img" src="../../images/logo.a960e636.png"> </a> <a href="#" class="mar-right-0 pool-finder pool-finder-mobile visible-xs"> <i class="fa fa-map-marker" aria-hidden="true"></i> Find a Pro </a> <button type="button" class="navbar-toggle collapsed" id="menu-top-navbar" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" ng-click="openTapNav()"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar icon-bar-md"></span> <span class="icon-bar"></span> </button> </div> <ul id="collapse" class="col-md-8 col-sm-9 nav navbar-nav navbar-right mar-top-15 mar-right-50 pad-x-40"> <li class="mar-left-15 pull-right pool-finder-btn"> <a href="#" class="mar-right-0 pool-finder"> <i class="fa fa-map-marker" aria-hidden="true"></i> Find a Pool Pro </a> </li> <li class="pull-right sm-w-19"> <a href="#" class="mar-right-0 mar-r-sm-5 pad-right-25 pad-right-sm-0 pad-left-sm-0">Services</a> </li> <li class="pull-right sm-w-33"> <a href="#" class="mar-right-0 mar-r-sm-5 pad-right-20 pad-right-sm-0 pad-left-sm-0">Resources</a> </li> <li class="pull-right sm-w-19"> <a href="#" class="mar-right-0 mar-r-sm-5 pad-right-20 pad-right-sm-0 pad-left-sm-0">Supplies</a> </li> <li class="pull-right sm-w-33"> <a href="#" class="mar-right-0 mar-r-sm-5 pad-right-20 pad-right-sm-0 pad-left-sm-0">Polls & Spas</a> </li> </ul> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-class="isTapNavOpen ? \'in\' : \'\'"> <ul id="collapse-mobile" class="nav navbar-nav navbar-right mar-top-0"> <li class="text-right bg-fff pad-x-24"> <a href="#" class="close-x-a mar-right-0 a-close-x" ng-click="closeTapNav()"> <i class="fa fa-close"></i> </a> </li> <li class="text-center bg-fff mar-bot-10"> <h3 class="mar-right-0 mar-y-0 pad-bot-25">Menu</h3> </li> <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Polls & Spas <i class="fa fa-chevron-right pull-right"></i> </a> <ul class="dropdown-menu"> <li> </li> </ul> </li> <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Supplies <i class="fa fa-chevron-right pull-right"></i> </a> <ul class="dropdown-menu"> <li> </li> </ul> </li> <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Resources <i class="fa fa-chevron-right pull-right"></i> </a> <ul class="dropdown-menu"> <li> </li> </ul> </li> <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Service <i class="fa fa-chevron-right pull-right"></i> </a> <ul class="dropdown-menu"> <li> </li> </ul> </li> <!-- <li class="mar-left-10 ">\n            <a href="#" class="mar-right-0 pool-finder">\n              <i class="fa fa-map-marker" aria-hidden="true"></i>\n              Find a Pool Pro\n            </a>\n          </li> --> </ul> </div> <!-- /.navbar-collapse --> </div><!-- /.container-fluid --> </nav>')}]);