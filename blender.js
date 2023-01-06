/* Declaramos un estado iniciar de la licuadora */
var blenderState = "Off";

/* Necesitamos traer el elemento html al archivo javascript */
var blender = document.getElementById("blender");
var buttonSound = document.getElementById("sound-button-blender");
var blenderSound = document.getElementById("sound-blender-on");

/* Creamos una funcion que cambie el estado de la licuadora de apagado a prendido y viceversa */

function controlarLicuadora() {
  if (blenderState == "Off") {
    blenderState = "On";
    soundsBlender();
    blender.classList.add("active");
    console.log("Estoy prendido");
  } else {
    blenderState = "Off";
    soundsBlender();
    blender.classList.remove("active");
    console.log("Estoy apagado");
  }
}

/* Como quiero que suene al prenderse y apagarse debo crear una funcion que active el sonido en on y off y simule batido */

function soundsBlender() {
  if (blenderSound.paused) {
    blenderSound.play();
    buttonSound.play();
  } else {
    buttonSound.play();
    blenderSound.pause();
    blenderSound.currentTime = 0;
    // Aca como pausamos arriba el sonido ( x ej en el seg 2) para que vuelva a reproducirse desde 0, se declara currentTime=0;
  }
}
