app.controller('campDetailsController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm','$stateParams','$sce','helperService',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm,$stateParams,$sce,helperService){
   console.log("CAMPDETAILS CONTROLLER LOGGED")
    var self = $scope;
    self.verifyEmail={};
    self.loggedInUserData = authService.getCurrentUser();
      
    self.loggedIndata = authService.getCurrentUser();
    console.log("login data",self.loggedInUserData)
    self.camp_id=$stateParams.camp_id;    
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
    self.allFavorites =[];
    self.allRewardsCamp=[];
    self.allCampUpdate=[];
    self.shareurl={
        "link":CONSTANT.base_api_url+"/founders/#!/campdetails/"+self.camp_id
    }
    self.allCampUpdateComm=[];
    self.newCommentadd = {
        newComment:'',
        camp_id:null,
        comment_id:null
    }
    
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
    self.currentVdo ='';


    

    self.init = function(){
        self.isUserLogged();
    }


    self.isUserLogged =function(){   
          
        self.getCampaignDetailsById(self.camp_id)  
        //self.findAllPitches(true); 
        if(authService.isLoggedIn()){
            console.log("user is already logged in")
            
           self.is_session_verified=true;
           //self.setPageNum(1);
           //$state.go('home.campaign')
           

        }
        else{
            
            console.log("user is not logged in") ;
                  
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


  
   


    self.getCampaignDetailsById = function(id){
        self.showLoader=true;
        self.selectedCampDetails=[];
        self.selectedCampDetailsLogs=[]
        apiService.getCampaignDetailsById({"camp_id":id}).then(function (data) {
            
            self.selectedCampDetails=data.data[0];
            self.selectedCampDetailsLogs=data.logs;
            self.showLoader = false;           
            self.setPageNum(2);
           
            
            console.log(data);
            console.log(self.selectedCampDetails);
            self.getCampaignRewards();
            self.getCampUpdate();
            self.getAllComments(true);
            
            if(self.selectedCampDetails.feature_video){
                self.currentVdo = self.selectedCampDetails.feature_video;
                // var newUrl=helperService.getIdFromURL(self.selectedCampDetails.feature_video)
                // youtubePlayerApi.bindVideoPlayer(newUrl);
                // youtubePlayerApi.loadPlayer();
               }

        }, function (data) {
            self.showLoader = false;
            $state.go('login')
            createAlertErr(data)

        })

    }

    

    self.find_state_of_camp = function (start_date, end_date) {
        var is_between = moment().isBetween(start_date, end_date);
        var is_before = moment().isBefore(start_date);
        var is_after = moment().isAfter(end_date);
        if (is_between) {
            return "IN-PROGRESS"
        } else if (is_before) {
            return "YET-TO-START"
        } else if (is_after) {
            return "END-COMPLETE"
        } else {
            return "NA"
        }
        //return("hello")

    }



    self.isSetSubMenuIndex = function (index) {
        if (self.submenuIndex == index) {
            return true;
        } else {
            return false;
        }
    }
    
    self.submenuIndex = 1;
    self.setSubMenuIndex = function (index) {
        if (self.submenuIndex != index) {

            
            self.submenuIndex = index;
            self.findAllPitches(true)
        }
    }


    self.isSetSubMenuIndex1 = function (index) {
        if (self.submenuIndex1 == index) {
            return true;
        } else {
            return false;
        }
    }
    
    self.submenuIndex1 = 11;
    self.setSubMenuIndex1 = function (index) {
        if (self.submenuIndex1 != index) {

           

            self.submenuIndex1 = index;
            //self.findAllPitches()
        }
    }




    self.getCampaignRewards = function(){
        self.showLoader = true;  
        apiService.getCampaignRewards({"camp_id":self.selectedCampDetails.camp_id}).then(function (data) {
            
            self.allRewardsCamp = data;
            self.showLoader = false;           
            
            console.log(data);
            

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }

    

    //addtofav
    self.addtofav = function(id){
        if(!self.is_session_verified){
            createAlertSucc("Please login to add to favorites.");
            return
        }
        else{
            self.showLoader = true;  
        apiService.addtofav({"camp_id":id}).then(function (data) {
            
            //self.getCampaignRewards()
            self.showLoader = false;                       
            console.log(data);
            createAlertSucc(data);
            //self.getallFav()

        }, function (data) {
            self.showLoader = false;
            createAlertSucc(data);

        })
        }
        
    }

    

    self.gotoPayment = function(camp_id){
        if(!self.is_session_verified){
            createAlertErr("Please login to add to invest in this campaign.");
            return
        }
        if(self.loggedInUserData.inv_profile.length){
            createAlertSucc("Please wait..")
            $state.go('home.payout',{ referer:'jimbob', camp_id:camp_id,inv_amt:self.selectedCampDetails.min_inv })
        }
        else{
            createAlertErr("Please create investors profile before investing. If already created please re-login.")
        }
        
    }

    self.investcustomamount = function(camp_id,amount){
        if(!self.is_session_verified){
            createAlertErr("Please login to add to invest in this campaign.");
            return
        }
        
        $state.go('home.payout',{ referer:'jimbob', camp_id:camp_id,inv_amt:amount })
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

  

    self.getDiffData = function(end_date){
        var a = moment();
        var b = moment(end_date);
        //b.diff(a, 'days') // 1
        let tempdiff = b.diff(a, 'days');
        return tempdiff < 0 ? 0:tempdiff ;
    }   

    //self.getCampUpdate 
    self.getCampUpdate = function(){
        self.allCampUpdate=[];
        self.showLoader = true;
        apiService.getCampUpdate({"camp_id":self.selectedCampDetails.camp_id}).then(function (data) {            
            self.showLoader = false;                       
            console.log(data);
            self.allCampUpdate= data;
        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }


    self.calculatePaginationTrans = function () {
        self.paginationTrans = [];
        
        self.total_pagesTrans = Math.ceil(self.total_rowsTrans / 10);

        for (i = 1; i <= self.total_pagesTrans; i++) {
            self.paginationTrans.push(i);
        }

    }

    self.findDataByPaginationTrans = function (type, new_number) {

        if (type == 'num' && self.currentPageNumberTrans != new_number) {
            self.currentPageNumberTrans = new_number;
            self.getAllComments(false)
        } else if (type == 'next') {
            if (self.currentPageNumberTrans < self.paginationTrans.length) {
                self.currentPageNumberTrans++;
                self.getAllComments(false)
            }
        } else if (type == 'prev') {
            if (self.currentPageNumberTrans > 1) {
                self.currentPageNumberTrans--;
                self.getAllComments(false)
            }
        }
    }

    self.getAllComments = function(calulatePage){
        self.allCampUpdateComm=[];
        self.showLoader = true;
        if(calulatePage){
            self.currentPageNumberTrans=1
        }
        apiService.findAllComments({"camp_id":self.selectedCampDetails.camp_id,"page_no":self.currentPageNumberTrans}).then(function (data) {            
            self.showLoader = false;                       
            console.log(data);
            self.allCampUpdateComm= data;
            if (calulatePage) {
                    self.total_rowsTrans = data.total_records;
                    self.calculatePaginationTrans();
            
                     }
        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }


    self.initiateCommentModal = function(referer,comment_id){
        self.newCommentadd = {
            newComment:'',
            camp_id:self.selectedCampDetails.camp_id,
            comment_id:comment_id
        }
    }
    

    self.addNewCommentfun = function(){
        if(!self.is_session_verified){
            createAlertErr("PLEASE LOGIN TO POST COMMENTS")
            return
        }
        self.showLoader=true;
        apiService.addNewComment({
            comment:self.newCommentadd.newComment,camp_id:self.newCommentadd.camp_id,comment_id:self.newCommentadd.comment_id
        }).then(function(data){
            self.getAllComments(true);
            self.newCommentadd = {
                newComment:'',
                camp_id:null,
                comment_id:null
            }
            self.showLoader=false;
            createAlertSucc("New comment has been added");
        },function(data){
            self.showLoader=false;
            createAlertSucc(data)
        })
    }

    self.logout = function(){
        $ngConfirm({
            title: 'Logout',
            content: 'Are you sure, you want to logout of the application ?',
            icon: 'fa fa-question-circle',
            animation: 'scale',
            closeAnimation: 'scale',
            opacity: 0.5,
            buttons: {
                'Confirm': {
                    text: 'Proceed',
                    btnClass: 'btn-primary',
                    action: function () {
                        //authService.setCurrentUser({});
                        authService.logout();
                        $state.go('login');
                    }
                },
                cancel: function () {
                    
                }
            }
        })
    
        
    }
    


    self.init();



}])