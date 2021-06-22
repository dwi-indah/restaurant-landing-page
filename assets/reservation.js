function submitFunction() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;
    people = document.getElementById("people").value;
    btnSubmit = document.getElementById("btn-submit");

    confirm('Hello Mr/Ms/Mrs ' + name + '\nYou reserve table for ' + people + ' people\nOn ' + date + time + '\nPlease check Your Email ' + email + ' for confirmation.\n\n');
}