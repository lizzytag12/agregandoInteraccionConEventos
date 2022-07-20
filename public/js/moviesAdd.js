window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
 
  /*  En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
    'AGREGAR PELÍCULA', este cambie su color. */

    titulo.addEventListener('mouseover', () => {
       titulo.classList.toggle('fondoTurquesa')

    }) 

    



  /*  manejadorDeEstado(); */
};



/* let estadoSecreto = 0;  // iniciador

let secreto = 'secreto';

let manejadorDeEstado = () => {
 
  let value = document.querySelector("#titulo").value; // Caputar el value del input
 
  if (value.length === 0) {
    console.log('el usuario no escribio nada,')
  } else {
  
   for (let i = 0; i < value.length ; i++) {
    const element = value[i];
    if(element === value[i]) {
       console.log(value)
        if (secreto === value) {
            alert('SECRETO MAGICO');
            break;
        }
        
    } else {
        console.log('wrong');
    }
    
   } */
  
    // value.forEach((element, index)  => {
    
    //   });
  
 

  

};
