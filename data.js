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
                aluno: 'Mathzz'
            },
            {
                horario: '09h',
                aluno: 'Cadu'
            },
            {
                horario: '10h',
                aluno: 'Matheus'
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
                aluno: 'Bruno - JS '
            },
            {
                horario: '16h',
                aluno: 'Stefan'
            },
            {
                horario: '17h',
                aluno: 'Diego Python Navio'
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
                aluno: 'Lucas Python'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
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
                aluno: 'Jorge'
            },
            {
                horario: '09h',
                aluno: 'Vago'
            },
            {
                horario: '10h',
                aluno: 'Lucas',
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
                aluno: 'Arthur Sistema de Informação'
            },
            {
                horario: '15h',
                aluno: 'Eduardo'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Diego Python Navio'
            },
            {
                horario: '18h',
                aluno: 'Lucas Python'
            },
            {
                horario: '19h',
                aluno: 'Ronaldo'
            },
            {
                horario: '20h',
                aluno: 'Artur'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
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
                aluno: 'Cadu'
            },
            {
                horario: '10h',
                aluno: 'Matheus',
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
                aluno: 'Vago'
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
                aluno: 'Diego Python Navio'
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
                aluno: 'Lucas Python'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
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
                aluno: 'Vago'
            },
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
                aluno: 'Leandro'
            },
            {
                horario: '12h',
                aluno: 'Bruno'
            },
            {
                horario: '13h',
                aluno: 'Vago'
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
                aluno: 'Diego Python Navio'
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
                aluno: 'Arthur'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
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
                aluno: 'Vinicius Python 1/5'
            },
            {
                horario: '09h',
                aluno: 'Cadu'
            },
            {
                horario: '10h',
                aluno: 'Matheus',
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
                aluno: 'Rocco'
            },
            {
                horario: '15h',
                aluno: 'Bruno'
            },
            {
                horario: '16h',
                aluno: 'Vago'
            },
            {
                horario: '17h',
                aluno: 'Diego Python Navio'
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
            },
            {
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago'
            },
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
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Aluno Novo - Diego'
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
                horario: '21h',
                aluno: 'Vago'
            },
            {
                horario: '22h',
                aluno: 'Vago'
            },
        ]
    }
};