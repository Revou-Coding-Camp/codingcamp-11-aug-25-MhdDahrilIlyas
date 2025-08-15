
welcomeSpeech();

function welcomeSpeech() {
    let userName = prompt("What is yout name?");
    if ( userName && userName.trim() != '' ){
        document.getElementById('user-greeting').textContent = userName;
    }
}

// Responsive navbar
const navbarNav     = document.querySelector('.navbar');
const humbergerMenu = document.querySelector('.humberger-menu');
const navLinks      = document.querySelectorAll('.menu-link');

// Menambahkan class active pada elemen navbar dan humberger-menu
humbergerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
    humbergerMenu.classList.toggle('active');
}
// Ketika kita click dibagian luar dari navbar dan humberger-menu maka navbar akan ditutup
document.addEventListener('click', function(e){
    if(!humbergerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        humbergerMenu.classList.remove('active');
    }
})
// Menambahkan eventListener ke setiap link agar ketika link di klik maka akan menutup bagian navbar
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navbarNav.classList.remove('active');
    })
})


// Message Form
document.getElementById("sendValue").addEventListener("click", function() {
    // Ambil nilai form
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const pesan = document.getElementById("pesan").value;

    // Ambil waktu sekarang
    const currentTime = new Date();

    // Menaruh value input ke tag p
    document.getElementById("nama-output").textContent = nama;
    document.getElementById("tanggal-lahir-output").textContent = tanggalLahir;
    document.getElementById("jenis-kelamin-output").textContent = gender;
    document.getElementById("pesan-output").textContent = pesan;
    document.getElementById("time-output").textContent = currentTime;

    // Reset form
    document.querySelector(".form-input form").reset();
});


// untuk menambahkan clas sticky pada header
let lastScroll = 0;

window.addEventListener("scroll", function () {
    let header = document.querySelector(".site-header");
    let currentScroll = window.scrollY;

    if (currentScroll > 0) {
        header.classList.add("sticky"); 
    }

    if (currentScroll === 0) {
        header.classList.remove("sticky"); 
    }

    lastScroll = currentScroll; 
});