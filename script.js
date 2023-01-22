var convertbtn = document.getElementById("convert-btn");
convertbtn.addEventListener("click" , () => {
    var inputbox , value1 , value2 , innumber , data;
    data = document.getElementById ("enswer");
    inputbox = document.getElementById("number");
    value1 = document.getElementById("unit1").value;
    value2 = document.getElementById("unit2").value;
    innumber =  Number(inputbox.value).toFixed(2);
    
  if(isNaN(innumber)){
        alert("This is not a number");
    }
//Byte
     if(value1 == "Byte" && value2 == "Byte"){
        data.innerHTML = innumber * 1;
    }else if(value1 == "Byte" && value2 == "Kb"){
        data.innerHTML = innumber / 1e3;
    } else if(value1 == "Byte" && value2 == "Mb"){
        data.innerHTML = innumber / 1e6;
    } else if(value1 == "Byte" && value2 == "Gb"){
        data.innerHTML = innumber / 1e9;
    };
    //Kb
    if(value1 == "Kb" && value2 == "Byte"){
      data.innerHTML = innumber * 1e3;
    } else if(value1 == "Kb" && value2 == "Kb"){
        data.innerHTML = innumber * 1;
    } else if(value1 == "Kb" && value2 == "Mb"){
        data.innerHTML = innumber / 1e3;
    } else if(value1 == "Kb" && value2 == "Gb"){
        data.innerHTML = innumber / 1e6;
    };
    //Mb
    if(value1 == "Mb" && value2 == "Byte"){
        data.innerHTML = innumber * 1e6;
    } else if(value1 == "Mb" && value2 == "Kb"){
        data.innerHTML = innumber * 1e3;
    } else if(value1 == "Mb" && value2 == "Mb"){
        data.innerHTML = innumber * 1;
    } else if(value1 == "Mb" && value2 == "Gb"){
        data.innerHTML = innumber / 1e3;
    };
    //Gb
    if(value1 == "Gb" && value2 == "Byte"){
        data.innerHTML = innumber * 1e9;
    } else if(value1 == "Gb" && value2 == "Kb"){
        data.innerHTML = innumber * 1e6;
    } else if(value1 == "Gb" && value2 == "Mb"){
        data.innerHTML = innumber * 1e3;
    } else if(value1 == "Gb" && value2 == "Gb"){
        data.innerHTML = innumber * 1;
    }
   
});