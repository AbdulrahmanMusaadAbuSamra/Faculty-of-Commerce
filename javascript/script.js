// icon mobile
const hamburgerIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('nav ul');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && navMenu.classList.contains('active') && event.target !== hamburgerIcon) {
    navMenu.classList.remove('active');
  }
});
// icon mobile









document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h3');
    headings.forEach(heading => {
    const left1 = heading.nextElementSibling;  
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

// Study programs
function toggleProgram(header) {
    const content = header.nextElementSibling;
    const isContentVisible = content.classList.contains('show');
    const allContents = document.querySelectorAll('.program-content');
    const allHeaders = document.querySelectorAll('.program-header');
    const allIcons = document.querySelectorAll('.toggle-icon');
    allContents.forEach(content => content.classList.remove('show'));
    allHeaders.forEach(h => h.classList.remove('active'));
    allIcons.forEach(icon => icon.textContent = '+');
    if (!isContentVisible) {
        content.classList.add('show');
        header.classList.add('active');
        header.querySelector('.toggle-icon').textContent = '-';
    }
}
// Study programs

// log in 
document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.form-container');
    const signupLink = document.querySelector('.signup-link');
    const loginLinks = document.querySelectorAll('.login-link');
    const forgotLink = document.querySelector('.forgot-link');
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.add('flip-signup');
        formContainer.classList.remove('flip-forgot');
    });
    forgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        formContainer.classList.add('flip-forgot');
        formContainer.classList.remove('flip-signup');
    });
    loginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            formContainer.classList.remove('flip-signup');
            formContainer.classList.remove('flip-forgot');
        });
    });
});
// log in 

// Faculty Members
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
        row.innerHTML += 
        `<td>${staff.id}</td>
            <td>${staff.name}</td>
            <td>${staff.position}</td>`;
        tbody.appendChild(row);
    });
}
populateTable('staffTable1');
populateTable('staffTable2');
// Faculty Members



















