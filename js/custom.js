// Note: This example requires that you consent to location sharing when
              // prompted by your browser. If you see the error "The Geolocation service
              // failed.", it means you probably did not give permission for the browser to
              // locate you.
            //   var map, infoWindow;
            //   function initMap() {
            //     map = new google.maps.Map(document.getElementById('map'), {
            //       center: {lat: -34.397, lng: 150.644},
            //       zoom: 2
            //     });
            //     infoWindow = new google.maps.InfoWindow;

            //     // Try HTML5 geolocation.
            //     if (navigator.geolocation) {
            //       navigator.geolocation.getCurrentPosition(function(position) {
            //         var pos = {
            //           lat: position.coords.latitude,
            //           lng: position.coords.longitude
            //         };

            //         infoWindow.setPosition(pos);
            //         infoWindow.setContent('#quedateencasa');
            //         infoWindow.open(map);
            //         map.setCenter(pos);
            //       }, function() {
            //         handleLocationError(true, infoWindow, map.getCenter());
            //       });
            //     } else {
            //       // Browser doesn't support Geolocation
            //       handleLocationError(false, infoWindow, map.getCenter());
            //     }
            //   }

            //   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            //     infoWindow.setPosition(pos);
            //     infoWindow.setContent(browserHasGeolocation ?
            //                           'Error: The Geolocation service failed.' :
            //                           'Error: Your browser doesn\'t support geolocation.');
            //     infoWindow.open(map);
            //   }

              $(document).ready(function(){
                var selector = '#translate';
                $(selector).on('click', function(e){
                  e.preventDefault();
                  startLang( $(this) );
                });
                var startLang = function(el){
                  var el = $(el);
                  var text = el.attr('data-text');
                  var file = el.attr('data-file');
                  file = file.split(',');
                  text = text.split(',');
                  var index = el.attr('data-index');
                  if(index >= file.length){
                    index = 0;
                  }
                  changeName(el, text[index]);
                  changeIndex(el, index);
                  loadLang(file[index]);
                  $('html').attr('lang', file[index]);
                };
              
                var changeName = function(el, name){
                  $(el).html( name );
                };
              
                var changeIndex = function(el, index){
                  $(el).attr('data-index', ++index);
                };
              
                var loadLang = function(lang){
                  var processLang = function(data){
                    var arr = data.split('\n');
                    for(var i in arr){
                      if( lineValid(arr[i]) ){
                        var obj = arr[i].split('=>');
                        assignText(obj[0], obj[1]);
                      }
                    }
                  };
                  var assignText = function(key, value){
                    $('[data-lang="'+key+'"]').each(function(){
                      var attr = $(this).attr('data-destine');
                      if(typeof attr !== 'undefined'){
                        $(this).attr(attr, value);
                      }else{
                        $(this).html(value);
                      }
                    });
                  };
                  var lineValid = function(line){
                    return (line.trim().length > 0);
                  };
                  $('.loading-lang').addClass('show');
                  $.ajax({
                    url: 'lang/'+lang+'.txt',
                    error:function(){
                      alert('No se cargó traducción');
                    },
                    success: function(data){
                      $('.loading-lang').removeClass('show');
                      processLang(data);
                    }
                  });
                };  
              });

