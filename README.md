# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# useReducer

1. Action
2. View
3. Reducer

Nhận vào 2 giá trị: useReducer(func, initState)

1. Thứ 1 là 1 Func
2. Thứ 2 là 1 giá trị khởi tạo ban đầu

Trả về : (1 giá trị và 1 dispatch): dispatch có thể là chuỗi, object

Cái hàm function đó khi khởi tạo: (state, action),
action sẽ so sánh với cái dispatch đc truyền vào view của UI nếu đúng => xử lý điều kiện ... trả về (# 1 giá trị) mà Reducer nhận vào
