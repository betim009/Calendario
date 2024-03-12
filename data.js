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
                aluno: 'Eduardo'
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
                aluno: 'Paulo Victor - React'
            },
            {
                horario: '15h',
                aluno: 'Bruno Papalegolas'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Luis'
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
                aluno: 'Vago'
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
                aluno: 'Vago'
            },
            {
                horario: '12h',
                aluno: 'Fabio'
            },
            {
                horario: '13h',
                aluno: 'Fabio'
            },
            {
                horario: '14h',
                aluno: 'Arthur SI'
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
                aluno: 'Luis'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Ronaldo'
            },
            {
                horario: '20h',
                aluno: 'Ariadna'
            },
            {
                horario: '21h',
                aluno: 'Ariadna'
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
                aluno: 'Veraldino ?'
            },
            {
                horario: '09h',
                aluno: 'Vago'
            },
            {
                horario: '10h',
                aluno: 'Eduardo',
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
                aluno: 'Paulo Victor - React'
            },
            {
                horario: '15h',
                aluno: 'Bruno JS'
            },
            {
                horario: '16h',
                aluno: 'Rocco'
            },
            {
                horario: '17h',
                aluno: 'Luis'
            },
            {
                horario: '18h',
                aluno: 'Caio'
            },
            {
                horario: '19h',
                aluno: 'Ronaldo'
            },
            {
                horario: '20h',
                aluno: 'Vago'
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
                aluno: 'Rocco',
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
                aluno: 'Arthur Sistema de Informação'
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
                aluno: 'Luis'
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
                aluno: 'Veraldino'
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
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Vinicius Python 1/5'
            },
            {
                horario: '10h',
                aluno: 'Lucas JS / Futebas',
            },
            {
                horario: '11h',
                aluno: 'Vago'
            },
            {
                horario: '12h',
                aluno: 'Fabio'
            },
            {
                horario: '13h',
                aluno: 'Fabio'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Bruno'
            },
            {
                horario: '16h',
                aluno: 'Rocco'
            },
            {
                horario: '17h',
                aluno: 'Luis'
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
                aluno: 'Dione'
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
                horario: '12h',
                aluno: 'Vago'
            },
            {
                horario: '13h',
                aluno: 'Vago'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            }
        ]
    }
};