app.controller('escrowController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm','helperService',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm,helperService){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    self.is_session_verified=false;
    self.loggedIndata = authService.getCurrentUser();
    self.selectedPitch={};
    self.currentPageNumber = 1;
    self.total_rows=0;
    self.pagination = [];
    
    self.alluserData={"comp_profile":{},"investor_profile":{}};
    self.userBankData={"userType":1};
    self.apikeyEscrow = "d8510ee8-c251-45d8-8732-bb6608c52aed";
    self.allbankAccounts=[];
    self.userEscrowAccount={};

  
    
    
    

    self.setPageNum = function (page) {
        if (self.pagenum !== page) {
            self.pagenum = page;
        }
        if(page == 1){
            self.getUserDetails()
        }
        else if(page == 2){
            self.getBackaccountDetails()
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
           // self.findAllPitches(true)
           self.setPageNum(1);
           

        }
        else{
            //createAlertSucc("ni ni-check-bold", " Welcome ! Enter email to proceed.");
            console.log("user is not logged in") ;
            $state.log('login')        
        }
        
    }

   

   

    //helper functions
    function createAlertSucc(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-default" role="alert"><strong><i class="ni ni-check-bold" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }

    function createAlertErr(msg) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-warning" role="alert"><strong><i class="ni ni-fat-remove" style="vertical-align:middle;font-size:18px"></i></strong> ' + msg + '</div></div>',
            el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
    }
    

    self.getUserDetails = function(){
        self.showLoader = true;       
        apiService.getUserDetails({  
            "x":"x"         
        }).then(function (data) {

            self.showLoader = false;
            
            self.alluserData = data;
            self.userEscrowAccount.name = self.alluserData.full_name;
            self.userEscrowAccount.email = self.alluserData.email;
            self.userEscrowAccount.mobile = self.alluserData.mobile;
            self.userEscrowAccount.pan = self.alluserData.pan;
            // if(self.alluserData.escrow_pymt_id){
            //     self.fetchallbankAccounts()
            // }
           
              if(self.alluserData.investor_profile.length > 0 && self.alluserData.investor_profile[0].escrow_id){
                self.fetchallbankAccounts(1)
                //createAlertErr("Your escrow payment id does not exists.")
            }
            
             if(self.alluserData.comp_profile.length > 0 && self.alluserData.comp_profile[0].escrow_id){
                self.fetchallbankAccounts(0)
            }
            //self.alluserData.profilePhotoNew={}
            
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.createEscrowAccountInv = function(){
        console.log(self.alluserData)
        
         if(self.alluserData.escrow_pymt_id){
            createAlertErr("Your escrow payment id already exists.")
        }
        else if(!helperService.validatePan(self.userEscrowAccount.pan)){
            createAlertErr("Invalid PAN number , Please verify again.");
            return
        }
        else{
            self.showLoader = true;       
            var data = {
                "name": self.userEscrowAccount.name,
                "email": self.userEscrowAccount.email,
                "mobile_no": self.userEscrowAccount.mobile,
                "pan_number": self.userEscrowAccount.pan,
                "user_type": "1"
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json',
                    'apiToken':self.apikeyEscrow
                }
            }
    
            $http.post('https://pepcorns.escrowpayindia.com/api/v1/user/create', data, config)
            .then(function(data){
                self.showLoader = true;
                console.log("in success",data);
                apiService.createEscrowAccountInv({  
                "escrow_id":data.data.data.user_id      
                }).then(function (data) {
                    self.showLoader = false;
                    self.getUserDetails()           
                    
                }, function (data) {
                    createAlertErr(data)
                    self.showLoader = false;
    
                })
            },function(error){
                self.showLoader = false;
                console.log("in error",error);
                createAlertErr(error.data.message != null ? error.data.message:"Something went wrong,reach out to admin" )
            })
        }

    }


    self.addnewBankAccount= function(){
        if(self.alluserData.investor_profile.length == 0){
            createAlertErr("Please create investors account first");
        }
        else if(!self.alluserData.investor_profile[0].escrow_id){
            createAlertErr("Your escrow payment id does not exists.")
        }
        else if(self.alluserData.comp_profile.length == 0){
            createAlertErr("Please create company account first");
        }
        else if(!self.alluserData.comp_profile[0].escrow_id){
            createAlertErr("Your escrow payment id does not exists.")
        }
        else{
            var data = {
                "user_id": self.userBankData.userType == true ? self.alluserData.comp_profile[0].escrow_id : self.alluserData.investor_profile[0].escrow_id,
                "name": self.userBankData.acct_name,
                "bank_name": self.userBankData.bank_name,
                "account_number":(self.userBankData.acct_number).toString(),
                "ifsc_code":self.userBankData.ifsc
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json',
                    'apiToken':self.apikeyEscrow
                }
            }

            $http.post('https://pepcorns.escrowpayindia.com/api/v1/user/payment/add-bank-details', data, config)
            .then(function(data){
                self.showLoader = true;
                console.log("in success",data);
                self.fetchallbankAccounts(self.userBankData.userType);
                createAlertSucc("Account added successfully");
                
            },function(error){
                self.showLoader = false;
                console.log("in error",error);
                createAlertErr(error.data.message != null ? error.data.message:"Something went wrong,reach out to admin" )
            })
        }
    }

    self.fetchallbankAccounts = function(userType){
        var data = {
            "user_id": userType == '0' ? self.alluserData.comp_profile[0].escrow_id : self.alluserData.investor_profile[0].escrow_id,                
            
        }
    
        var config = {
            headers : {
                'Content-Type': 'application/json',
                'apiToken':self.apikeyEscrow
            }
        }

        $http.post('https://pepcorns.escrowpayindia.com/api/v1/user/payment/user-banks-detail', data, config)
        .then(function(data){
            self.showLoader = false;
            console.log("in success",data);
            
            self.allbankAccounts.push(data.data.data[0]);
            
            
        },function(error){
            self.showLoader = false;
            console.log("in error",error);
            createAlertErr(error.data.message != null ? error.data.message:"Something went wrong,reach out to admin" )
        })
        // if(self.alluserData.investor_profile.length == 0){
        //     //createAlertErr("Please create investors account first");
        // }
        // else if(!self.alluserData.investor_profile.escrow_id){
        //     //createAlertErr("Your escrow payment id does not exists.")
        // }
        // else if(self.alluserData.comp_profile.length == 0){
        //     //createAlertErr("Please create company account first");
        // }
        // else if(!self.alluserData.comp_profile.escrow_id){
        //    // createAlertErr("Your escrow payment id does not exists.")
        // }
        // else{
           
        // }
    }


    self.manualAccountCreation = function(accountType){
        self.showLoader = true;       
        apiService.manualAccountCreation({  
            "accountType":accountType         
        }).then(function (data) {

           createAlertSucc("Account added successfully");
            
        }, function (data) {
            createAlertSucc(data);
            self.showLoader = false;

        })
    }   
    

   

    

    self.init();



}])