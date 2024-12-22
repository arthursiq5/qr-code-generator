const generateQRCode = (e) => {
    e.preventDefault()
    const url = document.getElementById('url').value
    alert(url)
}

document.getElementById('generateQRCode').addEventListener('submit', generateQRCode, false)