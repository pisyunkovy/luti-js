const HeaderStruct = () => ({
    tag: 'header',
    options: { className: 'header' },
    children: [
        {
            tag: 'div',
            options: { className: 'header__main' },
            children: [
                { tag: 'h1', options: { className: 'contacts-book__text', textContent: 'Галерейка' } },
            ],
        },
        {
            tag: 'div',
            options: {
                className: 'header__controls',
            },
            children: [
                {
                    tag: 'button',
                    options: {disabled: "disabled", textContent: 'кликай на меня' }
                },
                {
                    tag: 'button',
                    options: {
                        textContent: 'не кликай на меня'
                    },
                    listeners: {
                        click: () => alert('Ты на кого кликнул, а?')
                    }
                },
            ],
        },
    ],
});

export { HeaderStruct };