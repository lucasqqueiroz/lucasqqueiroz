document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.createElement('div');
    successMessage.style.display = 'none';
    successMessage.style.color = 'green';
    successMessage.style.fontSize = '16px';
    successMessage.textContent = 'Cadastro realizado com sucesso!';
    form.appendChild(successMessage);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstname = document.getElementById('firstname').value;
        const company = document.getElementById('company').value;
        const cpf = document.getElementById('cpf').value;
        const position = document.getElementById('position').value;
        const education = document.getElementById('education').value;
        const email = document.getElementById('email').value;
        const cep = document.getElementById('cep').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const number = document.getElementById('number').value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if (!firstname || !company || !cpf || !position || !education || !email || !cep || !password || !confirmPassword || !number || !gender) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        successMessage.style.display = 'block';
        form.reset();
    });
});
