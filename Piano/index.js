
  function playTune(key){

  switch(key){
    case 'a':
     const sound1 = new Audio('sound/tunes/;.wav');
     sound1.play() ;   
      break;


   case 'b':
     const sound2 = new Audio('sound/tunes/a.wav');
      sound2.play();
      break;

     case 'c':
          const sound3 = new Audio('sound/tunes/d.wav');
       sound3.play();
     break;


     case 'd':
      const sound4 = new Audio('sound/tunes/e.wav');
       sound4.play();
      break;


     case'e':
      const sound5 = new Audio('sound/tunes/f.wav') 
     sound5.play();
     break;

     case'f':
      const sound6 = new Audio('sound/tunes/g.wav') 
     sound6.play();
     break;

     case'g':
      const sound7= new Audio('sound/tunes/h.wav') 
     sound7.play();
     break;

     case'h':
      const sound8 = new Audio('sound/tunes/k.wav') 
     sound8.play();
     break;

     case 'i':
      const sound9 = new Audio('sound/tunes/o.wav') 
     sound9.play();
     break;

     case 'j':
      const sound10 = new Audio('sound/tunes/p.wav') 
     sound10.play();
     break;

     case 'l':
      const sound11 = new Audio('sound/tunes/t.wav') 
     sound11.play();
     break;

     case 'm':
      const sound12 = new Audio('sound/tunes/u.wav') 
     sound12.play();
     break;

     case 'n':
      const sound13 = new Audio('sound/tunes/w.wav') 
     sound13.play();
     break;

     case 'o':
      const sound14 = new Audio('sound/tunes/y.wav') 
     sound14.play();
     break;


     case 'p':
      const sound15 = new Audio('sound/tunes/o.wav') 
     sound15.play();
     break;

     case 'q':
      const sound16 = new Audio('sound/tunes/p.wav') 
     sound16.play();
     break;

     case 'r':
      const sound17 = new Audio('sound/tunes/a.wav') 
     sound17.play();
     break;

     case 's':
      const sound18 = new Audio('sound/tunes/a.wav') 
     sound18.play();
     break;

     case 't':
      const sound19 = new Audio('sound/tunes/a.wav') 
     sound19.play();
     break;

     case 'u':
      const sound20 = new Audio('sound/tunes/a.wav') 
     sound20.play();
     break;

     case 'v':
      const sound21 = new Audio('sound/tunes/u.wav') 
     sound21.play();
     break;

     case 'w':
      const sound22 = new Audio('sound/tunes/a.wav') 
     sound22.play();
     break;

     case 'x':
      const sound23 = new Audio('sound/tunes/;.wav') 
     sound23.play();
     break;

     case 'y':
      const sound24 = new Audio('sound/tunes/y.wav') 
     sound24.play();
     break;



  }
 }

  for(let i=0; i<24; i++){
     let pianoKeys = document.querySelectorAll(".Piano .key")[i].addEventListener("click", (eve)=>{
           playTune(eve.target.innerHTML);
     })

    }
    
   
          
 document.addEventListener("keypress", (event)=>{
      let key = event.key;
      playTune(key);
  });


// document.addEventListener("keypress",(event)=>{
    //   let key=event.key;
    //   playTune(key);
    // });
