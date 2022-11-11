<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }
    :global(main) {
        background-color: #444;
    }

    :global(body)::-webkit-scrollbar {
        width: 0.4rem;
        background-color: #1a1a1a;
    }
    :global(body)::-webkit-scrollbar-track {
        background-color: #1a1a1a;
        border-radius: 10px;
    }
    :global(body)::-webkit-scrollbar-thumb {
        background-color: deeppink;
        border-radius: 10px;
    }
</style>

<slot></slot>