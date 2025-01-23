function btn(){
    let image = document.getElementById('image');
    let images = ['./img/home1.jpg', './img/home2.jpg', './img/home3.jpg'];

    let random = Math.floor(Math.random() * 3);
    image.src = images[random];
}