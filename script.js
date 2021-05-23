document.querySelector('body').addEventListener('mousemove',eyeball);
function eyeball(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let a=(eye.getBoundingClientRect().left)+(eye.clientWidth/2);
        let b=(eye.getBoundingClientRect().top)+(eye.clientHeight/2);

        let radian = Math.atan2(event.pageX - a,event.pageY - b);
        let rot = (radian * (180/Math.PI)* -1)+0;

        eye.style.transform ="rotate("+rot+"deg)";
    })
}