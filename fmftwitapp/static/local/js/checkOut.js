function post_check_out(device_type_drop)
{

                 var csrftoken = $.cookie('csrftoken');

                                  function csrfSafeMethod(method) {
                                      // these HTTP methods do not require CSRF protection
                                      return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
                                  }

                                  $.ajaxSetup({
                                      beforeSend: function(xhr, settings) {
                                          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                                              xhr.setRequestHeader("X-CSRFToken", csrftoken);
                                          }
                                      }
                                  });



                  $.post("../asset/checkOut",{
                  
                    "device_type":device_type_drop,
                  

                  }
                  );

                

}
