# 📋 Task Manager Application

A modern, high-performance Task Management Application built with **Angular 18**. This project demonstrates the power of the new Angular features, including **Signals** for reactivity and a **Zoneless** architecture, providing a seamless and incredibly fast user experience.

## ✨ Key Features

* **User Authentication:** Secure Signup and Login functionality with client-side validation.
* **Multi-Tenancy:** Each user has their own dedicated workspace and tasks.
* **Full CRUD Operations:** Create, Read, Update (Inline Editing), and Delete tasks easily.
* **Smart Filtering:** Instantly filter tasks by status (All, Done, Not Done) using Angular Computed Signals.
* **Polished UI/UX:** Clean and responsive interface using Bootstrap, enhanced with **SweetAlert2** for interactive, beautiful popups and confirmations.
* **Mock Backend:** Fully functional mock API using `json-server` to handle asynchronous operations with RxJS and HttpClient.

## 📸 Screenshots

*(Replace the links below with your actual image paths once you upload them to GitHub)*

### 1. Login & Signup Pages
<img width="1482" height="596" alt="Screenshot 2026-04-23 211231" src="https://github.com/user-attachments/assets/2756ea8a-9aa4-465b-87a5-9386f1744d2a" />

### 2. Task List & Smart Filtering
<img width="1373" height="638" alt="Screenshot 2026-04-23 211107" src="https://github.com/user-attachments/assets/64187525-ca46-4681-90e8-89a3fba50b69" />
<img width="1492" height="512" alt="Screenshot 2026-04-23 211148" src="https://github.com/user-attachments/assets/a750961a-f51e-434f-aa4e-dfef80e145f8" />

### 3. Inline Task Editing
<img width="1432" height="736" alt="update" src="https://github.com/user-attachments/assets/81272e9e-f764-47ec-86e1-5826f61eb069" />

### 4. Interactive Alerts (SweetAlert2)
<img width="1486" height="720" alt="delete" src="https://github.com/user-attachments/assets/0f962719-f131-4643-9731-20fb541695a9" />

## 🛠️ Tech Stack

* **Framework:** Angular 18 (Standalone Components, Zoneless, Control Flow `@if`, `@for`)
* **State Management:** Angular Signals (`signal`, `computed`)
* **Styling:** HTML5, CSS3, Bootstrap 5, Bootstrap Icons
* **Forms:** Reactive Forms & Template-Driven Forms
* **HTTP Requests:** RxJS (`Observable`, `map`), HttpClient
* **Mock Database:** `json-server`
* **Alerts:** SweetAlert2

## 🚀 How to Run the Project Locally

To get a local copy up and running, follow these simple steps:

**1. Clone the repository**
git clone https://github.com/MariamEssam5/Angular-TaskManager.git
لهف ؤ

**2. Install dependencies**

Bash
npm install

**3. Start the Mock Server**
Open a terminal and run the following command to start json-server:
Bash
npx json-server --watch db.json

**4. Run the Angular Application**
Open a new terminal window and run:
Bash
ng serve


