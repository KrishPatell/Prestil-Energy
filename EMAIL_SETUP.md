# Email Configuration Setup

## Overview

The contact forms now send emails directly to **4 recipients** using a backend API endpoint with nodemailer.

## Email Recipients

All form submissions are automatically sent to these 4 email addresses:

1. `energy.apatel@gmail.com`
2. `prestilindia@gmail.com`
3. `abhi9824054002@yahoo.com`
4. `abhi9824054002@gmail.com`

## Setup Instructions

### 1. Create `.env` file

Create a `.env` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. **Use the App Password** as `SMTP_PASS` (NOT your regular Gmail password)

### 3. Other SMTP Providers

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

**Custom SMTP:**
Use your provider's SMTP server and port settings.

### 4. Update Email Recipients

To change the recipient emails, edit `server/routes.ts` and update the `EMAIL_RECIPIENTS` array:

```typescript
const EMAIL_RECIPIENTS = [
  "energy.apatel@gmail.com",
  "prestilindia@gmail.com",
  "abhi9824054002@yahoo.com",
  "abhi9824054002@gmail.com",
];
```

## Testing

1. Start the server: `npm run dev`
2. Submit a test form from the contact page
3. Check all 4 email inboxes to verify receipt

## Troubleshooting

- **"Authentication failed"**: Check your SMTP credentials, especially if using Gmail, ensure you're using an App Password
- **"Connection timeout"**: Verify SMTP_HOST and SMTP_PORT are correct
- **Emails not received**: Check spam folders, verify SMTP credentials are correct

## Removed Email

- ~~`hi@kpatel.xyz`~~ (removed from configuration)
