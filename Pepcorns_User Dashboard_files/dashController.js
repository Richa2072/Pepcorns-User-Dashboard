app.controller('dashController', ['$scope', '$state', '$http', 'apiService', 'authService', '$compile','$timeout', function ($scope, $state, $http, apiService, authService, $compile,$timeout) {


    //;

    var self = $scope;
    self.loggedInUserData = authService.getCurrentUser();
    console.log(self.loggedInUserData)
    self.dashboardBlocks_data;
    self.dashboardBlocks_data_order;
    self.timeline = 7;
    self.showLoader=true;

    self.currentPageNumber = 1;
    self.total_rows=0;
    self.pagination = [];
    self.newFeedData=[];

    self.default_dates = {
        "end_date":log_timestamp_end(),
        "start_date":log_timestamp()
    };
    self.dashboard_stats_daterange={
        "end_date":log_timestamp(),
        "start_date":log_timestamp_back()
    };

    self.allfollowers = {"data":[],"total_records":0};
    self.allfollowing = {"data":[],"total_records":0};
    self.allsuggestions = [];
    self.selectedProfile ={};



    self.init = function () {
        self.isUserLogged();

    }

    //helper functions
    function createAlertSucc(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-secondary" role="alert"><strong><i class="ni ni-check-bold" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }

    function createAlertErr(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-danger" role="alert"><strong><i class="ni ni-fat-remove" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }
    function log_timestamp() {
        return moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
    }
    function log_timestamp_end() {
        return moment().utcOffset("+05:30").format('YYYY-MM-DD 23:59:59');
    }

    function log_timestamp_back(days) {
             return moment().subtract(days, 'day').utcOffset("+05:30").format('YYYY-MM-DD 00:00:00')
         }

    self.isUserLogged = function () {
        if(authService.isLoggedIn()){
            
            if(authService.userHasPermission_to_view(2,1001)){
                self.getDashboardData();
                
            }
            else{
                $state.go(authService.find_default_view())
            }
            
        }
        else{
            $state.go('login')
        }
       
    }




   
   

    //graps and anyalytics data

    self.monthsName = ["October", "November", "December", "January", "February", "March", "April"];
    self.weekNames = ["Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"];

    self.salesChart_labels;
    self.salesChart_series;
    self.salesChart_data;
    self.salesChart_options;
    self.orderStatus_labels;
    self.orderStatus_series;
    self.orderStatus_data;
    self.orderStatus_options;



    self.salesChart = function (type) {
        self.salesChart_options = {
            scales: {
                yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }]
            }
        };
        if (type == 'month') {
            self.salesChart_labels = self.monthsName;
            self.salesChart_series = ['Orders'];
            self.salesChart_data = [
                [120, 130, 140, 130, 135, 129, 140, 160, 140]
            ]
        } else if (type == 'week') {
            self.salesChart_labels = self.weekNames;
            self.salesChart_series = ['Orders'];
            self.salesChart_data = [
                [20, 30, 40, 35, 40, 50, 45]
            ]
        }
    }

    self.orderStausChart = function () {
        self.orderStatus_labels = ['Last Week', 'Yesterday', 'Today'];
        self.orderStatus_series = ['In Progress', 'Dispatched', 'Hold'];
        self.orderStatus_data = [
            [12, 15, 10],
            [80, 55, 40],
            [4, 2, 5]
        ];
        self.orderStatus_options = {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
                    borderColor:"#fff",
                    borderWidth:"25px",
                    backgroundColor:"rgba(0, 0, 0, 0)",
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                    
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                        
                    },        
                }],
                
            }
        }
    }



    self.salesChart('month');
    $scope.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }];
    $scope.options = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }]
        }
    };


    self.getDashboardData =function(){
        apiService.dashboardStats({}).then(function (data) {
            console.log(data)
            self.dashboardBlocks_data=data.response[0];
            self.findAllPitches(true);
            self.findSuggestions();
            self.findFollowers();
            self.findFollowing();
            
            
        }, function (data) {
            
            createAlertErr("ni ni-fat-remove", data);
            self.findAllPitches(true)
            
            
        })
    }

    

    self.findAllPitches=function(calulatePage){
        self.showLoader = true;
        if(calulatePage){
            self.currentPageNumber=1
        }
        apiService.getmynewsfeed({
            "page_no": self.currentPageNumber,
            
        }).then(function (data) {

            self.showLoader = false;
            
            self.newFeedData=data.data;
            console.log(self.newFeedData)
            
            if (calulatePage) {
                self.total_rows = data.total_records;
                self.calculatePagination();

            }
        }, function (data) {
            self.showLoader = false;

        })
    }
    self.calculatePagination = function () {
        self.pagination = [];
        self.total_pages = Math.ceil(self.total_rows / 10);

        for (i = 1; i <= self.total_pages; i++) {
            self.pagination.push(i);
        }

    }

    self.findDataByPagination = function (type, new_number) {

        if (type == 'num' && self.currentPageNumber != new_number) {
            self.currentPageNumber = new_number;
            self.findAllPitches(false)
        } else if (type == 'next') {
            if (self.currentPageNumber < self.pagination.length) {
                self.currentPageNumber++;
                self.findAllPitches(false)
            }
        } else if (type == 'prev') {
            if (self.currentPageNumber > 1) {
                self.currentPageNumber--;
                self.findAllPitches(false)
            }
        }
    }


    self.findFollowers = function(){
        apiService.followers({                        
        }).then(function (data) {
                self.allfollowers=data;
        }, function (data) {
                console.log("error getting followers data")

        })
    }

    self.findFollowing = function(){
        apiService.following({                        
        }).then(function (data) {
                self.allfollowing=data;
        }, function (data) {
                console.log("error getting following data")

        })
    }

    self.findSuggestions = function(){
        apiService.suggestFollow({                        
        }).then(function (data) {
                self.allsuggestions=data;
        }, function (data) {
                console.log("error getting suggestions data")

        })
    }

    self.followuser = function(id){
        createAlertSucc("Please wait !")
        apiService.follow({   
            "id":id                     
        }).then(function (data) {
            self.findFollowing();
            self.findSuggestions();
            createAlertSucc("Added to following list");
        }, function (data) {
            createAlertErr(data);
            console.log("error getting suggestions data")

        })
    }

    self.unfollow = function(id){
        createAlertSucc("Please wait !")
        apiService.unfollow({   
            "id":id                     
        }).then(function (data) {
            self.findFollowing();
            self.findSuggestions();
            createAlertSucc("Removed from your follow list");
        }, function (data) {
            createAlertErr(data);
            console.log("error getting suggestions data")

        })
    }

    self.showProfile = function(x){
        self.selectedProfile={};
        self.selectedProfile =x;
    }

    self.getUserDetails = function(id){
        //self.showLoader=true;
        apiService.getUserDetailsbyid({   
            "id":id                     
        }).then(function (data) {
            
            self.selectedProfile =data;
            self.showLoader=false;
        }, function (data) {
            self.showLoader=false;
            createAlertErr(data);
            //console.log("error getting suggestions data")

        })
    }

    self.viewCampaignDetails = function(id){
        $state.go('campdetails',{ referer:'jimbob', camp_id:id })
    }





    self.init();


}])