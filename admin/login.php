<?php
session_start();
if ($_SESSION['TOKEN'] != "" || $_SESSION['USER'] != "" || $_SESSION['NAME'] != ""){
    header("location:index.php");
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
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

    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        
    }
</style>

<body>
    <div id="error_message"></div>
    <div id="success_message"></div>
    <section class="vh-100" >
        <div class="container-fluid h-custom " >
            <div class="row d-flex justify-content-center align-items-center h-100 ">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="../img/draw2.webp" class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>


                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0"></p>
                        </div>

                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input type="number" id="employeeCode" class="form-control form-control-lg" placeholder="Enter a valid employee code" />
                            <label class="form-label" for="employeeCode">User Id</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input type="password" id="password" class="form-control form-control-lg" placeholder="Enter password" />
                            <label class="form-label" for="password">Password</label>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">

                            <!-- <a href="#!" class="text-body">Forgot password?</a> -->
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="button" id="login" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="../admin/signup.php" class="link-danger">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <div class="footer d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
                Copyright © 2020-<?php echo date('Y'); ?>. All rights reserved.
            </div>

        </div>
    </section>

</body>

</html>
<script>
    $(document).ready(function() {
        $('#login').click(function() {
            var employeeCode = $('#employeeCode').val();
            var password = $('#password').val();
            if (employeeCode == "" || password == "") {
                $('#error_message').html("All Fields are required.").slideDown();
                $('#success_message').slideUp();
                return false;
            } else {
                var mydata = {};
                mydata.employeeCode = employeeCode;
                mydata.password = password;
                // console.log(mydata);

                $.ajax({
                    url: "http://localhost/api/Pro/login.php",
                    type: "POST",
                    dataType: "JSON",
                    data: JSON.stringify(mydata),
                    contentType: "application/json",
                    success: function(response) {
                        if (!response) {
                            console.log('No response');
                        }

                        var status = response.status;

                        if (status === true) {
                            $('#success_message').html("Login Successfully.").slideDown();
                            $('#error_message').slideUp();

                            window.location = "index.php";
                        } else {

                            $('#error_message').html("Employee Code or Password is incorrect.").slideDown();
                            $('#success_message').slideUp();
                        }


                    }

                });
            }

        });
    });
</script>