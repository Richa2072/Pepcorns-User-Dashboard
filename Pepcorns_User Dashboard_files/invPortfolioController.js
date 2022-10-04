app.controller('invPortfolioController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm){
    var self = $scope;
    self.verifyEmail={};
    self.loggedInUserData = authService.getCurrentUser();
    console.log("login data",self.loggedInUserData)
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
    self.allTransOfInv = [];
    
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
        apiService.getmyportfolio({
            "page_no": self.currentPageNumber,
            "search_text":self.search_text.text,
            "type":self.submenuIndex
        }).then(function (data) {

            self.showLoader = false;
            self.allPitchData = data.data;

            
            if (calulatePage) {
                self.total_rows = data.total_records;
                self.calculatePagination();

            }
            self.getallFav()
        }, function (data) {
            self.showLoader = false;

        })
    }

    

    

    self.getallTransInv = function(){
        self.allTransOfInv = [];
        self.showLoader = true;  
        apiService.getallTransInv({"camp_id":self.selectedCampDetails.camp_id}).then(function (data) {
            
            self.allTransOfInv = data;
            self.showLoader = false;           
            
            console.log(data);
            

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

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
            self.getallTransInv();
           

        }, function (data) {
            self.showLoader = false;
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


    // self.getAllTransByCampId=function(calulatePage){
    //     self.showLoader = true;
    //     if(calulatePage){
    //         self.currentPageNumberTrans=1
    //     }
    //     apiService.getAllTransByCampId({
    //         "page_no": self.currentPageNumberTrans,
    //         "camp_id":self.selectedCampDetails.camp_id
    //     }).then(function (data) {

    //         self.showLoader = false;
    //         self.allTranactionData = data.data;
            
    //         if (calulatePage) {
    //             self.total_rowsTrans = data.total_records;
    //             self.calculatePaginationTrans();

    //         }
    //     }, function (data) {
    //         self.showLoader = false;

    //     })
    // }
    // self.calculatePaginationTrans = function () {
    //     self.paginationTrans = [];
    //     
    //     self.total_pagesTrans = Math.ceil(self.total_rowsTrans / 10);

    //     for (i = 1; i <= self.total_pagesTrans; i++) {
    //         self.paginationTrans.push(i);
    //     }

    // }

    // self.findDataByPaginationTrans = function (type, new_number) {

    //     if (type == 'num' && self.currentPageNumberTrans != new_number) {
    //         self.currentPageNumberTrans = new_number;
    //         self.getAllTransByCampId(false)
    //     } else if (type == 'next') {
    //         if (self.currentPageNumberTrans < self.paginationTrans.length) {
    //             self.currentPageNumberTrans++;
    //             self.getAllTransByCampId(false)
    //         }
    //     } else if (type == 'prev') {
    //         if (self.currentPageNumberTrans > 1) {
    //             self.currentPageNumberTrans--;
    //             self.getAllTransByCampId(false)
    //         }
    //     }
    // }


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

            //segrigation of api depending upon what screen  user click on
            // if (index == 2) {
            //     //self.getCampaignRewards()
            //     //get rewards points
            //     //self.get_rewards_earned_on_order()

            // } else if (index == 4) {
            //     //billing and invoice
            //     //self.find_all_invoices_by_order_id();
            // } else if (index == 5) {
            //     //logistics
            //     //self.find_all_loading_sheet();
            // }

            self.submenuIndex = index;
            self.findAllPitches()
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

            //segrigation of api depending upon what screen  user click on
            // if (index == 2) {
            //     //self.getCampaignRewards()
            //     //get rewards points
            //     //self.get_rewards_earned_on_order()

            // } else if (index == 4) {
            //     //billing and invoice
            //     //self.find_all_invoices_by_order_id();
            // } else if (index == 5) {
            //     //logistics
            //     //self.find_all_loading_sheet();
            // }

            self.submenuIndex1 = index;
            //self.findAllPitches()
        }
    }


    

    // self.newSchemeRuleformSubmit= function(){
    //     self.showLoader = true;
        
    //     apiService.createCampaignRewards({
    //         "min_amount": self.new_schemes_rule.min_amount,
    //         "max_amount": self.new_schemes_rule.max_amount,
    //         "comparator":self.new_schemes_rule.comparator,
    //         "reward":self.new_schemes_rule.description,
    //         "tnc":self.new_schemes_rule.tnc,
    //         "camp_id":self.selectedCampDetails.camp_id
    //     }).then(function (data) {
    //         self.setSubMenuIndex(2)
    //         self.showLoader = false;
    //        createAlertSucc("Rewards Added successfully");
    //        self.getCampaignRewards()
    //     }, function (data) {
    //         self.showLoader = false;

    //     })
    // }


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

    // self.toggleCampaignRewards = function(id){
    //     self.showLoader = true;  
    //     apiService.toggleCampaignRewards({"reward_id":id}).then(function (data) {
            
    //         self.getCampaignRewards()
    //         self.showLoader = false;           
            
    //         console.log(data);
            

    //     }, function (data) {
    //         self.showLoader = false;
    //         createAlertErr(data)

    //     })
    // }

    //addtofav
    self.addtofav = function(id){
        self.showLoader = true;  
        apiService.addtofav({"camp_id":id}).then(function (data) {
            
            //self.getCampaignRewards()
            self.showLoader = false;                       
            console.log(data);
            createAlertSucc(data);
            self.getallFav()

        }, function (data) {
            self.showLoader = false;
            createAlertSucc(data);

        })
    }

    self.getallFav = function(){
        //self.showLoader = true;  
        // apiService.getallFav({}).then(function (data) {
            
        //     //self.getCampaignRewards()
        //     self.showLoader = false;  
        //     self.allFavorites=[];
        //     data.forEach(element => {
        //         self.allFavorites.push(element.camp_id)
        //     });
        //     //self.allFavorites = data;
        //     //                    
        //     //console.log(data);
        //     //createAlertSucc(data);            
        // }, function (data) {
        //     //self.showLoader = false;
        //     //createAlertSucc(data);

        // })
    }

    self.isAddedTofav = function(id){
        //Array.IndexOf
        
        //;
        console.log(self.allFavorites)
        
        var is_fav = self.allFavorites.includes(id);
        return is_fav
    }

    self.gotoPayment = function(camp_id){
        if(self.loggedInUserData.inv_profile.length){
            createAlertSucc("Please wait..")
            $state.go('home.payout',{ referer:'jimbob', camp_id:camp_id,inv_amt:self.selectedCampDetails.min_inv })
        }
        else{
            createAlertErr("Please create investors profile before investing. If already created please re-login.")
        }
        
    }

    self.investcustomamount = function(camp_id,amount){
        
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
        return (b.diff(a, 'days'));
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

    


    self.init();



}])