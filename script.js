// Toggle sidebar options
document.querySelectorAll('.sidebar-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.sidebar-option.active').classList.remove('active');
        option.classList.add('active');
    });
});

// Toggle star
document.querySelectorAll('.fa-star').forEach(star => {
    star.addEventListener('click', (e) => {
        e.stopPropagation();
        star.style.color = star.style.color === 'gold' ? '#d3d3d3' : 'gold';
    });
});

// Toggle checkbox
document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Email item click
document.querySelectorAll('.email-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('unread');
    });
});

// Compose button
document.querySelector('.compose-button').addEventListener('click', () => {
    alert('Compose functionality coming soon!');
});