# 💸 Expense Tracker

A clean, responsive single-page expense tracking web app built with **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no libraries, just the fundamentals.

---

## ✨ Features

- ➕ **Add Transactions** — log income or expenses with a description and amount
- 🗑️ **Delete Transactions** — hover over any transaction to reveal the delete button
- 💰 **Live Balance** — total balance updates instantly on every change
- 📊 **Income & Expense Summary** — see your income and expenses broken out at a glance
- 📈 **Net Revenue Percentage** — dynamically calculates and displays your net revenue as a percentage of income, with colour-coded profit/loss states
- 💾 **Persistent Storage** — transactions are saved to `localStorage` so nothing gets wiped on refresh
- 🎨 **Polished UI** — slide-in animations, colour-coded transaction items, custom scrollbar, and smooth hover effects
- 📱 **Fully Responsive** — works cleanly on desktop, tablet, and mobile

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, layout, animations |
| Vanilla JavaScript | Logic, DOM manipulation, localStorage |
| CSS Grid & Flexbox | Responsive layout |
| Intl.NumberFormat API | CAD currency formatting |

---

## 📁 Project Structure

```
Expense-Tracker/
├── index.html       # Main HTML structure
├── style.css        # All styling and responsive design
└── script.js        # App logic, DOM manipulation, localStorage
```

---

## ⚙️ Getting Started

No installations, no dependencies. Just clone and open.

```bash
# Clone the repo
git clone https://github.com/chaitanyaCE/Expense-Tracker.git

# Navigate into the project folder
cd Expense-Tracker

# Open in your browser
open index.html
```

Or just download the ZIP and open `index.html` directly in any browser.

---

## 🧠 How It Works

1. Enter a **description** and an **amount** in the form
   - Positive numbers are treated as **income**
   - Negative numbers are treated as **expenses**
2. Hit **Add Transaction** and it instantly appears in the list
3. The **balance**, **income total**, **expense total**, and **net revenue %** all update in real time
4. Hover over any transaction to reveal the **delete button**
5. Everything is saved to **localStorage** — close the tab and come back, your data is still there

---

## 📊 Net Revenue Percentage

This is one of the more interesting features. It calculates:

```
Net Revenue % = (Total Balance / Total Income) × 100
```

- 🟢 **Green** — you're in profit (more coming in than going out)
- 🔴 **Red** — you're at a loss (expenses exceed income)
- ⚪ **Neutral** — no transactions yet

---

## 🙋 Author

**Chaitanya**
- GitHub: [@chaitanyaCE](https://github.com/chaitanyaCE)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built as part of my ongoing web development journey as a first-year Computer Engineering student. 🎓
