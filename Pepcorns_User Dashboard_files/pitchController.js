app.controller('pitchController', ['$scope','$state','$http','apiService','authService','$compile','Upload','CONSTANT','$ngConfirm',function($scope,$state,$http,apiService,authService,$compile,Upload,CONSTANT,$ngConfirm){
    var self = $scope;
    self.verifyEmail={};
    self.pagenum = 1;
    self.processingData = false;
    self.showLoader=false;
    self.is_session_verified=false;
    self.pagenum = 1;
    self.selectedPitch={};
    self.currentPageNumber = 1;
    self.total_rows=0;
    self.pagination = [];
    self.allPitchData=[];
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
    self.selectedPitchDetails=[];
    self.states_data_json=[];
    //new campaign
    self.addnewCamp={
        view_type:"1",
        start_date:moment().format('YYYY-MM-DD hh:mm:ss'),
        end_date:moment().add(15,'days').format('YYYY-MM-DD hh:mm:ss'),
        todays_date:moment().add(0,'days').format('YYYY-MM-DD hh:mm:ss'),
    }

    self.updatePitch = {};
    

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

    function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
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
      
      function isDocument(filename) {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'pdf':
          case 'ppt':
          case 'jpg':
          case 'png':
          
            return true;
        }
        return false;
      }


      function isExceedingSize(file){
        alert(parseFloat(fileUpload.files[0].size / 1024).toFixed(2))

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
        apiService.getAllPitch({
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

    self.getCountries=function(){
        apiService.countries({

        }).then(function (data) {
            self.allavailCountries=data
            self.showLoader = false;
           console.log(data)
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.getCompanyTags=function(){
        apiService.categories({

        }).then(function (data) {
            self.allCompanyTags=data
            self.showLoader = false;
           console.log(data)
        }, function (data) {
            self.showLoader = false;

        })
    }

    self.faqs = function(){
        apiService.faqs({

        }).then(function (data) {
            self.allFaqs=data;
            self.allFaqs.forEach((el)=>{
                el.value=""
            })
            self.showLoader = false;
           console.log(data)
        }, function (data) {
            self.showLoader = false;

        })
    }
    
    self.fetch_gst_data= function(){
        $http.get('https://app.pepcorns.com/assets/js/states.json').then(function(response) {
            //;
            self.states_data_json = response.data.states;
            self.addnewPitch.state = response.data.states[16];            
            self.input_state_modified(self.addnewPitch.state)
            
         });
    }


    self.input_state_modified= function(x){
        self.addnewPitch.city='';
        
        self.autoSuggestCities=[];
        var suggestionsFortheStateFound = _.find(self.states_data_json, function(o) { return o.id == x.id; });
        ;   
        self.autoSuggestCities = suggestionsFortheStateFound.city;
        
    }

    self.toggletagsSelect = function(tag_id){
        
        console.log(self.selectedCmpnyTags.indexOf(tag_id))
        let temp_found=self.selectedCmpnyTags.indexOf(tag_id);
        if(temp_found < 0){
            if(self.selectedCmpnyTags.length > 2){
                createAlertErr("Only 3 tags are allowed");
                return 
            }
            self.selectedCmpnyTags.push(tag_id)
        }else{
            self.selectedCmpnyTags.splice(temp_found,1);
        }        
        console.log(temp_found)
    }
    self.istagSelectedadded = function(tag_id){
        let temp_found=self.selectedCmpnyTags.indexOf(tag_id);
        if(temp_found < 0){
            return false
        }
        else{
            return true
        }
    }

    self.createNewPitch = function(){
        self.resetCreatePitch();
        
        self.getCountries();
        //self.fetch_gst_data();
        self.getCompanyTags();
        self.faqs();
        self.setPageNum(3);
       // self.fetch_gst_data()
        
    }


    self.togglecreateDActionPageType= function(type){
        if(type == 'next'){
            if((self.createDActionPageType == self.createDActionPageTypeMax ) || (self.createDActionPageType > self.createDActionPageTypeMax )){
                createAlertErr("No further process allowed")
            }
            else{
                if(self.sanity_check_form(self.createDActionPageType)){
                    self.createDActionPageType++;
                }                                
            }
        }
        if(type == 'prev'){
            if((self.createDActionPageType == 1 ) || (self.createDActionPageType < 1 )){
                createAlertErr("Not allowed")
            }
            else{
                self.createDActionPageType--;
            }
        }

        if(self.createDActionPageType==2){
           // self.sales_tags()
        }
       

    }
    self.sanity_check_form= function(currpage){
        if(currpage == 1){
            self.addnewPitch.pitchtitle = "-"
            // if(!self.addnewPitch.pitchtitle){
            //     createAlertErr("Plese add pitch title.Make sure its intresting , thats the first anyones gonna read.");
            //     return false
            // }
            
            console.log(self.addnewPitch.website.indexOf("http://") == 0);
            console.log(self.addnewPitch.website.indexOf("https://") == 0);
             if((!self.addnewPitch.companyname)){
                createAlertErr("Company name is mandatory.Please add");
                return false
            }
            else if((self.addnewPitch.iscompregistered) && (!self.addnewPitch.companypan)){
                createAlertErr("Company PAN/CIN is madatory when your company is a registered entity.");
                    return false   
                 }
                 else if((self.addnewPitch.iscompregistered) && (!self.addnewPitch.companydoi)){
                    createAlertErr("Company Date of Incorporation is madatory when your company is a registered entity");
                    return false
                }
                else if((self.addnewPitch.iscompregistered) && (!self.addnewPitch.pitchCertificateOfIncFileUrl)){
                    createAlertErr("Company Certificate of Incorporation is madatory when your company is a registered entity");
                    return false
                }
                // else if(!self.addnewPitch.pitchCertificateOfIncFileUrl){
                //     createAlertErr("Company Certificate of Incorporation is madatory when your company is a registered entity");
                //     return false
                // }
                // else{
                //     continue
                // }
                
                
            

            else if(!self.addnewPitch.website){
                createAlertErr("Please add a website.")
                return false
            }
            
            else if(!((self.addnewPitch.website.indexOf("http://") == 0) || (self.addnewPitch.website.indexOf("https://") == 0))){
                createAlertErr("Please enter a valid webiste url.URL should have http// or https://")
                return false
            }
            else if(!self.addnewPitch.country){
                createAlertErr("Please choose country to proceed.")
                return false
            }
            else if((!self.addnewPitch.state)){
                createAlertErr("Please select a state")
                return false
            }
            else if((!self.addnewPitch.city)){
                createAlertErr("Please select a city.")
                return false
            }           
            else{
                return true
            }

        }
        else if(currpage == 2){
            
            if((self.addnewPitch.hasPitchDeck) && (!self.addnewPitch.pitchDeckFileUrl)){
                createAlertErr("Please upload your pitch deck in pdf/ppt format.Maximum allowed size is 200Kb");
                return false
            }
            
            else if((!self.addnewPitch.hasPitchDeck) && (!self.addnewPitch.customPitch)){
                createAlertErr("Please submit a pitch deck to continue or upload your pitch deck in pdf/ppt format.");
                return false
            }
            else if(self.selectedCmpnyTags.length == 0 ){
                createAlertErr("Please select atleast one tag relevant to your pitch.");
                return false
            }
            else if(!self.addnewPitch.describehowusefunds){
                createAlertErr("Please describe how are you planning to use funds.");
                return false
            } 
            else{
                return true
            }
        }else if(currpage == 3){
            if((!self.addnewPitch.pitchFeatureImageFileUrl )|| (!self.addnewPitch.pitchFeatureLogoFileUrl)){
                createAlertErr("Please upload feature image and logo to proceed.");
                return false
            }
            else{
                return true
            }
        }else if(currpage == 4){
            self.submitPitchForm()
        }
        else{
            return true
            //self.createPitchNow()
        }
        

    }


    self.submitPitchForm=function(){
        self.showLoader=true;
        console.log(self.addnewPitch);
        self.addnewPitch.faqs=self.allFaqs;
        self.addnewPitch.pitchTags=self.selectedCmpnyTags;
        console.log(self.allFaqs)
        apiService.createPitch(self.addnewPitch).then(function (data) {
            createAlertSucc("Pitch Created successfully")
            self.resetCreatePitch();
            self.showLoader = false;           
            self.setPageNum(1);
            console.log(data);

        }, function (data) {
            self.showLoader = false;
            createAlertErr(data)

        })

    }

    self.resetCreatePitch=()=>{
        self.addnewPitch={};
        self.addnewPitch.country="1";
        self.createDActionPageType=1;
    }

    self.uploadPitchDeck = function(){
        console.log(self.addnewPitch)
        if(!self.addnewPitch.pitchDeckFile){
            createAlertErr("Please select a file first.Then click on upload");
        }
        else{
            if(isDocument(self.addnewPitch.pitchDeckFile.name)){
                self.uploadDocumentsNewPitch(self.addnewPitch.pitchDeckFile,1)
            }
            else{
                createAlertErr("Acceptable formats for pitch deck are jpg/ppt/pdf");
            }
            
        }
    }

    self.uploadPitchFeatureImage=function(){
        console.log(self.addnewPitch)
        if(!self.addnewPitch.pitchFeatureImageFile){
            createAlertErr("Please select a image first.Then click on upload");
        }
        else{
            if(isImage(self.addnewPitch.pitchFeatureImageFile.name)){
                self.uploadDocumentsNewPitch(self.addnewPitch.pitchFeatureImageFile,2)
            }
            else{
                createAlertErr("Please select a file of type image");
            }
            
        }
    }

    self.uploadpitchFeatureLogoFile=function(){
        console.log(self.addnewPitch)
        if(!self.addnewPitch.pitchFeatureLogoFile){
            createAlertErr("Please select a image first.Then click on upload");
        }
        else{
            if(isImage(self.addnewPitch.pitchFeatureLogoFile.name)){
                self.uploadDocumentsNewPitch(self.addnewPitch.pitchFeatureLogoFile,3)
            }
            else{
                createAlertErr("Please select a file of type of image.");
            }
            
        }
    }

    self.uploadpitchFeatureSupportFile=function(){
        console.log(self.addnewPitch)
        if(!self.addnewPitch.pitchFeatureSupportFile){
            createAlertErr("Please select a image first.Then click on upload");
        }
        else{
            if(isDocument(self.addnewPitch.pitchFeatureSupportFile.name)){
                self.uploadDocumentsNewPitch(self.addnewPitch.pitchFeatureSupportFile,4)
            }
            else{
                createAlertErr("Please select a file of type of image/pdf/ppt.");
            }
            
        }
    }

    self.uploadpitchCertificateOfInc=function(){
        console.log(self.addnewPitch)
        if(!self.addnewPitch.pitchCertificateOfIncFile){
            createAlertErr("Please select a image first.Then click on upload");
        }
        else{
            if(isDocument(self.addnewPitch.pitchCertificateOfIncFile.name)){
                
                self.uploadDocumentsNewPitch(self.addnewPitch.pitchCertificateOfIncFile,5)
            }
            else{
                createAlertErr("Please select a file of type of image.");
            }
            
        }
    }


    self.uploadDocumentsNewPitch = function (filelocation,type) {
        createAlertSucc("Please wait ...");
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
                    self.addnewPitch.pitchDeckFileUrl=resp.data.response;
                }
                else if(type == 2){
                    self.addnewPitch.pitchFeatureImageFileUrl= resp.data.response;
                }
                else if(type==3){
                    self.addnewPitch.pitchFeatureLogoFileUrl = resp.data.response
                }
                else if(type==4){
                    self.addnewPitch.pitchFeatureSupportFileUrl = resp.data.response
                }
                else if(type==5){
                    self.addnewPitch.pitchCertificateOfIncFileUrl = resp.data.response
                }

                createAlertSucc("file uploaded successfully.");
                               
            }
        }, function (resp) { //catch error

            createAlertErr("", "Image upload failed.Please try other image");
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        });

    }
    

    self.getPitchById = function(id){
        self.showLoader=true;
        self.selectedPitchDetails=[];
        apiService.getPitchById({"pitch_id":id}).then(function (data) {
            
            self.selectedPitchDetails=data.data[0];
            self.showLoader = false;           
            self.setPageNum(2);
            console.log(data);
            console.log(self.selectedPitchDetails);
            self.getAllCampaignByPitch()

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

   self.updatePitchForm = function(){
       self.showLoader=true;
    self.updatePitch = {};
    apiService.getPitchById({"pitch_id":self.selectedPitchDetails.id}).then(function (data) {
            
        self.updatePitch=data.data[0];
        self.showLoader = false;           
        self.setPageNum(5);
        console.log(data);
        //console.log(self.selectedPitchDetails);
        //self.getAllCampaignByPitch()

    }, function (data) {
        self.showLoader = false;
        createAlertErr(data)

    })
   }


   self.uploadPitchDeckUpdate = function(){
    console.log(self.updatePitch)
    if(!self.updatePitch.pitchDeckFile){
        createAlertErr("Please select a file first.Then click on upload");
    }
    else{
        if(isDocument(self.updatePitch.pitchDeckFile.name)){
            self.uploadDocumentsupdate(self.updatePitch.pitchDeckFile,1)
        }
        else{
            createAlertErr("Acceptable formats for pitch deck are jpg/ppt/pdf");
        }
        
    }
}

   self.uploadPitchFeatureImageUpdate=function(){
    console.log(self.updatePitch)
    if(!self.updatePitch.pitchFeatureImageFile){
        createAlertErr("Please select a image first.Then click on upload");
    }
    else{
        if(isImage(self.updatePitch.pitchFeatureImageFile.name)){
            self.uploadDocumentsupdate(self.updatePitch.pitchFeatureImageFile,2)
        }
        else{
            createAlertErr("Please select a file of type image");
        }
        
    }
}

self.uploadpitchFeatureLogoFileUpdate=function(){
    console.log(self.updatePitch)
    if(!self.updatePitch.pitchFeatureLogoFile){
        createAlertErr("Please select a image first.Then click on upload");
    }
    else{
        if(isImage(self.updatePitch.pitchFeatureLogoFile.name)){
            self.uploadDocumentsupdate(self.updatePitch.pitchFeatureLogoFile,3)
        }
        else{
            createAlertErr("Please select a file of type of image.");
        }
        
    }
}

self.uploadpitchFeatureSupportFileUpdate=function(){
    console.log(self.updatePitch)
    if(!self.updatePitch.pitchFeatureSupportFile){
        createAlertErr("Please select a image first.Then click on upload");
    }
    else{
        if(isDocument(self.updatePitch.pitchFeatureSupportFile.name)){
            self.uploadDocumentsupdate(self.updatePitch.pitchFeatureSupportFile,4)
        }
        else{
            createAlertErr("Please select a file of type of image/pdf/ppt.");
        }
        
    }
}

self.uploadDocumentsupdate = function (filelocation,type) {
    createAlertSucc("Please wait ...");
    Upload.upload({
        headers : {uploadType:type,pitch_id:self.updatePitch.id},
        url: CONSTANT.base_api_url + 'api/v1/comp/uploadDocumentsupdate',
        data: {
            file: filelocation,
            "type":type
        }
    }).then(function (resp) {
        //upload function returns a promise
        if (resp.data.error_status === false) { //validate success

            console.log(resp.data.response);
            
            // if(type == 1){
            //     self.addnewPitch.pitchDeckFileUrl=resp.data.response;
            // }
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

            createAlertSucc("file uploaded successfully.");
                           
        }
    }, function (resp) { //catch error

        createAlertErr("", "File upload failed.Please try other image");
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        createAlertSucc("",progressPercentage + "% uploaded" );
    });

}


self.updatePitchFun = function(){
    self.showLoader=true;
    apiService.updatePitch(self.updatePitch).then(function (data) {
            
        
        self.showLoader = false;           
        self.getPitchById(self.updatePitch.id)
        console.log(data);
        createAlertSucc("Pitch Updated successfully")

    }, function (data) {
        self.showLoader = false;
        createAlertErr(data)

    })
}
    

    

    self.init();



}])