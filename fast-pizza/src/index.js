import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
];


function App() {
    return <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>;
}

function Header() {

    // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
    const style = {};

    return (
        <header className='header'>
            <h1 style={style}  >Fast Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
        </main>
    );
}

function Footer() {

    const hour = new Date().getHours();
    const opneHour = 12;
    const closeHour = 22;
    const isOpen = hour >= opneHour && hour <= closeHour;

    // if (hour >= opneHour && hour <= closeHour) {
    //     alert('We are currently open');
    // } else {
    //     alert('We are currently closed');
    // };

    return (
        <footer className='footer'> {new Date().toLocaleTimeString()} We are currently open. </footer>
    );
}



function Pizza() {
    return <div>

        <img src='pizzas/spinaci.jpg' alt='Pizza spinachi' />
        <h3>Pizza</h3>
        <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
