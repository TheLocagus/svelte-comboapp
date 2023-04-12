<slot />

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

	:global(.date-picker__actions) {
		display: flex;
		justify-content: flex-end;
		margin-right: 10px;
	}
	:global(.date-picker__actions button) {
		margin-left: 5px;
		background-color: transparent;
		border: 1px solid pink;
		color: #f5f5f5;
		padding: 5px 8px;
		font-size: 0.7rem;
		margin: 15px 0 15px 5px;
		border-radius: 5px;
		cursor: pointer;
	}

	:global(.date-picker__actions button:hover) {
		background-color: #044848;
	}

	:global(.date-picker__validate-message) {
		text-align: center;
		margin-bottom: 10px;
	}

	:global(.date-picker__validate-message span) {
		font-size: 0.9rem;
		color: rgb(116, 41, 41);
		font-weight: 600;
	}
</style>
