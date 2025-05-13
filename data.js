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
                aluno: 'Bam'
            },
            {
                horario: '09h',
                aluno: 'Luige'
            },
            {
                horario: '10h',
                aluno: 'Joao Pedro'
            },
            {
                horario: '11h',
                aluno: 'Arthur'
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
                aluno: 'Bruna'
            },
            {
                horario: '16h',
                aluno: 'Jonas'
            },
            {
                horario: '17h',
                aluno: 'Natalia'
            },
            {
                horario: '18h',
                aluno: 'Ysla'
            },
            {
                horario: '19h',
                aluno: 'Vago'
            },
            {
                horario: '20h',
                aluno: 'Beatriz'
            },
            {
                horario: '21h',
                aluno: 'Vago'
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
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Rocco'
            },
            {
                horario: '10h',
                aluno: 'Maia',
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
                aluno: 'Jason'
            },
            {
                horario: '16h',
                aluno: 'Luisa'
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
                aluno: 'Jana Garcia'
            },
            {
                horario: '20h',
                aluno: 'Pietro'
            },
            {
                horario: '21h',
                aluno: 'Rodolfo'
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
                aluno: 'Bam'
            },
            {
                horario: '09h',
                aluno: 'Vago'
            },
            {
                horario: '10h',
                aluno: 'Maia',
            },
            {
                horario: '11h',
                aluno: 'Camilla'
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
                aluno: 'Bruna'
            },
            {
                horario: '16h',
                aluno: 'Jonas'
            },
            {
                horario: '17h',
                aluno: 'Natalia'
            },
            {
                horario: '18h',
                aluno: 'Ysla'
            },
            {
                horario: '19h',
                aluno: 'Jana Garcia'
            },
            {
                horario: '20h',
                aluno: 'Henrique'
            },
            {
                horario: '21h',
                aluno: 'Vago'
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
                aluno: 'Paulo'
            },
            {
                horario: '09h',
                aluno: 'Rocco'
            },
            {
                horario: '10h',
                aluno: 'Joao Pedro',
            },
            {
                horario: '11h',
                aluno: 'Maia'
            },
            {
                horario: '12h',
                aluno: 'Vago'
            },
            {
                horario: '13h',
                aluno: 'Natalia'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Jason'
            },
            {
                horario: '16h',
                aluno: 'Luisa'
            },
            {
                horario: '17h',
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Beatriz'
            },
            {
                horario: '19h',
                aluno: 'Holandês Igor'
            },
            {
                horario: '20h',
                aluno: 'Henrique'
            },
            {
                horario: '21h',
                aluno: 'Rodolfo'
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
                aluno: 'Paulo'
            },
            {
                horario: '09h',
                aluno: 'Vago'
            },
            {
                horario: '10h',
                aluno: 'Arthur Ver.',
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
                aluno: 'Bruna'
            },
            {
                horario: '16h',
                aluno: 'Jonas'
            },
            {
                horario: '17h',
                aluno: 'Vago'
            },
            {
                horario: '18h',
                aluno: 'Pietro'
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
                aluno: 'Henri'
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
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            }
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
                horario: '10h',
                aluno: 'Vago - Não há desconto'
            },
            {
                horario: '11h',
                aluno: 'Vago - Não há desconto'
            },
        ]
    },
};