const encoder = new TextEncoder();
const data = encoder.encode('admin:admin');
const base64 = btoa(String.fromCharCode(...new Uint8Array(data)));

export const options = {
    // "Content-Type": "application/json",
    "cookie": 'F272155385F16E17C1F0C1F6CBF0D7A7',
    "Authorization": "Basic " + base64
}