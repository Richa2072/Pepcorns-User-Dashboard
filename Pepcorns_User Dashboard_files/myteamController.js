app.controller('myteamController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm){
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
    
    self.allPitchData=[];

    self.pagenumTrans = 1;
    self.currentPageNumberTrans = 1;
    self.total_rowsTrans=0;
    self.paginationTrans = [];
    
    self.allTranactionData=[];
    self.search_text={
        text:''
    }
    self.createDActionPageType=1;    
    self.createDActionPageTypeMax=5;
    self.addnewPitch={
    }
    self.allavailCountries=[];
    self.allCompanyTags=[];
    self.selectedCmpnyTags=[];
    self.allFaqs =[];
    self.selectedCampDetails=[];
    self.selectedCampDetailsLogs=[]
    self.states_data_json=[];

    self.allRewardsCamp=[];
    
    //new campaign
    self.addnewCamp={
        view_type:"1",
        start_date:moment().format('YYYY-MM-DD hh:mm:ss'),
        end_date:moment().add(15,'days').format('YYYY-MM-DD hh:mm:ss'),
        todays_date:moment().add(0,'days').format('YYYY-MM-DD hh:mm:ss'),
    }
    

    self.setPageNum = function (page) {
        if (self.pagenum !== page) {
            self.pagenum = page;
        }
        if(page == 1){
            self.findAllPitches(true)
        }
    }

    self.isSetPageNum = function (page) {
        if (self.pagenum == page) {
            return true;
        } else {
            return false;
        }
    }

    self.new_schemes_rule = {
        "rule_base_unit": "1",
        "comparator": "3",
        "type": "21",
        "is_recursive": 0,
        "description":"",
        "tnc":""

    };

    

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


    self.findAllPitches=function(calulatePage){
        self.showLoader = true;
        if(calulatePage){
            self.currentPageNumber=1
        }
        apiService.getAllTeams({
            "page_no": self.currentPageNumber,
            "search_text":self.search_text.text
        }).then(function (data) {

            self.showLoader = false;
            self.allPitchData = data;
            
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


    // self.getCampaignDetailsById = function(id){
    //     self.showLoader=true;
    //     self.selectedCampDetails=[];
    //     self.selectedCampDetailsLogs=[]
    //     apiService.getCampaignDetailsById({"camp_id":id}).then(function (data) {
            
    //         self.selectedCampDetails=data.data[0];
    //         self.selectedCampDetailsLogs=data.logs;
    //         self.showLoader = false;           
    //         self.setPageNum(2);
    //         console.log(data);
    //         console.log(self.selectedCampDetails);
    //         self.getAllTransByCampId(true);
           

    //     }, function (data) {
    //         self.showLoader = false;
    //         createAlertErr(data)

    //     })

    // }

    self.togglePitch = function(id){
        
        $ngConfirm({
            title: 'Remove User',
            type: 'green',
            content: 'Are you sure , you want to continue ',
            closeIcon: true,
            typeAnimated: true,
            buttons: {
                close: function () {},
                somethingElse: {
                    text: 'Confirm', // Some Non-Alphanumeric characters,
                    btnClass: 'btn-green',
                    action: function () {
                        self.showLoader=true;
                        // $ngConfirm('You clicked on something else');
                        apiService.toggleTeam({
                            "user_id": id
                        }).then(function (data) {
                            self.showLoader=false;
                           // self.findAllPitches(true)
                            createAlertSucc("Status updated successfully.");
                        }, function (data) {
                            self.showLoader=false;
                            console.log(data);
                            createAlertErr(data)
                        })
                    }
                }
            }
        })
    }

    //creating campaigns
    self.addTeamMembers=function(){
        self.showLoader=true;
        apiService.addTeamMembers(self.addnewPitch).then(function (data) {
            
            
            self.setPageNum(1);
            console.log(data);
            createAlertSucc("Team member added successfully.")
            //self.findAllPitches()
            
           

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }

    self.uploadprofileImage = function () {
        createAlertSucc("ni ni-check-bold","Please wait ...");
        Upload.upload({
            url: CONSTANT.base_api_url + 'api/v1/comp/uploadDocuments',
            data: {
                file: self.addnewPitch.profilePhotoNew
            }
        }).then(function (resp) {
            //upload function returns a promise
            if (resp.data.error_status === false) { //validate success
                self.addnewPitch.profile_img= resp.data.response;
                //console.log(resp.data.response);
                
                
                createAlertSucc("Image saved successfully.");
                               
            }
        }, function (resp) { //catch error

            createAlertErr("Image upload failed.Please try other image");
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        });

    }

    

    self.init();



}])