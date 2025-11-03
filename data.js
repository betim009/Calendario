const getNextWeekdayDate = (weekday) => {
    const today = new Date();
    const result = new Date(today);
    const diff = (weekday - today.getDay() + 7) % 7;
    result.setDate(today.getDate() + diff);
    return result;
};

const formatDateInfo = (weekday) => {
    const date = getNextWeekdayDate(weekday);
    const display = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long' }).format(date);
    const displayWithYear = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
    return {
        display,
        displayWithYear,
        date,
    };
};

export const data = {
    segunda: {
        title: 'Segunda-feira',
        data: () => formatDateInfo(1),
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
                aluno: 'Joao Pedro'
            },
            {
                horario: '11h',
                aluno: 'Arthur'
            },
            {
                horario: '12h',
                aluno: 'Bruna'
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
                aluno: 'Jonas'
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
                aluno: 'Cobba'
            },
            {
                horario: '19h',
                aluno: 'Thiago'
            },
            {
                horario: '20h',
                aluno: 'Tiago'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            }
        ]
    },
    terca: {
        title: 'Terça-feira',
        data: () => formatDateInfo(2),
        agenda: [
            {
                horario: '08h',
                aluno: 'Maira'
            },
            {
                horario: '09h',
                aluno: 'Thais'
            },
            {
                horario: '10h',
                aluno: 'Vago',
            },
            {
                horario: '11h',
                aluno: 'Vitor S.'
            },
            {
                horario: '12h',
                aluno: 'Bruna'
            },
            {
                horario: '13h',
                aluno: 'Vago'
            },
            {
                horario: '14h',
                aluno: 'Clare'
            },
            {
                horario: '15h',
                aluno: 'Vago'
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
                aluno: 'Henrique V.'
            },
            {
                horario: '19h',
                aluno: 'Priscila'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            }
        ]
    },
    quarta: {
        title: 'Quarta-feira',
        data: () => formatDateInfo(3),
        agenda: [
            {
                horario: '08h',
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Thais'
            },
            {
                horario: '10h',
                aluno: 'Filipe',
            },
            {
                horario: '11h',
                aluno: 'Vago'
            },
            {
                horario: '12h',
                aluno: 'Bruna'
            },
            {
                horario: '13h',
                aluno: 'Clare'
            },
            {
                horario: '14h',
                aluno: 'Vago'
            },
            {
                horario: '15h',
                aluno: 'Jonas'
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
                aluno: 'Cobba'
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
            }
        ]
    },
    quinta: {
        title: 'Quinta-feira',
        data: () => formatDateInfo(4),
        agenda: [
            {
                horario: '08h',
                aluno: 'Maira'
            },
            {
                horario: '09h',
                aluno: 'Thais'
            },
            {
                horario: '10h',
                aluno: 'Joao Pedro',
            },
            {
                horario: '11h',
                aluno: 'Vitor S.'
            },
            {
                horario: '12h',
                aluno: 'Bruna'
            },
            {
                horario: '13h',
                aluno: 'Vago'
            },
            {
                horario: '14h',
                aluno: 'Clare'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Luisa'
            },
            {
                horario: '17h',
                aluno: 'Henrique V.'
            },
            {
                horario: '18h',
                aluno: 'Beatriz'
            },
            {
                horario: '19h',
                aluno: 'Priscila'
            },
            {
                horario: '20h',
                aluno: 'Vago'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            }
        ]
    },
    sexta: {
        title: 'Sexta-feira',
        data: () => formatDateInfo(5),
        agenda: [
            {
                horario: '08h',
                aluno: 'Bruna'
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
                aluno: 'Clare'
            },
            {
                horario: '15h',
                aluno: 'Jonas'
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
                aluno: 'Rogerio'
            },
            {
                horario: '21h',
                aluno: 'Vago'
            }
        ]
    },
    sabado: {
        title: 'Sábado',
        data: () => formatDateInfo(6),
        agenda: [
            {
                horario: '09h',
                aluno: 'Jenifer'
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
                aluno: 'Lobao'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            }
        ]
    },
    domingo: {
        title: 'Domingo',
        data: () => formatDateInfo(0),
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
