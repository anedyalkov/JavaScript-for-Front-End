
let firstLetterOfFirstName = ''
let lastName = ''
let branch = ''
let company = ''

//{firstLetterOfFirstName}.{lastName}@{branch}-{company}.com
//.@-.com
$("#firstName").keyup(function () {
    firstLetterOfFirstName = (this.value[0]).toLowerCase()
    email(firstLetterOfFirstName)
});

// $("#firstName").on("change paste keyup", function() {
//     alert($(this).val());
// });


$("#lastName").keyup(function () {
    lastName = (this.value).toLowerCase()
    email(lastName)
});

$("#branch").keyup(function () {
    branch = (this.value).toLowerCase()
    email(branch)
});

$("#company").keyup(function () {
    company = (this.value).toLowerCase()
    email(company)
});


function email(value) {
    let email = `${firstLetterOfFirstName}.${lastName}@${branch}-${company}.com`
    $('#email').val(email)
}

