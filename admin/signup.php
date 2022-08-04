<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Document</title>
</head>
<style>
    #error_message {
        background-color: rgb(224, 196, 196);
        color: red;
        padding: 10px;
        margin: 10px;
        display: none;
        position: absolute;
        right: 15px;
        top: 15px;

    }

    #success_message {
        background-color: rgb(157, 241, 161);
        color: green;
        padding: 10px;
        margin: 10px;
        display: none;
        position: absolute;
        right: 15px;
        top: 15px;

    }
</style>

<body>
    <!-- Section: Design Block -->
    <section class="text-center">
        <!-- Background image -->
        <div class="p-5 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        "></div>
        <!-- Background image -->

        <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -250px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
            <div class="card-body py-5 px-md-5">

                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="fw-bold mb-5">Sign up now</h2>
                        <form>
                            <!-- 2 column grid layout with text inputs for the first and last names -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <span id="firstnamecheck" style="color: red;">
                                            **Firstname is missing
                                        </span>
                                        <input type="text" id="firstname" class="form-control" />

                                        <label class="form-label" for="firstname">First name</label>

                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <span id="lastnamecheck" style="color: red;">
                                            **Lastname is missing
                                        </span>
                                        <input type="text" id="lastname" class="form-control" />
                                        <label class="form-label" for="lastname">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <!-- Employee Code INPUT -->
                            <div class="form-outline mb-4">
                                <span id="codecheck" style="color: red;">
                                    **Employee Code is missing
                                </span>
                                <input type="number" id="employeecode" class="form-control" />
                                <label class="form-label" for="employeecode">Employee Code</label>
                            </div>
                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <span id="emailvalid" class="form-text
                text-muted invalid-feedback" style="color: red;">
                                    **Email is not Valid
                                </span>
                                <input type="email" id="email" class="form-control" />
                                <label class="form-label" for="email">Email address</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <span id="passcheck" style="color: red;">
                                    ****Please Fill the password
                                </span>
                                <input type="password" id="password" class="form-control" />
                                <label class="form-label" for="password">Password</label>
                            </div>
                            <!-- Confirm Password Input -->
                            <div class="form-outline mb-4">
                                <span id="conpasscheck" style="color: red;">
                                    ****Password didn't match
                                </span>
                                <input type="password" id="cpassword" class="form-control" />
                                <label class="form-label" for="cpassword">Confirm Password</label>
                            </div>

                            <!-- Submit button -->
                            <div class="text-center mt-4 pt-2">
                                <button type="submit" id="submit_form" class="btn btn-primary btn-block mb-4">
                                    Sign up
                                </button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="../admin/login.php" class="link-danger">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="error_message"></div>
        <div id="success_message"></div>
    </section>
    <!-- Section: Design Block -->
</body>

</html>
<script>
    $(document).ready(function() {

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

        // Validate Employee Code
        $("#codecheck").hide();
        let employeecodeError = true;
        $("#employeecode").keyup(function() {
            validateEmployeeCode();
        });

        function validateEmployeeCode() {
            let employeecode = $("#employeecode").val();
            if (employeecode.length == "") {
                $("#codecheck").show();
                employeecodeError = false;
                return false;
            } else if (employeecode.length != 4) {
                $("#codecheck").show();
                $("#codecheck").html("**length of employeecode must be 4");
                employeecodeError = false;
                return false;
            } else {
                $("#codecheck").hide();
                employeecodeError = true;
            }
        }


        // Validate Email
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

        $('#submit_form').click(function(e) {
            e.preventDefault();
            validateFirstName();
            validateLastName();
            validateEmployeeCode();
            validatePassword();
            validateConfirmPassword();
            // validateEmail();
            // console.log(firstnameError);
            // console.log(lastnameError);
            // console.log(employeecodeError);
            // console.log(passwordError);
            // console.log(confirmPasswordError);
            // console.log(emailError);
            if (firstnameError == true && lastnameError == true && employeecodeError == true && passwordError == true && confirmPasswordError == true && emailError == true) {

                var firstName = $('#firstname').val();
                var lastName = $('#lastname').val();
                var employeeCode = $('#employeecode').val();
                var email = $('#email').val();
                var password = $('#password').val();
                var cpassword = $('#cpassword').val();

                // console.log(firstName);
                // console.log(lastName);
                var mydata = {};
                mydata.firstName = firstName;
                mydata.lastName = lastName;
                mydata.employeeCode = employeeCode;
                mydata.email = email;
                mydata.password = password;
                // console.log(mydata);

                $.ajax({
                    url: "http://localhost/api/Pro/signup.php",
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify(mydata),
                    success: function(response) {
                        // console.log(response);
                        var status = response.status;
                        if (status == true) {
                            $('#success_message').html("Data Inserted Successfully.").slideDown();
                            $('#error_message').slideUp();
                            window.location = "login.php";
                        } else {
                            $('#error_message').html("Data not inserted.").slideDown();
                            $('#success_message').slideUp();
                        }
                    }
                });

            } else {
                $('#error_message').html("All Fields are required.").slideDown();
                $('#success_message').slideUp();
            }
        });
    });
</script>