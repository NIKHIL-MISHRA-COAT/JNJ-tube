# 🎬 JNJ Tube – Video Streaming Platform

> A full-stack YouTube-like video streaming app built with scalability and premium features in mind. Supports video uploads, background processing, and monetization.

---

## 📸 Preview

### 🔐 Login  
<img width="1914" height="916" alt="Login Page" src="https://github.com/user-attachments/assets/194ddb23-fcf6-4130-b7b2-c06fa36626fc" />

### 🏠 Home  
<img width="1895" height="919" alt="Home Page" src="https://github.com/user-attachments/assets/d4e9a6b4-0c63-4c68-a22a-128c22eb1e43" />

### ⬆️ Upload  
<img width="1919" height="913" alt="Upload Page" src="https://github.com/user-attachments/assets/b44b1090-20b8-4851-a0dd-3c4e97e3ddff" />

### 🎞️ Free Playlist  
<img width="940" height="529" alt="Free Playlist" src="https://github.com/user-attachments/assets/bce957b3-5570-4934-93b1-0e46f0963370" />

### 💎 Premium Playlist  
<img width="940" height="529" alt="Paid Playlist" src="https://github.com/user-attachments/assets/951bda90-c9d8-4253-88f9-ef6349b268a8" />

### 💳 Payment  
<img width="940" height="529" alt="Payment Page" src="https://github.com/user-attachments/assets/56007fb3-7738-4d7f-b07c-d5a05771c3ad" />

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Video.js  
- **Backend:** Node.js (TypeScript), Express.js, MongoDB  
- **Media Encoding:** FFmpeg  
- **Job Queue:** Bull + Redis  
- **Payments:** Razorpay  
- **Others:** Multer, Mongoose, dotenv

---

## ✨ Key Features

- 🎥 Upload & stream videos of multiple formats  
- ⚙️ Auto video encoding using FFmpeg  
- 🧵 Job queues using Bull for background processing  
- 🧠 Thumbnail generation & metadata extraction  
- 💸 Razorpay payment integration for premium content  
- 📺 Video.js for responsive playback  
- 👤 User authentication & content access control  

---

## 🔁 Video Processing Flow

```mermaid
graph TD
A[User Uploads Video] --> B[Stored Temporarily]
B --> C[Queued using Bull]
C --> D[Processed by FFmpeg Worker]
D --> E[Thumbnail + Encoded Formats Saved]
E --> F[Database Updated]
F --> G[Streamable via Video.js]
