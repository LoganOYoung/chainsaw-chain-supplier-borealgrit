# RFQ Auto-Reply Email Template (English)

## 📧 Template Configuration

**Subject:**
```
RFQ Received - We'll Respond Within 24 Hours | Borealgrit
```

**From Name:**
```
Borealgrit Sales Team
```

**From Email:**
```
sales@borealgrit.com
```

**Reply To:**
```
sales@borealgrit.com
```

**To Email:**
```
{{email}}
```

---

## 📝 Email Content (Plain Text Version)

```
Dear {{contact_name}},

Thank you for your RFQ request for chainsaw chains. We have successfully received your inquiry and will respond within 24 hours during business days.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR RFQ SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company: {{company_name}}
Contact: {{contact_name}}
Email: {{email}}
Phone: {{phone}}
Location: {{city}}, {{country}}

Products Requested: {{product_count}} item(s)
Expected First Order Quantity: {{expected_quantity}}
Estimated Annual Volume: {{annual_volume}}
Target Market: {{target_market}}
Incoterms: {{incoterms}}
Currency: {{currency}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT HAPPENS NEXT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Our sales team will review your requirements (within 24 hours)
2. Our lead engineer will prepare a comprehensive pricing analysis
3. We'll send you a detailed quotation with:
   • Product specifications and pricing
   • MOQ (Minimum Order Quantity) requirements
   • Lead times and shipping terms
   • Packaging and labeling options
   • Sample availability (if requested)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY CHOOSE BOREALGRIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ ANSI B175.1 / CSA Z62.3 Safety Standards Compliant
✓ ISO 9001:2015 Certified Quality Management System
✓ 25-40% Cost Savings vs. Tier-1 Brands
✓ Full Material Traceability from Raw Steel to Finished Product
✓ OEM & Private Label Custom Manufacturing Available
✓ Application-Specific Engineering (Cold Climate, Battery Saws, Professional Logging)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEED IMMEDIATE ASSISTANCE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you have urgent questions or need immediate support, please contact us:

Email: sales@borealgrit.com
Phone: [Your Phone Number]
Business Hours: Monday - Friday, 8:00 AM - 5:00 PM EST

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We appreciate your interest in Borealgrit chainsaw chains and look forward to serving your business needs.

Best regards,
Borealgrit Sales Team

---
Borealgrit | Professional Chainsaw Chain Manufacturer
ISO 9001 Certified | ANSI/CSA Compliant | B2B Wholesale
Website: https://borealgrit.com
```

---

