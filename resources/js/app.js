import './bootstrap';

// DOM Elements & Page Detection
const pages = {
    login: document.getElementById('login-form'),
    registration: document.getElementById('registration-form'),
    dashboard: document.querySelector('.dashboard-layout')
};

const adminSections = {
    dashboard: document.getElementById('admin-dashboard-home'),
    trades: document.getElementById('admin-trades-view'),
    students: document.getElementById('admin-students-view'),
    superAdmin: document.getElementById('super-admin-view')
};

// Navigation Logic for Dashboard Tabs
function navigateAdminContent(targetId) {
    // Hide all admin sections
    Object.values(adminSections).forEach(section => {
        if(section) section.classList.add('hidden');
    });
    
    // Show target section
    const target = document.getElementById(targetId);
    if (target) target.classList.remove('hidden');

    // Update Sidebar Active State
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.dataset.target === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if(sidebar) sidebar.classList.remove('open');
        if(overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Modal Logic
window.toggleModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dashboard Logic
    if (pages.dashboard) {

        // Admin Sidebar Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = item.dataset.target;
                if (target) navigateAdminContent(target);
            });
        });

        // Create overlay element for mobile sidebar
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebar-overlay';
        document.body.appendChild(overlay);

        const sidebar = document.getElementById('sidebar');
        
        // Mobile Sidebar Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-sidebar-btn');
        
        function openSidebar() {
            if(sidebar) {
                sidebar.classList.add('open');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeSidebar() {
            if(sidebar) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        if(menuBtn) menuBtn.addEventListener('click', openSidebar);
        if(closeBtn) closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
        
        // Close sidebar on window resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeSidebar();
            }
        });
        
        // Close sidebar on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });

    }
});

// Helper Functions
function populateTradeDropdown() {
    const trades = Storage.getTrades();
    const select = document.getElementById('reg-trade');
    const hint = document.getElementById('trade-capacity-hint');
    
    if(!select) return;

    select.innerHTML = '<option value="" disabled selected>Select Trade</option>';
    
    trades.forEach(trade => {
        const option = document.createElement('option');
        option.value = trade.name;
        const remaining = trade.capacity - trade.enrolled;
        option.textContent = `${trade.name}`;
        
        if (remaining <= 0) {
            option.disabled = true;
            option.textContent += ' (Full)';
        }
        select.appendChild(option);
    });

    select.onchange = () => {
        const t = trades.find(tr => tr.name === select.value);
        if (t) {
            hint.textContent = `${t.capacity - t.enrolled} spots remaining out of ${t.capacity}`;
        }
    };
}