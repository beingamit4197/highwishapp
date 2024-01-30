import emailjs from "@emailjs/browser";

const emailServieID = "highWishApp";
const emailTemplateID = "highWishApp_Template";
const emailPublicID = "5XYIREkQHQQRToOVI";

export const sendEmail = (data, template) => {
  return emailjs
    .send(emailServieID, template || emailTemplateID, data, emailPublicID)
    .then(
      (result) => {
        console.log(result.text);
        return result;
      },
      (error) => {
        console.error("Error sending email:", error);
        throw error;
      }
    );
};
