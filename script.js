document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const status = document.getElementById('status');

  if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
    status.textContent = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
  } else {
    status.textContent = 'Mensagem enviada!';
    status.style.color = 'green';
    this.reset();
  }
});
