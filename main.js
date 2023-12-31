const claim = document.querySelector('.claim');
const input = document.querySelectorAll('.input');
const mail = document.querySelector('.mail');
const alertImgMail = document.querySelector('.alert-img-mail');
const alertMsgMail = document.querySelector('.alert-msg-mail');
const alertImg = document.querySelectorAll('.alert-img');
const alertMsg = document.querySelectorAll('.alert-msg');



  input.forEach( ( cadaInput , i )=>{
    claim.addEventListener('click', (e)=>{
      e.preventDefault();
      
      const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (mail.value == "") {
        alertImg[i].classList.remove('active');
        alertMsg[i].classList.remove('active');
      } else if (!mail.value.match(pattern)) {
        alertImgMail.classList.add('active');
        alertMsgMail.classList.add('active');
      } else {
        alertMsgMail.classList.remove('active');
      }

      console.log('esaa');
      alertImg[i].classList.remove('active');
      alertMsg[i].classList.remove('active');
      
      if (input[i].value == "") {
        alertImg[i].classList.add('active');
        alertMsg[i].classList.add('active');
      }

      if (input[i].value != "" && mail.value.match(pattern)) {
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