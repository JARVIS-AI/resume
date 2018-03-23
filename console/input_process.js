var command = "";
var commands = {
    help: '<br />      |*|*|*|  Priansh OS 1.6.7 |*|*|*|<br /><br />List of available commands:<br />help - displays help text' +
    '<br />hello - say hello!' +
    '<br />email - get my email!' +
    '<br />ls - list the contents of the current directory' +
    '<br />python - if you know python this is for you' +
    '<br />node - if you know JS this is for you',
    ls: './<br /><a href="http://priansh.com">../</a><br /><a href="#">index.html</a><br /><a href="code/">code/</a><br /><a href="robots/">robots/</a><br /><a href="newspaper/">school/</a><br />js/<br />css/',
    hello: 'Good morning!',
    email: 'My email is <a href="mailto:shah@priansh.com">shah at priansh dot com</a> (trying my best to avoid bots!)',
    python: '<a href="https://angel.co/aiko-ai/jobs">You might like this... :)</a>',
    node: '<a href="https://angel.co/aiko-ai/jobs">You might like this... :)</a>',
    bash: '<a href="https://angel.co/aiko-ai/jobs">You must think you\'re clever...</a>',
    sh: '<a href="https://angel.co/aiko-ai/jobs">You must think you\'re clever...</a>',
    sudo: '<a href="https://angel.co/aiko-ai/jobs">You must think you\'re clever...</a>',
    su: '<a href="https://angel.co/aiko-ai/jobs">You must think you\'re clever...</a>',
    cd: '<a href="https://angel.co/aiko-ai/jobs">You must think you\'re clever...</a>'
};

function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console_holder').append(arguments[i]); }

function assign() {
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val().split(' ')[0];
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keyword, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
}

$(document).ready(function () {
    type(commands.help);
    type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val().split(' ')[0];
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keyword, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
});