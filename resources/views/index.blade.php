<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BUEPS - Babcock University Entrepreneurship Payment System</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="landing-page">
        <!-- Header -->
        <header class="landing-header">
            <div class="landing-logo">
                <i class="fa-solid fa-building-columns"></i> BUEPS
            </div>
            <nav class="landing-nav">
                <a href="{{ route('register') }}">Register</a>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Babcock University <span>Entrepreneurship Payment</span> System</h1>
                    <p>Register for your preferred trade program and complete your payment securely through our online portal.</p>
                    <div class="hero-buttons">
                        <a href="{{ route('register') }}" class="btn-register">
                            Register Now <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="landing-footer">
            <p>&copy; {{ date('Y') }} BUEPS - Babcock University Entrepreneurship Payment System. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
