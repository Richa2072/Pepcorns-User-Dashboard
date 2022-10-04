app.service('helperService', ['CONSTANT', '$q', '$http','$compile', function (CONSTANT, $q, $http,$compile) {



    this.showSuccessAlert = function (payload) {
        var html = '<div class="hidepanel" ><div class="alertCustom alert-default" role="alert"><strong><i class="no ni-check-bold" style="vertical-align:middle;font-size:18px"></i></strong> ' + payload + '</div></div>',
        el = document.getElementById('alertpanels');
        angular.element(el).append($compile(html)($scope))
       
    }

    this.findSession = function(url){
        var length = url.length;
        var find_session_match = url.search("signupv/");
        var sessionkey = url.split(find_session_match,length);
        return sessionkey
    }
    this.validateName= function(name) {
        
        var re = /^[a-zA-Z ]{2,30}$/;
        return re.test(String(name).toLowerCase());
    }
    this.validateWebUrl=function(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    this.validatePan = function(panVal){
        
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        
        if(regpan.test(panVal)){
           return true
        } else {
            return false
           // invalid pan card number
        }
    }
    this.getIdFromURL = function (url) {
        ;
        var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
        var id = url.replace(youtubeRegexp, '$1');
        function contains(str, substr) {
            return (str.indexOf(substr) > -1);
        }
        if (contains(id, ';')) {
            var pieces = id.split(';');

            if (contains(pieces[1], '%')) {
                // links like this:
                // "http://www.youtube.com/attribution_link?a=pxa6goHqzaA&u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare"
                // have the real query string URI encoded behind a ';'.
                // at this point, `id is 'pxa6goHqzaA;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare'
                var uriComponent = decodeURIComponent(pieces[1]);
                id = ('http://youtube.com' + uriComponent)
                        .replace(youtubeRegexp, '$1');
            } else {
                // https://www.youtube.com/watch?v=VbNF9X1waSc&feature=youtu.be
                // `id` looks like 'VbNF9X1waSc;feature=youtu.be' currently.
                // strip the ';feature=youtu.be'
                id = pieces[0];
            }
        } else if (contains(id, '#')) {
            // id might look like '93LvTKF_jW0#t=1'
            // and we want '93LvTKF_jW0'
            id = id.split('#')[0];
        }

        return id;
    }



   

}])