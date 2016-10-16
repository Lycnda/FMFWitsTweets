function post_user_name(the_user)
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

                  $.post("../asset/client/",{
                    "user_name":the_user,
                  }
                  );

                

}

function post_dummy()
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



                  $.post("../asset/",{
                    "reload_dummy":"dummy",
                  }
                  );

                

}
