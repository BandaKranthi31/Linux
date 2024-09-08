const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
       
    });
});

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
         else{
            entry.target.classList.remove('show2');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.animate2');
hiddenElements2.forEach((el2) => observer2.observe(el2));



const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show3');
        }
         else{
            entry.target.classList.remove('show3');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el3) => observer3.observe(el3));