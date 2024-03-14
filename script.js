document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '250px';
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '0';
});

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '0';
});