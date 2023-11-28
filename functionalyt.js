(function() {
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/5df520e1b0ebe722d03f9f82_dios_logo_cmyk_vit.png" style="width: 100px; height: 100px; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
            <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; max-width: 600px; padding: 20px; font-family: 'Open Sans', sans-serif;">
                <img src="image_url">
                <h1>Headline</h1>
                <p>Paragraph</p>
                <img src="second_image_url">
                <a href="#" id="copy-phone">Copy Phone Number</a>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    document.getElementById("charity-widget").addEventListener("click", function() {
        document.getElementById("charity-overlay").style.display = "block";
    });

    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("charity-overlay").style.display = "none";
    });

    document.getElementById("copy-phone").addEventListener("click", function(event) {
        event.preventDefault();
        const el = document.createElement('textarea');
        el.value = 'phone_number';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    });
})();