function formValidation3()
{
 var firstname= document.CheckoutForm.first_name;
 var lastname= document.CheckoutForm.last_name;
 var snumber = document.CheckoutForm.staff_num;
 var tagID= document.CheckoutForm.tag_id;
 var devtype = document.CheckoutForm.devtdrop;

if (firstnameValidation(firstname))
{
  if(lastnameValidation(lastname))
  {
    if(staffNumberValidation(snumber))
    {
      if(tagIdValidation(tagID))
      {
        if(deviceTypeValidation(devtype))
        {

        }
      }
    }
  }
}

  return false;
}

function firstnameValidation(firstname)
{
  var letters = /^[a-zA-Z-_.,'`^\s]+$/; //This works for alphabets and special characters for name and surname

  if(firstname.value.match(letters))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid first name');
    firstname.focus();
    return false;
  }

}

function lastnameValidation(lastname)
{
  var letters1 = /^[a-zA-Z-_.,'`^\s]+$/; //This works for alphabets and special characters for name and surname

  if(lastname.value.match(letters1))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid surname');
    lastname.focus();
    return false;
  }

}

function staffNumberValidation(snumber)
{
  var numbers = /^[0-9]+$/;

  if(snumber.value.match(numbers))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid staff/student number');
    snumber.focus();
    return false;
  }

}

function tagIdValidation(tagID)
{
  var reg = /^[a-zA-Z0-9-_\s]+$/; //allows alphanumeric and hyphens, underscores, periods and stars. Spaces allowed too

  if(tagID.value.match(reg))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid tag ID');
    tagID.focus();
    return false;
  }
}

function deviceTypeValidation(devtype)
{
 if (devtype.value == "Default")
 {
   alert('Please specify the device type from the list');
   devtype.focus();
   return false;
 }

 else
 {
   return true;
 }
}
