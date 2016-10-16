function formValidation2()
{
    var tagId = document.AdminForm.tag_id;
    var dep = document.AdminForm.depdrop;
    var cond = document.AdminForm.conddrop;
    var type = document.AdminForm.devdrop;
    var ser = document.AdminForm.serial;
    var cost = document.AdminForm.cost;

    if(tagIdValidation(tagId))
    {
        if (departmentValidation(dep))
        {

          if (conditionValidation(cond))
          {
            if(deviceTypeValidation(type))
            {
              if(SerialNoValidation(ser))
              {
                if(costValidation(cost))
                {
                  
                }
              }
            }
          }

        }

    }
    return false;
}



function tagIdValidation(tagId)
{
  var reg = /^[a-zA-Z0-9-_\s]+$/; //allows alphanumeric and hyphens, underscores, periods and stars. Spaces allowed too

  if(tagId.value.match(reg))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid tag ID');
    tagId.focus();
    return false;
  }
}



function departmentValidation(dep)
{
 if (dep.value == "Default")
 {

   alert('Select the department from the list');
   dep.focus();
   return false;
 }

 else
 {
   return true;
 }

}


function conditionValidation(cond)
{
 if (cond.value == "Default")
 {

   alert('Please specify the condition of the device from the list');
   cond.focus();
   return false;
 }

 else
 {
   return true;
 }

}

function deviceTypeValidation(type)
{
 if (type.value == "Default")
 {

   alert('Please specify the device type from the list');
   type.focus();
   return false;
 }

 else
 {
   return true;
 }

}

function SerialNoValidation(ser)
{
  var regex = /^[a-zA-Z0-9-_\s]+$/; //allows alphanumeric and hyphens, underscores, periods and stars. Spaces allowed too

  if(ser.value.match(regex))
  {
    return true;
  }

  else
  {
    alert('Please enter a valid serial number');
    ser.focus();
    return false;
  }
}

function costValidation(cost)
{
  var reg1 = /^[0-9\s]+$/; //allows alphanumeric and hyphens, underscores, periods and stars. Spaces allowed too

  if(cost.value.match(reg1))
  {
    return true;
  }

  else
  {
    alert('Please enter the cost value ONLY in Rands');
    cost.focus();
    return false;
  }
}
