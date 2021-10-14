// I should start coding this 


// screen transitions

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

// Form validation



// To-Do
// Animate foggy glass rollup for project cards 
// Create popup box and see if we can make it generic per the type
