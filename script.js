function onSignIn(googleUser) {
    window.location = "admin.html";
    $(".onSignIn").css("display", "none");
    const profile = googleUser.getBasicProfile();
    $("#pic").attr('src', profile.getImageUrl());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function onSignInadmin(googleUser) {
    $(".onSignIn").css("display", "none");
    const profile = googleUser.getBasicProfile();
    $("#pic").attr('src', profile.getImageUrl());
    $("#pic1").attr('src', profile.getImageUrl());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function reply1() {
    $("#reply1").css("display", "none");
}
function reply2() {
    $("#reply2").css("display", "none");
}
function reply3() {
    $("#reply3").css("display", "none");
}
function reply4() {
    $("#reply4").css("display", "none");
}
function cancel() {
    $("#reply1").css("display", "");
    $("#reply2").css("display", "");
    $("#reply3").css("display", "");
    $("#reply4").css("display", "");
}