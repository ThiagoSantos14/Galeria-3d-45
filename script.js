const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

img1.addEventListener('click', function(event){
    event.preventDefault();
    
    img1.classList = 'width-img';
    img2.classList = 'img-padrao';
    img3.classList = 'img-padrao';
    img4.classList = 'img-padrao';
    img5.classList = 'img-padrao';
});

img1.addEventListener('dblclick', function(event){
    event.preventDefault();
    
    img1.classList = 'double-click';
    img2.classList = 'double-click';
    img3.classList = 'double-click';
    img4.classList = 'double-click';
    img5.classList = 'double-click';
});

img2.addEventListener('click', function(event){
    event.preventDefault();

    img1.classList = 'img-padrao';
    img2.classList = 'width-img';
    img3.classList = 'img-padrao';
    img4.classList = 'img-padrao';
    img5.classList = 'img-padrao';
});

img2.addEventListener('dblclick', function(event){
    event.preventDefault();
    
    img1.classList = 'double-click';
    img2.classList = 'double-click';
    img3.classList = 'double-click';
    img4.classList = 'double-click';
    img5.classList = 'double-click';
});

img3.addEventListener('click', function(event){
    event.preventDefault();

    img1.classList = 'img-padrao';
    img2.classList = 'img-padrao';
    img3.classList = 'width-img';
    img4.classList = 'img-padrao';
    img5.classList = 'img-padrao';
});

img3.addEventListener('dblclick', function(event){
    event.preventDefault();
    
    img1.classList = 'double-click';
    img2.classList = 'double-click';
    img3.classList = 'double-click';
    img4.classList = 'double-click';
    img5.classList = 'double-click';
});

img4.addEventListener('click', function(event){
    event.preventDefault();

    img1.classList = 'img-padrao';
    img2.classList = 'img-padrao';
    img3.classList = 'img-padrao';
    img4.classList = 'width-img';
    img5.classList = 'img-padrao';
});

img4.addEventListener('dblclick', function(event){
    event.preventDefault();
    
    img1.classList = 'double-click';
    img2.classList = 'double-click';
    img3.classList = 'double-click';
    img4.classList = 'double-click';
    img5.classList = 'double-click';
});

img5.addEventListener('click', function(event){
    event.preventDefault();

    img1.classList = 'img-padrao';
    img2.classList = 'img-padrao';
    img3.classList = 'img-padrao';
    img4.classList = 'img-padrao';
    img5.classList = 'width-img';
});

img5.addEventListener('dblclick', function(event){
    event.preventDefault();
    
    img1.classList = 'double-click';
    img2.classList = 'double-click';
    img3.classList = 'double-click';
    img4.classList = 'double-click';
    img5.classList = 'double-click';
});
