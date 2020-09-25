document.addEventListener('DOMContentLoaded',function(){
  let countp=0;
  let countc=0;
  let a
  document.querySelector('.win').style.display='none';
  document.querySelector('.loss').style.display='none';
 
  

  document.querySelector('#bt1').onclick=function(){
    if(countp===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.win').style.display='flex';
      
    }
    if(countc===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.loss').style.display='flex';
      
    }

   a=Math.floor(Math.random()*Math.floor(3));
    console.log(a)
    if(a===1){

      countp++;
     k=document.querySelector('#ima1')
    
     k.src="game/s1.png"
     //k.style.animation='bouncy 1s linear .5s 4'

     l=document.querySelector('#ima2')
    
     l.src="game/p.png"
     //l.style.animation='bouncy 1s linear 1s 4'

     document.querySelector('.p1 h2').innerHTML=countp;
     document.querySelector('.tag h1').innerHTML="You win";

    } 
else if(a===2){
  countc++;
  document.querySelector('#ima1').src="game/s1.png"
  //document.querySelector('#ima1').style.animation='bouncy 1s linear .5s 4'
     document.querySelector('#ima2').src="game/r.png"
    // document.querySelector('#ima2').style.animation='bouncy 1s linear .5s 4';
     document.querySelector('.com h2').innerHTML=countc;
     document.querySelector('.tag h1').innerHTML="computer win"
}

else{

   document.querySelector('.tag h1').innerHTML='Draw'
  
   document.querySelector('#ima1').src="game/s1.png"
   //document.querySelector('#ima1').style.animation="bouncy 1s linear .5s 4";

   document.querySelector('#ima2').src="game/s1.png"
   //document.querySelector('#ima2').style.animation="bouncy 1s linear .5s 4";

}


  }
    


  document.querySelector('#bt2').onclick=function(){

    if(countp===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.win').style.display='flex';
      
    }
    if(countc===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.loss').style.display='flex';
      
    }
    a=Math.floor(Math.random()*3);
     console.log(a)
     if(a===2){
         countp++;
      document.querySelector('#ima1').src="game/p.png"
      document.querySelector('#ima2').src="game/r.png"
      document.querySelector('.p1 h2').innerHTML=countp;
      document.querySelector('.tag h1').innerHTML="You win";
 
     } 
 else if(a===0){
   countc++;
   document.querySelector('#ima1').src="game/p.png"
      document.querySelector('#ima2').src="game/s1.png"
      document.querySelector('.com h2').innerHTML=countc;
      document.querySelector('.tag h1').innerHTML="computer win"
 }
 
 else{
 
    document.querySelector('.tag h1').innerHTML='Draw'
    document.querySelector('#ima1').src="game/p.png"
     document.querySelector('#ima2').src="game/p.png"
 }
 
 
   }


   document.querySelector('#bt3').onclick=function(){

    if(countp===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.win').style.display='flex';
      
    }
    if(countc===19){
      document.querySelector('.first').style.display='none';
      document.querySelector('.loss').style.display='flex';
      
    }
    a=Math.floor(Math.random()*3);
     console.log(a)
     if(a===0){
         countp++;
      document.querySelector('#ima1').src="game/r.png"
      document.querySelector('#ima2').src="game/s1.png"
      document.querySelector('.p1 h2').innerHTML=countp;
      document.querySelector('.tag h1').innerHTML="You win";
 
     } 
 else if(a===1){
   countc++;
   document.querySelector('#ima1').src="game/r.png"
      document.querySelector('#ima2').src="game/p.png"
      document.querySelector('.com h2').innerHTML=countc;
      document.querySelector('.tag h1').innerHTML="computer win"
 }
 
 else{
 
    document.querySelector('.tag h1').innerHTML='Draw'
    document.querySelector('#ima1').src="game/r.png"
    document.querySelector('#ima2').src="game/r.png"
 }
 
 
   }


  
document.querySelector('.try1').onclick=function(){
 location.reload()
  
}
  
 document.querySelector('.try2').onclick=function(){
   location.reload()

 }

 

})