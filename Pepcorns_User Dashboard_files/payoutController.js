app.controller('payoutController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams','$window','$location','helperService','CONSTANT','Upload',function($scope,$state,$http,apiService,authService,$compile,$stateParams,$window,$location,helperService,CONSTANT,Upload){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    self.loggedInUserData = authService.getCurrentUser();
    console.log(self.loggedInUserData)
    
    self.camp_id=$stateParams.camp_id;
    self.investmentForm = {
        "amount":100,
        "mobile":"",
        "email":self.loggedInUserData.email
    }
    self.investment_amount={
        "amount":100
    }
    self.investmentForm.amount=parseInt($stateParams.inv_amt);
    
    if(!self.investmentForm.amount){
        self.investmentForm.amount = 100
    }
    console.log(self.session_id);
    self.email_data={};
    self.email_data.dob=moment().subtract('18','years').format('YYYY-MM-DD');
    self.email_data.gender=1;
    console.log(self.min_signup_date)
    
    self.states_data_json=[]
    self.is_session_verified=false;
    self.ref_pg_id="";
    
    self.captureEventReceived=false;
    self.paymetCapRespForm={};

    self.investment_amount=100;
    self.selectedCampDetails=[];
    self.selectedCampDetailsLogs=[];
    self.apikeyEscrow = "d8510ee8-c251-45d8-8732-bb6608c52aed";
    self.alluserData={};

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
            self.getUserDetails();
            self.getCampaignDetailsById()
            //self.fetch_gst_data()     
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

    self.getUserDetails = function(){
        //self.showLoader = true;       
        apiService.getUserDetails({  
            "x":"x"         
        }).then(function (data) {

            self.showLoader = false;
            
            ;
            self.alluserData = data;
            
            //self.alluserData.profilePhotoNew={}
            
            
        }, function (data) {
            self.showLoader = false;

        })
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

    self.getCampaignDetailsById = function(d){
        self.showLoader=true;
        self.selectedCampDetails=[];
        self.selectedCampDetailsLogs=[]
        apiService.getCampaignDetailsById({"camp_id":self.camp_id}).then(function (data) {
            
            self.selectedCampDetails=data.data[0];
            self.selectedCampDetailsLogs=data.logs;
            
            self.showLoader = false;           
            //self.setPageNum(2);
            console.log(data);
            console.log(self.selectedCampDetails);
            //self.getCampaignRewards()
           

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })

    }

    self.initiatePayment = function (amount, curr) {

        if(!self.camp_id){
            createAlertErr("Please wait,fetching data");
            return
        }



        var payload = {
            "amount": self.investmentForm.amount,
            "curr": "INR",
            "email":self.investmentForm.email,
            "camp_id": self.camp_id,
            "coupon_used":""
        }
        if(self.investmentForm.amount < self.selectedCampDetails.min_inv){
            createAlertErr(`Amount is not accepted. Minimum amount of ${self.selectedCampDetails.min_inv} is required to process further`);
            self.investmentForm.amount = self.selectedCampDetails.min_inv
            return
        }
        if(!self.selectedCampDetails.company_escrow_id){
            createAlertErr(`Campaign Poster has not set its Payment yet.Please try again later`);
            return
        }
        if((!self.alluserData.investor_profile) || (!self.alluserData.investor_profile[0].escrow_id)){
            createAlertErr(`Your payment has not been set yet.Kindly go to investors setup page and configure payment`);
            return
        }
        self.showLoader = true;
        apiService.inititePayment(payload).then(function (data) {
            self.showLoader = false;
            self.captureEventReceived=false;
            console.log("data")
            self.ref_pg_id = data.ref_id_custom;
            
            
            self.initializePymt();


        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)
            console.log(data)

        })
    }

    self.initializePymt = function(amount){
        self.showLoader=true;
        createAlertSucc("Please wait.....")
        var data = {
            "investor_id": self.alluserData.investor_profile[0].escrow_id,                
            "campaign_id": self.camp_id, 
            "company_id": self.selectedCampDetails.company_escrow_id,
            "amount": self.investmentForm.amount, 
            "payment_mode": 0,
            "txn_id":self.ref_pg_id
        }
    
        var config = {
            headers : {
                'Content-Type': 'application/json',
                'apiToken':self.apikeyEscrow
            }
        }

        $http.post('https://pepcorns.escrowpayindia.com/api/v1/investment/create', data, config)
        .then(function(data){
            self.showLoader = false;
            debugger;
            if(data.data.success){
                createAlertSucc("Please wait.....Redirecting")
                console.log("in success",data);
                var redirectURl=data.data.payment_url;
                console.log(redirectURl);
                $window.location.href = redirectURl;
            }
            else{
                createAlertErr(data.data.message )
            }
            
            //createAlertSucc("Account added successfully");
        },function(error){
            self.showLoader = false;
            console.log("in error",error);
            createAlertErr(error.data.message != null ? error.data.message:"Something went wrong,reach out to admin" )
        })
    }

    // self.initializePymt = function (amount) {
    //     self.pymtOptions = {            

    //         "handler": function (response) {
                
    //             //self.newPlanSelected.pg_id = response.razorpay_payment_id;
    //             //self.checkauth();
    //         },
    //         "modal.ondismiss": function () {
    //             $ngConfirm({
    //                 title: 'Payment Error',
    //                 content: 'You closed the payment box.Please click on Pay now to re-initiate payment.',
    //                 type: 'red',

    //                 buttons: {
    //                     close: function () {

    //                     }
    //                 }
    //             })
    //             self.abortPayment();
    //         },
    //         "prefill": {
    //            // "name": self.loggedInBdata.name,
    //            // "email": self.loggedInBdata.email
    //         },
    //         "notes": {
    //             "address": "Hello World"
    //         },
    //         "theme": {
    //             "color": "#F37254"
    //         }
    //     };

    //     console.log("payment gateway token",self.ref_pg_id)

    //     Layer.checkout({
    //         token: self.ref_pg_id,
    //         accesskey: "3105f430-f48f-11eb-99cf-abed9801a7e4",
    //         theme: {
    //             logo : "https://open-logo.png",
    //             color: "#3d9080",
    //             error_color : "#ff2b2b"
    //           }
    //     },
    //     function(response) {
    //         console.log(response)
        
    //         if (response.status == "captured") {
    //             console.log("captured")
    //             self.paymetCapRespForm.payment_token_id =response.payment_token_id;
    //             self.paymetCapRespForm.payment_id =response.payment_id;
    //             if(!self.captureEventReceived){
    //                 self.captureEventReceived=true;
    //                 self.checknprocessPymt()
    //             }
                
    //            // response.payment_token_id
    //            // response.payment_id
    
    //         } else if (response.status == "created") {
    //             console.log("created");
    //             createAlertSucc("Please wait ... ! Initializing Payments")
    
    //         } else if (response.status == "pending") {
    //             console.log("pending")
    //             createAlertSucc("Please continue with payment. Please do no close the browser untill payment is completed.")
    
    //         } else if (response.status == "failed") {
    //             console.log("failed");
    //             createAlertErr("Payment Failed ! Kindly try again.")
    
    //         } else if (response.status == "cancelled") {
    //             console.log("cancelled");
    //             createAlertErr("Payment Cancelled by the user ! Kindly try again.")
    //         }
    //     },
    //     function(err) {
    //         console.log(err)
    //         createAlertErr("Something went wrong while processing." + err)
    //         //integration errors
    //     })
    // }

    // self.abortPayment = function () {
    //     var payload = {
    //         "uuid": self.loggedInBdata.id,
    //         "ref_id_custom": self.newPlanSelected.ref_id_custom

    //     }
    //     pymtService.abortPayment(payload).then(function (data) {
            
    //         self.newPlanSelected.ref_id_custom = data.ref_id_custom;
    //         self.newPlanSelected.status = data.status;
    //         self.setPageNum(1);
            
    //         self.initializePymt(self.newPlanSelected.FinalAmount);


    //     }, function (data) {
            

    //     })
    // }
    

    self.checknprocessPymt = function(){
        var payload = {
            "payment_id": self.paymetCapRespForm.payment_id,
            "payment_token_id":self.paymetCapRespForm.payment_token_id,
            "camp_id": self.camp_id,
        }
        apiService.checknprocessPymt(payload).then(function (data) {
            
            console.log("data")
            createAlertSucc("Payment has been captured successfully.")
            self.setPageNum(2);
            //self.ref_pg_id = data.ref_id_custom;
            
            //self.initializePymt();


        }, function (data) {
            console.log(data);
            createAlertErr("Payment captured failed.Please reach out to support for clarification")

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