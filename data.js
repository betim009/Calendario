export const data = {
    segunda: {
        title: 'Segunda-feira',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 1 : diaSemana === 1 ? 0 : 8 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Danielle'
            },
            {
                horario: '10h',
                aluno: 'Vago'
            },
            {
                horario: '11h',
                aluno: 'Arthur'
            },
            {
                horario: '12h',
                aluno: 'Bruno'
            },
            {
                horario: '13h',
                aluno: 'Luxemburgo'
            },
            {
                horario: '14h',
                aluno: 'Henri'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Marco A.'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Felipo'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago (esse hoterrario não tem desconto, valor 40 reais h/aula)'
            }
        ]
    },
    terca: {
        title: 'Terça-feira',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 2 : diaSemana === 1 ? 1 : diaSemana === 2 ? 0 : 9 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '08h',
                aluno: 'Cadu V.'
            },
            {
                horario: '09h',
                aluno: 'Cadu V.'
            },
            {
                horario: '10h',
                aluno: 'João pedro',
            },
            {
                horario: '11h',
                aluno: 'Fabio'
            },
            {
                horario: '12h',
                aluno: 'Fabio'
            },
            {
                horario: '13h',
                aluno: 'Vago'
            },
            {
                horario: '14h',
                aluno: 'Henrique Portugal'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Pedro'
            },
            {
                horario: '18h',
                aluno: 'Arthur Cobb...'
            },
            {
                horario: '19h',
                aluno: 'Rocco'
            },
            {
                horario: '20h',
                aluno: 'Rocco'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago (esse horario não tem desconto, valor 40 reais h/aula)'
            }
        ]
    },
    quarta: {
        title: 'Quarta-feira',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 3 : diaSemana === 1 ? 2 : diaSemana === 2 ? 1 : diaSemana === 3 ? 0 : 10 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Danielle'
            },
            {
                horario: '10h',
                aluno: 'Vago',
            },
            {
                horario: '11h',
                aluno: 'Leandro'
            },
            {
                horario: '12h',
                aluno: 'Bruno'
            },
            {
                horario: '13h',
                aluno: 'Rhuan Luxemburgo'
            },
            {
                horario: '14h',
                aluno: 'Henrique Portugal'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Marcão'
            },
            {
                horario: '17h',
                aluno: 'Pedro'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Arilson'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago (esse horario não tem desconto, valor 40 reais h/aula)'
            }
        ]
    },
    quinta: {
        title: 'Quinta-feira',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 4 : diaSemana === 1 ? 3 : diaSemana === 2 ? 2 : diaSemana === 3 ? 1 : diaSemana === 4 ? 0 : 11 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '08h',
                aluno: 'Cadu V.'
            },
            {
                horario: '09h',
                aluno: 'Cadu V.'
            },
            {
                horario: '10h',
                aluno: 'Vago',
            },
            {
                horario: '11h',
                aluno: 'Arthur'
            },
            {
                horario: '12h',
                aluno: 'Bruno'
            },
            {
                horario: '13h',
                aluno: 'Rhuan Luxemburgo'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Pedro'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Marco A.'
            },
            {
                horario: '18h',
                aluno: 'Lucas - Futebol'
            },
            {
                horario: '19h',
                aluno: 'Felipo'
            },
            {
                horario: '20h',
                aluno: 'Junior'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago (esse horario não tem desconto, valor 40 reais h/aula)'
            }
        ]
    },
    sexta: {
        title: 'Sexta-feira',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 5 : diaSemana === 1 ? 4 : diaSemana === 2 ? 3 : diaSemana === 3 ? 2 : diaSemana === 4 ? 1 : diaSemana === 5 ? 0 : 12 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Vago apenas no dia - 12/04 - Vinicius 1/10'
            },
            {
                horario: '10h',
                aluno: 'João Pedro',
            },
            {
                horario: '11h',
                aluno: 'Fabio'
            },
            {
                horario: '12h',
                aluno: 'Fabio'
            },
            {
                horario: '13h',
                aluno: 'Vago'
            },
            {
                horario: '14h',
                aluno: 'Henri'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Mestre Eric'
            },
            {
                horario: '17h',
                aluno: 'Mestre Eric'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Vago'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago (esse horario não tem desconto, valor 40 reais h/aula)'
            }
        ]
    },
    sabado: {
        title: 'Sábado',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            let diferencaDias = diaSemana === 0 ? 6 : diaSemana === 1 ? 5 : diaSemana === 2 ? 4 : diaSemana === 3 ? 3 : diaSemana === 4 ? 2 : diaSemana === 5 ? 1 : diaSemana === 6 ? 0 : 13 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '09h',
                aluno: 'Lidiane'
            },
            {
                horario: '10h',
                aluno: 'Marco A.',
            },
            {
                horario: '11h',
                aluno: 'Fernando'
            },
            {
                horario: '14h',
                aluno: 'Paulo Victor'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Vago (para agendar esse horário preço de 40 reais h/aula sem desconto)'
            },
            {
                horario: '17h',
                aluno: 'Vago (para agendar esse horário preço de 40 reais h/aula sem desconto)'
            },
        ]
    },
    domingo: {
        title: 'Domingo',
        data: () => {
            let data = new Date();
            let diaSemana = data.getDay();
            // Calcula a diferença de dias até o próximo domingo
            let diferencaDias = diaSemana === 0 ? 0 : 7 - diaSemana;
            data.setDate(data.getDate() + diferencaDias);
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        },
        agenda: [
            {
                horario: '09h',
                aluno: 'Marco A.'
            },
            {
                horario: '10h',
                aluno: 'Marco A.'
            },
            {
                horario: '11h',
                aluno: 'Vago'
            },
        ]
    },
};