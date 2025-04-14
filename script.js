document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeReserva').value;
    const data = document.getElementById('dataReserva').value;
    document.getElementById('mensagem').innerText = `Reserva feita para ${nome} em ${data}.`;
  });
  
  document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomePedido').value;
    const pedido = document.getElementById('pedido').value;
    document.getElementById('mensagem').innerText = `Pedido enviado por ${nome}: "${pedido}"`;
  });
  