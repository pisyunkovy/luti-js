const FooterStruct = () => ({
    tag: 'footer',
    options: { className: 'footer' },
    children: [
        {
            tag: 'a',
            options: {
                href: "https://developer.mozilla.org/en-US/",
                textContent: 'Перейти на страницу mdn'
            },
        },
    ],
});

export {FooterStruct}