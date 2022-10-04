var app = angular.module("app", ['ui.router', 'angular-storage', 'chart.js', '720kb.datepicker', 'ngFileUpload', 'cp.ngConfirm', 'ngSanitize', 'textAngular','youtube-embed'])
    .run(function () {
        var tag = document.createElement('script');
        tag.src = "//www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })
    .service('authService', function (store, $rootScope,$location) {
        var service = this,
            currentUser = null;

        // service.init = function () {
        //     if (service.isLoggedIn()) {
        //         ;
        //         $rootScope.dealerConnect_dev = service.getCurrentUser();
        //     }
        // };
        service.setCurrentUser = function (user) {
            console.log(user)
            currentUser = user;
            store.set('pepcornsuser', user);            
            return currentUser;
        };
        service.getCurrentUser = function () {
            if (!currentUser) {
                currentUser = store.get('pepcornsuser');
            }
            return currentUser;
        };

        service.isLoggedIn = function () {
            
            return service.getCurrentUser() != null;
        };

        service.logout = function () {
            service.setCurrentUser(null);
            
            //$rootScope.dealerConnect_dev = null;
            $location.path("/login");
        };

        service.userHasPermission_to_view= function(type,id){
            if(!service.isLoggedIn()){
                return false;
            }
            else{
                return true
            }
             
            // var found = false;
            // var temp_curr_data = service.getCurrentUser();
            // if(temp_curr_data.user_role.ACCESS_LEVEL == 'DEFAULT'){
            //     found = true;
            //     return found;    
            // }
            
             
            
        };

        service.find_default_view = function(){
            var default_view = "home.dashboard";
            return default_view
            
            
        }


    })

    .service('APIInterceptor', function ($rootScope, authService, $location) {
        var service = this;
        service.request = function (config) {
            var currentUser = authService.getCurrentUser(),
                access_token = currentUser ? currentUser.auth_token : null;
            if (access_token) {
                config.headers['x-access-token'] = access_token;
            }
            return config;
        };
        service.response = function (response) {
           
            if (response.data.error_status == true) {
                if (response.data.error.error_code == 401) {
                    
                    authService.setCurrentUser(null);
                    $location.path("/login");
                    alert("SESSION EXPIRED, LOGIN AGAIN");
                }
            }
            return response;
        };
    })



    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('APIInterceptor');
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: './templates/login.html',
                controller: 'loginController'
            })
            .state('signup', {
                url: '/signup?referralcode&emailCampaign',
                templateUrl: './templates/signup.html',
                controller: 'signupController'
            })
            .state('signupverify', {
                url: '/signupv/*path',
                templateUrl: './templates/signupverify.html',
                controller: 'signupVController'
            })
            .state('forgotPassVerify', {
                url: '/forgotpassv/*path',
                templateUrl: './templates/forgotpassverify.html',
                controller: 'forgotpController'
            })
            .state('home', {
                url: '/home',
                templateUrl: './templates/menu.html',
                controller: 'menuController',
                abstract: true

            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: './templates/dashboard.html',
                controller: 'dashController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1001);
                    }
                  }

            })
            .state('home.pitch', {
                url: '/pitch',
                templateUrl: './templates/pitch.html',
                controller: 'pitchController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.campaign', {
                url: '/campaign',
                templateUrl: './templates/campaign.html',
                controller: 'campController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.myteam', {
                url: '/myteam',
                templateUrl: './templates/myteam.html',
                controller: 'myteamController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.pymt', {
                url: '/pymt',
                templateUrl: './templates/pymt.html',
                controller: 'pymtController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.backers', {
                url: '/backers',
                templateUrl: './templates/backers.html',
                controller: 'backersController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.investments', {
                url: '/investments',
                templateUrl: './templates/investments.html',
                controller: 'investmentsController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1002);
                    }
                  }

            })
            .state('home.campainsAll', {
                url: '/allcamp',
                templateUrl: './templates/campaignall.html',
                controller: 'campallController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1007);
                    }
                  }

            })
            .state('home.newcompanyacc', {
                url: '/createcompany',
                templateUrl: './templates/newCompAcc.html',
                controller: 'newcompController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1008);
                    }
                  }

            })
            .state('home.newinvacc', {
                url: '/createinvacc',
                templateUrl: './templates/newInvAcc.html',
                controller: 'newinvController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1008);
                    }
                  }

            })
            .state('home.favorites', {
                url: '/favorites',
                templateUrl: './templates/favorites.html',
                controller: 'favController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1008);
                    }
                  }

            })
            .state('home.payout', {
                url: '/payout/:camp_id/:inv_amt',
                templateUrl: './templates/payout.html',
                controller: 'payoutController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1009);
                    }
                  }

            })
            .state('home.invportfolio', {
                url: '/myportfolio',
                templateUrl: './templates/invPortfolio.html',
                controller: 'invPortfolioController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1009);
                    }
                  }

            })
            .state('home.invreward', {
                url: '/myRewards',
                templateUrl: './templates/myRewards.html',
                controller: 'invRwdfolioController',
                requiresAuthentication: true,
                resolve: {
                    currentAuth: function(ViewguardService) {
                      return ViewguardService.authenticate(2,1009);
                    }
                  }

            })            
            .state('campdetails', {
                url: '/campdetails/:camp_id',
                templateUrl: './templates/campaignDetails.html',
                controller: 'campDetailsController',
                // requiresAuthentication: true,
                // resolve: {
                //     currentAuth: function(ViewguardService) {
                //       return ViewguardService.authenticate(2,1010);
                //     }
                //   }

            })
            .state('publicCampaign', {
                url: '/campaigns',
                templateUrl: './templates/campaignallpublic.html',
                controller: 'campallpublicController'
            })
            .state('home.settings', {
                url: '/settings',
                templateUrl: './templates/settings.html',
                controller: 'settingsController'
            })
            .state('home.escrow', {
                url: '/escrow',
                templateUrl: './templates/escrow.html',
                controller: 'escrowController'
            })            
            .state('home.pymtcapture', {
                url: '/pymtcapture/:txn_id',
                templateUrl: './templates/payoutverify.html',
                controller: 'payoutVerifyController'
            })
            // .state('home.pymtcaptureerror', {
            //     url: '/pymtcaptureerror',
            //     templateUrl: './templates/payoutverify.html',
            //     controller: 'payoutVerifyController'
            // })
            
            
    })

    .directive('myEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.myEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })

    .factory('focus', function ($timeout, $window) {
        return function (id) {
            $timeout(function () {
                var element = $window.document.getElementById(id);
                if (element)
                    element.focus();
            });
        };
    })

    .directive('hidepanel', function ($timeout) {
        return {
            restrict: 'C',
            scope: {
                ngModel: '='
            },
            link: function (scope, element, attrs) {
                $timeout(function () {
                    element.remove();
                    
                }, 5000);
            }
        }
    })
    


    .directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    })

    .directive('tooltip', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.hover(function(){
                    // on mouseenter
                    element.tooltip('show');
                }, function(){
                    // on mouseleave
                    element.tooltip('hide');
                });
            }
        };
    })
    


    // .service('youtubePlayerApi', ['$window', '$rootScope', '$log', 
    //     function ($window, $rootScope, $log) {
    //     var service = $rootScope.$new(true);
        
    //     // Youtube callback when API is ready
    //     $window.onYouTubeIframeAPIReady = function () {
    //         $log.info('Youtube API is ready');
    //         service.ready = true;
    //         service.loadPlayer();
    //     };

    //     service.ready = false;
    //     service.playerId = 'yplayer';//id of a player element
    //     service.player = null;
    //     service.videoId = null;
    //     service.playerHeight = '390';
    //     service.playerWidth = '640';

    //     service.bindVideoPlayer = function (videoId) {
    //         $log.info('Binding to player ' + videoId);
    //         service.videoId = videoId;
    //     };

    //     service.createPlayer = function () {
    //         $log.info('Creating a new Youtube player for DOM id ' + this.playerId + ' and video ' + this.videoId);
    //         return new YT.Player(this.playerId, {
    //             height: this.playerHeight,
    //             width: this.playerWidth,
    //             videoId: this.videoId,
                
    //             events: {
    //               'onReady': this.onPlayerReady,
    //               'onStateChange': this.onPlayerReady
    //             }
    //         });
    //     }
    //     service.onPlayerReady = function(event) {
    //         $log.info('onPlayerReady');
    //         //event.target.playVideo();
    //       };
    //       service.loadPlayer = function () {
    //           // API ready?
    //           $log.info('API ready?');
    //           $log.info(this.ready);
    //           $log.info(this.playerId);
    //           $log.info(this.videoId);
  
    //           if (this.ready && this.playerId && this.videoId) {
    //               if(this.player) {
    //                   this.player.destroy();
    //                   var playerState = this.player.getPlayerState();
    //                   if(playerState==1 || playerState==2 || playerState==3){
    //                     this.player.stopVideo();
    //                   }
    //                   this.player.loadVideoById({'videoId': this.videoId});
    //               }
    //               else{
    //                 $log.info('loadPlayer');
    //                 this.player = this.createPlayer();
    //               }
    //           }
    //       };
  
    //       return service;
    //   }])
    .factory('ViewguardService', function($q,authService,$location){
        return {
            authenticate : function(type,id){
                //Authentication logic here
                
                //var isAuthenticated=false
                //
                if(authService.userHasPermission_to_view(type,id)){
                    //If authenticated, return anything you want, probably a user object
                    return true;
                } else {
                    //Else send a rejection
                    alert("UNAUTHORISED ACCESS");
                    $location.path("/login");
                    return $q.reject('AUTH_REQUIRED');
                }
            }
        }
    });