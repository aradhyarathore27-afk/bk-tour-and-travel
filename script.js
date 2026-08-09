
// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// ================= BOOKING FORM =================

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const pickup =
            document.getElementById("pickup").value;

        const drop =
            document.getElementById("drop").value;

        const date =
            document.getElementById("date").value;

        const phone =
            document.getElementById("phone").value;


        const whatsappNumber = "+918923295024";

        const message =
            `Hello B.K Tour & Travels,%0A%0A` +
            `I want to book a taxi.%0A%0A` +
            `Pickup: ${pickup}%0A` +
            `Drop: ${drop}%0A` +
            `Date: ${date}%0A` +
            `My Phone: ${phone}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(whatsappURL, "_blank");

});


// ================= CAR BOOKING =================

function bookCar(carName) {

    const whatsappNumber = "+918923295024";

    const message =
        `Hello B.K Tour & Travels,%0A%0A` +
        `I want to book: ${carName}.%0A` +
        `Please share availability and fare.`;


    const url =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");
}


// ================= CURRENT DATE =================

const today = new Date()
    .toISOString()
    .split("T")[0];

document.getElementById("date").min = today;