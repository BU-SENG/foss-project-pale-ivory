<h1 style="font-size: 40px;">Babcock University Entrepreneurship Payment System</h1>

<br>
<p>A platform that streamlines payment authentication and the entrepreneurship center management platform all in one platform</p>
<br>

<h2>Group Members</h2>

<ul>
  <li>22/0081 SOARES STEPHANIA OLUWAJENROLA</li>
  <li>22/0109 SODUNKE OLUWATUNMISE</li>
  <li>22/0193 SOGBESAN ITUNUOLUWA AYOMI</li>
  <li>22/0092 SOJI-ODERINDE OLUWADAMILOLA ERNEST</li>
  <li>22/0146 TAIWO ISAAC AYOOLA</li>
  <li>22/0076 TAIWO ISRAEL IDOWU</li>
  <li>22/0172 TAIWO KEHINDE HIKMAT</li>
  <li>22/0296 TEMPLE AJIMBA</li>
  <li>22/0066 THOMAS-OROGAN TIMILEHIN AKINOLA</li>
  <li>22/0184 TOBIN-WEST TAMUNOSAKI</li>
</ul>


<h2 style="font-size: 32px;">Benefits</h2>
<ul>
  <li>It simplifies payment verification</li>
  <li>Allows students to make registration</li>
  <li>It reduces stress</li>
  <li>It improves management efficiency</li>
</ul>

<br>

<h2 style="font-size: 32px;">Features</h2>
<ul>
  <li>Login</li>
  <li>Register and Select trade</li>
  <li>Make payment through transfer or card</li>
  <li>Logout</li>
</ul>

<br>

<h2 style="font-size: 32px;">Tools Used</h2>

<ul>
  <li>
    <strong>HTML</strong><br>
    HTML is used to structure the entire system. It defines the content on each page, including text, forms, images, buttons, and links.
  </li>

  <li>
    <strong>CSS</strong><br>
    CSS is used to style and format the HTML content. It controls colors, fonts, spacing, layouts, responsiveness, and the overall visual design.
  </li>

  <li>
    <strong>PHP</strong><br>
    PHP is used for backend server-side logic. It processes data, connects to the database, handles authentication, APIs, and manages form submissions.
  </li>

  <li>
    <strong>Laravel</strong><br>
    Laravel is a PHP framework that simplifies backend development. It provides routing, authentication tools, database management, MVC structure, and cleaner code organization.
  </li>

  <li>
    <strong>Figma</strong><br>
    Figma was used to design the UI/UX of the system before development. It helped create wireframes, prototypes, and visual layouts.
  </li>

  <li>
    <strong>Paystack</strong><br>
    Paystack is integrated as the secure online payment gateway for processing student transactions safely and reliably.
  </li>
</ul>

<br>

<h2 style="font-size: 32px;">How to Use This Repo</h2>

<ol>
  <li>
    <strong>Clone the project</strong><br>
    Open your terminal and run the following command:
    <pre><code>git clone https://github.com/BU-SENG/foss-project-pale-ivory
cd foss-project-pale-ivory</code></pre>
  </li>
</ol>

<h3>Installation</h3>

<h4>Prerequisites</h4>
<p>Before installing, make sure you have the following installed on your system:</p>
<ul>
  <li>PHP 8.2 or higher</li>
  <li>Composer (PHP dependency manager)</li>
  <li>SQLite (or your preferred database)</li>
  <li>Git (for cloning the repository)</li>
</ul>

<h4>Setup</h4>
<ol>
  <li>
    <strong>Clone the repository</strong><br>
    <pre><code>git clone https://github.com/BU-SENG/foss-project-pale-ivory
cd foss-project-pale-ivory</code></pre>
  </li>

  <li>
    <strong>Install PHP dependencies</strong><br>
    <pre><code>composer install</code></pre>
  </li>

  <li>
    <strong>Environment configuration</strong><br>
    <pre><code>cp .env.example .env
php artisan key:generate</code></pre>
  </li>

  <li>
    <strong>Database setup</strong><br>
    <pre><code>php artisan migrate</code></pre>
  </li>

  <li>
    <strong>Start the development server</strong><br>
    <pre><code>php artisan serve</code></pre>
    It will be available at <a href="http://localhost:8000">http://localhost:8000</a>
  </li>
  <li><strong>Deployment:</strong> The system is deployed using <strong>Laravel Cloud</strong>.</li>
</ol>
<br>
<h2 style="font-size: 32px;"> Student Workflow </h2>

<ol>
  <li><strong>Visit Website:</strong> Click "Register Now".</li>
  <li><strong>Fill Registration Form:</strong> Enter Name, Matric Number, Email, Phone, Department, Level, and Trade.</li>
  <li><strong>Make Payment:</strong> Click "Pay Now" and choose a payment method (Card, Bank Transfer, or USSD) via Paystack.</li>
  <li><strong>Download Receipt:</strong> After successful payment, download the generated receipt.</li>
  <li><strong>Complete Registration:</strong> Return to home. Registration is complete and student can attend classes.</li>
  <li><strong>Deployment:</strong> The system is deployed using <strong>Laravel Cloud</strong>.</li>
</ol>

<h2 style="font-size: 32px;">Admin Workflow</h2>

<ol>
  <li><strong>Login:</strong> Admin signs in with email and password to access the portal.</li>
  <li><strong>Dashboard Overview:</strong> View total students, active trades, and total capacity.</li>
  <li><strong>Manage Trades:</strong> Add, edit, or view trades with details like name, capacity, enrolled students, and status.</li>
  <li><strong>Student Records:</strong> View all registered students, including name, matric number, email, phone, department, level, trade, and status.</li>
  <li><strong>Admin Actions:</strong> Manage entrepreneurship administration and perform system-level tasks.</li>
</ol>

<h2 style="font-size: 32px;">Super Admin Workflow</h2>

<ol>
  <li><strong>Login:</strong> Super Admin signs in to access the portal and system-wide controls.</li>
  <li><strong>Dashboard Overview:</strong> View total students, active trades, and total capacity.</li>
  <li><strong>Manage Trades:</strong> Add, edit, or view all trades with details like trade name, capacity, enrolled students, and status.</li>
  <li><strong>Student Records:</strong> View all registered students across all trades with details such as name, matric number, email, phone, department, level, trade, and status.</li>
  <li><strong>Manage Admins:</strong> Add or manage system administrators, including Admins and Super Admins with their name, email, role, and creation date.</li>
  <li><strong>Super Admin Actions:</strong> Perform full system-level management, including overseeing trades, students, and admins.</li>
</ol>


<br>

<h2>License</h2>

<p>
  This project is released under the <strong>MIT License</strong>.
</p>

<p>
  We chose this license because we want Babcock University (and anyone else who uses this project) to be able to:
</p>

<ul>
  <li>Use the project freely</li>
  <li>Modify or improve it</li>
  <li>Include it in academic work or systems</li>
</ul>

<p>
  However, the MIT License <strong>requires that proper credit is given to the original authors</strong> of this project.
  This means that if the project is reused, redistributed, or included in any school system,
  the authors’ names and the original license notice must remain visible.
</p>

<p>
  <strong>In short: You can use it, but please credit us.</strong>
</p>

