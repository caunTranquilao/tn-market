function toggleMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}


setTimeout(() => {
    const overlay = document.getElementById('welcome');
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 1000); 
}, 3000);