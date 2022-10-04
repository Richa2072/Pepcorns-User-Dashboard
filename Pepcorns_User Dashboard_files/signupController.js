app.controller('signupController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams',function($scope,$state,$http,apiService,authService,$compile,$stateParams){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    self.is_session_verified=false;
    console.log($stateParams.referralcode)
    
    
    if($stateParams.referralcode){
        self.verifyEmail.ref_cde = $stateParams.referralcode
    }
    if($stateParams.emailCampaign){
        
        self.verifyEmail.email = $stateParams.emailCampaign
    }

    console.log(self.verifyEmail)


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
            console.log("user is already logged in")
            $state.go(authService.find_default_view())

        }
        else{
            //createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            console.log("user is not logged in")         
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


    

    self.verifyEmailFun = function(){
        if(self.verifyEmail.email == undefined){
            createAlertErr("ni ni-fat-remove", "Email is mandatory field.");
        }
        else{
            self.showLoader=true;
            self.processingData = true;
            createAlertSucc("ni ni-check-bold", "Processing , Please wait.");                        
            apiService.verifyEmail({"email":self.verifyEmail.email,"fullname":self.verifyEmail.fullname,"pass":self.verifyEmail.pass,"source":1,type:1,"ref_cde":self.verifyEmail.ref_cde }).then(function (data) {
                console.log(data)
                createAlertSucc("ni ni-check-bold", data.message);
                self.showLoader=false;
                self.setPageNum(2);
                
                
            }, function (data) {
                
                createAlertErr("ni ni-fat-remove", data);
                self.processingData = false;
                self.showLoader=false;
            })
        }
        
    }


    
    
    // // forgot password created by manish
    // // date 29-01-2020
    //  self.forget_pass = function() {
    //     self.setPageNum(3);
    // }
     
    // self.verify_email = function () {
       
    //     self.setPageNum(2);
    //     //  apiService.createOtp({
    //     //     "email": self.verifyEmail.email
    //     // }).then(function (data) {  
    //     //      self.setPageNum(4);
    //     //      createAlertSucc("ni ni-check-bold", "OTP has been sent please check your email account");

    //     // }, function (data) {
    //     //     createAlertErr("ni ni-fat-remove", data);

            
    //     // })

    // }
    // self.reset_pass =function(){
    //     if(self.verifyFrgtForm.pass !== self.verifyFrgtForm.pass2){
    //         createAlertErr("ni ni-fat-remove", "Your passwords dont match .Please confirm password.");
    //     }
    //     else{
    //         self.showLoader=true;
    //         apiService.forgot_pass({
    //             "email" :self.verifyEmail.email,
    //             "otp" : self.verifyFrgtForm.otp,
    //             "password" : self.verifyFrgtForm.pass
    //         }).then(function (data) {
    //             self.showLoader=false;
                
    //             self.setPageNum(1);
    //             createAlertSucc("ni ni-check-bold", "Your Password has been reset successfully.kindly login.");
            
    //     }, function (data) {
    //         self.showLoader=false;
    //         createAlertErr("ni ni-fat-remove", data);
            
    //     })
    //     }
    // }

    self.loginnavigate = function() {
        $state.go('login');
    }

    self.init();



}])