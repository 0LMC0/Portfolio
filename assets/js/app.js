////////////////////////////////////////// Made by Lautaro Caceres //////////////////////////////////////////

// menu 

const btnMenu = document.querySelector('.label-menu-animation');

btnMenu.addEventListener("click",()=>{
  const a=document.querySelector("#check");
  const b=document.querySelector(".menu");

    // it verificates that the input is checked or not and then add or remove the class that activates the menu
  
  a.checked?b.classList.add("is-active"):b.classList.remove("is-active")
}
);

// Call to input to the EnglishSpanish text
const toggle=document.querySelector(".english-spanish-switch");

//listenign to that same input and then making the changes
toggle.addEventListener("click",()=>{
  const 
  a=document.querySelector(".english-spanish-text"), 
  b=document.querySelector(".titleHeroEnEs"),
  c=document.querySelector(".titleEsEn"),
  d=document.querySelector(".developerEnEs"),
  e=document.querySelector("#downloadCv"),
  f=document.querySelector(".contact-button-hero"),
  g=document.querySelector("#skillsText"),
  h=document.querySelector("#ProblemSolvingSkills"),
  i=document.querySelector("#entrepreneurSkills"),
  j=document.querySelector("#recentWork"),
  k=document.querySelector("#projectsP"),
  l=document.querySelector("#acruxText"),
  m=document.querySelector("#subtitleBt"),
  n=document.querySelector("#paBt"),
  o=document.querySelector("#contactTitle"),
  p=document.querySelector("#footer");

  a.textContent=toggle.checked?"Mi nombre es Lautaro, soy una persona bilingúe de 22 años originaria de Argentina, graduado de un curso integro dictado por Coderhouse(HTML5, CSS3, Javascript y React.js). Trabajador dedicado con el objetivo de ayudar a lograr los objetivos y asumir más responsabilidades lo más rápido posible. Buscando aprovechar los conocimientos adquiridos (académicos y autodidactas) para cubrir efectivamente su puesto vacante.":"I'm Lautaro, a Bilingüal 22 year old originally from Argentina Graduated from a complete Front-end course dictated by Coderhouse(HTML5, CSS3, Javascript,React.js). Dedicated worker aiming to help achieve objectives and take on more responsability as quickly as possible!. Seekin to leverage adquired (Academic and Self-learned) knowlegde to effectively fill your open job position."
  b.textContent=toggle.checked?"Soy":"I'm",
  c.textContent=toggle.checked?"Perfil Profesional":"Profesional Profile",
  d.textContent=toggle.checked?"Descargar Curriculum":"Download Resume",
  e.textContent=toggle.checked?"Contactame!":"Let's Talk!",
  f.textContent=toggle.checked?"Habilidades":"Skills",
  g.textContent=toggle.checked?"Resolución de problemas":"Problem Solving",
  h.textContent=toggle.checked?"Desarrollador Front-End Jr":"Front-End Developer Jr",
  i.textContent=toggle.checked?"Emprendedor":"Entrepeneur",
  j.textContent=toggle.checked?"Mis trabajos mas recientes":"My recent work",
  k.textContent=toggle.checked?"Aca muestro unos diseños en los que estuve trabajando ultimamente.":"Here are a few design projects I've worked on recently.",
  l.textContent=toggle.checked?"Un sitio web hecho con HTML5, CSS3, y un poco de javascript, Esta dedicado a la venta de suplementos para gimnasio, con un formulario de contacto y muchas animaciones de CSS!":"A website made with HTML5, CSS3, and some of Javascript. a website for the sale of gym supplements with a contact form and a lot of animations!",
  m.textContent=toggle.checked?"Estoy abierto a discutir nuevas oportunidades de trabajo o de partnership!":"I’m always open to discussing new opportunities of work or partnership opportunities!",
  n.textContent=toggle.checked?"Dejame tu consulta/mensaje aca debajo y te respondere lo antes posible":"Left me your message down here and i will respond as soon as possible",
  o.textContent=toggle.checked?"Contactame":"Contact me",
  p.textContent=toggle.checked?"Hecho por Lautaro Caceres con mucho ☕ y ❤️":"Made by Lautaro Caceres with a lot of ☕ and ❤️";
}
  );

// btn cv download

// calling the button
const btnCv= document.querySelector('.btn-custom-cv');

// listening to the button and then applying the active class
btnCv.addEventListener("click",()=>{
  btnCv.classList.add("active-cv")
});

