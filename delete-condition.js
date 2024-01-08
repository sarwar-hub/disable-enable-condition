//  Code for Delete

// Set addEventListener
document.getElementById('btn').addEventListener('click', function(){
    // Deletion method
    document.getElementById('box1').style.display = 'none';

    // Clear the field
    document.getElementById('input').value = '';
})


// Button Disable-Enable (firstly set "disable" attr to html)

// Set event listener
document.getElementById('input').addEventListener('keyup', function(event){
    // get input text
    let inputText = event.target.value;
    // get button
    let button = document.getElementById('btn');

    // Button enable condition
    if( inputText == 'CONFIRM' ) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
})