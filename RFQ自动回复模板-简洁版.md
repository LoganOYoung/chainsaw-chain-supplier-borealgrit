# RFQ Auto-Reply Email Template (Simple Version)

## 📧 EmailJS Template Configuration

**Subject:**
```
RFQ Received - We'll Respond Within 24 Hours
```

**To Email:**
```
{{email}}
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

---

## 📝 Email Content (Simple Text)

```
Hi {{contact_name}},

Thank you for your RFQ request for chainsaw chains. We have successfully received your inquiry and will respond within 24 hours during business days.

Your RFQ Summary:
- Company: {{company_name}}
- Contact: {{contact_name}}
- Email: {{email}}
- Phone: {{phone}}
- Location: {{city}}, {{country}}
- Products Requested: {{product_count}} item(s)
- Expected Quantity: {{expected_quantity}}
- Annual Volume: {{annual_volume}}

What happens next:
1. Our sales team will review your requirements (within 24 hours)
2. Our lead engineer will prepare a comprehensive pricing analysis
3. We'll send you a detailed quotation with product specifications, pricing, MOQ, lead times, and packaging options

Why choose Borealgrit:
✓ ANSI B175.1 / CSA Z62.3 Compliant
✓ ISO 9001:2015 Certified
✓ 25-40% Cost Savings vs. Tier-1 Brands
✓ Full Material Traceability
✓ OEM & Private Label Available

Need immediate assistance?
Email: sales@borealgrit.com
Business Hours: Monday - Friday, 8:00 AM - 5:00 PM EST

We appreciate your interest in Borealgrit chainsaw chains and look forward to serving your business needs.

Best regards,
Borealgrit Sales Team
```

---

## 📝 更简洁版本（如果内容太长）

```
Hi {{contact_name}},

Thank you for your RFQ request. We have received your inquiry and will respond within 24 hours during business days.

Your RFQ Summary:
- Company: {{company_name}}
- Products Requested: {{product_count}} item(s)
- Expected Quantity: {{expected_quantity}}

What happens next:
Our sales team will review your requirements and send you a detailed quotation within 24 hours.

Why choose Borealgrit:
✓ ANSI B175.1 / CSA Z62.3 Compliant
✓ ISO 9001:2015 Certified
✓ 25-40% Cost Savings vs. Tier-1 Brands

Need immediate assistance?
Email: sales@borealgrit.com
Business Hours: Monday - Friday, 8:00 AM - 5:00 PM EST

Best regards,
Borealgrit Sales Team
```

---

## 📋 Template Variables

| Variable | Description |
|----------|-------------|
| `{{contact_name}}` | Contact person name |
| `{{company_name}}` | Company name |
| `{{email}}` | Customer email |
| `{{phone}}` | Phone number |
| `{{city}}` | City |
| `{{country}}` | Country |
| `{{product_count}}` | Number of products |
| `{{expected_quantity}}` | Expected first order quantity |
| `{{annual_volume}}` | Estimated annual volume |

---

## ✅ 使用方法

1. 在 EmailJS 中创建 Auto-Reply 模板
2. 复制上面的 "Email Content" 内容
3. 粘贴到 Content 字段
4. 设置 Subject、To Email、From Email 等
5. 保存即可

---

**简洁版本，直接复制使用！** 🎉
