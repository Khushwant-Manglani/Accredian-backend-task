const Referral = require("../models/referral.model.js");
const transporter = require("../config/mail.js");

// Utility function to send referral email
const sendReferralEmail = async (email, referralData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Referral Confirmation",
    text: `Thank you for your referral! Here are the details:\n\n${JSON.stringify(
      referralData,
      null,
      2
    )}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// Controller function to create a referral
const createReferral = async (req, res, next) => {
  const { name, email, referralCode, message } = req.body;

  if (!name || !email || !referralCode || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newReferral = new Referral({ name, email, referralCode, message });
    await newReferral.save();

    await sendReferralEmail(email, { name, referralCode, message });

    res.status(201).json({ message: "Referral submitted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReferral,
};
