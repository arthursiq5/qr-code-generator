const getQRCode = (url, size) => `https://quickchart.io/qr?size=300&text=${url}&format=png`

const generateQRCode = (e) => {
    e.preventDefault()
    const url = document.getElementById('url').value
    const qrCodeEl = document.getElementById('qrCode')
    qrCodeEl.src = getQRCode(url);
}

document.getElementById('generateQRCode').addEventListener('submit', generateQRCode, false)