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
                aluno: 'Eduardo AJ'
            },
            {
                horario: '11h',
                aluno: 'Pedro - Js'
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
                aluno: 'Paulo Victor - React'
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
                aluno: 'Vago'
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
                aluno: 'Stefan - Disponivel apenas 19/03'
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
                aluno: 'Favela'
            },
            {
                horario: '20h',
                aluno: 'Michel New York'
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
                aluno: 'Eduardo AJ',
            },
            {
                horario: '11h',
                aluno: 'Pedro - Js'
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
                aluno: 'Paulo Victor - React'
            },
            {
                horario: '15h',
                aluno: 'Holanda'
            },
            {
                horario: '16h',
                aluno: 'Vago'
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
                aluno: 'Vago'
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
                aluno: '21 MARÇO VAGO - Arthur Sistema de Informação'
            },
            {
                horario: '15h',
                aluno: 'Eduardo'
            },
            {
                horario: '16h',
                aluno: 'Stefan - Disponivel apenas no dia 21/03'
            },
            {
                horario: '17h',
                aluno: 'Vago'
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
                aluno: 'V. Junior'
            },
            {
                horario: '21h',
                aluno: 'Michel New York'
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
                aluno: 'Eduardo AJ',
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
                aluno: 'Fernando 1/10 - PYTHON'
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
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Caio'
            },
            {
                horario: '19h',
                aluno: 'Varao'
            },
            {
                horario: '20h',
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
                aluno: 'Rocco',
            },
            {
                horario: '11h',
                aluno: 'Rocco'
            },
            {
                horario: '14h',
                aluno: 'Paulo Felix'
            },
            {
                horario: '15h',
                aluno: 'Londres - 1/5'
            },

        ]
    }
};