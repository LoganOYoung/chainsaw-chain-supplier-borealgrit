# Resources & Downloads 页面策略规划

## 📋 执行摘要

本文档规划了Resources页面的资源分类、下载策略和联系方式，旨在平衡用户体验和潜在客户获取。

---

## 1. 资源分类策略

### 🟢 **直接下载（Instant Download）**
**原则：** 标准化、通用、不包含敏感商业信息

#### 1.1 产品目录
- ✅ **Product Catalog CSV** - 已实现直接下载
  - 理由：标准化产品数据，无定价信息，便于B2B客户导入系统
  - 格式：CSV（Excel兼容）
  - 位置：`/api/download-catalog`

- ⚠️ **Product Catalog PDF** - 建议改为"需要联系"
  - 理由：PDF通常包含定价、MOQ等商业敏感信息
  - 建议：改为"Request PDF Catalog"（获取潜在客户信息）

- ✅ **Quick Reference Guide** - 建议改为直接下载
  - 理由：单页快速参考，通用信息，无敏感内容
  - 格式：PDF
  - 建议：创建API路由生成PDF，或提供静态PDF文件

#### 1.2 技术数据表（Technical Datasheets）
- ✅ **所有Datasheets** - 建议改为直接下载
  - FC-325 Datasheet
  - SC-38 Datasheet  
  - LP-325 Datasheet
  - 理由：技术规格是标准化的，不包含定价或商业条款
  - 格式：PDF
  - 建议：创建静态PDF文件或API路由生成

#### 1.3 适配指南（Fitment Guides）
- ✅ **Fitment Reference Guide** - 建议改为直接下载
  - 理由：通用兼容性信息，帮助客户选择产品
  - 格式：PDF
  - 建议：创建静态PDF文件

- ✅ **Pitch & Gauge Guide** - 建议改为直接下载
  - 理由：教育性内容，帮助客户理解规格
  - 格式：PDF
  - 建议：创建静态PDF文件或在线页面

#### 1.4 指南和FAQ
- ✅ **Buyer's Guide** - 建议改为直接下载
  - 理由：教育性内容，建立专业形象
  - 格式：PDF
  - 建议：创建静态PDF文件

- ✅ **FAQ Document** - 建议改为直接下载
  - 理由：常见问题解答，减少重复咨询
  - 格式：PDF
  - 建议：创建静态PDF文件

---

### 🟡 **需要联系（Contact Required）**
**原则：** 包含商业敏感信息、需要个性化、需要授权

#### 2.1 商业信息文档
- 🔒 **Product Catalog PDF (完整版)**
  - 理由：可能包含定价、MOQ、批量折扣等商业信息
  - 联系方式：联系表单（预填"Product Catalog PDF"）
  - 价值：获取潜在客户信息，了解客户需求

- 🔒 **Packaging Specifications**
  - 理由：包含包装成本、定制选项等商业信息
  - 联系方式：联系表单（预填"Packaging Specs"）
  - 价值：识别有OEM需求的客户

- 🔒 **Labeling Standards**
  - 理由：OEM定制相关，需要了解客户需求
  - 联系方式：联系表单（预填"Labeling Standards"）
  - 价值：识别OEM/私有标签客户

#### 2.2 订购和物流信息
- 🔒 **Ordering Guide**
  - 理由：包含MOQ、付款条件、交期等商业条款
  - 联系方式：联系表单（预填"Ordering Guide"）
  - 价值：识别有采购意向的客户

- 🔒 **Shipping & Logistics**
  - 理由：包含港口、运输成本、Incoterms等商业信息
  - 联系方式：联系表单（预填"Shipping Info"）
  - 价值：了解客户地理位置和物流需求

- 🔒 **Part Number Reference**
  - 理由：可能需要解释，了解客户如何使用
  - 联系方式：联系表单（预填"Part Number Guide"）
  - 价值：识别技术型客户

#### 2.3 认证和质量文档
- 🔒 **ISO Certificate**
  - 理由：需要验证身份，防止滥用
  - 联系方式：联系表单（预填"ISO Certificate"）
  - 价值：识别有质量要求的客户

- 🔒 **ANSI Compliance Statement**
  - 理由：可能需要解释，了解客户合规需求
  - 联系方式：联系表单（预填"ANSI Compliance"）
  - 价值：识别合规要求高的客户

- 🔒 **Quality Control Process**
  - 理由：详细的质量流程，需要了解客户需求
  - 联系方式：联系表单（预填"QC Process"）
  - 价值：识别对质量有高要求的客户

