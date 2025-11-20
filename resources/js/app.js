import './bootstrap';

// Mock Data Initialization
const INITIAL_TRADES = [
    { id: 1, name: 'Tie and Dye', capacity: 50, enrolled: 0 },
    { id: 2, name: 'Photography', capacity: 30, enrolled: 0 },
    { id: 3, name: 'Baking', capacity: 40, enrolled: 0 },
    { id: 4, name: 'Web Design', capacity: 25, enrolled: 0 }
];

// LocalStorage Helpers
const Storage = {
    getTrades: () => JSON.parse(localStorage.getItem('trades')) || INITIAL_TRADES,
    setTrades: (trades) => localStorage.setItem('trades', JSON.stringify(trades)),
    
    getStudents: () => JSON.parse(localStorage.getItem('students')) || [],
    setStudents: (students) => localStorage.setItem('students', JSON.stringify(students)),
};

// Initialize Data if empty
if (!localStorage.getItem('trades')) Storage.setTrades(INITIAL_TRADES);

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

    // Refresh data - REMOVED
    // if (targetId === 'admin-trades-view') renderTradesTable();
    // if (targetId === 'admin-students-view') renderStudentsTable();
    // if (targetId === 'admin-dashboard-home') updateDashboardStats();

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if(sidebar) sidebar.classList.remove('open');
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
        // updateDashboardStats(); // REMOVED

        // Admin Sidebar Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = item.dataset.target;
                if (target) navigateAdminContent(target);
            });
        });

        // Mobile Sidebar Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-sidebar-btn');
        if(menuBtn) menuBtn.addEventListener('click', () => document.getElementById('sidebar').classList.add('open'));
        if(closeBtn) closeBtn.addEventListener('click', () => document.getElementById('sidebar').classList.remove('open'));

        // Admin Forms - REMOVED
    }




    // 3. Registration Logic
    if (pages.registration) {
        populateTradeDropdown();
        
        pages.registration.addEventListener('submit', (e) => {
            e.preventDefault();
            const tradeName = document.getElementById('reg-trade').value;
            
            // Check capacity again
            const trades = Storage.getTrades();
            const selectedTrade = trades.find(t => t.name === tradeName);
            
            if (!selectedTrade) {
                alert('Please select a valid trade.');
                return;
            }

            if (selectedTrade.enrolled >= selectedTrade.capacity) {
                alert('Sorry, this trade is fully booked.');
                return;
            }

            const studentData = {
                name: document.getElementById('reg-name').value,
                matric: document.getElementById('reg-matric').value,
                email: document.getElementById('reg-email').value,
                phone: document.getElementById('reg-phone').value,
                dept: document.getElementById('reg-dept').value,
                level: document.getElementById('reg-level').value,
                trade: tradeName,
                paymentStatus: 'Pending', // In real app, this updates after Paystack callback
                date: new Date().toLocaleDateString()
            };

            // Simulate Paystack Redirect
            if(confirm(`Proceed to pay ₦5,000 for ${tradeName} via Paystack?`)) {
                // Save Student
                const students = Storage.getStudents();
                students.push(studentData);
                Storage.setStudents(students);

                // Update Trade Count
                selectedTrade.enrolled++;
                Storage.setTrades(trades);

                alert('Payment Successful! Registration Complete.');
                e.target.reset();
                populateTradeDropdown(); // Refresh capacities
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

function updateDashboardStats() {
    // Removed: Handled by Laravel
}

function renderTradesTable() {
    // Removed: Handled by Laravel
}

function renderStudentsTable() {
    // Removed: Handled by Laravel
}

// Global Actions
window.deleteTrade = function(id) {
    // Removed: Handled by Laravel
}
