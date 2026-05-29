document.addEventListener('DOMContentLoaded', () => {
    const formEmail = document.getElementById('form-email');
    const formPassword = document.getElementById('form-password');
    
    const stepEmail = document.getElementById('step-email');
    const stepPassword = document.getElementById('step-password');
    
    const btnBack = document.getElementById('btn-back');
    const optionsContainer = document.getElementById('options-container');
    const userDisplay = document.getElementById('user-display');
    const displayEmail = document.getElementById('display-email');
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // عند إرسال اسم المستخدم (البريد الإلكتروني)
    formEmail.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (usernameInput.value.trim() !== "") {
            // تحديث نص الحساب المعروض فوق حقل كلمة السر
            displayEmail.textContent = usernameInput.value;
            
            // الانتقال إلى واجهة كلمة المرور
            stepEmail.classList.remove('active');
            stepEmail.classList.add('hidden');
            
            stepPassword.classList.remove('hidden');
            stepPassword.classList.add('active');
            
            // إظهار زر العودة وإخفاء خيارات تسجيل الدخول السفلية
            btnBack.classList.remove('hidden');
            optionsContainer.classList.add('hidden');
            userDisplay.classList.remove('hidden');
            
            // تركيز المؤشر تلقائياً على حقل كلمة السر
            passwordInput.focus();
        }
    });

    // عند الضغط على زر العودة (السهم)
    btnBack.addEventListener('click', () => {
        // العودة إلى واجهة البريد الإلكتروني
        stepPassword.classList.remove('active');
        stepPassword.classList.add('hidden');
        
        stepEmail.classList.remove('hidden');
        stepEmail.classList.add('active');
        
        // إخفاء زر العودة وإظهار الخيارات السفلية
        btnBack.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        userDisplay.classList.add('hidden');
        
        // تركيز المؤشر على حقل البريد الإلكتروني
        usernameInput.focus();
    });

    // عند إرسال كلمة المرور (هنا يمكنك معالجة البيانات الثابتة أو تخزينها)
    formPassword.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const finalEmail = usernameInput.value;
        const finalPassword = passwordInput.value;
        
        // يمكنك توجيه المستخدم إلى صفحة نجاح أو معالجة المدخلات هنا
        console.log("Email:", finalEmail);
        console.log("Password:", finalPassword);
        
        alert("Connexion réussie (Simulation du site static) !");
    });
});
