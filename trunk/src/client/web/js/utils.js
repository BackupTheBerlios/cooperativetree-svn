function ajaxLoad(url,args,callBack){
	//var result;
	var xhr = new XMLHttpRequest();
	xhr.callBack = callBack;	
	xhr.args = args;
	xhr.onreadystatechange  = function(){ 
         if(xhr.readyState  == 4){
              if(xhr.status  == 200){
              //alert("receive response :"+xhr.responseText);
                 xhr.callBack(xhr.responseText,xhr.args);
              }else{
                 alert("error calling "+url);
              }
         }
    }
   
   xhr.open("GET", url,  true); 
   xhr.send(null);   
}

function ajaxPut(url,args,callBack){
	//var result;
	var xhr = new XMLHttpRequest();
	xhr.callBack = callBack;	
	xhr.args = args;
	xhr.onreadystatechange  = function(){ 
         if(xhr.readyState  == 4){
              if(xhr.status  == 200){
              //alert("receive response :"+xhr.responseText);
                 xhr.callBack(xhr.responseText,xhr.args);
              }else{
                 alert("error calling "+url);
              }
         }
    }
   
   xhr.open("PUT", url,  true); 
   xhr.send(args);   
}