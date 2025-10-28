const GalleryStruct = () => ({
    tag: 'div',
    options: { className: 'gallery' },
    children: [
        {
            tag: 'h1',
            options: { className: 'gallery__title', textContent: 'Мемы' },
        },
        {
            tag: 'div',
            options: { className: 'gallery__images' },
            children: [
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK5WhJ1JNjn-VSvcWTHiix4fUoWar7GTv_A&s' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://news.store.rambler.ru/img/9dd07f9efa5d53d64aa28990a7e87768?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0NCOCZUgHbIQqNG5StT6g8jseR3Iw0GyrA&s' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyvvZ4-fBefMStBlD06XHUzOXxnbH1oQhwQ&s' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK5WhJ1JNjn-VSvcWTHiix4fUoWar7GTv_A&s' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://news.store.rambler.ru/img/9dd07f9efa5d53d64aa28990a7e87768?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0NCOCZUgHbIQqNG5StT6g8jseR3Iw0GyrA&s' },
                },
                {
                    tag: 'img',
                    options: { className: 'gallery__image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyvvZ4-fBefMStBlD06XHUzOXxnbH1oQhwQ&s' },
                },
            ],
        },
    ],
});

export { GalleryStruct };