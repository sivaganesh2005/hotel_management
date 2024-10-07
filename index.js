class Restaurant {
    constructor() {
        this.reservations = [];
    }

    add(customerName, guestNumber, reservationTime) {
        const reservation = {
            customerName,
            guestNumber,
            reservationTime
        };
        this.reservations.push(reservation);
        this.display();
    }

    display() {
        const reservationList = document.getElementById('reservationList');
        reservationList.innerHTML = '';

        this.reservations.forEach((reservation, index) => {
            const reservationDiv = document.createElement('div');
            reservationDiv.innerHTML = `
                <strong>Customer:</strong> ${reservation.customerName} <br>
                <strong>Guests:</strong> ${reservation.guestNumber} <br>
                <strong>Time:</strong> ${reservation.reservationTime} <br>
                <button onclick="removeReservation(${index})">Remove Reservation</button>
                <hr>
            `;
            reservationList.appendChild(reservationDiv);
        });
    }

    remove(index) {
        this.reservations.splice(index, 1); 
        this.display();
    }
}

const myRestaurant = new Restaurant();

function add() {
    const customerName = document.getElementById('customerName').value;
    const guestNumber = document.getElementById('guestNumber').value;
    const reservationTime = document.getElementById('reservationTime').value;

    if (customerName && guestNumber && reservationTime) {
        myRestaurant.add(customerName, guestNumber, reservationTime);
        document.getElementById('customerName').value = '';
        document.getElementById('guestNumber').value = '';
        document.getElementById('reservationTime').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

function remove(index) {
    myRestaurant.remove(index);
}