## 📝 Email Content (HTML Version - For EmailJS)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #1A3922;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 5px 5px 0 0;
      margin: -30px -30px 20px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .section {
      margin: 25px 0;
      padding: 15px;
      background-color: #f9f9f9;
      border-left: 4px solid #1A3922;
    }
    .section h3 {
      margin-top: 0;
      color: #1A3922;
      font-size: 18px;
    }
    .highlight {
      color: #1A3922;
      font-weight: bold;
    }
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 5px 0;
      padding-left: 25px;
      position: relative;
    }
    .checklist li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #1A3922;
      font-weight: bold;
    }
    .footer {
      background-color: #f5f5f5;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #666;
      margin: 20px -30px -30px -30px;
      border-radius: 0 0 5px 5px;
    }
    .contact-info {
      background-color: #fff3cd;
      padding: 15px;
      border-left: 4px solid #ffc107;
      margin: 20px 0;
    }
    .divider {
      border-top: 2px solid #1A3922;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>RFQ Received - Thank You!</h1>
    </div>
    
    <p>Dear {{contact_name}},</p>
    
    <p>Thank you for your RFQ request for chainsaw chains. We have successfully received your inquiry and will respond within <strong class="highlight">24 hours</strong> during business days.</p>
    
    <div class="section">
      <h3>Your RFQ Summary</h3>
      <p><strong>Company:</strong> {{company_name}}<br>
      <strong>Contact:</strong> {{contact_name}}<br>
      <strong>Email:</strong> {{email}}<br>
      <strong>Phone:</strong> {{phone}}<br>
      <strong>Location:</strong> {{city}}, {{country}}</p>
      
      <p><strong>Products Requested:</strong> {{product_count}} item(s)<br>
      <strong>Expected First Order Quantity:</strong> {{expected_quantity}}<br>
      <strong>Estimated Annual Volume:</strong> {{annual_volume}}<br>
      <strong>Target Market:</strong> {{target_market}}<br>
      <strong>Incoterms:</strong> {{incoterms}}<br>
      <strong>Currency:</strong> {{currency}}</p>
    </div>

    <div class="section">
      <h3>What Happens Next?</h3>
      <ol>
        <li>Our sales team will review your requirements (within 24 hours)</li>
        <li>Our lead engineer will prepare a comprehensive pricing analysis</li>
        <li>We'll send you a detailed quotation with:
          <ul>
            <li>Product specifications and pricing</li>
            <li>MOQ (Minimum Order Quantity) requirements</li>
            <li>Lead times and shipping terms</li>
            <li>Packaging and labeling options</li>
            <li>Sample availability (if requested)</li>
          </ul>
        </li>
      </ol>
    </div>

    <div class="section">
      <h3>Why Choose Borealgrit?</h3>
      <ul class="checklist">
        <li>ANSI B175.1 / CSA Z62.3 Safety Standards Compliant</li>
        <li>ISO 9001:2015 Certified Quality Management System</li>
        <li>25-40% Cost Savings vs. Tier-1 Brands</li>
        <li>Full Material Traceability from Raw Steel to Finished Product</li>
        <li>OEM & Private Label Custom Manufacturing Available</li>
        <li>Application-Specific Engineering (Cold Climate, Battery Saws, Professional Logging)</li>
      </ul>
    </div>

    <div class="contact-info">
      <h3 style="margin-top: 0;">Need Immediate Assistance?</h3>
      <p>If you have urgent questions or need immediate support, please contact us:</p>
      <p><strong>Email:</strong> sales@borealgrit.com<br>
      <strong>Phone:</strong> [Your Phone Number]<br>
      <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST</p>
    </div>

    <div class="divider"></div>

    <p>We appreciate your interest in Borealgrit chainsaw chains and look forward to serving your business needs.</p>
    
    <p>Best regards,<br>
    <strong>Borealgrit Sales Team</strong></p>
  </div>
  
  <div class="footer">
    <p><strong>Borealgrit</strong> | Professional Chainsaw Chain Manufacturer<br>
    ISO 9001 Certified | ANSI/CSA Compliant | B2B Wholesale<br>
    Website: <a href="https://borealgrit.com" style="color: #1A3922;">https://borealgrit.com</a></p>
  </div>
</body>
</html>
```

---

## 📝 Email Content (Simplified Version - For Quick Copy)

```
Dear {{contact_name}},

Thank you for your RFQ request for chainsaw chains. We have successfully received your inquiry and will respond within 24 hours during business days.

YOUR RFQ SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company: {{company_name}}
Contact: {{contact_name}}
Email: {{email}}
Phone: {{phone}}
Location: {{city}}, {{country}}

Products Requested: {{product_count}} item(s)
Expected First Order Quantity: {{expected_quantity}}
Estimated Annual Volume: {{annual_volume}}
Target Market: {{target_market}}

WHAT HAPPENS NEXT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Our sales team will review your requirements (within 24 hours)
2. Our lead engineer will prepare a comprehensive pricing analysis
3. We'll send you a detailed quotation with product specifications, pricing, MOQ, lead times, and packaging options

WHY CHOOSE BOREALGRIT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ ANSI B175.1 / CSA Z62.3 Compliant
✓ ISO 9001:2015 Certified
✓ 25-40% Cost Savings vs. Tier-1 Brands
✓ Full Material Traceability
✓ OEM & Private Label Available
✓ Application-Specific Engineering

NEED IMMEDIATE ASSISTANCE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email: sales@borealgrit.com
Phone: [Your Phone Number]
Business Hours: Monday - Friday, 8:00 AM - 5:00 PM EST

We appreciate your interest in Borealgrit chainsaw chains and look forward to serving your business needs.

Best regards,
Borealgrit Sales Team

---
Borealgrit | Professional Chainsaw Chain Manufacturer
ISO 9001 Certified | ANSI/CSA Compliant | B2B Wholesale
Website: https://borealgrit.com
```

---

## 📋 Template Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{contact_name}}` | Contact person name | John Smith |
| `{{company_name}}` | Company name | ABC Distributors |
| `{{email}}` | Customer email | john@example.com |
| `{{phone}}` | Phone number | +1 (555) 123-4567 |
| `{{city}}` | City | New York |
| `{{country}}` | Country | USA |
| `{{product_count}}` | Number of products | 3 |
| `{{expected_quantity}}` | Expected first order quantity | 1000 units |
| `{{annual_volume}}` | Estimated annual volume | 10000 units/year |
| `{{target_market}}` | Target market | USA / Canada |
| `{{incoterms}}` | Trade terms | FOB China |
| `{{currency}}` | Currency | USD |

---

## 🎯 Usage Instructions

### For EmailJS Template:

1. Copy the **Plain Text Version** or **HTML Version**
2. Paste into EmailJS template editor
3. Replace variables with `{{variable_name}}` format
4. Set To Email as `{{email}}`
5. Save template

### For Zoho Mail Auto-Reply:

1. Copy the **Simplified Version**
2. Paste into Zoho Mail auto-reply settings
3. Note: Variables won't work in Zoho Mail (use static text)

---

**模板已准备好！可以直接复制使用。** 🎉
