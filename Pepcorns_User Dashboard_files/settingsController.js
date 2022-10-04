app.controller('settingsController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    self.is_session_verified=false;
    
    self.selectedPitch={};
    self.currentPageNumber = 1;
    self.total_rows=0;
    self.pagination = [];
    
    self.alluserData={"comp_profile":{},"investor_profile":{}};
    self.userBankData={}

  
    
    
    

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


    // self.findAllPitches=function(calulatePage){
    //     self.showLoader = true;
    //     if(calulatePage){
    //         self.currentPageNumber=1
    //     }
    //     apiService.getAllCampaign({
    //         "page_no": self.currentPageNumber,
    //         "search_text":self.search_text.text
    //     }).then(function (data) {

    //         self.showLoader = false;
    //         self.allPitchData = data.data;
            
    //         if (calulatePage) {
    //             self.total_rows = data.total_records;
    //             self.calculatePagination();

    //         }
    //     }, function (data) {
    //         self.showLoader = false;

    //     })
    // }
   

    

    self.getUserDetails = function(){
        self.showLoader = true;       
        apiService.getUserDetails({  
            "x":"x"         
        }).then(function (data) {

            self.showLoader = false;
            self.alluserData = data;
            self.alluserData.profilePhotoNew={}
            self.findTagsValues()
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.getBackaccountDetails = function(){
        self.showLoader = true;       
        apiService.getBackaccountDetails({  
            "x":"x"         
        }).then(function (data) {

            self.showLoader = false;
            self.userBankData = data;            
            
        }, function (data) {
            self.showLoader = false;

        })
    }


    self.updateProfileImage = function(){
            
            if(!self.alluserData.profilePhotoNew.name){
                createAlertErr("Please choose an image less than 200 Kb first");
                return
            }
            else{
                createAlertSucc("Please wait ...");
                Upload.upload({
                    url: CONSTANT.base_api_url + 'api/v1/comp/updateProfileImage',
                    data: {
                        file: self.alluserData.profilePhotoNew
                    }
                }).then(function (resp) {
                    //upload function returns a promise
                    if (resp.data.error_status === false) { //validate success
        
                        console.log(resp.data.response);               
                        self.getUserDetails()    
                        createAlertSucc("file uploaded successfully.");
                                       
                    }
                }, function (resp) { //catch error
        
                    createAlertErr("Image upload failed.Please try other image");
                }, function (evt) {
                    
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    createAlertSucc("Uploading ... "+progressPercentage +"%");
                });
            }
        
            
        
    }
    

    self.updateBasicProfile = function(){
        self.showLoader=true;
        apiService.updateBasicProfile({  
            "mobile":self.alluserData.mobile,
            "full_name":self.alluserData.full_name,
            "state":self.alluserData.state,
            "city":self.alluserData.city,
            "zip":self.alluserData.zip,
            "bio":self.alluserData.bio,
            "address":self.alluserData.address,
            "facebook":self.alluserData.facebook,
            "instagram":self.alluserData.instagram,
            "linkedin":self.alluserData.linkedin,
            "skills":self.alluserData.skills
        }).then(function (data) {
            createAlertSucc("Basic Profile updated successfully");
            self.getUserDetails()
            
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.findSkillTagsInArray =[];
    self.findTagsValues = function(){
        if( self.alluserData.skills && self.alluserData.skills.length > 0){
            self.findSkillTagsInArray = self.alluserData.skills.split(',')
        }
    }

    self.updateComProfile = function(){
        self.showLoader=true;
        apiService.updateComProfile({  
            "cmp_name":self.alluserData.comp_profile[0].cmp_name,
            "cmp_url":self.alluserData.comp_profile[0].cmp_url,
            "pan":self.alluserData.comp_profile[0].pan,
            "mobile":self.alluserData.comp_profile[0].mobile,
            "email":self.alluserData.comp_profile[0].email,
        }).then(function (data) {
            createAlertSucc("Company Profile updated successfully");
            self.getUserDetails()
            
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.updateInvProfile = function(){
        //mobile,website_url,net_worth,annual_income,bio,taxation_num,cmp_name
        self.showLoader=true;
        apiService.updateInvProfile({  
            "cmp_name":self.alluserData.investor_profile[0].cmp_name,
            "website_url":self.alluserData.investor_profile[0].website_url,
            "taxation_num":self.alluserData.investor_profile[0].taxation_num,
            "mobile":self.alluserData.investor_profile[0].mobile,
            "net_worth":self.alluserData.investor_profile[0].net_worth,
            "annual_income":self.alluserData.investor_profile[0].annual_income,
            "bio":self.alluserData.investor_profile[0].bio,
            "email":self.alluserData.investor_profile[0].email,
            
        }).then(function (data) {
            createAlertSucc("Company Profile updated successfully");
            self.getUserDetails()
            
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.updateBackaccountDetails = function(){
        self.showLoader=true;
        apiService.updateBackaccountDetails({  
            "acct_name":self.userBankData.acct_name,
            "acct_number":self.userBankData.acct_number,
            "ifsc":self.userBankData.ifsc
        }).then(function (data) {
            createAlertSucc("Bank account details updated successfully");
            self.getBackaccountDetails()
            
            
        }, function (data) {
            self.showLoader = false;

        })
    }

    

    self.init();



}])