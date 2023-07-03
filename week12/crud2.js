$(document).ready(function () {
    const URL_ENDPOINT = 'https://64a106e40079ce56e2dac1a4.mockapi.io';

    function displayDonations() {
        $.get(`${URL_ENDPOINT}/donation`).then(data => {
            $('#list tbody').empty();

        });
    }

})


$.get(URL_ENDPOINT).then(data => {
    data.map(donation => {
        $('body').append(
            $(`
            <tr>
                <td>${donation.id}</td>
                <td>${donation.name}</td>
                <td>${donation.donationDate}</td>
                <td>${donation.amount}</td>
                <td>${donation.paymentType}</td>
                <td>${donation.note}</td>
                <td><button id="deleteDonation" onclick="deleteDonation(${donation.id})" class="btn btn-danger">Delete</button>
            </tr>`)
        )
    })
})

$('#addInfo').on('click', function (event) {
    event.preventDefault();

    const newDonation = {
        name: $('#new-name').val(),
        donationDate: $('#new-start-date').val(),
        amount: $('#new-amount').val(),
        paymentType: $('#new-payment').val(),
        Note: $('#new-note').val()
    };

    $.post(`${URL_ENDPOINT}/donation`, newDonation)
        .then(() => {
            displayDonation();
            clearForm();
        })
        .catch(error => {
            console.error('Error adding donation:', error);
        });
});


function deleteDonation(id) {
    if (confirm('Are you sure you want to delete this donation?')) {
        $.ajax({
            url: `${URL_ENDPOINT}/donation/${id}`,
            method: 'DELETE',
            success: function () {
                displayDonation();
            },
            error: function (error) {
                console.error('Error deleting donation:', error);
            }
        });
    }
}

function editDonation(id) {
    $.get(`${URL_ENDPOINT}/donation/${id}`)
        .then(data => {
            $('#new-id').val(data.id);

})

function updateDonation() {
    let donationId = $('#new-id').val();

 const updatedDonation = {
        name: $('#new-name').val(),
        donationDate: $('#new-start-date').val(),
        amount: $('#new-amount').val(),
        paymentType: $('#new-payment').val(),
        Note: $('#new-note').val()
    };

    $.ajax({
        url: `${URL_ENDPOINT}/donation/${donationId}`,
        method: 'PUT',
        data: updatedDonation,
        success: function () {
            displayDonations();
            clearForm();
        },
        error: function (error) {
            console.error('Error updating donation:', error);
        }
    });
}};

$('#updateInfo').on('click', function (event) {
    event.preventDefault();
    updateDonation();
});

function clearForm() {
    $('#new-id').val('');
    $('#new-name').val('');
    $('#new-start-date').val('');
    $('#new-amount').val('');
    $('#new-payment').val('');
    $('#new-note').val('');
};




$('#updateDonation').click(updateDonation)

fetch('crud.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data
    console.log(data.name);
    console.log(data.date);
    console.log(data.paymentType);
    console.log(data.amount);
    console.log(data.note);
    
  })
  .catch(error => console.error(error));