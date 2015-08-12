angular.module('app.controller.ControllerController', [])
.controller('ControllerController', Controller);

function Controller () {
  var vm = this;
  var copy;

  vm.adicionar = adicionar;
  vm.excluir = excluir;

  function adicionar () {
    vm.participantes.push(vm.item);
    vm.item = {} // new Object();
  };

  function editar (item) {
    angular.copy(item);
    vm.item = item;
  }

  function cancelar(item) {
      angular.copy(copia, vm.item);
    }
  }

  function excluir(item) {
    vm.participantes = vm.participantes.filter(function (inner) {
      return item != inner;
    })

  vm.participantes = [
    {id: 1, nome: "Peter", pizza: true},
    {id: 2, nome: "Presidente", pizza: true},
    {id: 3, nome: "Zefa", pizza: true},
    {id: 4, nome: "Marcelo", pizza: true},
    {id: 5, nome: "Mamédo", pizza: true},
    {id: 6, nome: "Tonhão", pizza: true},
    {id: 7, nome: "ninguém", pizza: false},
    {id: 8, nome: "Igor", pizza: true},
  ]
  vm.nome = 'Evandro';
}
