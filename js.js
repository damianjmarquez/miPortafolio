


const form = document.getElementById("form")
async function handleSendEmail(event){
    event.preventDefault()

    const fd = new FormData(this)

    const response = await fetch("https://formspree.io/f/mknedvbl",{
    method:"POST",
    body: fd,
    headers : {
        Accept: "application/json"
    }})

    if (response.ok) {
        this.reset()
        
        Swal.fire({
            title: "su mensaje ha sido enviado correctamente",
            text: "Espero hayas disfrutado mi portafolio",
            icon: "success",
            
        })
    } else{
        alert("error al enviar mensaje")
    }
}
form.addEventListener("submit", handleSendEmail)










function abrir(){
    document.getElementById("info").style.width="100%";
    
    
    
}




function cierra(){
    document.getElementById("info").style.width ="0"; 
     
}