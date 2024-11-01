const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        // Validación de campos
        const fromName = document.getElementById('from_name').value.trim();
        const emailId = document.getElementById('email_id').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fromName || !emailId || !message) {
            alert('Rellene todos los campos');
            return;
        }

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_7hv22po';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Comentario';
                alert('Comentario Enviado!');

                // Limpiar campos del formulario
                document.getElementById('form').reset();
            }, (err) => {
                btn.value = 'Enviar Comentario';
                alert(JSON.stringify(err));
            });
    });

