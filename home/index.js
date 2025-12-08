<!DOCTYPE javascript>
body {
    background-color: #f9c7cf;
    font-family: "Georgia", serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

.container {
    width: 90%;
    max-width: 1000px;
    border: 4px solid #d43f78;
    margin-top: 30px;
    padding: 40px 20px 60px;
    background-color: #f7b8c2;
    text-align: center;
}

h1 {
    font-size: 3rem;
    font-style: italic;
    color: #d43f78;
    margin-bottom: 10px;
}

.stars {
    font-size: 2rem;
    color: #d43f78;
    margin: 0 10px;
}

p {
    color: #b33968;
    font-size: 1.2rem;
    margin-bottom: 40px;
}

.entries {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    justify-items: center;
    padding: 0 20px;
}

.entry-box {
    width: 180px;
    padding: 20px 0;
    border: 3px solid #d43f78;
    border-radius: 30px;
    background-color: #f9c7cf;
    color: #d43f78;
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

/* JS will add the pop animation class */
.entry-box.pop {
    transform: scale(1.12);
    box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}
