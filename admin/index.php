<?php
session_start();
if ($_SESSION['TOKEN'] != "" || $_SESSION['USER'] != "" || $_SESSION['NAME'] != "") {
    // echo $_SESSION['USER'];
    // echo $_SESSION['TOKEN'];
    // echo $_SESSION['NAME'];
    // echo $_SESSION['CODE'];
} else {
    header("location:login.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./css/index.css">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Dashboard</title>
</head>
<style>

</style>

<body>
    <nav class="navbar navbar-expand-lg text-light bg-dark" style="height:70px">
        <div class="container-fluid ">
            <a class="navbar-brand text-light" href="#">Attendence</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item "><button class="btn text-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 5 16 10">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg></button></li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Hi&nbsp;&nbsp;<strong class="userheader"><?php echo $_SESSION['NAME'] ?></strong> </a>
                    </li>
                </ul>
                <div class="user-menu justify-content-end">
                    <a class="nav-link" href="logout.php"><i class="bi bi-power" style="font-size: 20px;"></i> Logout</a>
                </div>
            </div>
        </div>
    </nav>


    <div id="error-message"></div>
    <div id="success-message"></div>
    <input type="text" class="" id="token" value="<?php echo $_SESSION['TOKEN'] ?>" hidden>
    <input type="text" class="" id="role" value="<?php echo $_SESSION['USER'] ?>" hidden>
    <input type="text" class="" id="current_user" value="<?php echo $_SESSION['CODE']; ?>" hidden>
    <main id="admin">
        <div class="offcanvas offcanvas-start " tabindex="-1" style="width: 20%;" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Hi&nbsp;&nbsp;<strong class="userheader"><?php echo $_SESSION['NAME'] ?></strong> </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item active"> <a class="nav-link" href="">Dashboard </a> </li>
                    <li id="admin_profile" class="nav-item"><a class="nav-link" href=""> Profile </a></li>
                </ul>
            </div>
        </div>

        <section id="user_data" class="justify-content-center" style="width: 100% ;margin-top: 50px;">
            <div id="cardadmin" class="container fluid">
                <div class="card d-inline-flex p-2 m-3 col-2" style="background-color:#E2D7D7;">

                    <div class="card-body">
                        <h6 class="card-title">Active Users</h6>
                        <p id="no_of_active_users" class="card-text"></p>
                        
                        <button id="active_users" class="btn btn-primary" type="button">
                            Display
                        </button>
                    </div>
                </div>

                <div class="card d-inline-flex p-2 m-3 col-2" style="background-color:#E2D7D7">

                    <div class="card-body">
                        <h6 class="card-title">Inactive Users</h6>
                        <p id="no_of_inactive_users" class="card-text"></p>
                       
                        <button id="inactive_users" class="btn btn-primary" type="button">
                            Display
                        </button>
                    </div>
                </div>
                <div class="card d-inline-flex p-2 m-3 col-2" style="background-color:#E2D7D7">

                    <div class="card-body">
                        <h6 class="card-title">Present Users</h6>
                        <p id="no_of_present_users" class="card-text"></p>
                        <button type="button" id="present_users" class="btn btn-primary">Display</button>
                    </div>
                </div>
                <div class="card d-inline-flex p-2 m-3 col-2" style="background-color:#E2D7D7 ">

                    <div class="card-body">
                        <h6 class="card-title">Absent Users</h6>
                        <p id="no_of_absent_users" class="card-text"></p>
                        <button id="absent_users" type="button" class="btn btn-primary">Display</button>
                    </div>
                </div>
            </div>

            <div id="searchbar" class='container ' style="display:block ;">
                <div class='content-wrapper'>
                    <div class='row'>
                        <div class='col-xs-8 col-sm-8 col-md-8 col-lg-9'>

                            <form class='navbar-form' style="justify-content:space-between;">
                                <div class='form-group'>
                                    <input class='form-control' type='text' id="search" name='search' placeholder='Search'>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <!-- display data  -->
            <div class="container-fluid">
                <div class="table-responsive ">
                    <table id="display_data" class="table table-borderless">

                    </table>
                </div>
            </div>

            <!-- Single User Data  Modal -->
            <div id="single_user_data" class="modal fade modal-lg" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"></h4>
                            <button type="button" class="close" data-dismiss="modal"><i class="bi bi-x"></i></button>

                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="table-responsive">
                                    <table id="single_data" class="table table-borderless">

                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </section>
        <section>
            
            

        </section>
    </main>
    <main id="User">
        <div class="offcanvas offcanvas-start " tabindex="-1" style="width: 20%;" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Hi&nbsp;&nbsp;<strong class="userheader"><?php echo $_SESSION['NAME'] ?></strong> </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>

            </div>
            <hr>
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li id="user_dashboard" class="nav-item "><a class="nav-link" href="">Dashboard </a> </li>
                    <li id="user_profile" class="nav-item"><a class="nav-link" href=""> Profile </a></li>
                    <li id="user_attendence" class="nav-item"><a class="nav-link" href=""> Attendence </a></li>
                </ul>
            </div>
        </div>

        <section id="user_dashboard_show" class="d-inline-flex justify-content-around">
            <div class="card bg-light d-inline-flex p-2 m-2 col-2" style="top:50px">

                <div class="card-body ">
                    <h5 class="card-title ">Attendence</h5>
                    <hr>
                    <p class="card-text"><?php echo date('d/m/Y') ?></p>


                    <form class="d-flex justify-content-center">
                        <div style="margin-top:50px;padding:5px;">
                            <button id="sigin" class="btn btn-primary" type="button">
                                Sign in
                            </button>

                            <button id="signout" class="btn btn-primary" type="button" style="display:none">
                                Sign out
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <div class="card bg-light d-inline-flex p-2 m-2 col-2" style="top:50px">

                <div class="card-body ">
                    <h5 class="card-title ">Upcoming Holidays</h5>
                    <hr>
                    <h6>15 August 2022</h6>

                    <p class="card-text">Independence Day</p>
                    <hr>
                    <h6>2 OCTOBER 2022</h6>
                    <p class="card-text">Gandhi Jayanti</p>

                    <form class="d-flex">
                        <div style="margin: 5px;">


                        </div>
                    </form>
                </div>
            </div>
            <div class="card bg-light d-inline-flex p-2 m-2 col-2" style="top:50px">

                <div class="card-body ">
                    <h5 class="card-title ">Review</h5>
                    <hr>

                    <p class="card-text">Nothing to review</p>

                    <form class="d-flex">
                        <div style="margin: 5px;">


                        </div>
                    </form>
                </div>
            </div>


        </section>
        <section style="margin-top: 50px;">
            <div class="container-fluid">
                <div class="table-responsive">
                    <table id="currentdate_data_show" class="table table-borderless">

                    </table>
                </div>
            </div>
        </section>
        <section id="user_profile_show">

        </section>

        <div id="user_attendence_show" class="modal fade modal-lg" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"></h4>
                        <button type="button" class="close" data-dismiss="modal"><i class="bi bi-x"></i></button>

                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="table-responsive">
                                <table id="display_user_data" class="table table-borderless">

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="close btn btn-default" data-dismiss="modal">Close</button>
                    </div> -->
                </div>

            </div>
        </div>


    </main>
    <script src="./js/index.js"></script>


</body>

</html>