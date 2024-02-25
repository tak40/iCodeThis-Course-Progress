/** @format */

// Get all the FAQ buttons
const faqButtons = document.querySelectorAll('.faq-item button')

// Function to toggle the answer display
function toggleAnswer() {
    const answer = this.nextElementSibling // this refers to the button clicked
    const isActive = answer.style.maxHeight

    // Close any open answers
    document.querySelectorAll('.faq-item .answer').forEach(item => {
        item.style.maxHeight = null
    })

    // If the answer was not active, open it
    if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + 'px'
    }
}

// Add click event listener to each button
faqButtons.forEach(button => {
    button.addEventListener('click', toggleAnswer)
})
