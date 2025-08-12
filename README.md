# Home Screen Quote & Clock App ⏰

A minimalist and elegant web application that serves as a personalized home screen. It displays a fresh, inspiring quote, a beautiful background image, and a clean digital clock. The app is designed for a calm and focused user experience.

👉 **Live Demo:** [https://quote-generator-black-kappa.vercel.app/](https://quote-generator-black-kappa.vercel.app/)

---

## 🌟 Features

- **Dynamic Quotes:** Fetches and displays a new quote and author with every button click.
- **Stunning Backgrounds:** Loads a beautiful, high-quality background image from Unsplash on the initial page load. The image remains static to conserve API requests.
- **Digital Clock:** Features a non-blinking clock that shows the current time, day, and date in a clear, readable format.
- **Clean Code:** Refactored using a custom React hook (useQuotesAndImages) to separate business logic from the UI components.
- **Responsive Design:** Adapts seamlessly to different screen sizes, from desktop to mobile.

---

## 🚀 Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast, modern build tool for front-end development.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **DummyJSON API:** Used to fetch random quotes.
- **Unsplash API:** Used to fetch random, high-quality background images.

---

## 🛠 How to Clone or Fork

### Clone the repo:

```bash
git clone https://github.com/asifjirayat/quote-generator
cd quote-generator
```

### Install dependencies:

```bash
npm install
```

### Set up Unsplash API Key:

- Create a file named .env.local in the root directory.
- Sign up for a free developer account on the Unsplash Developers website to get your access key.
- Add your key to the .env.local file like this:

```bash
VITE_UNSPLASH_ACCESS_KEY="YOUR_UNSPLASH_ACCESS_KEY_HERE"
```

### Run locally:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests!
Open an issue if you find a bug or want to suggest a feature.

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Created By

Designed and built with ❤️ by **Asif Jirayat**
