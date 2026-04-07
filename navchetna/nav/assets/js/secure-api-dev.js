// Secure API Handler - Development Version
// This file contains the readable version for development purposes
// The production version (secure-api.js) is minified and obfuscated

class SecureAPIHandler {
    constructor() {
        // API URL is base64 encoded and stored in reverse
        this.encodedEndpoints = [
            'aHR0cHM6Ly9uczlzdWw5NzBsLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3Byb2QvY29udGFjdA=='
        ];
    }

    // Decode the API endpoint
    getEndpoint() {
        const encoded = this.encodedEndpoints[0];
        const reversed = encoded.split('').reverse().join('');
        return atob(reversed);
    }

    // Submit form data to the API
    submitForm(formData, callbacks) {
        const xhr = new XMLHttpRequest();
        const endpoint = this.getEndpoint();
        
        xhr.open('POST', endpoint, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (callbacks.success) {
                        callbacks.success(JSON.parse(xhr.responseText));
                    }
                } else {
                    if (callbacks.error) {
                        callbacks.error(xhr.status, xhr.responseText);
                    }
                }
            }
        };
        
        xhr.send(JSON.stringify(formData));
    }
}

// Export for use
window.SecureAPI = new SecureAPIHandler();