// Grabbing the html to manipulate
const value_box = document.querySelector('.value_box')
const valueText = document.querySelector('#valueText')
const option_container = document.querySelector('.select-container')
const option_list = document.querySelectorAll('.select-option')

// CONTROLLING THE DROPDOWN [ toggle dropdown]
function toggleOptions() {
    if (!option_container.classList.contains('active')) {
        option_container.classList.add('active');
    } else {
        option_container.blur();
        option_container.classList.remove('active');
    }
}

// LOOPING THROUGH ALL THE AVAILABLE LIST OPTIONS
option_list.forEach(function (list, index) {
    list.addEventListener('click', () => {
        // manipulating the clicked option
        value_box.value = list.innerHTML;
        valueText.innerHTML = list.innerHTML;
        toggleOptions()
    })
})