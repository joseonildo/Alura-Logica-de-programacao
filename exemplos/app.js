let a=0;
document.getElementsByTagName("i")[0].addEventListener("click",
  function(){
    if(a==0){      
      a++;
      document.querySelector("i").style.opacity="1";
      //alert("Ativado");
    }else{      
      a--;     
      document.querySelector("i").style.opacity=".5";
      //alert("Desativado");
    }
  }
);
  

