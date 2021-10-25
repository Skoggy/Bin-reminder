require('dotenv').config()
const nodemailer = require('nodemailer');

const day = require("./day");
const week = require("./week");

const currentDay = day.n;
const currentWeekNumber = week.currentWeekNumber


const bins = {
    Week1: "Yellow and Green",
    Week2: "Red and Green",
}


const binWeekSetter = () => {
    if (currentWeekNumber % 2 === 0) {
        return bins.Week1
    }
    else return bins.Week2
}
const binWeek = binWeekSetter()

const textWillBe = () => {
    if (currentDay === "Sunday") {
        return `Today is ${currentDay}, you should be getting the ${binWeek} out tonite.`
    } else if (currentDay === "Monday") {
        return `Today is ${currentDay}, the ${binWeek} should have been put out this morning!`
    } else return `Today is ${currentDay}, the bins are not required to be put out today, last Monday's bins were ${binWeek}`
}

const emailText = textWillBe()


let mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECIPIENT,
    subject: 'Email Bin Reminder',
    text: emailText
};

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASS,
    }
});

transport.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log('Email sent: ' + info.response);
    }
})