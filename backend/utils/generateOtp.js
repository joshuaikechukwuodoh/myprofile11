export const generateOTP = (length = 6) => {
    const otpLength = Math.max(4, Math.min(length, 10));
    const buffer = new Uint32Array(otpLength);
    crypto.getRandomValues(buffer);
    
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      otp += (buffer[i] % 10).toString();
    }
    
    return otp;
  };
  
  export const generateOTPWithExpiry = (length = 6, expiresInMinutes = 10) => {
    const otp = generateOTP(length);
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + expiresInMinutes);
    return { otp, expiresAt };
  };
  
  export const generateOTPFallback = (length = 6) => {
    const digits = '0123456789';
    let otp = '';
    
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    
    return otp;
  };