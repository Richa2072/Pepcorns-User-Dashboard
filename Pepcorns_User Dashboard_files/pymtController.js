app.controller('pymtController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm){
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
            self.getAllTransByCampId(true)
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
        apiService.getAllCampaign({
            "page_no": self.currentPageNumber,
            "search_text":self.search_text.text
        }).then(function (data) {

            self.showLoader = false;
            self.allPitchData = data.data;
            
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
            self.getAllTransByCampId(true);
           

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })

    }

    self.togglePitch = function(id){
        
        $ngConfirm({
            title: 'Change Status',
            type: 'green',
            content: 'Are you sure , you want to continue ?',
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
                        apiService.togglePitch({
                            "pitch_id": id
                        }).then(function (data) {
                            self.showLoader=false;
                            self.findAllPitches(true)
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
    self.initiateCreateCampign=function(){
        self.setPageNum(4);
    }

    self.convertNumberToWords=function convertNumberToWords(amount) {
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    },


    //function to create campaign - first check for validation fields and then pass to api service
    self.createCampaign= function(){
        

        console.log(moment(self.addnewCamp.end_date).diff(self.addnewCamp.start_date, 'days'))
        if((moment(self.addnewCamp.end_date).diff(self.addnewCamp.start_date, 'days') > 60)){
            createAlertErr("Campaings can only be run for maximum of 60 days");
            return false
        }
        else if((moment(self.addnewCamp.end_date).diff(self.addnewCamp.start_date, 'days') < 30)){
            createAlertErr("Campaings can only be run for minimum of 30 days");
            return false
        }
        else if((self.addnewCamp.min_raise) > (self.addnewCamp.max_raise)){
            createAlertErr("Maximum raise can not be less than minimum raise");
            return false
        }
        else if((self.addnewCamp.target_raise) > (self.addnewCamp.max_raise)){
            createAlertErr("Target raise amount should be equal or less than max raise amount");
            return false
        }

        else if((self.addnewCamp.target_raise) < (self.addnewCamp.min_raise)){
            createAlertErr("Target raise amount should be greater than min raise amount");
            return false
        }
        else{
            
            self.showLoader=true;
            self.addnewCamp.pitch_id=self.selectedPitchDetails.id;
            apiService.createCampaign(self.addnewCamp).then(function (data) {
                
                self.selectedPitchDetails.allcampaigns
                       
                self.setPageNum(2);
                console.log(data);
                createAlertSucc("Campaign scheduled successfully.")
                self.getAllCampaignByPitch();
                self.showLoader = false;    

            }, function (data) {
                self.showLoader = false;
                createAlertErr(data)

            })
        }
        
    }


    self.getAllCampaignByPitch = function(){
        apiService.getAllCampaignByPitch({"pitch_id":self.selectedPitchDetails.id}).then(function (data) {
            
            self.selectedPitchDetails.allcampaigns = data.data;
            self.showLoader = false;           
            
            console.log(data);
            console.log(self.selectedPitchDetails)

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }

    self.fetch_gst_data= function(){
        $http.get('https://app.pepcorns.com/assets/js/states.json').then(function(response) {
            //;
            self.states_data_json = response.data.states;
            self.addnewPitch.state = response.data.states[16];
            //self.createDealerAddress.state = response.data.states[16];
            self.input_state_modified(self.addnewPitch.state)
            
         });
         self.showLoader=false;
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


    self.getAllTransByCampId=function(calulatePage){
        self.showLoader = true;
        if(calulatePage){
            self.currentPageNumberTrans=1
        }
        apiService.getAllTransBypoc({
            "page_no": self.currentPageNumberTrans,
            
        }).then(function (data) {

            self.showLoader = false;
            self.allTranactionData = data.data;
            
            if (calulatePage) {
                self.total_rowsTrans = data.total_records;
                self.calculatePaginationTrans();

            }
        }, function (data) {
            self.showLoader = false;

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
            self.getAllTransByCampId(false)
        } else if (type == 'next') {
            if (self.currentPageNumberTrans < self.paginationTrans.length) {
                self.currentPageNumberTrans++;
                self.getAllTransByCampId(false)
            }
        } else if (type == 'prev') {
            if (self.currentPageNumberTrans > 1) {
                self.currentPageNumberTrans--;
                self.getAllTransByCampId(false)
            }
        }
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

            //segrigation of api depending upon what screen  user click on
            if (index == 2) {
                self.getCampaignRewards()
                //get rewards points
                //self.get_rewards_earned_on_order()

            } else if (index == 4) {
                //billing and invoice
                //self.find_all_invoices_by_order_id();
            } else if (index == 5) {
                //logistics
                //self.find_all_loading_sheet();
            }

            self.submenuIndex = index;
        }
    }
    

    self.newSchemeRuleformSubmit= function(){
        self.showLoader = true;
        
        apiService.createCampaignRewards({
            "min_amount": self.new_schemes_rule.min_amount,
            "max_amount": self.new_schemes_rule.max_amount,
            "comparator":self.new_schemes_rule.comparator,
            "reward":self.new_schemes_rule.description,
            "tnc":self.new_schemes_rule.tnc,
            "camp_id":self.selectedCampDetails.id
        }).then(function (data) {
            self.setSubMenuIndex(2)
            self.showLoader = false;
           createAlertSucc("Rewards Added successfully");
           self.getCampaignRewards()
        }, function (data) {
            self.showLoader = false;

        })
    }


    self.getCampaignRewards = function(){
        self.showLoader = true;  
        apiService.getCampaignRewards({"camp_id":self.selectedCampDetails.id}).then(function (data) {
            
            self.allRewardsCamp = data;
            self.showLoader = false;           
            
            console.log(data);
            

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }

    self.toggleCampaignRewards = function(id){
        self.showLoader = true;  
        apiService.toggleCampaignRewards({"reward_id":id}).then(function (data) {
            
            self.getCampaignRewards()
            self.showLoader = true;           
            
            console.log(data);
            

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })
    }

    self.init();



}])