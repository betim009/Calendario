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
                aluno: 'Vago'
            },
            {
                horario: '12h',
                aluno: 'Vago'
            },
            {
                horario: '13h',
                aluno: 'Alex'
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
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Caio'
            },
            {
                horario: '20h',
                aluno: 'Fabio'
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
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Vago'
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
                aluno: 'Caio'
            },
            {
                horario: '20h',
                aluno: 'Debora'
            },
            {
                horario: '21h',
                aluno: 'Fabio'
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
                aluno: 'Vago'
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
                aluno: 'Rogerio'
            },
            {
                horario: '20h',
                aluno: 'Fabio'
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
                aluno: 'Vago'
            },
            {
                horario: '09h',
                aluno: 'Vago'
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
                aluno: 'Rogerio'
            },
            {
                horario: '20h',
                aluno: 'Debora'
            },
            {
                horario: '21h',
                aluno: 'Fabio'
            }
        ]
    },
    sexta: {
        title: 'Sexta-feira',
        data: () => formatDateInfo(5),
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
                aluno: 'Arthur Ver.',
            },
            {
                horario: '11h',
                aluno: 'Vago'
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
                aluno: 'Jonas'
            },
            {
                horario: '16h',
                aluno: 'Fabio'
            },
            {
                horario: '17h',
                aluno: 'Fabio'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Caio'
            },
            {
                horario: '20h',
                aluno: 'Fabio'
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
                aluno: 'Leo'
            },
            {
                horario: '10h',
                aluno: 'Leo',
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
