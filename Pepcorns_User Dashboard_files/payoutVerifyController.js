app.controller('payoutVerifyController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams','$window','$location','helperService','CONSTANT','Upload',function($scope,$state,$http,apiService,authService,$compile,$stateParams,$window,$location,helperService,CONSTANT,Upload){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=true;
    self.loggedInUserData = authService.getCurrentUser();
    console.log(self.loggedInUserData);
    self.isFlagged=false;
    console.log("login data",self.loggedInUserData)
    self.txn_id=$stateParams.txn_id;
    self.checkpaymtstatus={};
    
    
    
    // self.is_session_verified=false;
    // self.ref_pg_id="";
    
    

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
            if(self.txn_id){
                self.check_pymt_status()
            }
            else{
                self.setPageNum(3);
            }
            // if(self.isFlagged){
            //     self.abortPayment()
                
            // }
            // else if(!self.isFlagged){
            //     self.checknprocessPymt()
            // }
            // else{
            //     $state.go('home.dashboard')
            // }
            

        }
        else{
            createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            console.log("user is not logged in") ; 
            //self.fetch_gst_data()     
            //self.verifySession()
            $state.go('home.login')
        }
        
    }
    

    //helper functions
    function createAlertSucc(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-default" role="alert"><strong><i class="ni ni-check-bold" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }

    function createAlertErr(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-warning" role="alert"><strong><i class="ni ni-check-bold" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }

    

    self.check_pymt_status = function(){
        self.showLoader=true;        
        apiService.check_pymt_status({
            "txn_id":self.txn_id
        }).then(function (data) {
            console.log("check_pymt_status",data)
            self.showLoader=false;
            console.log("data");
            self.checkpaymtstatus = data;
            
            //createAlertSucc("Payment has been captured successfully.")
            if(self.checkpaymtstatus.pymt_status == 'CP'){
                self.setPageNum(2);
            }
            else if(self.checkpaymtstatus.pymt_status == 'CA'){
                self.setPageNum(3);
            }
            else{
                self.setPageNum(1);
            }
           // self.setPageNum(1);
        }, function (data) {
            self.showLoader=false;
            self.setPageNum(1);
            console.log(data);
            //createAlertErr("Payment captured failed.Please reach out to support for clarification")
            
        })
    }

   

    self.loginnavigate = function() {
        authService.logout();
        $state.go('login');
    }

    self.schemeStatus_helper = {
        is_between :function(start_date, end_date){
            
          return moment().isBetween(start_date, end_date)
        },
        is_before :function(start_date, end_date){
            
           return moment().isBefore(start_date)
         },
         is_after :function(start_date, end_date){
             
           return moment().isAfter(end_date)
         },
        //is_before = moment().isBefore(start_date),
        //is_after = moment().isAfter(end_date),
   }



    self.init();



}])