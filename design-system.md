# Design System cho Web Phật Giáo Nikaya

## Tổng quan Thiết kế

Kết hợp phong cách Glassmorphism và hiệu ứng Aurora theo xu hướng 2024, tạo ra một trải nghiệm vừa hiện đại vừa tôn trọng bản chất thanh tịnh của triết lý Phật giáo.

## Bảng màu

### Màu chính (Primary)
- **Nâu đất hiện đại**: #7d5a4f
- **Nâu nhạt**: #9b735c
- **Màu đất**: #c29e80
- **Kem nhạt**: #f3e9dc

### Màu Aurora
- **Aurora Xanh nhạt**: #58B2DC (Amairo - màu trời)
- **Aurora Tím**: #A59ACA (Fuji - màu tử đằng)
- **Aurora Hồng**: #F5B2AC (Sakura - màu hoa anh đào)
- **Aurora Xanh lá**: #A8D8B9 (Wakatake - màu trúc non)

### Màu nền và đệm
- **Nền sáng**: rgba(255, 255, 255, 0.7)
- **Nền trong suốt**: rgba(255, 255, 255, 0.2)
- **Đổ bóng**: rgba(125, 90, 79, 0.1)

## Typography

### Font chữ
- **Tiêu đề**: **Montserrat**, sans-serif
- **Nội dung**: **Inter**, sans-serif
- **Trích dẫn kinh điển**: **EB Garamond**, serif

### Kích thước
- **H1**: 2.5rem / 40px (trang chủ, tiêu đề chính)
- **H2**: 2rem / 32px (tiêu đề khái niệm)
- **H3**: 1.5rem / 24px (tiêu đề phụ)
- **Body**: 1rem / 16px (văn bản chính)
- **Small**: 0.875rem / 14px (chú thích, metadata)
- **Quote**: 1.125rem / 18px (trích dẫn kinh điển)

## Elements

### Glassmorphism Cards
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(125, 90, 79, 0.1);
  padding: 24px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(125, 90, 79, 0.15);
}
```

### Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, #7d5a4f 0%, #9b735c 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(125, 90, 79, 0.3);
  color: #7d5a4f;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
}
```

### Navigation
```css
.nav-item {
  position: relative;
  padding: 8px 16px;
  color: #7d5a4f;
  text-decoration: none;
  font-weight: 500;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #58B2DC, #A59ACA);
  transition: width 0.3s ease;
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 80%;
}
```

## Aurora Effects

### Background Gradient
```css
.aurora-bg {
  background: linear-gradient(135deg, 
    rgba(243, 233, 220, 0.8) 0%, 
    rgba(168, 216, 185, 0.2) 25%, 
    rgba(165, 154, 202, 0.2) 50%, 
    rgba(245, 178, 172, 0.2) 75%, 
    rgba(243, 233, 220, 0.8) 100%
  );
  background-size: 400% 400%;
  animation: aurora 15s ease infinite;
}

@keyframes aurora {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
```

### Accent Elements
```css
.aurora-accent {
  position: relative;
  overflow: hidden;
}

.aurora-accent::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    rgba(88, 178, 220, 0.3) 0%,
    rgba(165, 154, 202, 0.3) 25%,
    rgba(245, 178, 172, 0.3) 50%,
    rgba(168, 216, 185, 0.3) 75%,
    rgba(88, 178, 220, 0.3) 100%
  );
  background-size: 400% 400%;
  animation: aurora 10s linear infinite;
  z-index: -1;
}
```

## Tree Component

### Tree Container
```css
.tree-container {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 24px;
  box-shadow: 0 4px 30px rgba(125, 90, 79, 0.1);
}
```

### Tree Nodes
```css
.tree-node {
  margin: 12px 0;
  transition: all 0.3s ease;
}

.node-content {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.node-content:hover {
  background: rgba(194, 158, 128, 0.1);
}

.node-label {
  margin-left: 8px;
  color: #7d5a4f;
  text-decoration: none;
  font-weight: 500;
}

.tree-node.active > .node-content {
  background: rgba(125, 90, 79, 0.1);
}

.tree-children {
  margin-left: 24px;
  padding-left: 16px;
  border-left: 1px solid rgba(125, 90, 79, 0.2);
}
```

### Toggle Button
```css
.toggle {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(125, 90, 79, 0.2);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle:hover {
  background: rgba(194, 158, 128, 0.2);
}
```

## Concept Cards

```css
.concept-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 30px rgba(125, 90, 79, 0.1);
  transition: all 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(125, 90, 79, 0.15);
}

.concept-card h3 {
  color: #7d5a4f;
  margin-bottom: 16px;
  position: relative;
}

.concept-card h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #7d5a4f, #c29e80);
}
```

## Quote Blocks

```css
.buddha-quote {
  background: rgba(243, 233, 220, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border-left: 4px solid #7d5a4f;
  padding: 24px;
  margin: 32px 0;
  font-family: 'EB Garamond', serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #5D4037;
  position: relative;
}

.buddha-quote::before {
  content: '"';
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 4rem;
  color: rgba(125, 90, 79, 0.1);
  font-family: 'EB Garamond', serif;
}

.quote-source {
  display: block;
  text-align: right;
  margin-top: 16px;
  font-style: italic;
  font-size: 0.875rem;
}
```

## Responsive Design

### Mobile Breakpoint
```css
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  .tree-container {
    border-radius: 0;
    border-left: none;
    border-right: none;
    padding: 16px;
  }
  
  .concept-card {
    padding: 16px;
  }
}
```

## Animation Guidelines

1. **Subtle Transitions**
   - Thời gian: 0.3-0.5s
   - Easing: ease, ease-in-out
   - Hiệu ứng: opacity, transform (translateY, scale)

2. **Aurora Effects**
   - Thời gian: 10-15s
   - Easing: linear, ease
   - Hiệu ứng: background-position, gradient rotation

3. **Hover States**
   - Scale: 1.02-1.05
   - Shadow: tăng cường
   - Brightness: tăng nhẹ (5-10%)

## Icon System

Sử dụng bộ icon từ Phosphor Icons hoặc Lucide - thiết kế tối giản, phù hợp với phong cách glassmorphism.

## Ứng dụng thực tế

### Header với Aurora Effect
```html
<header class="aurora-bg">
  <div class="container">
    <div class="logo">
      <!-- SVG logo của bạn -->
    </div>
    <nav class="glass-nav">
      <a href="/" class="nav-item active">Trang chủ</a>
      <a href="/concepts" class="nav-item">Khái niệm</a>
      <a href="/about" class="nav-item">Giới thiệu</a>
    </nav>
  </div>
</header>
```

### Trang Concept với Tree
```html
<div class="container main-content">
  <aside class="tree-container">
    <!-- Tree component -->
  </aside>
  
  <main class="concept-content">
    <div class="concept-card">
      <h2>Tứ Diệu Đế</h2>
      <div class="concept-body">
        <!-- Nội dung -->
      </div>
      
      <blockquote class="buddha-quote">
        Này các Tỳ-kheo, đây là Thánh đế về Khổ: Sinh là khổ, già là khổ...
        <span class="quote-source">Kinh Chuyển Pháp Luân</span>
      </blockquote>
    </div>
  </main>
</div>
```

Design system này tạo ra một giao diện hiện đại, thanh lịch nhưng vẫn tôn trọng và phản ánh được tinh thần Phật giáo, đồng thời thu hút người dùng trẻ bằng các xu hướng thiết kế 2024 như glassmorphism và hiệu ứng Aurora.
