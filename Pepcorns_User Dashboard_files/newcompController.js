app.controller('newcompController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams','$window','$location','helperService','CONSTANT',function($scope,$state,$http,apiService,authService,$compile,$stateParams,$window,$location,helperService,CONSTANT){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false
    
    self.session_id=$stateParams.path;
    console.log(self.session_id);
    self.email_data={};
    self.email_data.dob=moment().subtract('18','years').format('YYYY-MM-DD');
    self.email_data.gender=1;
    console.log(self.min_signup_date)
    
    self.states_data_json=[]
    self.is_session_verified=false;

    self.setPageNum = function (page) {
        if (self.pagenum !== page) {
            self.pagenum = page;
        }
    }

    self.isSetPageNum = function (page) {
        if (self.pagenum == page) {
            return true;
        } else {
            return false;
        }
    }


    self.init = function(){
        self.isUserLogged();
        
        
    }


    self.isUserLogged =function(){  

        if(authService.isLoggedIn()){
            self.fetch_gst_data()     
            // console.log("user is already logged in")
            // $state.go(authService.find_default_view())

        }
        else{
            createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            console.log("user is not logged in") ; 
            //self.fetch_gst_data()     
            //self.verifySession()
            $state.go('home.dashboard')
        }
        
    }

    //helper functions
    function createAlertSucc(icon, msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-default" role="alert"><strong><i class="'+ icon +'" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }

    function createAlertErr(icon, msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-warning" role="alert"><strong><i class="'+ icon +'" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }


    


    self.continuestep2= function(){
        if(!helperService.validateName(self.email_data.first_name)){
            createAlertErr("ni ni-fat-remove", "Invalid first name , it can only contain alphabets");
            return
        }
        else if(!helperService.validateName(self.email_data.last_name)){
            createAlertErr("ni ni-fat-remove", "Invalid last name , it can only contain alphabets");
            return
        }
        else{
            
            self.setPageNum(2);
        }
        
    }
    self.continuestep3= function(){
        console.log(self.email_data)
        if(!helperService.validateWebUrl(self.email_data.cmp_url)){
            createAlertErr("ni ni-fat-remove", "Invalid company website url");
            return
        }
        else if(!helperService.validatePan(self.email_data.pan)){
            createAlertErr("ni ni-fat-remove", "Invalid PAN number , Please verify again.");
            return
        }
        // else if(!self.email_data.country_code){
        //     createAlertErr("ni ni-fat-remove", "Please select valid country code.");
        //     return
        // }
        else if(!helperService.validateName(self.email_data.city)){
            createAlertErr("ni ni-fat-remove", "Invalid city name , it can only contain alphabets");
            return
        }
        
        else{
            self.signupSubmit()
        }
        
    }

    self.signupSubmit = function(){
        self.showLoader=true;
        createAlertSucc("ni ni-check-bold", "Creating account.Please wait.");
        console.log(self.email_data);
        
        apiService.signupUser({
            //"session_key":self.session_id,
            "email":self.email_data.email,
            "mobile":self.email_data.mobile,
            "pass":self.email_data.pass,
            "first_name":self.email_data.first_name,
            "last_name":self.email_data.last_name,
            "gender":self.email_data.gender,
            "dob":self.email_data.dob,
            "cmp_name":self.email_data.cmp_name,
            "cmp_url":self.email_data.cmp_url,
            "pan":self.email_data.pan,
            "city":self.email_data.city,
            "state":self.email_data.state.name,
            "country":1,
            "zip":self.email_data.zip,
            "country_code":1,

        }).then(function (data) {
                    //self.setPageNum(1);
                    createAlertSucc("ni ni-check-bold", "Your account has been successfully registered with us.");
                    self.showLoader=false;
                    self.email_data={};                        
                    self.setPageNum(4);
                    //$state.go('login');
                    
                }, function (data) {
                    
                    createAlertErr("ni ni-fat-remove", data);

                    self.processingData = false;
                    self.showLoader=false;
                    //$state.go('signup')
                })
            
        
    }

    self.fetch_gst_data= function(){
        $http.get('https://app.pepcorns.com/assets/js/states.json').then(function(response) {
            //;
            self.states_data_json = response.data.states;
            self.email_data.state = response.data.states[16];
            self.input_state_modified(self.email_data.state)
            
         });
    }


    self.input_state_modified= function(x){
        self.email_data.city='';
        
        self.autoSuggestCities=[];
        var suggestionsFortheStateFound = _.find(self.states_data_json, function(o) { return o.id == x.id; });
        ;   
        self.autoSuggestCities = suggestionsFortheStateFound.city;
        
    }
    


    self.loginnavigate = function() {
        authService.logout();
        $state.go('login');
    }

    self.init();



}])