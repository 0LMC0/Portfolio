// Made by Lautaro Caceres //

// Call to input
const toggle = document.querySelector('.english-spanish-switch');

//Search if the input is checked or not and then makes the changes in the appropriate text
toggle.addEventListener('click', () =>{
  const englishSpanish = document.querySelector('.english-spanish-text');
  const profesionalProfile = document.querySelector('.titleEsEn');
  

  profesionalProfile.textContent = toggle.checked ? 'Perfil Profesional' : 'Profesional Profile'

  englishSpanish.textContent = toggle.checked ? "Mi nombre es Lautaro, soy una persona bilingúe de 22 años originaria de Argentina, graduado de un curso integro dictado por Coderhouse(HTML5, CSS3, Javascript y React.js). Trabajador dedicado con el objetivo de ayudar a lograr los objetivos y asumir más responsabilidades lo más rápido posible. Buscando aprovechar los conocimientos adquiridos (académicos y autodidactas) para cubrir efectivamente su puesto vacante." : "I'm Lautaro, a Bilingüal 22 year old originally from Argentina Graduated from a complete Front-end course dictated by Coderhouse(HTML5, CSS3, Javascript,React.js). Dedicated worker aiming to help achieve objectives and take on more responsability as quickly as possible!. Seekin to leverage adquired (Academic and Self-learned) knowlegde to effectively fill your open job position.";
})

// btn cv download

// calling the button
const btnCv= document.querySelector('.btn-custom-cv');

// listening to the button and then applying the active class
btnCv.addEventListener('click', ()=> {
  btnCv.classList.add('active-cv');
});



