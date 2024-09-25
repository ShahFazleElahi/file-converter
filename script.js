document.getElementById('conversionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('fileInput');
    const conversionType = document.getElementById('conversionType').value;
    
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('conversionType', conversionType);
    
    const response = await fetch('/convert', {
        method: 'POST',
        body: formData,
    });
    
    const result = await response.blob();
    const url = URL.createObjectURL(result);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<a href="${url}" download="converted_file">Download Converted File</a>`;
});
