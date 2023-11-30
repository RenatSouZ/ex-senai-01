//retorna o elemento digitado
document.getElementById('contactForm').addEventListener('submit', function(event) {
 //prevenir o comportamento padrão de um evento
  event.preventDefault();
   const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const status = document.getElementById('status');
  //tratamento das ações se o campo ficar em branco  
  if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
    status.textContent = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
  } else {
  //se estiver tudo ok
    status.textContent = 'Mensagem enviada!';
    status.style.color = 'green';
    this.reset();
  }
});
