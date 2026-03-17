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
                aluno: 'Victor'
            },
            {
                horario: '09h',
                aluno: 'Lucas'
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
                aluno: 'Vago'
            },
            {
                horario: '13h',
                aluno: 'Alex'
            },
            {
                horario: '14h',
                aluno: 'Arthur V.'
            },
            {
                horario: '15h',
                aluno: 'Jonas'
            },
            {
                horario: '16h',
                aluno: 'Jovem Tiago'
            },
            {
                horario: '17h',
                aluno: 'Bruno'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Kaua'
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
                aluno: 'Suele + Victor'
            },
            {
                horario: '09h',
                aluno: 'Lucas'
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
                aluno: 'Anderson(python IA)'
            },
            {
                horario: '14h',
                aluno: 'Bruno(ragnarok)'
            },
            {
                horario: '15h',
                aluno: 'Vago'
            },
            {
                horario: '16h',
                aluno: 'Jovem Tiago'
            },
            {
                horario: '17h',
                aluno: 'Bruno'
            },
            {
                horario: '18h',
                aluno: 'Carol'
            },
            {
                horario: '19h',
                aluno: 'Kaua + Caio'
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
                aluno: 'Victor'
            },
            {
                horario: '09h',
                aluno: 'Lucas'
            },
            {
                horario: '10h',
                aluno: 'Peres + Geologa',
            },
            {
                horario: '11h',
                aluno: 'Mario'
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
                aluno: 'Arthur V. + Lucas M.'
            },
            {
                horario: '15h',
                aluno: 'Jonas'
            },
            {
                horario: '16h',
                aluno: 'Jovem Tiago'
            },
            {
                horario: '17h',
                aluno: 'Bruno'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Kaua'
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
                aluno: 'Victor'
            },
            {
                horario: '09h',
                aluno: 'Lucas'
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
                aluno: 'Bruno(Ragnarok)'
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
                aluno: 'Bruno'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Kaua'
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
                aluno: 'Suele + Victor'
            },
            {
                horario: '09h',
                aluno: 'Lucas'
            },
            {
                horario: '10h',
                aluno: 'Peres',
            },
            {
                horario: '11h',
                aluno: 'Mario + Matheus Linkedin Python'
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
                aluno: 'Bruno'
            },
            {
                horario: '18h',
                aluno: 'Vago'
            },
            {
                horario: '19h',
                aluno: 'Kaua'
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
                aluno: 'Irmaos'
            },
            {
                horario: '10h',
                aluno: 'Irmaos',
            },
            {
                horario: '13h',
                aluno: 'Leo'
            },
            {
                horario: '14h',
                aluno: 'Leo'
            },
            {
                horario: '15h',
                aluno: 'Henrique'
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