#### 2.4 营销和品牌资产
- 🔒 **Product Images**
  - 理由：需要授权，了解用途
  - 联系方式：联系表单（预填"Product Images"）
  - 价值：识别分销商/零售商客户

- 🔒 **Logo & Brand Assets**
  - 理由：需要授权，OEM合作伙伴专用
  - 联系方式：联系表单（预填"Brand Assets"）
  - 价值：识别OEM合作伙伴

---

## 2. 联系方式策略

### 2.1 联系表单（推荐 - 主要方式）
**优势：**
- 结构化数据，便于CRM集成
- 可以预填资源请求信息
- 便于跟踪和跟进
- 用户体验好（无需切换应用）

**实现方式：**
```typescript
// 在resources页面，点击"Request"时：
<Link 
  href="/contact?resource=product-catalog-pdf&type=catalog"
  className="..."
>
  Request PDF Catalog
</Link>

// 在contact页面，读取URL参数，预填表单：
const searchParams = useSearchParams()
const resourceType = searchParams.get('resource') // 'product-catalog-pdf'
const resourceCategory = searchParams.get('type') // 'catalog'
```

**表单字段建议：**
- 必填：姓名、公司、邮箱、电话
- 必填：资源请求（预填，可编辑）
- 可选：公司类型（分销商/OEM/零售商/其他）
- 可选：预计订单量
- 可选：备注/特殊需求

### 2.2 邮件链接（备选方式）
**适用场景：**
- 紧急需求
- 复杂技术问题
- 已有邮件往来

**实现方式：**
```html
<a href="mailto:sales@borealgrit.com?subject=Resource Request: Product Catalog PDF&body=Please send me the Product Catalog PDF.">
  Email Us
</a>
```

**邮件模板建议：**
- 主题：`Resource Request: [Resource Name]`
- 正文：预填资源名称和基本信息

### 2.3 电话（紧急/复杂需求）
**适用场景：**
- 紧急订单
- 复杂技术咨询
- 大客户支持

**展示方式：**
- 在资源表格中显示："Call for urgent requests"
- 在联系表单中提供："Need immediate assistance? Call us"

---

## 3. 用户体验优化

### 3.1 资源请求流程
```
用户点击"Request" 
  ↓
跳转到联系表单（预填资源信息）
  ↓
用户填写联系信息（姓名、公司、邮箱等）
  ↓
提交表单
  ↓
自动发送确认邮件给用户
  ↓
发送通知给销售团队（包含资源请求信息）
  ↓
销售团队发送资源文件（24小时内）
```

### 3.2 页面设计建议

#### 资源表格优化
```html
<!-- 直接下载 -->
<td>
  <a href="/api/download-catalog" download>
    <Download /> Download CSV
  </a>
</td>

<!-- 需要联系 -->
<td>
  <Link href="/contact?resource=product-catalog-pdf">
    <Mail /> Request PDF
  </Link>
  <span className="text-xs text-gray-500">(24h response)</span>
</td>
```

#### 视觉区分
- **直接下载**：绿色下载图标 + "Download"按钮
- **需要联系**：蓝色邮件图标 + "Request"按钮 + 响应时间提示

#### 信息提示
- 在需要联系的资源旁添加：
  - "We'll send this within 24 hours"
  - "Includes pricing and MOQ information"
  - "OEM partners only"

---

## 4. 实施优先级

### 🔴 高优先级（立即实施）
1. ✅ Product Catalog CSV - 已实现直接下载
2. ⚠️ 修改所有Datasheets为直接下载（创建PDF文件）
3. ⚠️ 修改Fitment Guides为直接下载（创建PDF文件）
4. ⚠️ 修改Buyer's Guide和FAQ为直接下载（创建PDF文件）
5. ⚠️ 实现联系表单预填功能（URL参数）

### 🟡 中优先级（近期实施）
1. 创建Quick Reference Guide PDF（直接下载）
2. 优化联系表单，添加资源请求字段
3. 添加资源请求确认邮件模板
4. 添加销售团队通知系统

### 🟢 低优先级（未来考虑）
1. 资源下载统计（分析哪些资源最受欢迎）
2. 资源请求自动化（某些资源可以自动发送）
3. 客户资源库（登录后查看已请求的资源）

---

## 5. 资源文件管理

