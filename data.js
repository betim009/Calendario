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
                aluno: 'Henrique Portugal'
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
                aluno: 'Vago'
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
                aluno: 'Favela'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Priscila'
            },
            {
                horario: '17h',
                aluno: 'Marco A.'
            },
            {
                horario: '18h',
                aluno: 'Caio'
            },
            {
                horario: '19h',
                aluno: 'Felipo'
            },
            {
                horario: '20h',
                aluno: 'Arthur Cobbaert'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
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
                aluno: 'Vago',
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
                aluno: 'Pedro - Js'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Eduardo'
            },
            {
                horario: '16h',
                aluno: 'Stefan'
            },
            {
                horario: '17h',
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Ronaldo'
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
                aluno: 'Vago'
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
                aluno: 'Favela'
            },
            {
                horario: '15h',
                aluno: 'Holanda'
            },
            {
                horario: '16h',
                aluno: 'Eduardo'
            },
            {
                horario: '17h',
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Caio'
            },
            {
                horario: '19h',
                aluno: 'V. Junior'
            },
            {
                horario: '20h',
                aluno: 'Arthur Cobbaert'
            },
            {
                horario: '21h',
                aluno: 'Pedro'
            },
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
                aluno: 'Vago apenas no dia 11/4 - Cadu V.'
            },
            {
                horario: '09h',
                aluno: 'Vago apenas no dia 11/4 - Cadu V.'
            },
            {
                horario: '10h',
                aluno: 'Guilherme Aluno Novo',
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
                aluno: 'Micaella'
            },
            {
                horario: '15h',
                aluno: 'Eduardo'
            },
            {
                horario: '16h',
                aluno: 'Stefan'
            },
            {
                horario: '17h',
                aluno: 'Marco A.'
            },
            {
                horario: '18h',
                aluno: 'Pedro - Js'
            },
            {
                horario: '19h',
                aluno: 'Felipo'
            },
            {
                horario: '20h',
                aluno: 'Mateus aluno novo'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
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
                horario: 'Henrique',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Vinicius 5/5'
            },
            {
                horario: '10h',
                aluno: 'Vago',
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
                aluno: 'Pedro - Js'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Priscila'
            },
            {
                horario: '17h',
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Caio'
            },
            {
                horario: '19h',
                aluno: 'Bella'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21',
                aluno: 'Vago'
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
                aluno: 'Vago'
            },
            {
                horario: '10h',
                aluno: 'Vago apenas no dia 13/4 - Rocco',
            },
            {
                horario: '11h',
                aluno: 'Vago apenas no dia 13/4 - Rocco'
            },
            {
                horario: '14h',
                aluno: 'Paulo Felix'
            },
            {
                horario: '15h',
                aluno: 'Londres - 3?4/5'
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
    }
};