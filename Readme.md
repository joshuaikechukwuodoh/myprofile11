backend/
│
├── config/
│   └── db.js                 # Drizzle + PostgreSQL config
│
├── controllers/
│   ├── adminController.js    # Admin login, actions
│   ├── userController.js     # Register, login, user logic
│   └── otpController.js      # OTP send and verify
│
├── models/
│   ├── drizzle/
│   │   ├── schema.js         # Drizzle pgTable definitions
│   │   └── index.js          # Drizzle client (DB instance)
│   └── queries/
│       ├── userModel.js      # DB access for users
│       ├── adminModel.js     # DB access for admins
│       └── otpModel.js       # DB access for OTPs
│       └── postModel.js      # DB access for posts
│       └── commentModel.js   # DB access for comments
│       └── likeModel.js      # DB access for likes
│       └── dislikeModel.js   # DB access for dislikes
│       └── savedPostModel.js # DB access for saved posts
│
├── routes/
│   ├── userRoutes.js         # /api/users
│   ├── adminRoutes.js        # /api/admin
│   └── otpRoutes.js          # /api/otp
│
├── middlewares/
│   └── auth.js               # JWT-based middleware (optional)
│
├── utils/
│   ├── sendEmail.js          # Nodemailer config
│   ├── generateOtp.js        # OTP generator
│   └── hashPassword.js       # bcrypt hash/compare
│
├── .env                      # DB credentials, email, secret keys
├── app.js                    # Express app setup
├── server.js                 # Main entry point
└── package.json