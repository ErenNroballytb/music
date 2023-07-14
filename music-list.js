// Để thêm bài nhạc mình sẽ them vào list sau

//   {
//     name: "Tên bài nhạc",
//     artist: "Nghệ sĩ",
//     img: "Tên ảnh định dạng .jpg trong project",
//     src: "Link đường dẫn file nhạc đinh dạng .mp3"
//   }

let allMusic = [
  {
    name: "Em Ơi Anh Phải Làm Sao Remix 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Em Ơi Anh Phải Làm Sao Remix 8D",
    src: "Em Ơi Anh Phải Làm Sao Remix 8D"
  },
  {
    name: "Quá Khứ Anh Không Thể Quên 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Quá Khứ Anh Không Thể Quên 8D",
    src: "Quá Khứ Anh Không Thể Quên 8D"
  },
  {
    name: "Hoa Cỏ Lau Mix 8D",
    artist: "Phong Max,Eren Mix 8D",
    img: "Hoa Cỏ Lau Mix 8D",
    src: "Hoa Cỏ Lau Mix 8D"
  },
  {
    name: "Cứ Thế Mong Chờ Mix 8D",
    artist: "Nguyễn Đình Vũ,Eren Mix 8D",
    img: "Cứ Thế Mong Chờ Mix 8D",
    src: "Cứ Thế Mong Chờ Mix 8D"
  },
  {
    name: "Hồi Ức Ta Đã Yêu Mix 8D",
    artist: "Linh Hương Luz,Eren Mix 8D",
    img: "Hồi Ức Ta Đã Yêu Mix 8D",
    src: "Hồi Ức Ta Đã Yêu Mix 8D"
  },
  {
    name: "Hạnh Phúc Đó Em Không Có Mix 8D",
    artist: "Hoàng Ly,Eren Mix 8D",
    img: "Hạnh Phúc Đó Em Không Có Mix 8D",
    src: "Hạnh Phúc Đó Em Không Có Mix 8D"
  },
  {
    name: "Thế Thái Mix 8D",
    artist: "Hương Ly,Eren Mix 8D",
    img: "Thế Thái Mix 8D",
    src: "Thế Thái Mix 8D"
  },
  {
    name: "Tướng Quân Mix 8D",
    artist: "Nhật Phong,Eren Mix 8D",
    img: "Tướng Quân Mix 8D",
    src: "Tướng Quân Mix 8D"
  },
   {
    name: "Pháo Hồng Mix 8D",
    artist: "Đạt Long Vinh,Eren Mix 8D",
    img: "Pháo Hồng Mix 8D",
    src: "Pháo Hồng Mix 8D"
  },
  {
    name: "Hoa Cưới Mix 8D",
    artist: "Đạt Long Vinh,Eren Mix 8D",
    img: "Hoa Cưới Mix 8D",
    src: "Hoa Cưới Mix 8D"
  },
  {
    name: "Bên Trên Tầng Lầu Mix 8D",
    artist: "Tăng Duy Tân,Eren Mix 8D",
    img: "Bên Trên Tầng Lầu Mix 8D",
    src: "Bên Trên Tầng Lầu Mix 8D"
  },
  {
    name: "Cứu Vãn Kịp Không Mix 8D",
    artist: "Vương Anh Tú x AnhVu,Eren Mix 8D",
    img: "Cứu Vãn Kịp Không Mix 8D",
    src: "Cứu Vãn Kịp Không Mix 8D"
  },
  {
    name: "Hôm Nay Em Cưới Rồi Mix 8D",
    artist: "Khải Đăng,Eren Mix 8D",
    img: "Hôm Nay Em Cưới Rồi Mix 8D",
    src: "Hôm Nay Em Cưới Rồi Mix 8D"
  },
  {
    name: "Đoạn Tuyệt Nàng Đi Mix 8D",
    artist: "Phát Huy T4,Eren Mix 8D",
    img: "Đoạn Tuyệt Nàng Đi Mix 8D",
    src: "Đoạn Tuyệt Nàng Đi Mix 8D"
  },
  {
    name: "Lỡ Yêu Người Đậm Sâu Mix 8D",
    artist: "Linh Hương LUZ,Eren Mix 8D",
    img: "Lỡ Yêu Người Đậm Sâu Mix 8D",
    src: "Lỡ Yêu Người Đậm Sâu Mix 8D"
  },
  {
    name: "Anh Chỉ Là Người Thay Thế Mix 8D",
    artist: "MR Siro,Eren Mix 8D",
    img: "Anh Chỉ Là Người Thay Thế Mix 8D",
    src: "Anh Chỉ Là Người Thay Thế Mix 8D"
  },
  {
    name: "Hạt Mứa Vương Vấn Mix 8D",
    artist: "Phan Duy Anh,Eren Mix 8D",
    img: "Hạt Mứa Vương Vấn Mix 8D",
    src: "Hạt Mứa Vương Vấn Mix 8D"
  },
  {
    name: "Không Đợi Được Hoa Nở Mix 8D",
    artist: "Phó Mộng Đồng,Eren Mix 8D",
    img: "Không Đợi Được Hoa Nở Mix 8D",
    src: "Không Đợi Được Hoa Nở Mix 8D"
  },
  {
    name: "Hoa Tàn Tình Tan Mix 8D",
    artist: "Giang Jolle,Eren Mix 8D",
    img: "Hoa Tàn Tình Tan Mix 8D",
    src: "Hoa Tàn Tình Tan Mix 8D"
  },
  {
    name: "Bật Tình Yêu Lên Mix 8D",
    artist: "Tăng Duy Tân x Hòa Minzy,Eren Mix 8D",
    img: "Bật Tình Yêu Lên Mix 8D",
    src: "Bật Tình Yêu Lên Mix 8D"
  },
  {
    name: "Biết Tìm Đâu Mix 8D",
    artist: "Tiến Tới,Eren Mix 8D",
    img: "Biết Tìm Đâu Mix 8D",
    src: "Biết Tìm Đâu Mix 8D"
  },
  {
    name: "Buồn Của Anh Lofi Mix 8D",
    artist: "Đạt G,Eren Mix 8D",
    img: "Buồn Của Anh Lofi Mix 8D",
    src: "Buồn Của Anh Lofi Mix 8D"
  },
  {
    name: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D",
    artist: "Trương Khải Minh,Eren Mix 8D",
    img: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D",
    src: "Yêu Thật Khó Xóa Thật Đau Lofi Mix 8D"
  },
  {
    name: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D",
    artist: "Dương Minh Tuấn,Eren Mix 8D",
    img: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D",
    src: "Quá Khứ Anh Không Thể Nào Quên Lofi Mix 8D"
  },
];