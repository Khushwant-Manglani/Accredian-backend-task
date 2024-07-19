const Referral = require("../models/referral.model.js");
const transporter = require("../config/mail.js");
const { validateReferral } = require("../validation/referral.validation.js");

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

  // Validate the request body
  const { isValid, errors } = validateReferral(req.body);

  if (!isValid) {
    return res.status(400).json({ errors });
  }

  try {
    // Check if referral code has already been sent to this email
    const existingReferral = await Referral.findOne({ email, referralCode });
    if (existingReferral) {
      return res.status(400).json({
        error: "This referral code has already been sent to this email",
      });
    }

    const newReferral = new Referral({ name, email, referralCode, message });
    await newReferral.save();

    // Send confirmation email
    await sendReferralEmail(email, { name, referralCode, message });

    res.status(201).json({ message: "Referral submitted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReferral,
};
