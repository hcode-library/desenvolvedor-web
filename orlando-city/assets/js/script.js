(() => {

    const drawer = document.getElementById("drawer");

    document.querySelectorAll('[data-drawer="open"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.add("opened");
            }
        })

    })

    document.querySelectorAll('[data-drawer="close"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.remove("opened");
            }
        })

    })

    document.querySelectorAll('[data-drawer="toggle"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.toggle("opened");
            }
        })

    })

    ///////////////////////////////////////////////////////////

    const player = document.querySelector('.player');
    const video = player.querySelector('video');

    if (video) {
        video.addEventListener('playing', () => {
            if (player) {
                player.classList.add('playing');
            }
            if (video) {
                video.controls = true;
            }
        })
        video.addEventListener('pause', () => {
            if (player) {
                player.classList.remove('playing');
            }
            if (video) {
                video.controls = false;
            }
        })
    }
    if (player) {
        player.querySelector('.overlay').addEventListener('click', () => {

            if (video) {
                video.play();
            }

        })
    }

})()

