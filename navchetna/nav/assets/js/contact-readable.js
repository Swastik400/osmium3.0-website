// Contact Form Handler - Update API_ENDPOINT before obfuscating
class SecureContactHandler {
    constructor() {
        // Base64 encoded API endpoint - UPDATE THIS WITH YOUR ACTUAL LAMBDA URL
        // Current: https://your-api-gateway-url.com/prod/contact
        this.apiEndpoint = 'aHR0cHM6Ly95b3VyLWFwaS1nYXRld2F5LXVybC5jb20vcHJvZC9jb250YWN0';
        this.init();
    }

    init() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            company: formData.get('company') || '',
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Validate email format
        if (!this.isValidEmail(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        try {
            this.showLoading(true);
            
            const response = await fetch(atob(this.apiEndpoint), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                this.showMessage('Thank you! Your message has been sent successfully.', 'success');
                document.getElementById('contactForm').reset();
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            this.showLoading(false);
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 12px 16px;
            margin: 16px 0;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            ${type === 'success' 
                ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
                : 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // Insert message after form
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(messageDiv, form.nextSibling);

        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }

    showLoading(show) {
        const submitButton = document.querySelector('#contactForm button[type="submit"]');
        if (submitButton) {
            if (show) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            } else {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SecureContactHandler();
});

/* 
TO UPDATE API ENDPOINT:
1. Replace 'your-api-gateway-url.com' with your actual Lambda API Gateway URL
2. Encode the full URL to Base64
3. Replace the apiEndpoint value above
4. Re-obfuscate this file using an online JavaScript obfuscator
5. Replace contact-secure.js with the obfuscated version
*/