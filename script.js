// const button = document.querySelector(".toastButtonmsg"),
const toast = document.querySelector(".toastmsg"),
      closeIcon = document.querySelector(".closemsg"),
      progress = document.querySelector(".progressmsg");

      let timer1, timer2;

      timer1 = setTimeout(() => {
        toast.classList.remove("activemsg");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("activemsg");
    }, 5300);
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("activemsg");
        
        setTimeout(() => {
          progress.classList.remove("activemsg");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });