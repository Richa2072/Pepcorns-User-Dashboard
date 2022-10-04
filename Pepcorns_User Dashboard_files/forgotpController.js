app.controller('forgotpController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams','$window','$location','helperService',function($scope,$state,$http,apiService,authService,$compile,$stateParams,$window,$location,helperService){
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
        
        if(self.session_id){
            self.isUserLogged();
        }
        else{
            createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            $state.go('login')
        }
        
    }


    self.isUserLogged =function(){  

        if(authService.isLoggedIn()){
            console.log("user is already logged in")
            $state.go(authService.find_default_view())

        }
        else{
            createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            console.log("user is not logged in") ;      
            self.verifySession()
            //self.setPageNum(1)
        }
        
    }

    
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


    

    self.verifySession = function(){
        //self.setPageNum(1);
        if(self.session_id == undefined){
            createAlertErr("ni ni-fat-remove", "Invalid registration invocation.");
            $state.go('signup')
        }
        else{
            self.showLoader=true;
            self.processingData = true;
            createAlertSucc("ni ni-check-bold", "Processing , Please wait.");                        
            apiService.verifySessionFpass({"session_key":self.session_id }).then(function (data) {
                self.setPageNum(1);
                createAlertSucc("ni ni-check-bold", data.message);
                self.showLoader=false;
                self.email_data=data.response;
                self.is_session_verified=true;
                
            }, function (data) {
                
                createAlertErr("ni ni-fat-remove", data);

                self.processingData = false;
                self.showLoader=false;
                $state.go('login')
            })
        }
        
    }

    self.resetPassword = function(){
        //self.setPageNum(1);
        if(!self.verifyEmail.pass || !self.verifyEmail.pass1){
            createAlertErr("ni ni-fat-remove", "Please enter password to continue");           
        }
        else if(self.verifyEmail.pass.length < 6 && self.verifyEmail.pass.length > 20){
            createAlertErr("ni ni-fat-remove", "Password can not be less than 6 characters and more than 20 characters");           
        }
        else if(self.verifyEmail.pass !== self.verifyEmail.pass1){
            createAlertErr("ni ni-fat-remove", "Passwords dont match.Please re-enter password");           
        }
        else{
            self.showLoader=true;
            self.processingData = true;
            createAlertSucc("ni ni-check-bold", "Processing , Please wait.");                        
            apiService.updatePassword({"session_key":self.session_id,"pass":self.verifyEmail.pass }).then(function (data) {
                self.setPageNum(1);
                self.showLoader=false;
                createAlertSucc("ni ni-check-bold", data.message);
                $state.go('login')
                                            
            }, function (data) {
                
                createAlertErr("ni ni-fat-remove", data);

                self.processingData = false;
                self.showLoader=false;
                $state.go('login')
            })
        }
        
    }

   

   

    


    self.loginnavigate = function() {
        $state.go('login');
    }

    self.init();



}])