document
    .getElementById("confirmClickActionElementId")
    .addEventListener("click", function( e ){ //e => event
        if( ! confirm("do you really want to do this?") ){
            e.preventDefault(); // ! => don't want to do this
        } else {
            //want to do this! => maybe do something about it?
            confirm('seriously though this is a mistake');
            confirm('i\'m warning you');
            confirm('i urge you to reconsider');
            confirm('or at least read the about page so you know what\'s going on');
            confirm('you are one persistent person wow');
            confirm('ok you should be prepared');
            confirm('!');
            confirm('!');
            confirm('!!!!!');
            confirm('!!!!!!!!!');
            confirm('!!');
            confirm('!');
            confirm('!');
            confirm('wow you\'re still here');
            confirm('guess i\'ve got no choice');
            confirm('ok, lets do this!');
        }
    });