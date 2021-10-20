// I should start coding this 

// ###########################################################################################################
// SCREEN TRANSITIONS
// ###########################################################################################################
// Still has some unknown issue with occassionally returning a 404 error on some screen loads, might be caching 
window.onload = () => {
    // Select the coloured div for transition effect and anchor elements

    const transition_el = document.querySelector('.transition');
    const  anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active'); // use a timeout function to remove the class and trigger the transition animation
    }, 400);

    // loop through anchor elements to catch their events
    for (let i= 0; i<anchors.length; i++) {

        const anchor = anchors[i];

        // catch redirect and hold it to create the fade-in transition
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.currentTarget.href;

            console.log(target);
            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = target;
            }, 400);
            // end animation
        })
    }
}


// ###########################################################################################################
// FORM VALIDATION
// ###########################################################################################################
const regForm = document.querySelector('form.contact-form');
const errors_el = document.querySelector('form.contact-form .errors');

regForm.addEventListener('submit', validateForm);


/**
 * selects form elements as variables
 * performs regex and empty string checks on them
 * adds items to error list if they exist
 * calls errorhandling function handleErrors if list not empty
 * returns false if errors, true if no errors
 * @param {EventListener} e 
 * @returns true/false
 */
function validateForm (e) {
    e.preventDefault();

    const email = document.querySelector('.contact-email');
    const name = document.querySelector('.contact-name');
    const message = document.querySelector('.contact-message');

    let errors = [];
    // Super long regex for email validatoin
    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Checking for empty fields
    if(name.value== "") {
        errors.push({text: "name", el: name});
    }
    // email regex or empty validation
    if(email.value== "" || !email_reg.test(email.value)) {
        errors.push({text: "email", el: email});
    } 
    if(message.value== "") {
        errors.push({text: "message", el: message});
    }

    if (errors.length > 0) {
        alert('Please fill out all fields the form');
        handleErrors(errors);
        return false;
    }
    alert('Form submitted.')
    return true;


    // Form submission un-needed until backend ready
    //regForm.submit();
}

/**
 * Takes an array of errors with text and a message
 * pushes error messages in to a string 
 * focuses page on first error
 * creates popup error message and inserts into DOM
 * removes the messages on click.
 * @param {[array]} errs 
 * @returns no return, inserts object into the DOM
 */

function handleErrors (errs) {
    let str = "You have errors in the following field inputs; ";

    errs.map((er) => {
        er.el.classList.add('error');
        
        str += er.text + " ";
    });
    errs[0].el.focus();

    let error_el = document.createElement('div');
    error_el.classList.add('error');
    error_el.innerText = str;
    error_el.innerHTML += ' <i class="fas errors-close fa-times"></i>';
    error_el.addEventListener('click', function () {
        errors_el.removeChild(error_el);
    })
    errors_el.appendChild(error_el);


}
// ###########################################################################################################
// 
// ###########################################################################################################

// To-Do
// Tune timings on animations
// Animate foggy glass rollup for project cards 
// Create popup box and see if we can make it generic per the type
