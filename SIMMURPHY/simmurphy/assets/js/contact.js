// Feedback

function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_tq8acca", "template_b1skd39", params).then(function (res) {
        alert("Succesfully Sent Message" + res.status);
    })
}