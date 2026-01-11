import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

// Email recipients configuration - all 4 emails will receive form submissions
const EMAIL_RECIPIENTS = [
  "energy.apatel@gmail.com",
  "prestilindia@gmail.com",
  "abhi9824054002@yahoo.com",
  "abhi9824054002@gmail.com",
];

// Create nodemailer transporter
// Configure via environment variables:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Or use Gmail: SMTP_USER=your-email@gmail.com, SMTP_PASS=app-password
const createTransporter = () => {
  const smtpConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    } : undefined,
  };

  return nodemailer.createTransport(smtpConfig);
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const formData = req.body;
      const { Name, name, Company, company, Email, email, Phone, phone, Subject, subject, Message, message, source } = formData;

      // Normalize form data
      const normalizedData = {
        name: Name || name || "",
        company: Company || company || "",
        email: Email || email || "",
        phone: Phone || phone || "",
        subject: Subject || subject || "Contact Form Submission",
        message: Message || message || "",
        source: source || "Contact Form",
      };

      // Validate required fields
      if (!normalizedData.name || !normalizedData.email || !normalizedData.message) {
        return res.status(400).json({ 
          success: false, 
          message: "Missing required fields: name, email, and message are required" 
        });
      }

      // Create email content
      const emailSubject = `${normalizedData.subject} - ${normalizedData.source}`;
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Source:</strong> ${normalizedData.source}</p>
        <p><strong>Name:</strong> ${normalizedData.name}</p>
        <p><strong>Company:</strong> ${normalizedData.company || "N/A"}</p>
        <p><strong>Email:</strong> ${normalizedData.email}</p>
        <p><strong>Phone:</strong> ${normalizedData.phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${normalizedData.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${normalizedData.message.replace(/\n/g, "<br>")}</p>
      `;

      const emailText = `
New Contact Form Submission
Source: ${normalizedData.source}
Name: ${normalizedData.name}
Company: ${normalizedData.company || "N/A"}
Email: ${normalizedData.email}
Phone: ${normalizedData.phone || "N/A"}
Subject: ${normalizedData.subject}

Message:
${normalizedData.message}
      `;

      // Send email to all recipients
      const transporter = createTransporter();
      
      // Send to all recipients in parallel
      const emailPromises = EMAIL_RECIPIENTS.map((recipient) => {
        return transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER || normalizedData.email,
          to: recipient,
          replyTo: normalizedData.email,
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });
      });

      await Promise.all(emailPromises);

      res.json({ 
        success: true, 
        message: "Form submitted successfully. Our team will contact you within 24 hours.",
        recipients: EMAIL_RECIPIENTS 
      });
    } catch (error: any) {
      console.error("Contact form submission error:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "Failed to submit form. Please try again or contact us directly." 
      });
    }
  });

  return httpServer;
}
