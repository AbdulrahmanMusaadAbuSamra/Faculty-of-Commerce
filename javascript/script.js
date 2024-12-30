function moveToNextInput(event) {
    if (event.keyCode === 18){
        let nextInput = event.target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}



let nums = document.querySelectorAll (".section-4 .nums .num");
let section = document.querySelector (".section-4")

nums.forEach ((num) => start(num))

function start (el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        }
    },8000/goal)
}




// document.addEventListener('DOMContentLoaded', () => {
//     const nameHeading = document.querySelector('.name');
//     const left1Element = document.querySelector('.left-1');

//     nameHeading.addEventListener('click', () => {
//     left1Element.classList.toggle('show');
//     });

//     document.addEventListener('click', (event) => {
//     if (!event.target.closest('.name') && !event.target.closest('.left-1')) {
//     left1Element.classList.remove('show');
//     }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h3');

    headings.forEach(heading => {
    const left1 = heading.nextElementSibling; // افترض أن العنصر left-1 يأتي بعد العنوان مباشرة

    heading.addEventListener('click', () => {
    left1.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
    if (!event.target.closest('h3') && !event.target.closest('.left-1')) {
        left1.classList.remove('show');
        }
        });
    });
});






// Scientific Journal
function toggleProgram(header) {
    const content = header.nextElementSibling;
    const isContentVisible = content.classList.contains('show');
    
    // Close all sections first
    const allContents = document.querySelectorAll('.program-content');
    const allHeaders = document.querySelectorAll('.program-header');
    const allIcons = document.querySelectorAll('.toggle-icon');
    
    allContents.forEach(content => content.classList.remove('show'));
    allHeaders.forEach(h => h.classList.remove('active'));
    allIcons.forEach(icon => icon.textContent = '+');
    
    // If the clicked section wasn't visible, open it
    if (!isContentVisible) {
        content.classList.add('show');
        header.classList.add('active');
        header.querySelector('.toggle-icon').textContent = '-';
    }
}
// Scientific Journal



// log in 
document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.form-container');
    const signupLink = document.querySelector('.signup-link');
    const loginLinks = document.querySelectorAll('.login-link');
    const forgotLink = document.querySelector('.forgot-link');

    // التبديل إلى نموذج إنشاء حساب جديد
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.add('flip-signup');
        formContainer.classList.remove('flip-forgot');
    });

    // التبديل إلى نموذج نسيت كلمة المرور
    forgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.add('flip-forgot');
        formContainer.classList.remove('flip-signup');
    });

    // العودة إلى نموذج تسجيل الدخول
    loginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.remove('flip-signup');
            formContainer.classList.remove('flip-forgot');
        });
    });
});
// log in 










// the Dean of the College
const staffData = [
    { id: 1, name: "Prof. John Smith", position: "Full Professor" },
    { id: 2, name: "Dr. Sarah Johnson", position: "Full Professor" },
    { id: 3, name: "Dr. Michael Brown", position: "Full Professor" },
    { id: 4, name: "Dr. Emily Davis", position: "Full Professor" },
    { id: 5, name: "Dr. Robert Wilson", position: "Full Professor" },
    { id: 6, name: "Dr. Lisa Anderson", position: "Full Professor" },
    { id: 7, name: "Dr. David Miller", position: "Full Professor" },
    { id: 8, name: "Dr. Jennifer Taylor", position: "Full Professor" },

    { id: 9, name: "Prof. John Smith", position: "Full Professor" },
    { id: 10, name: "Dr. Sarah Johnson", position: "Full Professor" },
    { id: 11, name: "Dr. Michael Brown", position: "Full Professor" },
    { id: 12, name: "Dr. Emily Davis", position: "Full Professor" },
    { id: 13, name: "Dr. Robert Wilson", position: "Full Professor" },
    { id: 14, name: "Dr. Lisa Anderson", position: "Full Professor" },
    { id: 15, name: "Dr. David Miller", position: "Full Professor" },
    { id: 16, name: "Dr. Jennifer Taylor", position: "Full Professor" },

    { id: 17, name: "Prof. John Smith", position: "Full Professor" },
    { id: 18, name: "Dr. Sarah Johnson", position: "Full Professor" },
    { id: 19, name: "Dr. Michael Brown", position: "Full Professor" },
    { id: 20, name: "Dr. Emily Davis", position: "Full Professor" },
    { id: 21, name: "Dr. Robert Wilson", position: "Full Professor" },
    { id: 22, name: "Dr. Lisa Anderson", position: "Full Professor" },
    { id: 23, name: "Dr. David Miller", position: "Full Professor" },
    { id: 24, name: "Dr. Jennifer Taylor", position: "Full Professor" }
];

function populateTable(tableId) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';
    
    staffData.forEach(staff => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${staff.id}</td>
            <td>${staff.name}</td>
            <td>${staff.position}</td>
        `;
        tbody.appendChild(row);
    });
}

// Populate both tables
populateTable('staffTable1');
populateTable('staffTable2');
// the Dean of the College