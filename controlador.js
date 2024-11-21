let comentarios=[]
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
   
    //Rutina para capturar datos

    //Estructura para almacenar MUCHOS datos
    //ARREGLO DE DATOS
    

    let nombre=document.getElementById("nombres").value
    let correo=document.getElementById("correo").value
    let recomendacion=document.getElementById("recomendaciones").value
    let telefono=document.getElementById("telefono").value
    let ciudad=document.getElementById("ciudad").value

    //todos los datos recogidos se asocian a una sola variable
    //objeto=JSON
    let datosFormulario={
        nombre,
        correo,
        recomendacion,
        telefono,
        ciudad
    }
    
    //agregar el conjunto de datos al arreglo previamente establecido
    comentarios.push(datosFormulario)

    console.log(comentarios)

})

//RUTINA PARA MOSTRAR LOS COMENTARIOS DE LOS CLIENTES
//EN PANTALLA
comentarios.forEach(function(comentario){
    //Se crean tarjetas para mostrar la info

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100", "shadow")

    let cliente=document.createElement("h4")
    cliente.classList.add("text-center","fw-bold")
    cliente.textContent=comentario.nombre

})