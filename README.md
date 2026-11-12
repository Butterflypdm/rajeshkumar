# N. Rajeshkumar — Personal Portfolio Website

A responsive personal portfolio starter built with HTML5, custom CSS3, vanilla JavaScript and Bootstrap 5.

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a browser. For best results, use VS Code with the Live Server extension.
3. Internet access is required for Bootstrap, Bootstrap Icons and Google Fonts CDNs.

## Folder structure
- `index.html` — page content and Bootstrap layout
- `css/style.css` — theme, layout and responsive styling
- `js/script.js` — navigation, active section, back-to-top and demo form validation
- `images/` — add approved profile and event photographs here

## Before publishing
- Replace the portrait placeholder in the hero section with an approved photograph.
- Update the email address and phone number in the Contact section.
- Add verified public achievements, projects, dates and event photographs where appropriate.
- Connect the contact form to a secure backend or form service. The included form is front-end only and does not send or store messages.
- Add official social media links if desired.
- Confirm all biographical wording and titles before publishing.

## Add a portrait
Place the approved photo in `images/`, for example `images/rajeshkumar.jpg`. In `index.html`, replace the `<div class="portrait-placeholder">...</div>` block with:
`<img src="images/rajeshkumar.jpg" alt="N. Rajeshkumar" class="profile-photo">`

Then add this CSS:
`.profile-photo { width: 100%; min-height: 490px; height: 100%; object-fit: cover; object-position: center top; border-radius: 210px 210px 15px 15px; }`


## Social media integration
Social media icon links are included in the Contact section and footer:
- Facebook
- Instagram
- YouTube
- WhatsApp

The URLs currently contain sample placeholders. Replace `your-page`, `your-profile`, `@your-channel`, and `91XXXXXXXXXX` in `index.html` with the official profile URLs and WhatsApp number before publishing. The links open in a new tab.


## Configured official social links
- Facebook: https://www.facebook.com/share/19aC1RQcog/
- Instagram: https://www.instagram.com/rajeshkidangayam?dlrf=MXdpNTJvamhpeDR1cg==
- WhatsApp: https://wa.me/919946553032
- YouTube remains a placeholder until an official channel URL is provided.
