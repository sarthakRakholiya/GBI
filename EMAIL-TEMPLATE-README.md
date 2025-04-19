# Email Templates for GBI Contact Form

This directory contains HTML and plain text email templates for the Gayatri Bearing Industries contact form.

## Files

- `email-template.html` - HTML version of the email template
- `email-template.txt` - Plain text version of the email template

## How to Use with EmailJS

1. Log in to your EmailJS account at https://dashboard.emailjs.com/
2. Navigate to "Email Templates" in the sidebar
3. Click "Create New Template"
4. Give your template a name (e.g., "GBI Contact Form")
5. For the HTML content, copy and paste the contents of `email-template.html`
6. For the Text content, copy and paste the contents of `email-template.txt`
7. Save the template
8. Copy the Template ID and update your `.env` file with the new Template ID

## Template Variables

The templates use the following variables that will be replaced with actual values when an email is sent:

- `{{name}}` - The name of the person submitting the form
- `{{email}}` - The email address of the person submitting the form
- `{{phone}}` - The phone number of the person submitting the form
- `{{subject}}` - The subject of the message
- `{{message}}` - The message content

## Customization

You can customize the templates by:

1. Updating the SVG logo in the HTML template (currently using the GBI logo with bearing balls)
2. Changing the colors to match your brand (currently using GBI red #c53030)
3. Updating the social media links
4. Modifying the copyright year

## Testing

To test the template:

1. Make sure your EmailJS service is properly configured
2. Submit the contact form on your website
3. Check the email inbox specified in your EmailJS service
