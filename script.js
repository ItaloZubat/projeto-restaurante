document.getElementById('reservaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nomeReserva').value;
  const data = document.getElementById('dataReserva').value;

  const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
  
  const li = document.createElement('li');
  li.textContent = `Reserva feita para ${nome} em ${dataFormatada}`;
  document.getElementById('listaReservas').appendChild(li);

  document.getElementById('secaoReservas').classList.remove('oculto');

  document.getElementById('nomeReserva').value = '';
  document.getElementById('dataReserva').value = '';
});

document.getElementById('pedidoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nomePedido').value;
  const pedido = document.getElementById('pedido').value;

  const li = document.createElement('li');
  li.textContent = `Pedido de ${nome}: "${pedido}"`;
  document.getElementById('listaPedidos').appendChild(li);

  document.getElementById('secaoPedidos').classList.remove('oculto');

  document.getElementById('nomePedido').value = '';
  document.getElementById('pedido').value = '';
});
