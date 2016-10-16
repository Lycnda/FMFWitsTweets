function formValidation()
{
  var ufname = document.theForm.fir;
  var usname = document.theForm.last;
  var snum =  document.theForm.staff;
  var mail = document.theForm.email;
  var uuname = document.theForm.username;
  var upass = document.theForm.pass;
  var uconpass = document.theForm.confpass;

  if (firstnameValidation(ufname))
  {
    if (surnameValidation(usname))
    {
      if (staffValidation(snum))
      {
        if (emailValidation(mail))
        {
          if (usernameValidation(uuname))
          {
            if (passwordValidation(upass))
            {
              if(confirmPasswordValidation(upass,uconpass))
              {

              }
            }
          }
        }
      }
    }
  }

  return false;
}



function firstnameValidation(ufname)
{
  var letters = /^[a-zA-Z-_.,'`^\s]+$/; //This works for alphabets and special characters for name and surname

  if(ufname.value.match(letters))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid first name');
    ufname.focus();
    return false;
  }

}




function surnameValidation(usname)
{

  var surletters = /^[a-zA-Z-_.,'`^\s]+$/;

  if(usname.value.match(surletters))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid surname');
    usname.focus();
    return false;
  }

}



function staffValidation(snum)
{
  var numbers = /^[0-9]+$/;

  if(snum.value.match(numbers))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid staff/student number');
    snum.focus();
    return false;
  }

}



function emailValidation(mail)
{
  var mailformat1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(mail.value.match(mailformat1))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid email address');
    mail.focus();
    return false;
  }

}


function usernameValidation(uuname)
{
  var reg = /^[a-zA-Z0-9-_.,'`^]{5,}$/; //No spaces allowed for username,
  //only alphanumeric with certain special characters and a username must be at minimum 5 characters long

  if(uuname.value.match(reg))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid username');
    uuname.focus();
    return false;
  }

}


function passwordValidation(upass)
{
  var regex = /^[a-zA-Z0-9-_.,'@?*&#$%^+|~`<>]{6,}$/; // password with a minimum of 6 characters, can be anything really,
                //besides square and curly and round brackets

  if(upass.value.match(regex))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid password');
    upass.focus();
    return false;
  }

}

function confirmPasswordValidation(upass,uconpass)
{

  if(upass==uconpass)
  {
    return true;
  }

  else
  {
    alert('Passwords do not match');
    uconpass.focus();
    return false;
  }

}
