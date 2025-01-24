$(function(){    

    // Clique que chama a div esqueci a senha
    $("#esqueci-senha").on("click", function(){
        $("#etapa-login").css({"transition":"0.5s","left": "6000px"});
        setTimeout(function(){
            $("#etapa-login").removeClass("d-inline-flex").addClass("d-none");
            $("#email").val('');
        }, 500);
        $("#etapa-esqueci-senha").removeClass("d-none").addClass("d-inline-flex");
        setTimeout(function(){
            $("#etapa-esqueci-senha").css({"transition":"0.5s","left": "0px"});
        }, 10);        
    });

    // Clique que chama a div de login
    $("#cancelar-lembrar-senha").on("click", function(){
        $("#etapa-login").removeClass("d-none").addClass("d-inline-flex");
        setTimeout(function(){
            $("#etapa-login").css({"transition":"0.5s","left": "0px"});
            $("#email-esqueci, #cpf").val('');
        }, 10);
        $("#etapa-esqueci-senha").css({"transition":"0.5s","left": "6000px"});
        setTimeout(function(){
            $("#etapa-esqueci-senha").removeClass("d-inline-flex").addClass("d-none");
        }, 500);
    });

    // Máscaras
    jQuery(function($){
        $("#data-nascimento").mask("99/99/9999");
        $("#cpf").mask("999.999.999-99");
    });

    $('#data-nascimento, #cpf').on('click', function(){
        $(this)[0].setSelectionRange(0, 0);
    });

    // Mouseover
    $(".div-image").on("mouseover", function(){
        setTimeout(function(){
            $(".image").css({"transition": "0.5s", "transform": "rotateY(180deg)"});
        }, 0);
    });

    // Mouseout
    $(".div-image").on("mouseleave", function(){        
        setTimeout(function(){
            $(".image").css({"transition": "0.5s", "transform": "rotateY(0deg)"});
        }, 250);
    });

    // Validação dos inputs dos forms com Bootstrap 5
    (function () {
        'use strict'
        var forms = document.querySelectorAll('#form-logar.needs-validation, #lembrar-senha.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated')
                }, false);
            })
    })();

    // Inicio Show Password
    $(".show-password button").on("click", function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".show-password button > i").removeClass("bi-eye");
            $(".show-password button > i").addClass("bi-eye-slash");
            $("#password").attr("type", "text");                
        } else {
            $("#password").attr("type", "password");                
            $(".show-password button > i").removeClass("bi-eye-slash");
            $(".show-password button > i").addClass("bi-eye");
        }
    });
    // Final Show Password
    
});