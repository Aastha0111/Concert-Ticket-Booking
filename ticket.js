const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row3 .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const concertSelect = document.getElementById('concert');

populateUI();
let ticketPrice = +concertSelect.value;

//save selected consert index and price
function setConcertData(concertIndex, concertPrice){
    localStorage.setItem('selectedConcertIndex', concertIndex);
    localStorage.setItem('selectedConcertPrice', concertPrice);
}


// update total and count

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row3 .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//get data from localstorage and populate the ui
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    if(selectedSeats != null && selectedSeats.length > 0)
    {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1)
            {
                seat.classList.add('selected');

            }
        })
    }
    
    const selectedConcertIndex = localStorage.getItem('selectedConcertIndex');

    if(selectedConcertIndex != null){
        concertSelect.selectedIndex = selectedConcertIndex;
    }
}

//row select event
concertSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setConcertData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
       
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();

});
updateSelectedCount();