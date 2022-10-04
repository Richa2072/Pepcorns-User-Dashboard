app.service('apiService', ['CONSTANT', '$q', '$http', function (CONSTANT, $q, $http) {



    this.verifyEmail = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/signupCheck_v1', {
                "email": payload.email,
                "fullname": payload.fullname,
                "pass": payload.pass,
                "source": payload.source,
                "type": payload.type,
                "ref_cde":payload.ref_cde
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }
    this.verifySessionSignup = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/verifySessionSignup_v1', {
                "session_key": payload.session_key,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.verifySessionFpass = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/verifySessionFpass_v1', {
                "session_key": payload.session_key,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }
    this.signupUser = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/signupUser', {
                // "session_key":payload.session_key,
                "mobile": payload.mobile,
                "pass": payload.pass,
                "first_name": payload.first_name,
                "last_name": payload.last_name,
                "gender": payload.gender,
                "dob": payload.dob,
                "cmp_name": payload.cmp_name,
                "cmp_url": payload.cmp_url,
                "pan": payload.pan,
                "city": payload.city,
                "state": payload.state,
                "country": payload.country_code,
                "zip": payload.zip,
                "country_code": payload.country_code,
                "email": payload.email,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.forgotPassUserCheck = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/forgotPassCheck_v1', {
                "email": payload.email,
                "type": 1
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updatePassword = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/updatePassword_v1', {
                "pass": payload.pass,
                "session_key": payload.session_key,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.signInUser = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/auth/signInUser_v1', {
                "email": payload.email,
                "pass": payload.pass,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.dashboardStats = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/dashboardStats', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllPitch = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllPitch', {
                "page_no": payload.page_no,
                "search_text": payload.search_text
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllCampaign = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllCampaign', {
                "page_no": payload.page_no,
                "search_text": payload.search_text
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.categories = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/shared/categories', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.countries = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/shared/countries', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.faqs = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/shared/faqs', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.createPitch = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/createPitch', {
                "cmp_name": payload.companyname,
                "title": payload.pitchtitle,
                "cmp_website": payload.website,
                "cmp_logo": payload.pitchFeatureLogoFileUrl,
                "hq_addr": payload.hq_addr,
                "city": payload.city,
                "state": payload.state,
                "country": payload.country,
                "cmp_email": payload.cmp_email,
                "feature_img": payload.pitchFeatureImageFileUrl,
                "feature_video": payload.youtubeurl,
                "deck_info": payload.customPitch,
                "companydoi": payload.companydoi,
                "companypan": payload.companypan,
                "describehowusefunds": payload.describehowusefunds,
                "facebookurl": payload.facebookurl,
                "youtubeurl": payload.youtubeurl,
                "instagramurl": payload.instagramurl,
                "pitchDeckFileUrl": payload.pitchDeckFileUrl,
                "faqs": payload.faqs,
                "pitchTags": payload.pitchTags,
                "description": payload.description


            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.createCampaign = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/createCampaign', {
                "title": payload.title,
                "pitch_id": payload.pitch_id,
                "min_raise": payload.min_raise,
                "max_raise": payload.max_raise,
                "target_raise": payload.target_raise,
                "start_date": payload.start_date,
                "end_date": payload.end_date,
                "view_type": payload.view_type




            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }




    this.getPitchById = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getPitchById', {
                "pitch_id": payload.pitch_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.getAllCampaignByPitch = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllCampaignByPitch', {
                "pitch_id": payload.pitch_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.togglePitch = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/togglePitch', {
                "pitch_id": payload.pitch_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getCampaignDetailsById = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getCampaignDetailsById', {
                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllTransByCampId = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllTransByCampId', {
                "camp_id": payload.camp_id,
                "page_no": payload.page_no
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.createCampaignRewards = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/createCampaignRewards', {
                "min_amount": payload.min_amount,
                "max_amount": payload.max_amount,
                "comparator": payload.comparator,
                "reward": payload.reward,
                "tnc": payload.tnc,
                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.getCampaignRewards = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getCampaignRewards', {

                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.toggleCampaignRewards = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/toggleCampaignRewards', {

                "reward_id": payload.reward_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }
    this.toggleCampStatus = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/toggleCampStatus', {

                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllTeams = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllTeams', {


            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.addTeamMembers = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/addTeamMembers', {
                "name": payload.name,
                "mobile": payload.mobile,
                "email": payload.email,
                "role": payload.role,
                "yoj": payload.yoj,
                "location": payload.location,
                "lnk_url":payload.lnk_url,
                "twt_url":payload.twt_url,
                "profile_img":payload.profile_img


            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.toggleTeam = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/toggleTeam', {
                "user_id": payload.user_id,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllTransBypoc = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllTransBypoc', {
                "page_no": payload.page_no,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getAllBackers = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllBackers', {
                "page_no": payload.page_no,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.showcampall = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/showcampall', {
                "page_no": payload.page_no,
                "type": payload.type,
                "search_text": payload.search_text
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.singupInv = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/singupInv', {
                "mobile": payload.mobile,
                "first_name": payload.first_name,
                "last_name": payload.last_name,
                "gender": payload.gender,
                "dob": payload.dob,
                "bio": payload.bio,
                "cmp_url": payload.cmp_url,
                "pan": payload.pan,
                "city": payload.city,
                "state": payload.state,
                "country": 1,
                "zip": payload.zip,
                "country_code": 1,
                "profile_img": payload.profile_img,
                "net_worth": payload.net_worth,
                "annual_income": payload.annual_income,
                "is_accredited": payload.is_accredited,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.addtofav = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/addtofav', {
                "camp_id": payload.camp_id,

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.message)
                }
            }, function (error) {
                
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getallFav = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getallFav', {
                //"camp_id":payload.camp_id,  

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.inititePayment = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/initiate_payment', {
                "test_param":"text",
                "camp_id":payload.camp_id, 
                "amount": payload.amount,
                "email": payload.email

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.check_pymt_status = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/check_pymt_status', {
                "txn_id":payload.txn_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.abortPayment = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/abortPayment', {
                


            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.addUpdateToCamp = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/addCampUpdate', {
                "camp_id": payload.camp_id,
                "message": payload.message,


            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                reject(error.data.message)
            })
        })
    }

    this.getCampUpdate = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getCampUpdate', {
                "camp_id": payload.camp_id

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                reject(error.data.message)
            })
        })
    }

    this.toggleCampUpdate = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/toggleCampUpdate', {
                "id": payload.id

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                reject(error.data.message)
            })
        })
    }

    this.getallfavCamp = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getallfavCamp', {
                "page_no": payload.page_no,
                "type": payload.type,
                "search_text": payload.search_text
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getmyportfolio = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getmyportfolio', {
                "page_no": payload.page_no,
                "type": payload.type,
                "search_text": payload.search_text
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getallTransInv = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getallTransInv', {
                //    "page_no":payload.page_no,  
                //    "type":payload.type,
                //    "search_text":payload.search_text   
                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getrewardsearned = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getrewardsearned', {
                "page_no": payload.page_no,
                //    "type":payload.type,
                //    "search_text":payload.search_text   
                //"camp_id":  payload.camp_id                          
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.findAllComments = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/findAllComments', {
                "page_no": payload.page_no,
                "camp_id": payload.camp_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.addNewComment = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/addNewComment', {
                "comment": payload.comment,
                "camp_id": payload.camp_id,
                "comment_id": payload.comment_id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }


    this.getAllInvestments = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getAllInvestments', {
                "page_no": payload.page_no,
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getUserDetails = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getUserDetails', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.getUserDetailsbyid=function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getUserDetails', {
                "id":payload.id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updateBasicProfile = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updateBasicProfile', {
                "mobile": payload.mobile,
                "full_name": payload.full_name,
                "state":payload.state,
                "city":payload.city,
                "zip":payload.zip,
                "bio":payload.bio,
                "address":payload.address,
                "facebook":payload.facebook,
                "instagram":payload.instagram,
                "linkedin":payload.linkedin,
                "skills":payload.skills
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updateComProfile = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updateCmpProfile', {
                "cmp_name": payload.cmp_name,
                "cmp_url": payload.cmp_url,
                "pan": payload.pan,
                "mobile": payload.mobile,
                "email":payload.email
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updateInvProfile = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updateInvProfile', {
                //mobile,website_url,net_worth,annual_income,bio,taxation_num,cmp_name
                "net_worth": payload.net_worth,
                "website_url": payload.website_url,
                "mobile": payload.mobile,
                "annual_income": payload.annual_income,
                "bio": payload.bio,
                "taxation_num": payload.taxation_num,
                "cmp_name": payload.cmp_name,
               
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }



    this.getBackaccountDetails = function (payload) {

        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getBackaccountDetails', {

            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updateBackaccountDetails = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updateBackaccountDetails', {
                "acct_name": payload.acct_name,
                "acct_number": payload.acct_number,
                "ifsc": payload.ifsc
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.updateCampaign = function (payload) {
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updateCampaign', {
                id: payload.id,
                title: payload.title,
                min_raise: payload.min_raise,
                max_raise: payload.max_raise,
                target_raise: payload.target_raise,
                min_inv: payload.min_inv,
                start_date: payload.start_date,
                end_date: payload.end_date
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                //console.log(error)
                reject(error.data.message)
            })
        })
    }

    this.findAllNotifications = function(){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/findAllNotifications', {
                
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }


    this.getmynewsfeed = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/getmynewsfeed', {
                "page_no":payload.page_no
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }


    this.followers = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/followers', {
               
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.following = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/following', {
               
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }


    this.follow = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/follow', {
               "id":payload.id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.unfollow = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/unfollow', {
               "id":payload.id
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.suggestFollow = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/suggestFollow', {
               
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.updatePitch = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/updatePitch', {
               "id":payload.id,
               cmp_name:payload.cmp_name,
               title:payload.title,
               description:payload.description,
               cmp_website:payload.cmp_website,
               city:payload.city,
               state:payload.state,
               cmp_email:payload.cmp_email,
               feature_video:payload.feature_video,
               deck_info:payload.deck_info,
               companydoi:payload.companydoi,
               companypan:payload.companypan,
               describehowusefunds:payload.describehowusefunds,
               facebookurl:payload.facebookurl,
               youtubeurl:payload.youtubeurl,
               instagramurl:payload.instagramurl
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.createEscrowAccountInv = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/createEscrowAccountInv', {   
                "escrow_id":payload.escrow_id            
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }

    this.createEscrowAccountCom = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/createEscrowAccountCom', {   
                "escrow_id":payload.escrow_id            
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }
    //updatePitch
    this.manualAccountCreation = function(payload){
        return $q(function (resolve, reject) {
            $http.post(CONSTANT.base_api_url + 'api/v1/comp/manualAccountCreation', {   
                "accountType":payload.accountType            
            }).then(function (response) {
                console.log(response)

                if (response.data.error_status == true) {
                    reject(response.data.message)
                } else if (response.data.error_status == false) {
                    resolve(response.data.response)
                }
            }, function (error) {
                
                reject(error.data.message)
            })
        })
    }


}])