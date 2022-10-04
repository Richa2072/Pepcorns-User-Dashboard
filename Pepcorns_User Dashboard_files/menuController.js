app.controller('menuController', ['$scope','$state','authService','$window','$ngConfirm','apiService',function($scope,$state,authService,$window,$ngConfirm,apiService){
        
    


    var self = $scope;
    
    self.loggedIndata = authService.getCurrentUser();
    self.allnewNotifications = [];
    console.log(self.loggedIndata)
    
    self.selectedMenu = 0;
    // 
    // if (self.loggedIndata == null) {
    //     self.loggedIndata = {};
    // }
    // if (Object.keys(self.loggedIndata).length === 0 && self.loggedIndata.constructor === Object) {
    //     
    //     $state.go('login');
    // } else {

    //     if (self.loggedIndata.name != null || self.loggedIndata.name != undefined) {
    //         
    //        // $state.go('home.dashboard');
    //     }
    // }
   

    self.init = function(){
        self.findAllNotifications();
        if(authService.isLoggedIn()){
            //$state.go('home.dashboard');
            self.findAllNotifications()
        }
        else{
            $state.go('login')
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

    self.gotoMenu = function(link){
        
        
    }

    self.set_menu_active = function(id){
        self.selectedMenu = id
    }


    self.permission_to_view = function(menu_id){
        var is_allowed_to_view = authService.userHasPermission_to_view(2,menu_id)
        return is_allowed_to_view;
    }

    var counter = 0;
    self.hide_menu =function(){
        counter++;
        
        // document.body.className.replace("g-sidenav-pinned","");
        var element = document.getElementsByTagName("BODY")[0];
        
        if(counter % 2 == 0){
            $('.sidenav-toggler').removeClass('active');
            $('.sidenav-toggler').data('action', 'sidenav-pin');
            $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
            $('body').find('.backdrop').remove();
    
            // Store the sidenav state in a cookie session
            Cookies.set('sidenav-state', 'unpinned');
        }
        else{
            $('.sidenav-toggler').addClass('active');
            $('.sidenav-toggler').data('action', 'sidenav-unpin');
            $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
            $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');
    
            // Store the sidenav state in a cookie session
            Cookies.set('sidenav-state', 'pinned');
        }
        
    }

    var Layout = (function() {

        function pinSidenav() {
            $('.sidenav-toggler').addClass('active');
            $('.sidenav-toggler').data('action', 'sidenav-unpin');
            $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
            $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');
    
            // Store the sidenav state in a cookie session
            Cookies.set('sidenav-state', 'pinned');
        }
    
        function unpinSidenav() {
            $('.sidenav-toggler').removeClass('active');
            $('.sidenav-toggler').data('action', 'sidenav-pin');
            $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
            $('body').find('.backdrop').remove();
    
            // Store the sidenav state in a cookie session
            Cookies.set('sidenav-state', 'unpinned');
        }
    
        // Set sidenav state from cookie
    
        var $sidenavState = Cookies.get('sidenav-state') ? Cookies.get('sidenav-state') : 'pinned';
    
        if($(window).width() > 1200) {
            if($sidenavState == 'pinned') {
                pinSidenav()
            }
    
            if(Cookies.get('sidenav-state') == 'unpinned') {
                unpinSidenav()
            }
        }
    
        $("body").on("click", "[data-action]", function(e) {
    
            e.preventDefault();
    
            var $this = $(this);
            var action = $this.data('action');
            var target = $this.data('target');
    
    
            // Manage actions
    
            switch (action) {
                case 'sidenav-pin':
                    pinSidenav();
                break;
    
                case 'sidenav-unpin':
                    unpinSidenav();
                break;
    
                case 'search-show':
                    target = $this.data('target');
                    $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-showing');
    
                    setTimeout(function() {
                        $('body').removeClass('g-navbar-search-showing').addClass('g-navbar-search-show');
                    }, 150);
    
                    setTimeout(function() {
                        $('body').addClass('g-navbar-search-shown');
                    }, 300)
                break;
    
                case 'search-close':
                    target = $this.data('target');
                    $('body').removeClass('g-navbar-search-shown');
    
                    setTimeout(function() {
                        $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-hiding');
                    }, 150);
    
                    setTimeout(function() {
                        $('body').removeClass('g-navbar-search-hiding').addClass('g-navbar-search-hidden');
                    }, 300);
    
                    setTimeout(function() {
                        $('body').removeClass('g-navbar-search-hidden');
                    }, 500);
                break;
            }
        })
    
    
        // Add sidenav modifier classes on mouse events
    
        $('.sidenav').on('mouseenter', function() {
            if(! $('body').hasClass('g-sidenav-pinned')) {
                $('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');
            }
        })
    
        $('.sidenav').on('mouseleave', function() {
            if(! $('body').hasClass('g-sidenav-pinned')) {
                $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');
    
                setTimeout(function() {
                    $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
                }, 300);
            }
        })
    
    
        // Make the body full screen size if it has not enough content inside
        $(window).on('load resize', function() {
            if($('body').height() < 800) {
                $('body').css('min-height', '100vh');
                $('#footer-main').addClass('footer-auto-bottom')
            }
        })
    
    })();


    self.findAllNotifications = function(){
        apiService.findAllNotifications({
            // "page_no": self.currentPageNumber,
            // "search_text":self.search_text.text
        }).then(function (data) {

            //self.showLoader = false;
            self.allnewNotifications = data;
            
            
        }, function (data) {
            //self.showLoader = false;

        })
    }

    self.actionOnNotification = function(x){
        
        if(x.type == 11 ){
            $state.go('home.settings')
        }
        else if(x.type == 12 || x.type == 13){
            createAlertSucc("Plese relogin to refresh access to dashboard.If issue still persists please contact support");
        }
        else if(x.type == 14){
            $state.go('home.pitch')
        }
        else if(x.type == 15){
            $state.go('home.campaign')
        }
        else if(x.type == 16){
            $state.go('home.pymt')
        }
        else if(x.type == 17){
            $state.go('home.campaign')
        }
    }

    self.init();


}])