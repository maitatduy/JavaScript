{
    // TDZ bắt đầu
    console.log(x);  // Lỗi: Cannot access 'x' before initialization

    let x = 10;      // TDZ kết thúc
    console.log(x);  // 10
}