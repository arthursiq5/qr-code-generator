const getQRCode = (url, size=300) => `https://quickchart.io/qr?size=${size}&text=${url}&format=png`

const generateQRCode = (e) => {
    e.preventDefault()
    const url = document.getElementById('url').value
    const qrCodeEl = document.getElementById('qrCode')
    qrCodeEl.src = getQRCode(url);
}

document.getElementById('generateQRCode').addEventListener('submit', generateQRCode, false)