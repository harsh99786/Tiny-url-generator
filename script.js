// console.log("Running Javascript");
const form = document.querySelector(".wrapper form"),
fullURL = form.querySelector("input"),
shortenBtn = form.querySelector("button"),
blueEffect = document.querySelector(".blur-effect"),
popupBox = document.querySelector(".popup-box"),
shortenURL = popupBox.querySelector("input"),
saveBtn = popupBox.getElementsByClassName("b1");

form.onsubmit = (e) => {
    e.preventDefault();
}
shortenBtn.onclick = () => {
    let xhr = new XMLHttpRequest(); // creating xhr object
    xhr.open("POST", "php/url-controll.php", true);
    xhr.onload = ()=>{
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = xhr.response;
            if(data.length <= 5)
            {
                blueEffect.style.display = "block";
                popupBox.classList.add("show");
                let domain = "localhost/tinyurl?u=";
                shortenURL.value = domain + data;

                saveBtn.onclick = ()=>{
                    location.reload();
                }
            }
            else{
                alert(data);
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}