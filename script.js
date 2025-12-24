function calculateIdealWeight() {
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const resultDiv = document.getElementById('result');
    
    if (!height || height < 100 || height > 250) {
        alert('الرجاء إدخال طول صحيح بين 100 و 250 سم');
        return;
    }

    // معادلة ديفين (Devine Formula)
    let idealWeight;
    const heightInInches = height / 2.54;
    
    if (gender === 'male') {
        // للرجال: 50 كجم + 2.3 كجم لكل إنش فوق 5 أقدام (60 إنش)
        idealWeight = 50 + 2.3 * (heightInInches - 60);
    } else {
        // للنساء: 45.5 كجم + 2.3 كجم لكل إنش فوق 5 أقدام (60 إنش)
        idealWeight = 45.5 + 2.3 * (heightInInches - 60);
    }

    // حساب النطاق الصحي (±10%)
    const minWeight = (idealWeight * 0.9).toFixed(1);
    const maxWeight = (idealWeight * 1.1).toFixed(1);
    
    // عرض النتائج
    document.getElementById('idealWeight').textContent = `${idealWeight.toFixed(1)} كجم`;
    document.getElementById('weightRange').innerHTML = 
        `<strong>النطاق الصحي:</strong> من ${minWeight} إلى ${maxWeight} كجم`;
    
    // معلومات إضافية
    const heightInMeters = height / 100;
    const bmiAtIdealWeight = (idealWeight / (heightInMeters * heightInMeters)).toFixed(1);
    document.getElementById('bmiInfo').innerHTML = 
        `<strong>مؤشر كتلة الجسم عند الوزن المثالي:</strong> ${bmiAtIdealWeight}`;
    
    resultDiv.classList.add('show');
}

// السماح بالحساب عند الضغط على Enter
document.getElementById('height').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateIdealWeight();
    }
});