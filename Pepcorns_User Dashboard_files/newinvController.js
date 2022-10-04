app.controller('newinvController', ['$scope','$state','$http','apiService','authService','$compile','$stateParams','$window','$location','helperService','CONSTANT','Upload',function($scope,$state,$http,apiService,authService,$compile,$stateParams,$window,$location,helperService,CONSTANT,Upload){
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
        // if(self.email_data.cmp_url){
        //     if(!self.email_data.cmp_url){
        //         createAlertErr("ni ni-fat-remove", "Invalid company website url");
        //         return
        //     }
        // }
        
         if(!helperService.validatePan(self.email_data.pan)){
            createAlertErr("ni ni-fat-remove", "Invalid PAN number , Please verify again.");
            return
        }
        else if(self.email_data.net_worth < self.email_data.annual_income){
            createAlertErr("ni ni-fat-remove", "Your networth can not be less than annual income.Please verify.");
            return
        }
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
        
        apiService.singupInv({
            //"session_key":self.session_id,
            "mobile":self.email_data.mobile,
            "first_name":self.email_data.first_name,
            "last_name":self.email_data.last_name,
            "gender":self.email_data.gender,
            "dob":self.email_data.dob,
            "bio":self.email_data.bio,
            "cmp_url":self.email_data.cmp_url,
            "pan":self.email_data.pan,
            "city":self.email_data.city,
            "state":self.email_data.state.name,
            "country":1,
            "zip":self.email_data.zip,
            "country_code":1,
            "profile_img":self.email_data.profile_img,
            "net_worth":self.email_data.net_worth,
            "annual_income":self.email_data.annual_income,
            "is_accredited":self.email_data.is_accredited,

        }).then(function (data) {
                    //self.setPageNum(1);
                    createAlertSucc("ni ni-check-bold", "Your account has been successfully registered with us.Please re-login");
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

    function isImage(filename) {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'jpg':         
          case 'png':
            return true;
        }
        return false;
      }
      function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
      }
    self.uploadProfileImage = function(){
        console.log(self.email_data.profileImgFile.size/1024);
        console.log(self.email_data)
        if(!self.email_data.profileImgFile){
            createAlertErr("ni ni-check-bold","Please select a file first.Then click on upload");
        }
        else{
            if(isImage(self.email_data.profileImgFile.name)){
                    if(Math.round(self.email_data.profileImgFile.size/1024) > 220){
                        createAlertErr("ni ni-check-bold","File size should not be greater than 200 kb");
                }
                else{
                    self.uploadDocumentsNewPitch(self.email_data.profileImgFile,1)
                }
                
            }
            else{
                createAlertErr("ni ni-check-bold","Acceptable formats for profile image are jpg/png");
            }
            
        }
    }

    self.uploadDocumentsNewPitch = function (filelocation,type) {
        createAlertSucc("ni ni-check-bold","Please wait ...");
        Upload.upload({
            url: CONSTANT.base_api_url + 'api/v1/comp/uploadDocuments',
            data: {
                file: filelocation
            }
        }).then(function (resp) {
            //upload function returns a promise
            if (resp.data.error_status === false) { //validate success

                console.log(resp.data.response);
                
                if(type == 1){
                    self.email_data.profile_img=resp.data.response;
                }
                // else if(type == 2){
                //     self.addnewPitch.pitchFeatureImageFileUrl= resp.data.response;
                // }
                // else if(type==3){
                //     self.addnewPitch.pitchFeatureLogoFileUrl = resp.data.response
                // }
                // else if(type==4){
                //     self.addnewPitch.pitchFeatureSupportFileUrl = resp.data.response
                // }
                // else if(type==5){
                //     self.addnewPitch.pitchCertificateOfIncFileUrl = resp.data.response
                // }

                createAlertSucc("ni ni-check-bold","file uploaded successfully.");
                               
            }
        }, function (resp) { //catch error

            createAlertErr("ni ni-check-bold", "Image upload failed.Please try other image");
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        });

    }

    self.init();



}])