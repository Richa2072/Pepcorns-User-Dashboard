app.controller('loginController', ['$scope','$state','$http','apiService','authService','$compile',function($scope,$state,$http,apiService,authService,$compile){
        
    


    var self = $scope;
    self.loginForm={};
    self.verifyForm={};
    self.verifyFrgtForm = {};
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    


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
        console.log(authService.isLoggedIn())
        if(authService.isLoggedIn()){

            $state.go(authService.find_default_view())
           
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


    //createAlertSucc("ni ni-check-bold", " Welcome ! Enter email & password to continue .");

    self.login = function(){
        if(self.loginForm.pass == undefined || self.loginForm.pass.length < 6){
            createAlertErr("ni ni-fat-remove", "Password must be greater than 6 characters.");
        }
        else{
            self.showLoader = true;
            createAlertSucc("ni ni-check-bold", "Processing , Please wait.");
            
            var payload = {"email":self.loginForm.email , "pass":self.loginForm.pass}
            apiService.signInUser(payload).then(function (data) {
                self.showLoader = false;
                    authService.setCurrentUser(data.response);
                    createAlertSucc("ni ni-check-bold", "Logging you in , Please wait...");
                    $state.go('home.dashboard')
                
            }, function (data) {
                self.showLoader = false;
                createAlertErr("ni ni-fat-remove", data);
                self.processingData = false;
            })
        }
        
    }


    
     self.forget_pass = function() {
        self.setPageNum(3);
    }
     
    
    self.sendForgotPwdLink =function(){
        if(self.verifyFrgtForm.pass !== self.verifyFrgtForm.pass2){
            createAlertErr("ni ni-fat-remove", "Your passwords dont match .Please confirm password.");
        }
        else{
            self.showLoader=true;
            apiService.forgotPassUserCheck({
                "email" :self.verifyFrgtForm.email,
                
            }).then(function (data) {
                self.showLoader=false;
                
                self.setPageNum(1);
                createAlertSucc("ni ni-check-bold", "Password reset link has been sent to your registered email ID.Please check");
            
        }, function (data) {
            self.showLoader=false;
            createAlertErr("ni ni-fat-remove", data);
            
        })
        }
    }

    self.signupnavigate = function() {
        $state.go('signup');
    }

    self.init();



}])