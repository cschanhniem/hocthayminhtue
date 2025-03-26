module.exports = {
  root: {
    id: "root",
    label: "Menu",
    content: "menu",
    children: [
      {
        id: "kinhnkaya",
        label: "Kinh Nikaya",
        content: "nikaya",
        children: [
          {
            id: "tudieuđe",
            label: "Tứ Diệu Đế",
            content: "tudieuđe",
            children: [
              {
                id: "khođe",
                label: "Khổ Đế",
                content: "khođe",
                children: [
                  { id: "sinh", label: "Sinh", content: "sinh" },
                  { id: "lao", label: "Lão", content: "lao" },
                  { id: "benh", label: "Bệnh", content: "benh" },
                  { id: "tu", label: "Tử", content: "tu" }
                ]
              },
              {
                id: "tapđe",
                label: "Tập Đế",
                content: "tapđe",
                children: [
                  { id: "aiduc", label: "Ái dục", content: "aiduc" },
                  { id: "thamai", label: "Tham ái", content: "thamai" }
                ]
              },
              {
                id: "dietđe",
                label: "Diệt Đế",
                content: "dietđe",
                children: [
                  { id: "nietban", label: "Niết-bàn", content: "nietban" }
                ]
              },
              {
                id: "đaođđe",
                label: "Đạo Đế", 
                content: "đaođđe",
                children: [
                  {
                    id: "batchanhđao",
                    label: "Bát Chánh Đạo",
                    content: "batchanhđao",
                    children: [
                      { id: "chanhkien", label: "Chánh kiến", content: "chanhkien" },
                      { id: "chanhtuduy", label: "Chánh tư duy", content: "chanhtuduy" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "tamhoc",
            label: "Tam Học",
            content: "tamhoc",
            children: [
              {
                id: "gioi",
                label: "Giới",
                content: "gioi",
                children: [
                  { id: "khongsat", label: "Không sát sinh", content: "khongsat" },
                  { id: "khongtrom", label: "Không trộm cắp", content: "khongtrom" }
                ]
              },
              {
                id: "đinh",
                label: "Định",
                content: "đinh",
                children: [
                  { id: "sothien", label: "Sơ thiền", content: "sothien" },
                  { id: "nhithien", label: "Nhị thiền", content: "nhithien" }
                ]
              },
              {
                id: "tue",
                label: "Tuệ",
                content: "tue",
                children: [
                  { id: "minhsat", label: "Minh sát", content: "minhsat" },
                  { id: "tritue", label: "Trí tuệ", content: "tritue" }
                ]
              }
            ]
          },
          {
            id: "tuniemxu",
            label: "Tứ Niệm Xứ",
            content: "tuniemxu",
            children: [
              { id: "thanniem", label: "Thân niệm xứ", content: "thanniem" },
              { id: "thọniem", label: "Thọ niệm xứ", content: "thọniem" }
            ]
          }
        ]
      },
      {
        id: "thayminhue",
        label: "Thầy Minh Tuệ",
        content: "thayminhue",
        children: [
          {
            id: "tieu-su",
            label: "Tiểu sử",
            content: "tieu-su"
          },
          {
            id: "phap-thoai",
            label: "Pháp thoại",
            content: "phap-thoai"
          },
          {
            id: "bai-viet",
            label: "Bài viết",
            content: "bai-viet"
          }
        ]
      },
      {
        id: "about",
        label: "Về Web Học Thầy Minh Tuệ",
        content: "about",
        children: [
          {
            id: "gioi-thieu",
            label: "Giới thiệu",
            content: "gioi-thieu"
          },
          {
            id: "huong-dan",
            label: "Hướng dẫn sử dụng",
            content: "huong-dan"
          },
          {
            id: "dong-gop",
            label: "Đóng góp",
            content: "dong-gop"
          }
        ]
      }
    ]
  }
};
