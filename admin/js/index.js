$(document).ready(function() {
    var role = $('#role').val();
    if (role == 1) {

        $('#User').remove();

    } else {
        $('#admin').remove();

    }
    // $('#calendar_show').load('calendar.html');

    $('#user_dashboard').click(function(e) {
        e.preventDefault();
        
        $('#user_dashboard_show').show();
        $('#user_profile_show').hide();
        $('#user_attendence_show').hide();

    });
    $('#user_profile').click(function(e) {
        e.preventDefault();
        $('#user_dashboard_show').hide();
        $('#user_profile_show').show();
        $('#user_attendence_show').hide();

    });

    $('.close').click(function() {
        $('#single_user_data').modal('hide');
        $('#user_attendence_show').modal('hide');
    });
    loadActive();
    loadInactive();
    loadPresent();
    loadAbsent();
    currentDateRecord()
    $('#display_data').hide();


    // ACTIVE User function

    function loadActive() {
        var emp_data = '';
        $('#display_data').empty();
        $.getJSON(
            "http://localhost/api/Pro/index.php?status=1",

            function(data) {
                var length = data.length;

                // console.log(length);
                if (length > 0) {
                    emp_data = '<thead><tr><th scope="col">Email</th><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="colspan-3">Action</th></tr></thead><tbody>';
                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.email + '</td><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td><button class="btn btn-info" id="show" data-id="' + value.employeeCode + '">Show</button></td><td><button class="btn btn-danger" id="delete" data-id="' + value.employeeCode + '">Delete</button></td></tr></tbody>'

                    });
                    $('#display_data').html(emp_data);
                    // $('#display_data').DataTable();
                    $('#no_of_active_users').html(length);
                } else {
                    $('#display_data').empty();
                    $('#no_of_active_users').html('0');
                }

            }
        );
    }
    // INACTIVE User function
    function loadInactive() {
        var emp_data = '';
        var i = 1;
        $('#display_data').empty();
        $.getJSON(

            "http://localhost/api/Pro/index.php?status=0",

            function(data) {
                var length = data.length;
                // console.log(length);
                if (length > 0) {
                    emp_data = '<thead><tr><th scope="col">Email</th><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="colspan-3">Action</th></tr></thead><tbody>';
                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.email + '</td><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td><button class="activate btn btn-secondary" id="activate" data-id="' + value.employeeCode + '">Activate User</button></td></tr></tbody>';
                    });
                    $('#display_data').html(emp_data);
                    $('#no_of_inactive_users').html(length);
                } else {
                    $('#display_data').empty();
                    $('#no_of_inactive_users').html('0');
                }
            }
        );
    }
    // PRESENT User function
    function loadPresent() {
        var emp_data = '';
        $('#display_data').empty();
        $.getJSON(
            "http://localhost/api/Pro/index.php?date=1",

            function(data) {
                // console.log(data);
                var length = data.length;
                // console.log(length);
                if (length > 0) {

                    emp_data = '<thead><tr><th scope="col">Employee Code</th><th scope="col">Sign In Time</th><th scope="col">Sign Out Time</th><th scope="col">Total Hours</th></tr></thead><tbody>';
                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.employeeCode + '</td><td>' + value.signIn + '</td><td>' + value.signOut + '</td><td>' + value.totalHrs + '</td></tr></tbody>'

                    });
                    $('#display_data').html(emp_data);
                    // $('#display_data').DataTable();
                    $('#no_of_present_users').html(length);
                } else {
                    $('#display_data').empty();
                    $('#no_of_present_users').html('0');
                }
            }
        );
    }
    // ABSENT User function
    function loadAbsent() {
        var emp_data = '';
        $('#display_data').empty();
        $.getJSON(
            "http://localhost/api/Pro/index.php?date=2",

            function(data) {
                // console.log(data);
                var length = data.length;
                // console.log(length);
                // console.log(data);
                if (length > 0) {

                    emp_data = '<thead><tr><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th></tr></thead><tbody>';
                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td>' + value.email + '</td></tr></tbody>'

                    });
                    $('#display_data').html(emp_data);
                    // $('#display_data').DataTable();
                    $('#no_of_absent_users').html(length);
                } else {
                    $('#display_data').empty();
                    $('#no_of_absent_users').html('0');
                }
            }
        );
    }
    // List Active users 
    $('#active_users').click(function() {
        $('#display_data').show();
        loadActive();
    });
    // List Inactive users 
    $('#inactive_users').click(function() {
        $('#display_data').show();
        loadInactive();
    });

    // List Present users
    $('#present_users').click(function() {
        $('#display_data').show();
        loadPresent();
    });
    // List Absent Users
    $('#absent_users').click(function() {
        $('#display_data').show();
        loadAbsent();
    });
    // Single User Data 
    $(document).on("click", "#show", function() {

        $('#single_user_data').modal('show');
        var id = $(this).data("id");
        var emp_data = '';
        $('#single_data').empty();
        $.getJSON(
            "http://localhost/api/Pro/index.php?employeeCode=" + id,

            function(data) {
                // console.log(data);
                emp_data = '<thead><tr><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Signin Time</th><th scope="col">Signout Time</th><th scope="col">Total Hours</th><th scope="col">Signin Date</th></tr></thead><tbody>';
                $.each(data, function(key, value) {

                    emp_data += '<tr><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.signIn + '</td><td>' + value.signOut + '</td><td>' + value.totalHrs + '</td><td>' + value.signInDate + '</td></tr></tbody>';
                });
                $('#single_data').html(emp_data);
            }
        );
    });

    // Delete User
    $(document).on("click", "#delete", function() {
        if (confirm("Do you really want to delete the user?")) {
            var id = $(this).data("id");
            var stat = 1;
            var element = this;
            var mydata = {};
            mydata.employeeCode = id;
            mydata.status = stat;
            $.ajax({
                url: "http://localhost/api/Pro/index.php",
                type: "DELETE",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify(mydata),
                success: function(response) {
                    var status = response.status;
                    if (status == true) {

                        $(this).closest("tr").fadeOut();
                        loadActive();
                    } else {
                        alert("error");
                    }
                    loadInactive();
                    loadActive();
                    loadPresent();
                    loadAbsent();

                }
            });
        }

    });

    // Activate User 
    $(document).on("click", ".activate", function() {
        if (confirm("Do you really want to re-activate the user?")) {
            var id = $(this).data("id");
            var stat = 0;
            var element = this;
            var mydata = {};
            mydata.employeeCode = id;
            mydata.status = stat;
            $.ajax({
                url: "http://localhost/api/Pro/index.php",
                type: "PUT",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify(mydata),
                success: function(response) {
                    var status = response.status;
                    if (status == true) {
                        $(this).closest("tr").fadeOut();

                    } else {
                        alert("error");
                    }
                    loadInactive();
                    loadActive();
                    loadPresent();
                    loadAbsent();

                }
            });
        }
    });
    // Search User by Name
    $('#search').on("keyup", function() {
        $('#display_data').show();
        var search_value = $(this).val();
        var mydata = {};
        mydata.search = search_value;
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                // console.log(data);
                var length = data.length;
                if (length > 0) {

                    emp_data = '<thead><tr><th scope="col">Email</th><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="colspan-3">Action</th></tr></thead><tbody>';
                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.email + '</td><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td><button class="btn btn-info" id="show" data-id="' + value.employeeCode + '">Show</button></td><td><button class="btn btn-danger" id="delete" data-id="' + value.employeeCode + '">Delete</button></td></tr></tbody>';
                    });
                    $('#display_data').html(emp_data);
                } else {
                    $('#display_data').empty();
                }
            }

        });
    });
    //Admin Profile Show
    $('#admin_profile').click(function(e) {
        e.preventDefault();
        $('#single_user_data').modal('show');
        var emp_data = '';
        $('#single_data').empty();
        var empcode = $('#current_user').val();
        var profile = 1;
        var mydata = {};
        mydata.employeeCode = empcode;
        mydata.profile = profile;
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {

                $.each(data, function(key, value) {

                    emp_data += '<div id="profile_container" class="container"><div class="row">    <div class="col-sm-3"><h6 class="mb-1">Email</h6></div><div class="col-sm-9 text-secondary">' + value.email + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">First Name</h6></div><div class="col-sm-9 text-secondary">' + value.firstName + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">Last Name</h6></div><div class="col-sm-9 text-secondary">' + value.lastName + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">Employee Code</h6></div><div class="col-sm-9 text-secondary">' + value.employeeCode + '</div></div><hr>';
                    emp_data += '<div class = "row"><div class = "text-center mt-4 pt-2" ><button id="admin_profile_edit" class = "edit-btn btn btn-info" data-id="' + value.employeeCode + '"> Edit</button></div></div></div></div>';

                });

                $('#single_data').html(emp_data);

            }
        });
    });

    //Admin Profile Edit
    $(document).on("click", ".edit-btn", function(e) {
        e.preventDefault();
        var emp_code = $(this).data("id");
        $('#single_data').empty();
        var profile = 1;
        var mydata = {};
        mydata.employeeCode = emp_code;
        mydata.profile = profile;
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                // console.log(data);
                var emp_data = '';
                $.each(data, function(key, value) {
                    emp_data += '<div class="card-body py-3 px-md-5"><div class="row d-flex justify-content-center"><div class="col-lg-8"><form><div class="form-outline mb-4">';
                    emp_data += '<input type="number" id="employeecode" class="form-control" value="' + value.employeeCode + '" disabled><label class="form-label" for="employeecode">Employee Code</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="firstnamecheck" style="color: red;">**Firstname is missing</span><input type="text" id="firstname" class="form-control" value="' + value.firstName + '"><label class="form-label" for="firstname">First Name</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="lastnamecheck" style="color: red;">**Lastname is missing</span><input type="text" id="lastname" class="form-control" value="' + value.lastName + '"><label class="form-label" for="lastname">Last Name</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="emailvalid" class="form-text text-muted invalid-feedback" style="color: red;">**Email is not Valid</span><input type="email" id="email" class="form-control" value="' + value.email + '"><label class="form-label" for="email">Email address</label></div>';

                    emp_data += '<div class="form-outline mb-4"><span id="passcheck" style="color: red;">****Please Fill the password</span><input type="password" id="password" class="form-control" ><label class="form-label" for="password" >Password</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="conpasscheck" style="color: red;">****Password didnot match</span><input type="password" id="cpassword" class="form-control" ><label class="form-label" for="cpassword" >Confirm Password</label></div></div>';
                    emp_data += '<div class="text-center mt-4 pt-2"><button type="submit" id="submit_form" class="submit_form btn btn-primary btn-block mb-4">Save</button></div></form></div></div>';

                });

                $('#single_data').html(emp_data);
                validateFirstName();
                validateLastName();
                validateEmail();
                validatePassword();
                validateConfirmPassword();

            }
        });
    });

    // Signin User
    $('#sigin').click(function() {
        // currentDateRecord();
        var empcode = $('#current_user').val();
        var signIn = 'signin';

        // console.log(empcode, signIn);
        var mydata = {};
        mydata.employeeCode = empcode;
        mydata.signIn = signIn;
        // console.log(mydata);
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(response) {
                var status = response.status;
                if (status == true) {
                    // currentDateRecord();
                    $('#sigin').hide();
                    $('#signout').show();
                    alert("Signin Successfully.");

                    // $('#success_message').html("Signin Successfully.").slideDown();
                    // $('#error_message').slideUp();
                } else {
                    alert("error");
                }
                currentDateRecord();
            }
        });
    });
    //Sign Out
    $('#signout').click(function() {
        var empcode = $('#current_user').val();
        var signOut = 'signOut';
        // console.log(empcode, signIn);
        var mydata = {};
        mydata.employeeCode = empcode;
        mydata.signOut = signOut;
        // console.log(mydata);
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "PUT",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(response) {
                var status = response.status;
                if (status == true) {

                    $('#signout').hide();
                    $('#sigin').show();
                    alert("SignOut Successfully.");
                    // $('#success_message').html("Signin Successfully.").slideDown();
                    // $('#error_message').slideUp();
                } else {
                    alert("error");
                }
                currentDateRecord();
            }

        });
        // currentDateRecord();
    });
    // All Attendence 
    $('#user_attendence').click(function(e) {
        e.preventDefault();
        $('#user_attendence_show').modal('show');
        // $('#user_dashboard_show').hide();
        // $('#user_profile_show').hide();
        // $('#user_attendence_show').show();

        var emp_data = '';
        $('#display_user_data').empty();
        var empcode = $('#current_user').val();
        var mydata = {};
        mydata.employeeCode = empcode;
        // mydata.signIn = signIn;
        // console.log(mydata);
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                // console.log(data);
                emp_data = '<thead><tr><th scope="col">Employee Code</th><th scope="col">First Name</th><th scope="col">Signin Time</th><th scope="col">Signout Time</th><th scope="col">Total Hours</th><th scope="col">Signin Date</th></tr></thead><tbody>';
                $.each(data, function(key, value) {

                    emp_data += '<tr><td>' + value.employeeCode + '</td><td>' + value.firstName + '</td><td>' + value.signIn + '</td><td>' + value.signOut + '</td><td>' + value.totalHrs + '</td><td>' + value.signInDate + '</td></tr></tbody>';
                });
                $('#display_user_data').html(emp_data);

            }
        });
    });

    //Single Record
    function currentDateRecord() {
        // $('#sigin').click(function() {
        var emp_data = '';
        var empcode = $('#current_user').val();
        var date = 'date';

        // console.log(empcode, date);
        var mydata = {};
        mydata.employeeCode = empcode;
        mydata.date = date;
        // console.log(mydata);
        $('#currentdate_data_show').empty();
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                var length = data.length;
                // console.log(data);
                emp_data = '<thead><tr><th scope="col">Signin Time</th><th scope="col">Signout Time</th><th scope="col">Total Hours</th></tr></thead><tbody>';
                if (length > 0) {
                    $('#sigin').hide();
                    $('#signout').show();

                    $.each(data, function(key, value) {

                        emp_data += '<tr><td>' + value.signIn + '</td><td>' + value.signOut + '</td><td>' + value.totalHrs + '</td></tr></tbody>';
                    });
                    $('#currentdate_data_show').html(emp_data);
                } else {
                    $('#currentdate_data_show').html(emp_data);
                }
            }
        });
    }
    //USer Profile Show
    $('#user_profile').click(function(e) {
        e.preventDefault();
        $('#user_attendence_show').modal('show');
        var emp_data = '';
        $('#display_user_data').empty();
        var empcode = $('#current_user').val();
        var profile = 1;
        var mydata = {};
        mydata.employeeCode = empcode;
        mydata.profile = profile;
        // console.log(mydata);
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                // console.log(data);

                $.each(data, function(key, value) {

                    emp_data += '<div id="profile_container" class="container"><div class="row">    <div class="col-sm-3"><h6 class="mb-1">Email</h6></div><div class="col-sm-9 text-secondary">' + value.email + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">First Name</h6></div><div class="col-sm-9 text-secondary">' + value.firstName + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">Last Name</h6></div><div class="col-sm-9 text-secondary">' + value.lastName + '</div></div><hr>';
                    emp_data += '<div class="row"><div class="col-sm-3"><h6 class="mb-0">Employee Code</h6></div><div class="col-sm-9 text-secondary">' + value.employeeCode + '</div></div><hr>';
                    emp_data += '<div class = "row"><div class = "col-sm-3" ><button id="user_profile_edit" class = "edituser-btn btn btn-info" data-id="' + value.employeeCode + '"> Edit</button></div></div></div></div>';

                });

                $('#display_user_data').html(emp_data);

            }
        });
    });
    //User Profile edit
    $(document).on("click", ".edituser-btn", function(e) {
        e.preventDefault();
        var emp_code = $(this).data("id");
        // console.log(emp_code);
        // $('#single_user_data').modal('show');
        $('#display_user_data').empty();
        var profile = 1;
        var mydata = {};
        mydata.employeeCode = emp_code;
        mydata.profile = profile;
        // console.log(mydata);
        $.ajax({
            url: "http://localhost/api/Pro/index.php",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(mydata),
            success: function(data) {
                // console.log(data);
                var emp_data = '';
                $.each(data, function(key, value) {
                    emp_data += '<div class="card-body py-3 px-md-5"><div class="row d-flex justify-content-center"><div class="col-lg-8"><form><div class="form-outline mb-4">';
                    emp_data += '<input type="number" id="employeecode" class="form-control" value="' + value.employeeCode + '" disabled><label class="form-label" for="employeecode">Employee Code</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="firstnamecheck" style="color: red;">**Firstname is missing</span><input type="text" id="firstname" class="form-control" value="' + value.firstName + '"><label class="form-label" for="firstname">First Name</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="lastnamecheck" style="color: red;">**Lastname is missing</span><input type="text" id="lastname" class="form-control" value="' + value.lastName + '"><label class="form-label" for="lastname">Last Name</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="emailvalid" class="form-text text-muted invalid-feedback" style="color: red;">**Email is not Valid</span><input type="email" id="email" class="form-control" value="' + value.email + '"><label class="form-label" for="email">Email address</label></div>';

                    emp_data += '<div class="form-outline mb-4"><span id="passcheck" style="color: red;">****Please Fill the password</span><input type="password" id="password" class="form-control" ><label class="form-label" for="password" >Password</label></div>';
                    emp_data += '<div class="form-outline mb-4"><span id="conpasscheck" style="color: red;">****Password didnot match</span><input type="password" id="cpassword" class="form-control" ><label class="form-label" for="cpassword" >Confirm Password</label></div></div>';
                    emp_data += '<div class="text-center mt-4 pt-2"><button type="submit" id="submit_form" class="submit_form btn btn-primary btn-block mb-4">Save</button></div></form></div></div>';

                });

                $('#display_user_data').html(emp_data);
                validateFirstName();
                validateLastName();
                validateEmail();
                validatePassword();
                validateConfirmPassword();

            }
        });
    });

    // Validate Firstname
    $("#firstnamecheck").hide();
    let firstnameError = true;
    $("#firstname").keyup(function() {
        validateFirstName();
    });

    function validateFirstName() {
        let firstName = $('#firstname').val();
        if (firstName.length == "") {
            $("#firstnamecheck").show();
            firstnameError = false;
            return false;
        } else if (firstName.length < 3 || firstName.length > 10) {
            $("#firstnamecheck").show();
            $("#firstnamecheck").html("**length of username must be between 3 and 10");
            firstnameError = false;
            return false;
        } else {
            $("#firstnamecheck").hide();
            firstnameError = true;
        }
    }
    // Validate Lastname
    $("#lastnamecheck").hide();
    let lastnameError = true;
    $("#lastname").keyup(function() {
        validateLastName();
    });

    function validateLastName() {
        let lastName = $("#lastname").val();
        if (lastName.length == "") {
            $("#lastnamecheck").show();
            lastnameError = false;
            return false;
        } else if (lastName.length < 3 || lastName.length > 10) {
            $("#lastnamecheck").show();
            $("#lastnamecheck").html("**length of username must be between 3 and 10");
            lastnameError = false;
            return false;
        } else {
            $("#lastnamecheck").hide();
            lastnameError = true;
        }
    }

    // Validate Email
    function validateEmail() {
        const email = document.getElementById("email");
        email.addEventListener("blur", () => {
            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let s = email.value;
            if (regex.test(s)) {
                email.classList.remove("is-invalid");
                emailError = true;
            } else {
                email.classList.add("is-invalid");
                emailError = false;
            }
        });
    }

    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function() {
        validatePassword();
    });

    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 15) {
            $("#passcheck").show();
            $("#passcheck").html("**length of your password must be between 3 and 15");
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
            passwordError = true;
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function() {
        validateConfirmPassword();
    });

    function validateConfirmPassword() {
        let confirmPasswordValue = $("#cpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
            confirmPasswordError = true;
        }
    }

    $(document).on("click", ".submit_form", function() {
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        if (firstnameError == true && lastnameError == true && passwordError == true && confirmPasswordError == true) {
            var employeeCode = $('#employeecode').val();
            var firstName = $('#firstname').val();
            var lastName = $('#lastname').val();
            var email = $('#email').val();
            var password = $('#password').val();
            var cpwd = $('#cpassword').val();
            var mydata = {};
            mydata.employeeCode = employeeCode;
            mydata.firstName = firstName;
            mydata.lastName = lastName;
            mydata.email = email;
            mydata.password = password;

            $.ajax({
                url: "http://localhost/api/Pro/index.php",
                type: "PUT",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify(mydata),
                success: function(data) {
                    console.log(data);
                }

            });
        } else {
            $('#error_message').html("All Fields are required.").slideDown();
            $('#success_message').slideUp();
        }
    });

});