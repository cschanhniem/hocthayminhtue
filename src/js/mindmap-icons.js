// Mindmap Icons JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Define icon mappings for different concept types
    const iconMappings = {
        // Core teachings
        'Tứ Diệu Đế': 'fa-circle-nodes',
        'Bát Chánh Đạo': 'fa-route',
        'Tam Học': 'fa-layer-group',
        'Thập Nhị Nhân Duyên': 'fa-link-horizontal',
        
        // Practice methods
        'Tứ Niệm Xứ': 'fa-brain',
        'Thất Giác Chi': 'fa-seedling',
        'Tứ Chánh Cần': 'fa-person-running',
        'Tứ Như Ý Túc': 'fa-wand-magic-sparkles',
        
        // Basic practice
        'Tam Tự Tịnh Giới': 'fa-shield',
        'Ngũ Căn - Ngũ Lực': 'fa-hand-fist',
        'Lục Hòa': 'fa-handshake',
        'Tứ Thánh Chủng': 'fa-gem',
        'Tứ Y': 'fa-compass',
        'Năm Triền Cái': 'fa-ban',
        
        // Attainments
        'Tứ Thánh Quả': 'fa-trophy',
        'Thập Địa': 'fa-mountain',
        'Tứ Vệ Đà': 'fa-book',
        'Thất Phật Thông Giới': 'fa-scroll',
        
        // Overview
        'Tam Bảo': 'fa-gem',
        'Niết Bàn': 'fa-moon',
        'Nhị Đế': 'fa-yin-yang',
        'Tam Luân': 'fa-circle-notch'
    };
    
    // Add icons to concept cards
    const conceptHeadings = document.querySelectorAll('.concept-card h3');
    
    conceptHeadings.forEach(heading => {
        const headingText = heading.textContent.split('·')[0].trim();
        
        // Find matching icon
        for (const [concept, icon] of Object.entries(iconMappings)) {
            if (headingText.includes(concept)) {
                // Create icon element
                const iconElement = document.createElement('i');
                iconElement.className = `fa-solid ${icon} concept-icon`;
                
                // Insert icon before heading text
                heading.insertBefore(iconElement, heading.firstChild);
                
                // Add spacing after icon
                const space = document.createTextNode(' ');
                heading.insertBefore(space, iconElement.nextSibling);
                
                break;
            }
        }
    });
});
