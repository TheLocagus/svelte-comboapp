<main>
    <div class="a-container">
        <a href="/todo">TODO</a>
    </div>
    <div class="a-container">
        <a>Chess game</a>
    </div>
    <div class="a-container">
        <a>CV</a>
    </div>
</main>

<style>

    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   .a-container {
        display: block;
        height: 50px;
        width: 250px;
        border: 1px solid orangered;
        background-color: orangered;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px 0;
    }
   a {
       display: flex;
       height: 100%;
       width: 100%;
       justify-content: center;
       align-items: center;
       color: black;
       font-weight: bold;
       text-decoration: none;
   }
    button:hover {
        background-color: #de7249;
        border: 1px solid orangered;
    }
</style>