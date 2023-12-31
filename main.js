const claim = document.querySelector('.claim');
const input = document.querySelectorAll('.input');
const mail = document.querySelector('.mail');
const alertImgMail = document.querySelector('.alert-img-mail');
const alertMsgMail = document.querySelector('.alert-msg-mail');
const alertImg = document.querySelectorAll('.alert-img');
const alertMsg = document.querySelectorAll('.alert-msg');


  //por cada INPUT
  input.forEach( ( cadaInput , i )=>{
    //Escucho el CLICK
    claim.addEventListener('click', (e)=>{
      //Evito actualizar la pagina en cada CLICK
      e.preventDefault();
      //Patron de comparacion de mail
      const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      //Si el valor de MAIL esta VACIO
      if (mail.value == "") {
        //Agrega estas clases 
        alertImg[i].classList.remove('active');
        alertMsg[i].classList.remove('active');
        //
      } else if (!mail.value.match(pattern)) {
        //Agrega estas clases 
        alertImgMail.classList.add('active');
        alertMsgMail.classList.add('active');
      } else {
        alertMsgMail.classList.remove('active');
      }

      console.log('esaa');
      //Borrar TODAS las clases
      alertImg[i].classList.remove('active');
      alertMsg[i].classList.remove('active');
      //Si los INPUT estan VACIOS
      if (input[i].value == "") {
        //Agrega estas clases
        alertImg[i].classList.add('active');
        alertMsg[i].classList.add('active');
      }
      //Si TODOS los inputs NO estan VACIOS Y el MAIL esta BIEN escrito
      if (input[i].value != "" && mail.value.match(pattern)) {
        //CAMBIA EL SUBMIT A GRACIAS
        claim.value = 'THANK YOU!';
      }
      
    })
  })
  
  




// number.forEach( ( cadaNumber , i )=>{
//   // Asignando un CLICK a cada number
//   number[i].addEventListener('click', ()=>{
//     // Recorrer TODOS los number
//     number.forEach( ( cadaNumber , i )=>{
//       // Quitamos la clase activo de TODOS los number
//       number[i].classList.remove('activo')
//     })
//     // Añadiendo la clase activo al number seleccionado
//     number[i].classList.add('activo')
//     // Asignando numero elegido a la variable SELECTED
//     selected = number[i].textContent;
//   })
// }) 