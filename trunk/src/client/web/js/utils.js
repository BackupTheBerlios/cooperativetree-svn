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

function ajaxPost(url,args,callBack,callBackArgs){
	//var result;
	var xhr = new XMLHttpRequest();
	xhr.callBack = callBack;	
	xhr.callBackArgs = callBackArgs;
	xhr.onreadystatechange  = function(){ 
         if(xhr.readyState  == 4){
              if(xhr.status  == 200){
              //alert("receive response :"+xhr.responseText);
                 xhr.callBack(xhr.responseText,xhr.callBackArgs);
              }else{
                 alert("error calling "+url);
              }
         }
    }
   
   xhr.open("POST", url,  true);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhr.setRequestHeader("Content-length", args.length);
   xhr.setRequestHeader("Connection", "close"); 
   xhr.send(args);   
}