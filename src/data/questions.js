import countries from "./contries";

const questions = [
  {
    id: 1,
    type: "consent",
    required: false,
    question: {
      markdown: `### Before starting, please find below the list of documents required for each account holder: 
  For your information, the opening of your account takes around 72 working hours.  
  (a) Your valid identity document 
  (b) Your Taxpayer Identification Number(TIN)
  (c) Proof of residence(a copy of National ID / utility bills or tenancy agreement) 
  (d) A selfie while holding your ID / Passport next to your face
  (e) A specimen of your signature similar to one on your National ID / passport
   

             `,
    },
  },
  {
    id: 2,
    type: "checkbox",
    required: true,
    question: {
      markdown: "Check the account type that you're interested in.",
    },
    options: ["Personal", "Business", "Other"],
  },
  {
    id: 3,
    type: "dropdown",
    required: false,
    question: {
      markdown: "You can now select the account type you desire.",
    },
    options: [
      "Savings Accounts",
      "Current Accounts",
      "Corporate Accounts",
      "Investment Accounts",
      "Mortgage Accounts",
      "Home Equity Loans",
      "Salary Accounts",
      "Senior Citizens Accounts",
      "Children 's Savings Accounts",
    ],
  },
  // {
  //   id: 4,
  //   type: "dropdown",
  //   required: true,
  //   question: {
  //     markdown: "What is your country of residence?",
  //   },
  //   options: [...countries],
  // },
  // {
  //   id: 5,
  //   type: "boolean",
  //   required: false,
  //   question: {
  //     markdown: "Do you have revenues from Ukraine (current or future)?",
  //   },
  // },
  // {
  //   id: 6,
  //   type: "boolean",
  //   required: true,
  //   question: {
  //     markdown:
  //       "Are you affiliated to the United States of America in any way? ",
  //   },
  // },
  // {
  //   id: 7,
  //   type: "boolean",
  //   required: true,
  //   question: {
  //     markdown:
  //       "Do you plan on staying and/or working in Ukraine in the next 6 months?",
  //   },
  // },
  {
    id: 8,
    type: "checkbox",
    required: false,
    question: {
      markdown: `Choose Title of your Name.`,
    },
    options: ["Ms", "Mrs", "Mr"],
  },
  {
    id: 9,
    type: "text",
    required: true,
    question: {
      markdown: `What's your first name?
           Enter your legal name, rather than your nickname.
          `,
    },
  },
  {
    id: 10,
    type: "text",
    required: true,
    question: {
      markdown: "Last name?",
    },
  },
  {
    id: 11,
    type: "dob",
    required: true,
    question: {
      markdown: "Date Of Birth",
    },
  },
  {
    id: 13,
    type: "dropdown",
    required: true,
    question: {
      markdown: "Country of birth",
    },
    options: [...countries],
  },
  {
    id: 14,
    type: "dropdown",
    required: true,
    question: {
      markdown: "Nationality",
    },
    options: [...countries],
  },
  {
    id: 15,
    type: "text",
    required: false,
    question: {
      markdown: "What's the Name and Telephone details for your next of kin?",
    },
  },
  {
    id: 16,
    type: "dropdown",
    required: true,
    question: {
      markdown: "Marital status",
    },
    options: [
      "Married",
      "Single",
      "Separated",
      "Divorced",
      "Legally Declared Partner",
      "Widowed",
    ],
  },
  {
    id: 18,
    type: "text",
    required: true,
    question: {
      markdown: "Street ",
    },
  },
  {
    id: 20,
    type: "text",
    required: true,
    question: {
      markdown: "Postal code ",
    },
  },
  {
    id: 21,
    type: "text",
    required: true,
    question: {
      markdown: "Town ",
    },
  },
  {
    id: 22,
    type: "text",
    required: true,
    question: {
      markdown: `Contact information Telephone number?
           `,
    },
  },
  // {
  //   id: 23,
  //   type: "text",
  //   required: true,
  //   question: {
  //     markdown: `Contact information Mobile Phone Number?
  //          `,
  //   },
  // },
  {
    id: 24,
    type: "text",
    required: true,
    question: {
      markdown: "Email address",
    },
  },
  {
    id: 25,
    type: "text",
    required: true,
    question: {
      markdown: "Confirm Email address",
    },
    should_equals_to: 24,
  },
  {
    id: 27,
    type: "consent",
    required: false,
    question: {
      markdown: `(Communication by e - mail)
      In order to be able to communicate with the Bank by
      e - mail and also enable me to keep me informed of events relating
      to my accounts(e.g.unusual transfer on my account, non - executed 
      standing order, fraudulent use of my card, etc.), 
      I would like Imperial Capital contact me by e - mail:`,
    },
    label: "I agree",
  },
  {
    id: 28,
    type: "consent",
    required: false,
    question: {
      markdown: `If I accept, I expressly consent to communicate with the Bank by 
           e - mail and consequently also to receive information, including confidential information, by this mean of communication.Furthermore, I acknowledge to have been informed of the content of Article A .3 .3 of the General Terms and Conditions of the Bank specifying notably that communication by e - mail is not secured.Note that neither the confidentiality, nor authenticity of the messages(identity of the sender and / or addressee, content), nor delivery, are guaranteed.As a consequence, I release the Bank from any liability related to the use of this mean of communication and declare in advance to bear all the consequences, including financial loss, that could result
            from a misuse by an unauthorised third party of information sent by this mean.
           `,
    },
    label: "Accept",
  },
  {
    id: 29,
    type: "dropdown",
    required: true,
    question: {
      markdown: `Occupation Status
           `,
    },
    options: [
      "Employee / Civil Servant",
      "Independent",
      "Without Profession",
      "Others",
    ],
  },
  {
    id: 30,
    type: "dropdown",
    required: true,
    question: {
      markdown: `Occupation Details
           `,
    },
    options: [
      "Work / employee",
      "Executive",
      "Managing Director",
      "Civil Servant",
      "Civil Service Executive",
      "Civil Service Manager",
      "Member of the diplomatic corps",
      "Solider, Policeman / woman, Constable",
      "Officer / Inspector / Comissioner",
      "Architect, Surveyor, consultant Engineer",
      "Artist, Journalist, Writer",
      "Auditor / Accountant",
      "Broker, Agent",
      "Craftsman / merchant",
      "Doctor, Dentist, Veternian",
      "Farmer",
      "Lawyer",
      "Notary",
      "Paramedical Profession",
      "Pharmacist",
      "Teacher",
      "Translator",
      "Interpretor",
      "Others",
    ],
  },
  {
    id: 31,
    type: "boolean",
    required: false,
    question: {
      markdown: "Subject to VAT",
    },
  },
  {
    id: 34,
    type: "boolean",
    required: true,
    question: {
      markdown:
        "Is your country for tax purposes the same as your country of residence ?",
    },
  },
  {
    id: 37,
    type: "boolean",
    required: false,
    question: {
      markdown: "I have a connection with the United States ",
    },
  },
  {
    id: 38,
    type: "boolean",
    required: false,
    question: {
      markdown: "I am a politically exposed person or linked to such a person:",
    },
  },
  {
    id: 39,
    type: "checkbox",
    required: false,
    question: {
      markdown: "The person who has (had) a significant public occupation",
    },
    options: ["Myself", "Parent(father, mother)", "Spouse", "Child", "Other"],
  },
  {
    id: 40,
    type: "boolean",
    required: false,
    question: {
      markdown: `Setting up automatic savings
           I would like to set up automatic savings to my Blue Savings Account:
           `,
    },
  },
  {
    id: 41,
    type: "consent",
    required: false,
    question: {
      markdown: `Access to your mail
           Your mail will be made available once a month in the "Documents"
           part of our My Blue business site.
           Documents which cannot be provided via My Imperial 
           Capital will be sent by post mail.
           `,
    },
    label: "Continue",
  },
  {
    id: 42,
    type: "checkbox",
    required: false,
    question: {
      markdown: "Nature of funds to be lodged in the account ",
    },
    options: ["Professional income", "Real estate income", "Other Income"],
  },
  {
    id: 43,
    type: "dropdown",
    required: false,
    question: {
      markdown: "Main country where the income is generated ",
    },
    options: [...countries],
  },
  {
    id: 45,
    type: "text",
    required: false,
    question: {
      markdown: "Estimated Incoming funds per month ? ",
    },
  },
  {
    id: 46,
    type: "text",
    required: false,
    question: {
      markdown: "Estimated Outgoing funds per month ?",
    },
  },
  {
    id: 48,
    type: "consent",
    required: false,
    question: {
      markdown: `In case of unconformity between your country of residence and
            the country mentioned on your identity card, 
            a certification of residence not older than 6 months must 
            be provided to the bank.
           You also have the possibility to have your identity card certified in one of our branches.
           `,
    },
    label: "Continue",
  },
  {
    id: 49,
    type: "checkbox",
    required: false,
    question: {
      markdown: "How did you hear about us? ",
    },
    options: [
      "Imperial Capital brand awareness",
      "Recommended by a third party",
      "Article / pub",
      "Event",
      "Online",
    ],
  },
  {
    id: 50,
    type: "consent",
    required: false,
    question: {
      markdown: `General terms and conditions
            I certify that I have been informed that this account opening application is subject to the following conditions, 
            which can be printed out and downloaded in PDF format,Bank 's General Terms and Conditions 
            https://imperialcapital.co.com/ua/media/new/TermsAndCon.pdf
            - IMPERIAL CAPITAL INTEGRATED ACCOUNT TERMS AND CONDITIONS.
           
           `,
    },
    label: "Agree",
  },
  {
    id: 51,
    type: "file",
    required: true,
    question: {
      markdown: `You are about to finalize your application to a Blue Account, however You have to submit the following requirements
           for authentication:
          1 colored, high quality and clearly readable, passport size photograph, with all 4
           `,
    },
  },
  {
    id: 52,
    type: "file",
    required: false,
    question: {
      markdown: "2: Proof of nationality; either National ID or valid passport",
    },
  },
  {
    id: 53,
    type: "file",
    required: false,
    question: {
      markdown: "3: Proof of residence; utility bills or tenancy agreement.",
    },
  },
  {
    id: 54,
    type: "file",
    required: false,
    question: {
      markdown: "4: A selfie while holding your ID/Passport next to your face",
    },
  },
  {
    id: 55,
    type: "file",
    required: false,
    question: {
      markdown:
        "5: A specimen of your signature similar to one on your National ID/ passport",
    },
  },
  {
    id: 56,
    type: "dropdown",
    required: true,
    question: {
      markdown: "Choose a security question 1",
    },
    options: [
      "What is the name of your favorite book?",
      "What is the last name of your mother?",
      "What is the name of your first pet?",
      "what is the last name of your best friend?",
    ],
  },
  {
    id: 57,
    type: "text",
    required: true,
    question: {
      markdown: "What is the answer to your security question 1?",
    },
  },
  {
    id: 58,
    type: "dropdown",
    required: true,
    question: {
      markdown:
        "You're almost done,help us secure your account by choosing a security question 2.",
    },
    options: [
      "What is the name of your favorite book?",
      "What is the last name of your mother?",
      "What is the name of your first pet?",
      "what is the last name of your best friend?",
    ],
  },
  {
    id: 59,
    type: "text",
    required: true,
    question: {
      markdown: "### Answer the security question 2. ",
    },
  },
];

export default questions;
