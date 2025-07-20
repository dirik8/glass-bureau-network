# Demo Case Testing Guide

## 🔍 Available Demo Cases for Testing

Test the case tracking system with these pre-loaded demo cases:

### **Case 1: Romance Scam (In Progress)**
- **Case Number:** `LGN-2024-DEMO001`
- **Email:** `demo.test@example.com`
- **Status:** Investigating
- **Progress:** 3/6 stages completed
- **Amount:** $45,000

### **Case 2: Cryptocurrency Fraud (Under Review)**
- **Case Number:** `LGN-2024-DEMO002`
- **Email:** `demo.test@example.com`
- **Status:** Reviewing
- **Progress:** 2/6 stages completed
- **Amount:** $78,500

### **Case 3: Binary Options (Resolved)**
- **Case Number:** `LGN-2024-DEMO003`
- **Email:** `demo.test@example.com`
- **Status:** Resolved
- **Progress:** 6/6 stages completed
- **Amount:** $32,000 (Recovered: $28,500)

### **Case 4: Trading Platform Fraud (Investigating)**
- **Case Number:** `LGN-2024-DEMO004`
- **Email:** `demo.test@example.com`
- **Status:** Investigating
- **Progress:** 3/6 stages completed
- **Amount:** $56,700

### **Case 5: Investment Fraud (Recently Submitted)**
- **Case Number:** `LGN-2024-DEMO005`
- **Email:** `demo.test@example.com`
- **Status:** Submitted
- **Progress:** 1/6 stages completed
- **Amount:** $23,400

## 🧪 How to Test Case Tracking

### **Step 1: Access Case Tracker**
1. Navigate to `/case-tracker` on your website
2. You'll see the case lookup form

### **Step 2: Test Case Lookup**
1. **Case Number:** Enter any of the demo case numbers above (e.g., `LGN-2024-DEMO001`)
2. **Email:** Enter `demo.test@example.com`
3. Click **"Lookup Case"**

### **Step 3: Verify Results**
You should see:
- ✅ Case details (type, status, dates)
- ✅ Progress timeline with completion indicators
- ✅ Case notes and investigation details
- ✅ Contact information
- ✅ Professional status indicators with colors

### **Step 4: Test Different Scenarios**
- **Wrong Email:** Try correct case number with wrong email → Should show error
- **Wrong Case Number:** Try invalid case number → Should show "Case not found"
- **Different Cases:** Test all 5 demo cases to see different statuses and progress

## 📧 Email System Testing

### **Current Email Features:**
- ✅ Form submissions trigger emails via Resend API
- ✅ Admin notifications for new submissions
- ✅ Professional email templates

### **Test Email Functionality:**
1. **Contact Form Test:**
   - Fill out contact form on website
   - Check admin email for notification
   - Verify form data is stored in database

2. **Case Submission Test:**
   - Submit a new case via contact form
   - Verify email confirmation sent
   - Check case appears in admin dashboard

## 🛠 Admin Testing

### **Admin Setup:**
1. Navigate to `/admin-setup`
2. Create admin account
3. Check email for welcome message
4. Login at `/admin-login`

### **Admin Dashboard Features:**
- View all demo cases
- Edit case progress
- Manage form submissions
- Update case status

## 🔄 Expected Email Flow

### **For Users:**
1. **Case Submission:** Confirmation email with case number
2. **Status Updates:** Email when case status changes
3. **Case Resolution:** Final email with results

### **For Admins:**
1. **New Submissions:** Immediate notification
2. **Setup Welcome:** Professional onboarding email
3. **Daily Digest:** Summary of new cases

## 🎯 Testing Checklist

- [ ] All 5 demo cases load successfully
- [ ] Email verification works correctly
- [ ] Progress timelines display properly
- [ ] Status colors and icons show correctly
- [ ] Case details are comprehensive
- [ ] Error handling works for invalid inputs
- [ ] Email notifications are received
- [ ] Admin dashboard shows demo cases
- [ ] Mobile responsiveness works

## 🚀 Next Steps

1. **Test all demo cases** using the provided case numbers
2. **Verify email system** by submitting test forms
3. **Check admin functionality** with demo case management
4. **Validate mobile experience** on different devices

---

**Need Help?**
- Check console logs for any errors
- Verify Resend API configuration in Supabase secrets
- Ensure admin account is set up properly
- Contact support if email delivery fails