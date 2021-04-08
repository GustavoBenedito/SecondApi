const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento')

ModeloTabelaAgendamento.sync()
    .then(()=> {
        console.log('Tabela criada com sucesso')
    })
    .catch(
        console.log("erro, tabela nao criada")
    );