### 5.1 文件存储位置
```
/public/
  /resources/
    /pdfs/
      /datasheets/
        - fc-325-datasheet.pdf
        - sc-38-datasheet.pdf
        - lp-325-datasheet.pdf
      /guides/
        - fitment-reference-guide.pdf
        - pitch-gauge-guide.pdf
        - buyers-guide.pdf
        - faq-document.pdf
      /catalogs/
        - quick-reference-guide.pdf
        - product-catalog-2025.pdf (需要联系)
```

### 5.2 文件命名规范
- 使用小写字母和连字符
- 包含版本号或日期（如：`product-catalog-2025.pdf`）
- 描述性文件名（如：`fc-325-datasheet.pdf`）

### 5.3 文件更新策略
- 定期检查文件版本
- 更新时保持URL不变（使用版本号区分）
- 通知已下载的用户（通过邮件）

---

## 6. 潜在客户获取策略

### 6.1 资源请求的价值
- **获取联系信息**：姓名、公司、邮箱、电话
- **了解客户类型**：分销商、OEM、零售商
- **识别采购意向**：预计订单量
- **建立关系**：首次接触点

### 6.2 跟进策略
1. **自动确认邮件**（立即）
   - 感谢请求
   - 说明响应时间（24小时）
   - 提供销售联系方式

2. **资源发送邮件**（24小时内）
   - 附上请求的资源
   - 提供额外帮助
   - 邀请进一步沟通

3. **后续跟进**（3-7天后）
   - 询问是否有问题
   - 提供技术支持
   - 邀请询价

---

## 7. 总结和建议

### 核心原则
1. **降低摩擦**：通用资源直接下载
2. **获取线索**：商业敏感资源需要联系
3. **用户体验**：清晰的说明和快速的响应
4. **商业价值**：平衡用户体验和潜在客户获取

### 推荐实施顺序
1. 先实现所有"直接下载"资源（提升用户体验）
2. 优化联系表单，添加预填功能（改善需要联系的资源体验）
3. 建立自动化邮件系统（提高响应效率）
4. 分析数据，优化策略（持续改进）

### 关键指标
- 直接下载资源的下载量
- 资源请求的转化率（请求/查看）
- 资源请求到询价的转化率
- 平均响应时间

---

## 8. 具体资源分类表

| 资源名称 | 下载方式 | 理由 | 联系表单预填值 |
|---------|---------|------|---------------|
| Product Catalog CSV | ✅ 直接下载 | 标准化数据，无定价 | - |
| Product Catalog PDF | 🔒 需要联系 | 包含定价和MOQ | `resource=product-catalog-pdf&type=catalog` |
| Quick Reference Guide | ✅ 直接下载 | 通用参考，无敏感信息 | - |
| FC-325 Datasheet | ✅ 直接下载 | 技术规格，标准化 | - |
| SC-38 Datasheet | ✅ 直接下载 | 技术规格，标准化 | - |
| LP-325 Datasheet | ✅ 直接下载 | 技术规格，标准化 | - |
| Fitment Reference Guide | ✅ 直接下载 | 通用兼容性信息 | - |
| Pitch & Gauge Guide | ✅ 直接下载 | 教育性内容 | - |
| Buyer's Guide | ✅ 直接下载 | 教育性内容 | - |
| FAQ Document | ✅ 直接下载 | 常见问题，减少咨询 | - |
| Packaging Specifications | 🔒 需要联系 | 包含成本信息 | `resource=packaging-specs&type=packaging` |
| Labeling Standards | 🔒 需要联系 | OEM定制相关 | `resource=labeling-standards&type=packaging` |
| Ordering Guide | 🔒 需要联系 | 包含MOQ和付款条件 | `resource=ordering-guide&type=ordering` |
| Shipping & Logistics | 🔒 需要联系 | 包含运输成本 | `resource=shipping-logistics&type=ordering` |
| Part Number Reference | 🔒 需要联系 | 可能需要解释 | `resource=part-number-reference&type=ordering` |
| ISO Certificate | 🔒 需要联系 | 需要验证身份 | `resource=iso-certificate&type=certification` |
| ANSI Compliance Statement | 🔒 需要联系 | 可能需要解释 | `resource=ansi-compliance&type=certification` |
| Quality Control Process | 🔒 需要联系 | 详细流程，需要了解需求 | `resource=qc-process&type=certification` |
| Product Images | 🔒 需要联系 | 需要授权 | `resource=product-images&type=media` |
| Logo & Brand Assets | 🔒 需要联系 | OEM合作伙伴专用 | `resource=brand-assets&type=media` |

---

**文档版本：** 1.0  
**最后更新：** 2025-01-28  
**下一步：** 实施直接下载资源，优化联系表单
