function openPDF() {
    const pdfInput = document.getElementById('pdfInput');
    const pdfContainer = document.getElementById('pdfContainer');

    const file = pdfInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const pdfSrc = e.target.result;
            const embed = document.createElement('embed');
            embed.setAttribute('src', pdfSrc);
            embed.setAttribute('type', 'application/pdf');
            embed.setAttribute('width', '100%');
            embed.setAttribute('height', '600px');

            pdfContainer.innerHTML = '';
            pdfContainer.appendChild(embed);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Выберите PDF-файл для открытия.');
    }
}
