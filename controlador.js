let datosMemoria=JSON.parse(localStorage.getItem("datos"))
console.log(datosMemoria)


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
    localStorage.setItem("datos",JSON.stringify(comentarios))

    console.log(comentarios)

    Swal.fire({
        title: "Comentario Registrado",
        text: "Trabajaremos para brindarte un mejor servicio",
        icon: "success"
    });

})

//RUTINA PARA MOSTRAR LOS COMENTARIOS DE LOS CLIENTES
//EN PANTALLA
let fila=document.getElementById("fila")
datosMemoria.forEach(function(comentario){
    //Se crean tarjetas para mostrar la info

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100", "shadow","my-5", "p-5")

    let cliente=document.createElement("h4")
    cliente.classList.add("text-center","fw-bold")
    cliente.textContent="Nombre del cliente: "+comentario.nombre

    let comentarioCliente=document.createElement("p")
    comentarioCliente.textContent=comentario.recomendacion

    tarjeta.appendChild(cliente)
    tarjeta.appendChild(comentarioCliente)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})