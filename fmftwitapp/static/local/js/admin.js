function post_registering(cond_drop,device_type_drop,dpt_dropy,warranty_dropy)
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



                  $.post("../asset/admin",{
                    "device_condition":cond_drop,
                    "device_type":device_type_drop,
                    "depart":dpt_dropy,
                    "warranty":warranty_dropy,

                  }
                  );             

}
